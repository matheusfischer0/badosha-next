import React, { useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { GetServerSideProps, NextPage } from 'next'
import { motion } from 'framer-motion'

import { Container, TopLogo, Button, Content } from '../styles/pages/info'

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
        <div>
          <Button href={'/'}>
            <Image
              src={'/logo_badosha.png'}
              alt="Badosha logo"
              layout={'fixed'}
              width={100}
              height={100}
              quality={100}
            />
          </Button>
          <Button href={'/info'}>
            <Image
              src={'/blu_terrace_logo.png'}
              alt="Badosha logo"
              layout={'fixed'}
              width={100}
              height={139}
              quality={100}
            />
          </Button>
        </div>
        <h2>Informações</h2>
      </TopLogo>

      <Content>
        <h3>Boa tarde,</h3>
        <p>Para acessar o Wi-Fi o login é o seu CPF</p>
        <p>A senha é sua data de nascimento</p>
      </Content>
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
