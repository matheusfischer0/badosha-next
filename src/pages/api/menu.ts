// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const menu = require('./menu.json')

type Options = {
  slug?: string
  description?: string
  quantity?: number
  price?: number
}

type Item = {
  slug: string
  name: string
  category: string
  unity?: string
  description?: string
  quantity?: string
  price?: number
  options?: Options[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {
  // const items = JSON.parse(menu)
  res.status(200).json(menu)
}
