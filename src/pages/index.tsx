import React from 'react'
import Head from 'next/head'

import RocketseatLogo from '../assets/logo-topbar.png'

import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <Image src={ RocketseatLogo}></Image>
      <RocketseatLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
    </Container>
  )
}

export default Home
