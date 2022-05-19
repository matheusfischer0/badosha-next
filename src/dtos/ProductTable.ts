export type ProductTable = {
  slug: string
  name: string
  category: string
  unity?: string
  description?: string
  quantity?: string
  price?: number
  options?: number
  images?: string[]
  unavailable?: boolean
  hide?: boolean
}