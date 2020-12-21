import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import SwiperComponent from '../components/SwiperComponent/SwiperComponent'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Badosha Restaurante</title>
      </Head>
      <SwiperComponent></SwiperComponent>
    </Container>
  )
}

export default Home
