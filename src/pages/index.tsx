import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Jumbotron from '../components/Jumbotron/Jumbotron'

const Home: React.FC = () => {
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
      <Jumbotron></Jumbotron>
    </Container>
  )
}

export default Home
