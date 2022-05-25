import styled from 'styled-components'

export const Table = styled.table`
  margin: 0 auto;
  border-collapse: collapse;
  width: 90%;
`

export const Row = styled.tr`
  th,
  td {
    border: 1px solid #ddd;
    padding: 8px;
  }
  &:nth-child(even) {
    background-color: #f1f1f1;
  }
`

export const TableHead = styled.div`
  display: flex;
  align-items: center;
`
