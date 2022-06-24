import React from 'react'

import { Container, Content, Button } from '../../styles/pages/dashboard.style'
import Topbar from '../../components/Topbar/Topbar'
import withAuth from '../../HOC/withAuth'

function Dashboard() {
  function handleRevalidateMenu() {
    fetch(`${process.env.API_URL}/api/revalidate?secret=badosha13`)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  return (
    <Container>
      <Topbar />
      <Content>
        <Button onClick={handleRevalidateMenu}>Revalidar cardapio</Button>
      </Content>
    </Container>
  )
}

export default withAuth(Dashboard)
