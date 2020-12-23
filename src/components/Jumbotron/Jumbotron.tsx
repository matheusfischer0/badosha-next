import React, { useEffect, useState } from 'react'

import {
  Container,
  TextContainer,
  ImageContainer
} from '../../styles/components/Jumbotron'

import useWindowSize from '../../hooks/UseWindowSize'

interface JumbotronProps {
  title: string
  message: string
  image: string
  alt: string
}

const Jumbotron: React.FC<JumbotronProps> = ({
  title,
  message,
  image,
  alt
}) => {
  return (
    <Container>
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
