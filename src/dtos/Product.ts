import { Options } from './Options'

export type Product = {
  id: string
  slug: string
  name: string
  category: string
  unity?: string
  description?: string
  quantity?: number
  price?: number
  options?: Options[]
  images?: string[]
  unavailable?: boolean
  hide?: boolean
}
