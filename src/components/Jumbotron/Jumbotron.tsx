import React, { useEffect, useState } from 'react'
import Image from 'next/image'

import {
  Container,
  TextContainer,
  ImageContainer,
  LeftContainer,
  Banner
} from '../../styles/components/Jumbotron'

interface JumbotronProps {
  title: string
  message: string
  image: string
  alt: string
  left?: boolean
}

const Jumbotron: React.FC<JumbotronProps> = ({
  title,
  message,
  image,
  alt,
  left
}) => {
  return (
    <Container left={left}>
      <TextContainer>
        <h3>{title}</h3>
        <p>{message}</p>
      </TextContainer>
      <LeftContainer>
        <ImageContainer>
          <Image src={image} alt={alt} layout={'fill'}></Image>
        </ImageContainer>
      </LeftContainer>
    </Container>
  )
}

export default Jumbotron
