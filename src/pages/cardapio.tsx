import React from 'react'
import Head from 'next/head'
import { motion } from "framer-motion"
import { Container } from '../styles/pages/Home'
import Topbar from '../components/Topbar/Topbar'

const Orcamento: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Badosha Restaurante</title>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
        ></link>
      </Head>
      <Topbar></Topbar>
      <Menu> </Menu>
    </Container>
  )
}

export default Orcamento
