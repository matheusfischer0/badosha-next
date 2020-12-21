import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Topbar from '../components/Topbar/Topbar'

const Whoweare: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>MHR - Quem somos</title>
      </Head>
    </Container>
  )
}

export default Whoweare
