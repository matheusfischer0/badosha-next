import React from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'
import { Container } from '../styles/pages/Home'
import Topbar from '../components/Topbar/Topbar'

const Orcamento: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Badosha Restaurante</title>
      </Head>
    </Container>
  )
}

export default Orcamento
