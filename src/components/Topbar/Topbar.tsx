import React from 'react'
import Image from 'next/image'

import Logo from '../../assets/logo-topbar.png'

import { Container, TopLogo, Menu } from '../../styles/components/Topbar'
import Navigator from './Navigator/Navigator'
import { useRouter } from 'next/router'

const Topbar: React.FC = () => {
  const router = useRouter()

  const handleRedirectToHome = () => {
    router.push('/')
  }

  return (
    <Container>
      <TopLogo onClick={handleRedirectToHome}>
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
