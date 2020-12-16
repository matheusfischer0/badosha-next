import React from 'react'
import Image from 'next/image'

import { Container, Banner } from '../../styles/components/Jumbotron'

const Jumbotron: React.FC = () => {
  const images = [{ url: '', title: '', subtitle: '', link: '' }]

  return (
    <Container>
      {images.map(image => (
        <Image
          src={image.url}
          alt="Badosha logo"
          layout={'fixed'}
          width={151}
          height={70}
          quality={100}
        />
      ))}
    </Container>
  )
}

export default Jumbotron
