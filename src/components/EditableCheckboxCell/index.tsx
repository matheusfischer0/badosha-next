import { connectFirestoreEmulator } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Input } from './styles'

export function EditableCheckboxCell({
  value: initialValue,
  row: { id, slug },
  column: { key },
  updateMyData // This is a custom function that we supplied to our table instance
}) {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue)

  const onChange = e => {
    setValue(e.target.checked)
    updateMyData(id, key, e.target.checked)
  }

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return <Input type="checkbox" checked={value} onChange={onChange} />
}
