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
  Button
} from '../styles/pages/cardapio'

import Logo from '../assets/logo_badosha.png'
import BluTerraceLogo from '../assets/blu_terrace_logo.png'

type Extra = {
  name: string
  quantity?: string
  price: number
}

type Options = {
  description?: string
  quantity?: number
  price: number
}

type Item = {
  name: string
  category: string
  unity?: string
  description?: string
  quantity?: string
  price?: number
  options?: Options[]
  extras?: Extra[]
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
              src={Logo}
              alt="Badosha logo"
              layout={'fixed'}
              width={100}
              height={100}
              quality={100}
            />
          </Button>
          <Button href={'/info'}>
            <Image
              src={BluTerraceLogo}
              alt="Badosha logo"
              layout={'fixed'}
              width={100}
              height={139}
              quality={100}
            />
          </Button>
        </div>
        <h2>Cardápio</h2>
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
            <MenuRow>
              <MenuItem key={item.name}>
                <div>
                  <MenuTitle>{item.name}</MenuTitle>
                  {item.description && (
                    <MenuDescription>{item.description}</MenuDescription>
                  )}
                </div>
                {item.price && <span>{handleFormatMoney(item.price)}</span>}
              </MenuItem>
              {item.options &&
                item.options.map(option => (
                  <MenuOption key={`${item.name}_${option.price}`}>
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
