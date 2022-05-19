import { connectFirestoreEmulator } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import { Input } from './styles'

export function EditableCheckboxCell({
  value: initialValue,
  row: { index },
  column: { id },
  updateMyData // This is a custom function that we supplied to our table instance
}) {
  console.log(id, initialValue, typeof initialValue)
  // We need to keep and update the state of the cell normally

  const [value, setValue] = useState(initialValue)

  const onChange = e => {
    console.log(e.target.value)
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(index, id, value)
  }

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <Input
      type="checkbox"
      checked={value}
      onChange={onChange}
      onBlur={onBlur}
    />
  )
}
