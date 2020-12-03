import React from 'react'
import Link from 'next/link'

import Logo from './logo-topbar.png'

import { Container } from '../../styles/components/Topbar'

const Topbar: React.FC = () => {
  return (
    <Container>
      <Link className="nav-top" href="/">
        Inicio
      </Link>
      <Link clLinkssName="nav-top" href="/quem_somos">
        Quem somos
      </Link>
      <Link className="nav-top" href="contato">
        Contato
      </Link>
    </Container>
  )
}

export default Topbar
