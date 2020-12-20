import React from 'react'
import Image from 'next/image'

import { Container, Banner } from '../../styles/components/Jumbotron'

const Jumbotron: React.FC = () => {
  const images = [
    {
      url: require('../../assets/sorvete.jpg'),
      title: '',
      subtitle: '',
      link: ''
    }
  ]

  return (
    <Container>
      {images.map(image => (
        <Image
          src={image.url}
          alt="Badosha logo"
          layout={'fill'}
          quality={100}
        />
      ))}
    </Container>
  )
}

export default Jumbotron
