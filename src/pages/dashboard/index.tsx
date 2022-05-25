import React from 'react'

import { Container } from '../../styles/pages/dashboard.style'
import Topbar from '../../components/Topbar/Topbar'
import withAuth from '../../HOC/withAuth'

function Dashboard() {
  return (
    <Container>
      <Topbar />
    </Container>
  )
}

export default withAuth(Dashboard)
