import React, { useEffect, useState } from 'react'

import {
  Container,
  TextContainer,
  ImageContainer
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

      <ImageContainer>
        <img src={image} alt={alt} />
      </ImageContainer>
    </Container>
  )
}

export default Jumbotron
