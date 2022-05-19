import { collection, getDocs, query } from 'firebase/firestore'
import { Options } from '../../../dtos/Options'
import { Product } from '../../../dtos/Product'
import { db } from '../../../lib/firebase'

export default async function handler(req, res) {
  try {
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

      return { ...productDoc.data(), options } as Product
    })

    const products = await Promise.all(productsPromises)

    res.status(200).json({ products })
  } catch (e) {
    res.status(400).end()
  }
}
