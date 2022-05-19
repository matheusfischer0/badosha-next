import styled from 'styled-components'

export const Table = styled.table`
  margin: 0px 20px;
  border-collapse: collapse;
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
