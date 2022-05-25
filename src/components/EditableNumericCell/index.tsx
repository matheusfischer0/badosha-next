import { useEffect, useState } from 'react'
import { Container, Label, Input } from './styles'

export function EditableNumericCell({
  value: initialValue,
  row: { id, slug },
  column: { key },
  updateMyData // This is a custom function that we supplied to our table instance
}) {
  // We need to keep and update the state of the cell normally
  const [value, setValue] = useState(initialValue)

  const onChange = e => {
    setValue(e.target.value)
  }

  // We'll only update the external data when the input is blurred
  const onBlur = () => {
    updateMyData(id, key, value)
  }

  // If the initialValue is changed external, sync it up with our state
  useEffect(() => {
    setValue(initialValue)
  }, [initialValue])

  return (
    <Container>
      {value ? <Label>R$</Label> : null}
      <Input type="number" value={value} onChange={onChange} onBlur={onBlur} />
    </Container>
  )
}
