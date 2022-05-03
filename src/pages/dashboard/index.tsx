import React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useAuth } from '../../hooks/useAuth'

import {
  Container,
  Header,
  Item,
  Logo,
  Logout,
  LogoutContainer,
  Menu
} from '../../styles/pages/dashboard.style'
import Topbar from '../../components/Topbar/Topbar'

function Dashboard() {
  const router = useRouter()
  const { user, logout } = useAuth()

  function handleLogout() {
    logout()
    router.push('/')
  }

  return (
    <Container>
      <Topbar />
    </Container>
  )
}

export default Dashboard
