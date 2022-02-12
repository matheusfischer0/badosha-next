import React from 'react'
import Head from 'next/head'
import { NextPage } from 'next'

import { Container } from '../styles/pages/Home'
import Carousel from '../components/Carousel/Carousel'
import Jumbotron from '../components/Jumbotron/Jumbotron'
import Topbar from '../components/Topbar/Topbar'
import Footer from '../components/Footer/Footer'

const Home: NextPage = () => {
  const images = [
    {
      url: '/sorvete.jpg',
      link: '/cardapio',
      alt: 'Sorvete no prato preto decorado'
    },
    {
      url: '/pimentas.jpg',
      link: '/cardapio',
      alt: 'Sorvete no prato preto decorado'
    },
    {
      url: '/kitchen-731351_1920.jpg',
      link: '/cardapio',
      alt: 'Sorvete no prato preto decorado'
    }
  ]

  return (
    <Container>
      <Head>
        <title>Badosha Gastrobar</title>
      </Head>
      <Topbar></Topbar>
      <Carousel images={images}></Carousel>
      <div id="quem_somos">
        <Jumbotron
          title={'Quem somos'}
          message={`Há mais de 3 anos no mercado, com receitas tradicionais brasileiras, o Badosha tem como principal objetivo servir comidas de qualidade as pessoas que visitam Blumenau.`}
          image={'/breakfast-4.jpg'}
          alt={'Imagem de um bife grelado com salada montado no prato'}
        ></Jumbotron>
        <Jumbotron
          title={'O restaurante'}
          message={`O termo Comfort Food significa “Comida Confortável”. Comida que desperta conforto e bem-estar ao ser consumida. Nossos pratos são pensados e criados para trazerem o sabor que nos remete ao lembrar de alguém querido. Pode ser a comida da mãe, da avó, da tia, ou de alguém que é especial para você. Todo o nosso cardápio, é estudado para trazer os sabores da comida brasielira com ingredientes frescos, coloridos e extremamentes saborosos.`}
          image={'/bife-grelhado-da-carne-com-salada.jpg'}
          alt={'Imagem de um bife grelado com salada montado no prato'}
          left
        ></Jumbotron>
        <Jumbotron
          title={'Eventos'}
          message={`Seu evento especial pode ser realizado no local do restaurante, assim como oferecemos também refeições montadas no local que desejar. Para saber mais, entre em contato com a nossa equipe`}
          image={'/saladamedit.jpg'}
          alt={'Imagem de um bife grelado com salada montado no prato'}
        ></Jumbotron>
      </div>
      <div id="contato">
        <Footer></Footer>
      </div>
    </Container>
  )
}

export default Home
