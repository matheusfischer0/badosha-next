import React, { useState } from 'react'
import { useTable, useSortBy } from 'react-table'
import { Column } from '../../dtos/Column'
import { Product } from '../../dtos/Product'
import { ProductTable } from '../../dtos/ProductTable'
import { EditableCell } from '../EditableCell'

import { Table, Row } from './styles'

interface ITableComponentProps {
  columns: Column[]
  data: ProductTable[]
  updateMyData: (rowIndex: number, columnId: string, value: string) => void
}

export function TableComponent({
  columns,
  data,
  updateMyData
}: ITableComponentProps) {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        updateMyData
      },
      useSortBy
    )

  // Render the UI for your table
  return (
    <Table {...getTableProps()}>
      <thead>
        {headerGroups.map(headerGroup => (
          <Row {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
              </th>
            ))}
          </Row>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row)
          return (
            <Row {...row.getRowProps()}>
              {row.cells.map(cell => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
              })}
            </Row>
          )
        })}
      </tbody>
    </Table>
  )
}
