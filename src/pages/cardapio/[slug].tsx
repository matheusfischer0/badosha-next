import React from 'react'
import Image from 'next/image'
import { GetStaticProps } from 'next'

import { Item } from '../../dtos/Item'

import {
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
} from '../../styles/pages/item'
import BasicCarousel from '../../components/BasicCarousel/BasicCarousel'
import { FiCornerDownLeft } from 'react-icons/fi'

type ItemProps = { item: Item }

function ItemScreen({ item }: ItemProps) {
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
      {item.images && <BasicCarousel images={item.images}></BasicCarousel>}
      <MenuContainer>
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
  const res = await fetch(`${process.env.API_URL}/api/menu`)
  const items = await res.json()

  // Get the paths we want to pre-render based on items
  const paths = items.map((item: Item) => {
    return {
      params: { slug: `${item.slug}` }
    }
  })

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

// This function gets called at build time
export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params
  const result = await fetch(`${process.env.API_URL}/api/item?slug=${slug}`)
  const item = await result.json()

  if (!item) {
    return {
      notFound: true
    }
  }

  return {
    props: { item },
    revalidate: 60 * 60 * 24
  }
}

export default ItemScreen
