import React from 'react'
import Head from 'next/head'
import Link from 'next/link'

import { Container } from '../styles/pages/Home'
import Topbar from '../components/Topbar/Topbar'
import Form from '../components/Form/Form'

const Contato: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Badosha Restaurante</title>

      </Head>
      <Form></Form>
    </Container>
  )
}

export default Contato
