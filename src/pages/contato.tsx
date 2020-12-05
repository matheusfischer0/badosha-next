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
        <title>MHR - Transportes</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        ></link>
      </Head>
      <Form></Form>
    </Container>
  )
}

export default Contato
