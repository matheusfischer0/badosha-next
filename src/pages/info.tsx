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
  MenuItem
} from '../styles/pages/Menu'

import Logo from '../assets/logo_badosha.png'

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

  const handleSelectCategory = (value: string) => {
    setCategory(value)
  }

  return (
    <Container>
      <Head>
        <title>Badosha Cardápio</title>
      </Head>
      <TopLogo>
        <Image
          src={Logo}
          alt="Badosha logo"
          layout={'fixed'}
          width={100}
          height={100}
          quality={100}
        />
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
              <span>{`R$ ${Number(item.price).toFixed(2)}`}</span>
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
