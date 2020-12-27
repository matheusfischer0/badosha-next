import React from 'react'
import Head from 'next/head'

import { Container } from '../styles/pages/Home'
import Carousel from '../components/Carousel/Carousel'
import Jumbotron from '../components/Jumbotron/Jumbotron'

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
      <Jumbotron
        title={'O restaurante'}
        message={
          'O termo Comfort Food significa “Comida Confortável”. Comida que desperta conforto e bem-estar ao ser consumida. Nossos pratos são pensados e criados para trazerem o sabor que nos remete ao lembrar de alguém querido. Pode ser a comida da mãe, da avó, da tia, ou de alguém que é especial para você. Todo o nosso cardápio, é estudado para trazer os sabores da comida brasielira com ingredientes frescos, coloridos e extremamentes saborosos.'
        }
        image={require('../assets/restaurante.jpg')}
        alt={'Imagem de um bife grelado com salada montado no prato'}
      ></Jumbotron>

      <Jumbotron
        title={'O restaurante'}
        message={
          'O termo Comfort Food significa “Comida Confortável”. Comida que desperta conforto e bem-estar ao ser consumida. Nossos pratos são pensados e criados para trazerem o sabor que nos remete ao lembrar de alguém querido. Pode ser a comida da mãe, da avó, da tia, ou de alguém que é especial para você. Todo o nosso cardápio, é estudado para trazer os sabores da comida brasielira com ingredientes frescos, coloridos e extremamentes saborosos.'
        }
        image={require('../assets/bife-grelhado-da-carne-com-salada.jpg')}
        alt={'Imagem de um bife grelado com salada montado no prato'}
        left={true}
      ></Jumbotron>
    </Container>
  )
}

export default Home
