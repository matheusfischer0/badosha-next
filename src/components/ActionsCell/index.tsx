import { FiDelete, FiEdit, FiTrash } from 'react-icons/fi'
import { Container, Button } from './styles'

export function ActionsCell({
  row: { id, slug },
  column: { key },
  editData, // This is a custom function that we supplied to our table instance
  deleteData
}) {
  // We need to keep and update the state of the cell normally

  // We'll only update the external data when the input is blurred
  const handleEditData = () => {
    editData(id)
  }

  const handleDeleteData = () => {
    deleteData(id)
  }

  return (
    <Container>
      <Button onClick={handleEditData}>
        <FiEdit size={25} />
      </Button>
      <Button onClick={handleDeleteData}>
        <FiTrash size={25} color={'#ff5555'} />
      </Button>
    </Container>
  )
}
