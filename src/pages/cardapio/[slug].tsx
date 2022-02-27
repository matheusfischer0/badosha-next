import React from 'react'
import Image from 'next/image'
import { GetStaticProps } from 'next'
import axios from 'axios'

import { Product } from '../../dtos/Product'

import BasicCarousel from '../../components/BasicCarousel/BasicCarousel'

import { FiCornerDownLeft } from 'react-icons/fi'

import {
  MenuRow,
  MenuProduct,
  MenuTitle,
  MenuDescription,
  MenuOption,
  MenuOptionDescription,
  MenuQuantity,
  MenuPrice,
  MenuImage,
  MenuContainer,
  MenuProductDescription,
  Button
} from '../../styles/pages/Product'

type ProductProps = { product: Product }

function ProductScreen({ product }: ProductProps) {
  const handleFormatMoney = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const handleGoBack = () => {
    window.history.back()
  }

  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      {product.images && (
        <BasicCarousel images={product.images}></BasicCarousel>
      )}
      <MenuContainer>
        <MenuRow>
          <MenuProduct>
            <MenuProductDescription>
              <MenuTitle>{product.name}</MenuTitle>
              {product.price && (
                <MenuPrice>{handleFormatMoney(product.price)}</MenuPrice>
              )}
            </MenuProductDescription>
            {product.description && (
              <MenuDescription>{product.description}</MenuDescription>
            )}
          </MenuProduct>
          {product.options &&
            product.options.map(option => (
              <MenuOption key={option.slug}>
                {option.description && (
                  <MenuOptionDescription>
                    <span>{`${option.description}`}</span>
                  </MenuOptionDescription>
                )}
                {option.quantity && (
                  <MenuQuantity>
                    <span>{`${option.quantity} ${product.unity}`}</span>
                  </MenuQuantity>
                )}
                {option.price && (
                  <MenuPrice>
                    <span>{handleFormatMoney(option.price)}</span>
                  </MenuPrice>
                )}
              </MenuOption>
            ))}
        </MenuRow>
      </MenuContainer>
      <Button onClick={handleGoBack}>
        <FiCornerDownLeft size={50} color="#111"></FiCornerDownLeft>
      </Button>
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const response = await fetch(`${process.env.API_URL}/api/products`)
  const products: Product[] = await response.json()

  // Get the paths we want to pre-render based on items
  const paths = products.map((product: Product) => {
    return {
      params: { slug: product.slug.toString() }
    }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params
  const result = await fetch(`${process.env.API_URL}/api/product?slug=${slug}`)
  const product = await result.json()

  if (!product) {
    return {
      notFound: true
    }
  }

  return {
    props: { product },
    revalidate: 60 * 60 * 24
  }
}

export default ProductScreen
