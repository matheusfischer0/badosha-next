import { Options } from './Options'

export type Item = {
  slug: string
  name: string
  category: string
  unity?: string
  description?: string
  quantity?: string
  price?: number
  options?: Options[]
  images?: string[]
}
