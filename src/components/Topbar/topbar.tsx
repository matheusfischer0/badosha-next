import React from 'react'
import Link from 'next/link'

import Logo from '../../assets/logo-topbar.png'

import { Container, TopLogo, Menu } from '../../styles/components/Topbar'

const Topbar: React.FC = () => {
  return (
    <Container>
      <TopLogo src={Logo}></TopLogo>
      <Menu>
        <Link className="nav-top" href="/">
          Inicio
        </Link>
        <Link clLinkssName="nav-top" href="/quem_somos">
          Quem somos
        </Link>
        <Link className="nav-top" href="contato">
          Contato
        </Link>
      </Menu>
    </Container>
  )
}

export default Topbar
