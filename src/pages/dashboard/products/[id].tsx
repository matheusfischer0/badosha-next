import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

import { confirmAlert } from 'react-confirm-alert' // Import

import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
  query,
  setDoc,
  updateDoc,
  where
} from 'firebase/firestore'
import { db } from '../../../lib/firebase'

import { FiPlusSquare, FiTrash } from 'react-icons/fi'

import {
  LoadingContainer,
  Container,
  Header,
  Form,
  Row,
  Column,
  Input,
  Button,
  Label,
  TextArea,
  Dropdown,
  Footer,
  PriceInput,
  PriceRow,
  OptionContainer,
  CheckboxRow,
  CheckboxInput,
  CheckboxContainer,
  PriceLabel,
  Subtitle,
  Title,
  AddButton,
  OptionDelete
} from '../../../styles/pages/editProduct.style'

import { Options } from '../../../dtos/Options'
import { Product } from '../../../dtos/Product'
import Loading from '../../../components/Loading'
import withAuth from '../../../HOC/withAuth'
import theme from '../../../styles/theme'
import { ConfirmationAlert } from '../../../components/ConfirmationAlert'

function EditProduct() {
  const router = useRouter()
  const { id } = router.query

  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false)

  const [product, setProduct] = useState<Product>()

  const [slug, setSlug] = useState<string>()
  const [name, setName] = useState<string>()
  const [description, setDescription] = useState<string>()
  const [category, setCategory] = useState<string>()
  const [unity, setUnity] = useState<string>()
  const [quantity, setQuantity] = useState<number>()
  const [price, setPrice] = useState<number>()
  const [unavailable, setUnavailable] = useState<boolean>()
  const [hide, setHide] = useState<boolean>()

  const [options, setOptions] = useState<Options[]>([])
  const [images, setImages] = useState([])

  const [categories, setCategories] = useState([])

  const [isLoading, setIsLoading] = useState<boolean>(false)

  useEffect(() => {
    handleLoadCategories()
    handleLoadProduct()
  }, [])

  async function handleLoadCategories() {
    const categoriesRef = collection(db, 'categories')
    const categoriesQuery = query(categoriesRef)
    const categoriesDocs = await getDocs(categoriesQuery)

    const tmpCategories = categoriesDocs.docs.map(doc => {
      return { ...doc.data() }
    })

    setCategories(tmpCategories)
  }

  async function handleLoadProduct() {
    const productRef = doc(db, `products/${id}`)
    const productDoc = await getDoc(productRef)
    const optionsRef = collection(db, `products/${id}/options`)
    const optionsQuery = query(optionsRef)
    const optionsDocs = await getDocs(optionsQuery)
    const options: Options[] = optionsDocs.docs.map(optionDoc => {
      return { id: optionDoc.id, ...optionDoc.data() } as Options
    })

    const tmpProduct = { ...productDoc.data(), options } as Product

    setProduct(tmpProduct)

    setSlug(tmpProduct.slug)
    setName(tmpProduct.name)
    setDescription(tmpProduct.description)
    setCategory(tmpProduct.category)
    setUnity(tmpProduct.unity)
    setQuantity(tmpProduct.quantity)
    setPrice(tmpProduct.price)
    setUnavailable(tmpProduct.unavailable)
    setHide(tmpProduct.hide)

    setOptions(tmpProduct.options)
    setImages(tmpProduct.images)
  }

  async function handleUpdateOption(
    id: string,
    field: string,
    value: string | number
  ) {
    setOptions(oldValues => {
      return oldValues.map(option => {
        if (option.id === id) return { ...option, [field]: value }
        return option
      })
    })
  }

  function handleAddNewOption() {
    const tmpOptions = [{ id: `${options.length}`, slug: '' }, ...options]
    setOptions(tmpOptions)
  }

  async function handleDeleteOption(option: Options) {
    const tmpOptions = [...options]
    const optionIndex = tmpOptions.indexOf(option)
    tmpOptions.splice(optionIndex, 1)
    setOptions(tmpOptions)
  }

  async function handleSaveProduct() {
    if (isLoading) return

    setIsLoading(true)

    const productRef = doc(db, `products`, `${id}`)
    const productData = {
      slug: slug ?? null,
      name: name ?? null,
      description: description ?? null,
      category: category ?? null,
      unity: unity ?? null,
      quantity: quantity ?? null,
      price: price ?? null,
      unavailable: unavailable ?? null,
      hide: hide ?? null
    }

    await updateDoc(productRef, productData)

    const optionsSlugs = options.map(option => option.slug)

    const optionsCollectionRef = collection(db, 'products', `${id}`, 'options')
    const optionsCollectionQuery = query(
      optionsCollectionRef,
      where('slug', 'not-in', optionsSlugs)
    )
    const optionsToDelete = await getDocs(optionsCollectionQuery)
    optionsToDelete.docs.map(async option => {
      const optionRef = doc(db, 'products', `${id}`, 'options', `${option.id}`)
      await deleteDoc(optionRef)
    })

    options.map(async option => {
      const optionRef = doc(db, 'products', `${id}`, 'options', `${option.id}`)

      const optionData = {
        slug: option.slug ?? null,
        description: option.description ?? null,
        price: option.price ?? null,
        quantity: option.quantity ?? null
      }
      await setDoc(optionRef, optionData)
    })

    setIsLoading(false)
    handleGoBack()
  }

  const handleGoBack = () => {
    router.push('/dashboard/products')
  }

  return (
    <Container>
      {isAlertModalOpen ?? (
        <ConfirmationAlert
          message="Deletar?"
          confirmMessage="Sim"
          cancelMessage={'nao'}
        ></ConfirmationAlert>
      )}
      {!product || isLoading ? (
        <LoadingContainer>
          <Loading type={'spinningBubbles'} color={'#f6c101'}></Loading>
        </LoadingContainer>
      ) : (
        <>
          <Header>
            <Title>Editar produto</Title>
          </Header>
          <Form>
            <Row>
              <Label>Código</Label>
              <Input
                required
                type="text"
                name="slug"
                placeholder="Código"
                value={slug}
                onChange={e => setSlug(e.target.value)}
              />
            </Row>
            <Row>
              <Label>Nome</Label>
              <Input
                required
                type="text"
                name="name"
                placeholder="Nome"
                value={name}
                onChange={e => setName(e.target.value)}
              />
            </Row>
            <Row>
              <Label>Descrição</Label>
              <TextArea
                name="description"
                placeholder="Descrição"
                rows={2}
                value={description}
                onChange={e => setDescription(e.target.value)}
              />
            </Row>
            <Row>
              <Label>Categoria</Label>
              <Dropdown
                id="categories"
                name="categories"
                value={category}
                onChange={e => {
                  setCategory(e.currentTarget.value)
                }}
              >
                {categories.map(category => (
                  <option value={category.name}>{category.name}</option>
                ))}
              </Dropdown>
            </Row>
            <Row direction="row">
              <Column>
                <Label>Quantidade</Label>
                <Input
                  type="number"
                  name="quantity"
                  placeholder="Quantidade"
                  value={quantity}
                  onChange={e => setQuantity(Number(e.target.value))}
                ></Input>
              </Column>
              <Column>
                <Label>Unidade</Label>
                <Input
                  type="text"
                  name="unity"
                  placeholder="Unidade"
                  value={unity}
                  onChange={e => setUnity(e.target.value)}
                ></Input>
              </Column>
            </Row>
            <Row>
              <Label>Preço</Label>
              <PriceRow>
                <PriceLabel>R$</PriceLabel>
                <PriceInput
                  type="number"
                  name="price"
                  value={price}
                  onChange={e =>
                    setPrice(
                      e.currentTarget.value
                        ? Number(e.currentTarget.value)
                        : null
                    )
                  }
                  pattern="^\d*(\.\d{0,2})?$"
                  step="any"
                />
              </PriceRow>
            </Row>
            <CheckboxRow>
              <CheckboxContainer>
                <CheckboxInput
                  type="checkbox"
                  name="unavailable"
                  checked={unavailable}
                  onChange={e => setUnavailable(e.currentTarget.checked)}
                />
                <Label>Indisponível</Label>
              </CheckboxContainer>
              <CheckboxContainer>
                <CheckboxInput
                  type="checkbox"
                  name="hide"
                  checked={hide}
                  onChange={e => setHide(e.currentTarget.checked)}
                />
                <Label>Esconder</Label>
              </CheckboxContainer>
            </CheckboxRow>
          </Form>
          {options && (
            <>
              <Header>
                <Subtitle>Opcões</Subtitle>
                <AddButton onClick={handleAddNewOption}>
                  <FiPlusSquare size={25}></FiPlusSquare>
                </AddButton>
              </Header>
              {options.map(option => (
                <OptionContainer key={option.id}>
                  <OptionDelete onClick={() => handleDeleteOption(option)}>
                    <FiTrash size={20} color={theme.colors.orange}></FiTrash>
                  </OptionDelete>

                  <Row direction="row">
                    <Column>
                      <Label>Código</Label>
                      <Input
                        type="text"
                        name="slug"
                        value={option.slug}
                        onChange={e =>
                          handleUpdateOption(
                            option.id,
                            'slug',
                            e.currentTarget.value
                          )
                        }
                      />
                    </Column>
                    <Column>
                      <Label>Quantidade</Label>
                      <Input
                        type="number"
                        name="quantity"
                        value={option.quantity}
                        onChange={e =>
                          handleUpdateOption(
                            option.id,
                            'quantity',
                            e.currentTarget.value
                          )
                        }
                      />
                    </Column>
                    <Column>
                      <Label>Preço</Label>
                      <PriceRow>
                        <PriceLabel>R$</PriceLabel>
                        <PriceInput
                          type="number"
                          name="price"
                          value={option.price}
                          onChange={e =>
                            handleUpdateOption(
                              option.id,
                              'price',
                              e.currentTarget.value
                            )
                          }
                          pattern="^\d*(\.\d{0,2})?$"
                          step="any"
                        />
                      </PriceRow>
                    </Column>
                  </Row>
                  <Row direction="row">
                    <Column>
                      <Label>Descrição</Label>
                      <Input
                        type="text"
                        name="description"
                        value={option.description}
                        onChange={e =>
                          handleUpdateOption(
                            option.id,
                            'description',
                            e.currentTarget.value
                          )
                        }
                      />
                    </Column>
                  </Row>
                </OptionContainer>
              ))}
            </>
          )}
          <Footer>
            <Button color="return" onClick={handleGoBack}>
              <Label>Voltar</Label>
            </Button>

            <Button color="save" onClick={handleSaveProduct}>
              <Label>Salvar</Label>
            </Button>
          </Footer>
        </>
      )}
    </Container>
  )
}

export default withAuth(EditProduct)
