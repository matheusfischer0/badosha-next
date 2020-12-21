import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Carousel from '../components/Carousel/Carousel'

const Home: React.FC = () => {
  const images = [
    {
      url: require('../assets/sorvete.jpg'),
      title: 'Sorvete no prato preto decorado',
      subtitle: '',
      link: '/cardapio',
      alt: 'Sorvete no prato preto decorado'
    },
    {
      url: require('../assets/pimentas.jpg'),
      title: 'Sorvete no prato preto decorado',
      subtitle: '',
      link: '/cardapio',
      alt: 'Sorvete no prato preto decorado'
    },
    {
      url: require('../assets/kitchen-731351_1920.jpg'),
      title: 'Sorvete no prato preto decorado',
      subtitle: '',
      link: '/cardapio',
      alt: 'Sorvete no prato preto decorado'
    }
  ]

  return (
    <Container>
      <Head>
        <title>Badosha Restaurante</title>
      </Head>
      <Carousel images={images}></Carousel>
    </Container>
  )
}

export default Home
