import React, { createElement, useCallback, useState } from 'react'

import { Column } from '../../dtos/Column'

import { Table, Row, TableHead } from './styles'

interface ITableComponentProps {
  columns: Column[]
  data: any[]
  updateMyData: (
    slug: string,
    key: string,
    value: string | number | boolean
  ) => Promise<void>
  editData: (slug: string) => void
}

function sortData({
  tableData,
  sortKey,
  sortType,
  reverse
}: {
  tableData: any[]
  sortKey?: string
  sortType?: string
  reverse: boolean
}) {
  if (!sortKey) return tableData

  const sortedData = tableData.sort((a, b) => {
    if (a[sortKey] === null || a[sortKey] === undefined) return 1
    if (b[sortKey] === null || b[sortKey] === undefined) return -1
    switch (sortType) {
      case 'string':
        return a[sortKey].localeCompare(b[sortKey])
      case 'number':
        return a[sortKey] > b[sortKey] ? 1 : -1
      case 'boolean':
        return a[sortKey] ? -1 : 1
      case null:
        return !!a[sortKey] ? -1 : 1
      default:
        return a[sortKey] > b[sortKey] ? 1 : -1
    }
  })

  if (reverse) {
    return sortedData.reverse()
  }

  return sortedData
}

export function TableComponent({
  columns,
  data,
  updateMyData,
  editData
}: ITableComponentProps) {
  const [sortKey, setSortKey] = useState<string | null>(null)
  const [sortType, setSortType] = useState<string | null>(null)

  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  function handleSortTableByColumn(column: string, type?: string) {
    setSortKey(column)
    setSortType(type)
    if (column === sortKey && sortOrder === 'asc') {
      setSortOrder('desc')
    } else {
      setSortOrder('asc')
    }
  }

  const sortedData = useCallback(
    () =>
      sortData({
        tableData: data,
        sortKey,
        reverse: sortOrder === 'desc',
        sortType
      }),
    [data, sortKey, sortOrder]
  )

  return (
    <Table>
      <thead>
        <Row>
          {columns.map(column => (
            <th
              key={column.accessor}
              onClick={() =>
                handleSortTableByColumn(column.accessor, column.type)
              }
            >
              <TableHead>
                <span>{column.label}</span>
                <span>
                  {sortKey !== column.accessor
                    ? ''
                    : sortKey === column.accessor && sortOrder === 'asc'
                    ? '↓'
                    : '↑'}
                </span>
              </TableHead>
            </th>
          ))}
        </Row>
      </thead>
      <tbody>
        {sortedData().map((row, i) => {
          return (
            <Row key={row.slug}>
              {columns.map(column => {
                return (
                  <td key={column.accessor}>
                    {column.Cell
                      ? createElement(column.Cell, {
                          value: row[column.accessor],
                          row: { id: row.id, slug: row.slug },
                          column: { key: column.accessor },
                          updateMyData,
                          editData
                        })
                      : row[column.accessor]}
                  </td>
                )
              })}
            </Row>
          )
        })}
      </tbody>
    </Table>
  )
}
