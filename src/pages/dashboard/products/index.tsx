import React, { useEffect, useMemo, useState } from 'react'

import { db } from '../../../lib/firebase'
import { collection, getDocs, query, doc, updateDoc } from 'firebase/firestore'

import Topbar from '../../../components/Topbar/Topbar'
import { Container, Content, Item } from '../../../styles/pages/products.style'
import { TableComponent } from '../../../components/TableComponent'

import { Options } from '../../../dtos/Options'
import { EditableNumericCell } from '../../../components/EditableNumericCell'
import { EditableCheckboxCell } from '../../../components/EditableCheckboxCell'
import { ProductTable } from '../../../dtos/ProductTable'
import { ActionsCell } from '../../../components/ActionsCell'
import withAuth from '../../../HOC/withAuth'
import { useRouter } from 'next/router'

function Products() {
  const [categories, setCategories] = useState([])
  const [products, setProducts] = useState<ProductTable[]>([])
  const [data, setData] = useState<ProductTable[]>([])

  const router = useRouter()

  useEffect(() => {
    handleLoadProducts()
  }, [])

  async function handleLoadProducts() {
    const productsRef = collection(db, 'products')
    const productsQuery = query(productsRef)
    const productDocs = await getDocs(productsQuery)

    const productsPromises = productDocs.docs.map(async productDoc => {
      const optionsRef = collection(db, `products/${productDoc.id}/options`)
      const optionsQuery = query(optionsRef)
      const optionsDocs = await getDocs(optionsQuery)

      const options: Options[] = optionsDocs.docs.map(optionDoc => {
        return optionDoc.data() as Options
      })

      return {
        id: productDoc.id,
        ...productDoc.data(),
        options: options.length
      } as ProductTable
    })

    const tmpProducts = await Promise.all(productsPromises)

    setProducts(tmpProducts)
    setData(tmpProducts)
  }

  const columns = useMemo(
    () => [
      { label: 'Código', accessor: 'slug', type: 'string' },
      { label: 'Nome', accessor: 'name', type: 'string' },
      { label: 'Categoria', accessor: 'category', type: 'string' },
      { label: 'Unidade', accessor: 'unity', type: 'string' },
      {
        label: 'Descrição',
        accessor: 'description',
        type: 'string'
      },
      {
        label: 'Preço',
        accessor: 'price',
        Cell: EditableNumericCell,
        type: 'number'
      },
      { label: 'Opções', accessor: 'options', type: 'number' },
      {
        label: 'Indisponível',
        accessor: 'unavailable',
        Cell: EditableCheckboxCell,
        type: 'boolean'
      },
      {
        label: 'Esconder',
        accessor: 'hide',
        Cell: EditableCheckboxCell,
        type: 'boolean'
      },
      {
        label: 'Ações',
        accessor: 'actions',
        Cell: ActionsCell
      }
    ],
    []
  )

  const updateMyData = async (
    id: string,
    key: string,
    value: string | number | boolean
  ) => {
    const documentRef = doc(db, 'products', `${id}`)

    await updateDoc(documentRef, {
      [key]: value
    })
  }

  const editData = (id: string) => {
    router.push({
      pathname: '/dashboard/products/[id]',
      query: { id }
    })
  }

  return (
    <Container>
      <Topbar />
      <Content>
        <TableComponent
          columns={columns}
          data={data}
          updateMyData={updateMyData}
          editData={editData}
        />
      </Content>
    </Container>
  )
}

export default withAuth(Products)
