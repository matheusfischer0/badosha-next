import React, { useEffect, useState } from 'react'

import { db } from '../../../lib/firebase'
import { collection, addDoc, getDocs } from 'firebase/firestore'

import Topbar from '../../../components/Topbar/Topbar'
import { Container, Content, Item } from '../../../styles/pages/products.style'
import { Product } from '../../../dtos/Product'

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    handleLoadProducts()
  }, [])

  useEffect(() => {
    console.log(products)
    console.log(categories)
  }, [products, categories])

  async function handleLoadProducts() {
    const tmpCategories = []
    const tmpProducts = []
    const queryCategories = await getDocs(collection(db, 'categories'))
    queryCategories.forEach(async category => {
      const queryProducts = await getDocs(
        collection(db, `categories/${category.id}/products`)
      )
      queryProducts.forEach(async product => {
        tmpProducts.push({ id: product.id, ...product.data() })
      })

      tmpCategories.push({
        id: category.id,
        ...category.data(),
        products: tmpProducts
      })
    })
    setCategories(tmpCategories)
    setProducts(tmpProducts)
  }

  return (
    <Container>
      <Topbar />
      <Content>
        <Item>Item1</Item>
      </Content>
    </Container>
  )
}

export default Products
