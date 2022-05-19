import React, { useEffect, useMemo, useState } from 'react'

import { db } from '../../../lib/firebase'
import { collection, getDocs, query } from 'firebase/firestore'

import Topbar from '../../../components/Topbar/Topbar'
import { Container, Content, Item } from '../../../styles/pages/products.style'
import { TableComponent } from '../../../components/TableComponent'

import { Product } from '../../../dtos/Product'
import { Options } from '../../../dtos/Options'
import { EditableCell } from '../../../components/EditableCell'
import { EditableNumericCell } from '../../../components/EditableNumericCell'
import { EditableCheckboxCell } from '../../../components/EditableCheckboxCell'
import { ProductTable } from '../../../dtos/ProductTable'

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState<ProductTable[]>([])
  const [data, setData] = useState<ProductTable[]>([])

  useEffect(() => {
    handleLoadProducts()
  }, [])

  async function handleLoadProducts() {
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

      return { ...productDoc.data(), options: options.length } as ProductTable
    })

    const tmpProducts = await Promise.all(productsPromises)

    setProducts(tmpProducts)
    setData(tmpProducts)
  }

  const columns = useMemo(
    () => [
      { Header: 'Slug', accessor: 'slug', Cell: EditableCell },
      { Header: 'Name', accessor: 'name', Cell: EditableCell },
      { Header: 'Category', accessor: 'category', Cell: EditableCell },
      { Header: 'Unity', accessor: 'unity', Cell: EditableCell },
      { Header: 'Description', accessor: 'description', Cell: EditableCell },
      {
        Header: 'Price',
        accessor: 'price',
        Cell: EditableNumericCell
      },
      { Header: 'Options', accessor: 'options' },
      {
        Header: 'Unavailable',
        accessor: 'unavailable',
        Cell: EditableCheckboxCell
      },
      { Header: 'Hide', accessor: 'hide', Cell: EditableCheckboxCell }
    ],
    []
  )

  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setProducts(old =>
      old.map((row, index) => {
        if (index === rowIndex) {
          return {
            ...old[rowIndex],
            [columnId]: value
          }
        }
        return row
      })
    )
  }

  return (
    <Container>
      <Topbar />
      <Content>
        <TableComponent
          columns={columns}
          data={data}
          updateMyData={updateMyData}
        />
      </Content>
    </Container>
  )
}

export default Products
