import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import { Container, Banner } from '../../styles/components/Jumbotron'

import useWindowSize from '../../hooks/UseWindowSize'

const Jumbotron: React.FC = () => {
  const [active, setActive] = useState(1)

  const images = [
    {
      url: require('../../assets/sorvete.jpg'),
      title: 'Sorvete no prato preto decorado',
      subtitle: '',
      link: 'Sorvete no prato preto decorado',
      alt: 'Sorvete no prato preto decorado'
    },
    {
      url: require('../../assets/pimentas.jpg'),
      title: 'Sorvete no prato preto decorado',
      subtitle: '',
      link: 'Sorvete no prato preto decorado',
      alt: 'Sorvete no prato preto decorado'
    },
    {
      url: require('../../assets/oswladoaranha.jpg'),
      title: 'Sorvete no prato preto decorado',
      subtitle: '',
      link: 'Sorvete no prato preto decorado',
      alt: 'Sorvete no prato preto decorado'
    }
  ]

  return (
    <Container>
      {images.map(image => (
        <Banner backgroundUrl={image.url} />
      ))}
    </Container>
  )
}

export default Jumbotron
