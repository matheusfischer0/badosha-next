import { FunctionComponent } from 'react'

export interface Column {
  label: string
  accessor: string
  Cell?: FunctionComponent<any>
  type?: string
}
