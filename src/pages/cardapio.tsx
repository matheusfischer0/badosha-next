import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps, GetStaticProps, NextPage } from 'next'

import {
  Container,
  TopLogo,
  Categories,
  Item,
  ActiveCategory,
  List,
  MenuRow,
  MenuItem,
  MenuTitle,
  MenuDescription,
  MenuOption,
  MenuOptionDescription,
  MenuQuantity,
  MenuPrice,
  MenuImage,
  MenuContainer,
  MenuItemDescription,
  Button
} from '../styles/pages/cardapio'

type Extra = {
  name: string
  quantity?: string
  price: number
}

type Options = {
  slug: string
  description?: string
  quantity?: number
  price: number
}

type Item = {
  slug: string
  name: string
  category: string
  unity?: string
  description?: string
  quantity?: string
  price?: number
  options?: Options[]
  extras?: Extra[]
  images?: string[]
}

type HomeProps = {
  menu: Item[]
  categories: string[]
}

const Menu: NextPage<HomeProps> = ({ menu, categories }) => {
  const [category, setCategory] = useState<string>(menu[0].category)

  const handleFormatMoney = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(value)
  }

  const handleSelectCategory = (value: string) => {
    setCategory(value)
  }

  return (
    <Container>
      <Head>
        <title>Badosha Gastrobar</title>
      </Head>
      <TopLogo>
        <div>
          <Button href={'/'}>
            <Image
              id="butt3"
              src={'/logo_badosha.png'}
              alt="Badosha logo"
              width={1200}
              height={413}
            />
          </Button>
        </div>
      </TopLogo>
      <Categories>
        {categories.map(c => (
          <Item
            key={c}
            onClick={() => handleSelectCategory(c)}
            active={c == category}
          >
            <span>{c}</span>
          </Item>
        ))}
      </Categories>
      {category && <ActiveCategory>{category}</ActiveCategory>}
      <List>
        {menu
          .filter(item => item.category === category)
          .map(item => (
            <MenuContainer key={item.slug}>
              <MenuRow>
                <MenuItem>
                  <MenuItemDescription>
                    <MenuTitle>{item.name}</MenuTitle>
                    {item.price && (
                      <MenuPrice>{handleFormatMoney(item.price)}</MenuPrice>
                    )}
                  </MenuItemDescription>
                  {item.description && (
                    <MenuDescription>{item.description}</MenuDescription>
                  )}
                </MenuItem>
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
                  <Image src={item.images[0]} layout="fill"></Image>
                </MenuImage>
              )}
            </MenuContainer>
          ))}
      </List>
    </Container>
  )
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async () => {
  const result = await fetch(`${process.env.API_URL}/api/menu`)
  const menu: Item[] = await result.json()
  const categories: string[] = [...new Set(menu.map(item => item.category))]

  if (!menu) {
    return {
      notFound: true
    }
  }

  return {
    props: { menu, categories },
    revalidate: 60 * 60 * 24
  }
}

export default Menu
