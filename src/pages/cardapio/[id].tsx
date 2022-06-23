import React from 'react'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import { collection, doc, getDoc, getDocs, query } from 'firebase/firestore'
import { db } from '../../lib/firebase'

import { Options } from '../../dtos/Options'
import { Product } from '../../dtos/Product'

import BasicCarousel from '../../components/BasicCarousel/BasicCarousel'

import { FiCornerDownLeft } from 'react-icons/fi'

const productsList = require('../../assets/products.json')

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
} from '../../styles/pages/product.style'

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
    <MenuContainer>
      {product.images && (
        <BasicCarousel images={product.images}></BasicCarousel>
      )}
      <MenuRow>
        <MenuProduct>
          <MenuProductDescription>
            <MenuTitle>
              {`${product.name} ${product.unavailable ? '(Indísponível)' : ''}`}
            </MenuTitle>
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
      <Button onClick={handleGoBack}>
        <FiCornerDownLeft size={50} color="#111"></FiCornerDownLeft>
      </Button>
    </MenuContainer>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const productsRef = collection(db, 'products')
  const productsQuery = query(productsRef)
  const productDocs = await getDocs(productsQuery)

  const productsPromises = productDocs.docs.map(async productDoc => {
    const optionsRef = collection(db, `products/${productDoc.id}/options`)
    const optionsQuery = query(optionsRef)
    const optionsDocs = await getDocs(optionsQuery)

    const options: Options[] = optionsDocs.docs.map(optionDoc => {
      return { id: optionDoc.id, ...optionDoc.data() } as Options
    })

    return { id: productDoc.id, ...productDoc.data(), options } as Product
  })

  const products = await Promise.all(productsPromises)

  // Get the paths we want to pre-render based on items
  const paths = products.map((product: Product) => {
    return {
      params: { id: product.id }
    }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { id } = params

  const productRef = doc(db, `products`, `${id}`)
  const productDoc = await getDoc(productRef)

  const optionsRef = collection(db, `products/${id}/options`)
  const optionsQuery = query(optionsRef)
  const optionsDocs = await getDocs(optionsQuery)

  const options: Options[] = optionsDocs.docs.map(optionDoc => {
    return { id: optionDoc.id, ...optionDoc.data() } as Options
  })

  const product = {
    id: productDoc.id,
    ...productDoc.data(),
    options
  } as Product

  if (!product) {
    return {
      notFound: true
    }
  }

  return {
    props: { product },
    revalidate: 60
  }
}

export default ProductScreen
