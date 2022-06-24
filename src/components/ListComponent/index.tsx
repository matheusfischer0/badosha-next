import React from 'react'
import { ProductTable } from '../../dtos/ProductTable'

import { Container, Description, Name, Product } from './styles'

interface ListComponentProps {
  data: ProductTable[]
}

export function ListComponent({ data }: ListComponentProps) {
  return (
    <Container>
      {data.map(product => (
        <Product>
          <Name>{product.name}</Name>
          <Description>{product.description}</Description>
        </Product>
      ))}
    </Container>
  )
}
