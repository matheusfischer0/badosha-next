import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Logo from '../../assets/logo-topbar.png'

import { Container, TopLogo, Menu } from '../../styles/components/Topbar'
import ActiveLink from '../ActiveLink/ActiveLink'
import Navigator from '../Navigator/Navigator'

const Topbar: React.FC = () => {
  return (
    <Container>
      <TopLogo>
        <Image
          src={Logo}
          alt="MHR transportes logo"
          layout={'fixed'}
          width={151}
          height={70}
          quality={100}
        />
      </TopLogo>
      <Navigator />
    </Container>
  )
}

export default Topbar
