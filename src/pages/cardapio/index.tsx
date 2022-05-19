import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { GetStaticProps, NextPage } from 'next'

const productsList = require('../../assets/products.json')

import { FiInstagram } from 'react-icons/fi'

import {
  Container,
  TopLogo,
  Categories,
  ProductView,
  ActiveCategory,
  List,
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
  Button,
  Unavailable,
  Item
} from '../../styles/pages/cardapio.style'

import { Product } from '../../dtos/Product'

import { collection, getDocs, query } from 'firebase/firestore'
import { Options } from '../../dtos/Options'
import { db } from '../../lib/firebase'

type HomeProps = {
  products: Product[]
  categories: string[]
}

const Menu: NextPage<HomeProps> = ({ products, categories }) => {
  const [category, setCategory] = useState<string>(products[0].category)
  const [productList, setProductList] = useState<Product[]>(
    products.filter(item => item.category === products[0].category)
  )

  const handleFormatMoney = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const handleSelectCategory = (value: string) => {
    setCategory(value)
    setProductList(products.filter(item => item.category === value))
  }

  return (
    <Container>
      <Head>
        <title>Badosha Gastrobar</title>
      </Head>
      <TopLogo>
        <Button href={'/'}>
          <Image
            id="butt3"
            src={'/logo_badosha.png'}
            alt="Badosha logo"
            width={1200}
            height={413}
          />
        </Button>
        <a href="https://www.instagram.com/badosha.gastrobar/">
          <span>Acesse nosso Instagram!</span>
          <FiInstagram size={32} color="#aaa"></FiInstagram>
        </a>
      </TopLogo>
      <Categories>
        {categories.map(c => (
          <ProductView
            key={c}
            onClick={() => handleSelectCategory(c)}
            active={c == category}
          >
            <span>{c}</span>
          </ProductView>
        ))}
      </Categories>
      {category && <ActiveCategory>{category}</ActiveCategory>}
      <List>
        {productList.map(item => {
          if (item.hide) return

          return (
            <Item inactive={item.unavailable} key={item.slug}>
              <Button prefetch href={`/cardapio/${item.slug}`} passHref>
                <MenuContainer>
                  <MenuRow>
                    <MenuProduct>
                      <MenuProductDescription>
                        <MenuTitle>
                          {`${item.name} ${
                            item.unavailable ? '(Indísponível)' : ''
                          }`}
                        </MenuTitle>
                        {item.price && (
                          <MenuPrice>{handleFormatMoney(item.price)}</MenuPrice>
                        )}
                      </MenuProductDescription>
                      {item.description && (
                        <MenuDescription>{item.description}</MenuDescription>
                      )}
                    </MenuProduct>
                    {item.options &&
                      item.options.map(option => (
                        <MenuOption key={option.slug}>
                          {option.description && (
                            <MenuOptionDescription>
                              <span>{`${option.description}`}</span>
                            </MenuOptionDescription>
                          )}
                          {option.quantity && (
                            <MenuQuantity>
                              <span>{`${option.quantity} ${item.unity}`}</span>
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
                  {item.images && (
                    <MenuImage>
                      <Image
                        src={item.images[0]}
                        layout="fill"
                        quality={50}
                      ></Image>
                    </MenuImage>
                  )}
                </MenuContainer>
              </Button>
            </Item>
          )
        })}
      </List>
    </Container>
  )
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  const productsRef = collection(db, 'products')
  const productsQuery = query(productsRef)
  const productDocs = await getDocs(productsQuery)

  const productsPromises = productDocs.docs.map(async productDoc => {
    const optionsRef = collection(
      db,
      `products/${productDoc.data().slug}/options`
    )
    const optionsQuery = query(optionsRef)
    const optionsDocs = await getDocs(optionsQuery)

    const options: Options[] = optionsDocs.docs.map(optionDoc => {
      return optionDoc.data() as Options
    })

    return { ...productDoc.data(), options } as Product
  })

  const products = await Promise.all(productsPromises)

  const categories: string[] = [...new Set(products.map(item => item.category))]

  if (!products) {
    return {
      notFound: true
    }
  }

  return {
    props: { products, categories },
    revalidate: 60 * 60 * 24
  }
}

export default Menu
