import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps, NextPage } from 'next'
import { motion } from 'framer-motion'

import {
  Container,
  TopLogo,
  Categories,
  Item,
  ActiveCategory,
  List,
  MenuItem,
  Button
} from '../styles/pages/cardapio'

import Logo from '../assets/logo_badosha.png'
import BluTerraceLogo from '../assets/blu_terrace_logo.png'

type Extra = {
  name: string
  quantity?: string
  price: number
}

type Item = {
  name: string
  category: string
  description?: string
  quantity?: string
  price: number
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
        <title>Badosha Cardápio</title>
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
            <MenuItem key={item.name}>
              <div>
                <span>{item.name}</span>
                {item.description && <span>{item.description}</span>}
              </div>
              <span>{handleFormatMoney(item.price)}</span>
            </MenuItem>
          ))}
      </List>
    </Container>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  try {
    const result = await fetch(`${process.env.API_URL}/api/menu`)
    const menu: Item[] = await result.json()
    const categories: string[] = [...new Set(menu.map(item => item.category))]

    return {
      props: { menu, categories }
    }
  } catch {
    res.statusCode = 404
    return {
      props: {}
    }
  }
}

export default Menu
