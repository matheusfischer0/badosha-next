// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const menu = [
  {
    name: 'Pilsen Schorstein',
    category: 'Chopp',
    options: [
      { quantity: 500, price: 20 },
      { quantity: 300, price: 14 }
    ],
    unity: 'ml'
  },
  {
    name: 'Indian Pale Ale (IPA) Schorstein',
    category: 'Chopp',
    options: [
      { quantity: 500, price: 22 },
      { quantity: 300, price: 16 }
    ],
    unity: 'ml'
  },
  {
    name: 'Pilsen Cervejaria Blumenau',
    category: 'Chopp',
    options: [
      { quantity: 500, price: 18 },
      { quantity: 300, price: 12 }
    ],
    unity: 'ml'
  },
  {
    name: 'Blond Ale Frida Cervejaria Blumenau',
    category: 'Chopp',
    options: [
      { quantity: 500, price: 18 },
      { quantity: 300, price: 12 }
    ],
    unity: 'ml'
  },
  {
    name: 'Chope de Vinho',
    category: 'Chopp',
    options: [
      { quantity: 500, price: 20 },
      { quantity: 300, price: 14 }
    ],
    unity: 'ml'
  },
  {
    name: 'Cervejaria Blumenau',
    category: 'Cervejas',
    options: [
      { description: 'Capirava Little IPA', quantity: 500, price: 28 },
      { description: 'Ipê Amarelo Hop Lager', quantity: 500, price: 22 },
      { description: 'Frida Blond Ale', quantity: 500, price: 20 },
      { description: 'Vila Weissbier', quantity: 500, price: 22 }
    ],
    unity: 'ml'
  },
  {
    name: 'Heineken',
    category: 'Cervejas',
    options: [{ quantity: 330, price: 12 }],
    unity: 'ml'
  },
  {
    name: 'Budweiser',
    category: 'Cervejas',
    options: [{ quantity: 330, price: 10 }],
    unity: 'ml'
  },
  {
    name: 'Stella Artois',
    category: 'Cervejas',
    options: [{ quantity: 330, price: 10 }],
    unity: 'ml'
  },
  {
    name: 'Caipiroska (Vodka)',
    category: 'Drinks',
    price: 20,
    options: [
      { description: 'Limão' },
      { description: 'Morango' },
      { description: 'Melância com manjericão' },
      { description: 'Maracujá com hortelã' }
    ],
    unity: 'ml'
  },
  {
    name: 'Caipirinha (Cachaça)',
    category: 'Drinks',
    price: 17,
    options: [
      { description: 'Limão' },
      { description: 'Morango' },
      { description: 'Melância com manjericão' },
      { description: 'Maracujá com hortelã' }
    ],
    unity: 'ml'
  },
  {
    name: 'Gim Tônica',
    category: 'Drinks',
    price: 23,
    options: [
      { description: 'Tradicional' },
      { description: 'Limão' },
      { description: 'Maracujá Tropical' },
      { description: 'Melância' }
    ],
    unity: 'ml'
  },
  {
    name: 'Batidas',
    category: 'Drinks',
    price: 21,
    options: [
      { description: 'Maracujá' },
      { description: 'Melância' },
      { description: 'Morango' }
    ]
  },
  {
    name: 'Pinã Colada',
    category: 'Drinks',
    price: 21
  },
  {
    name: 'Whisky',
    category: 'Drinks',
    options: [
      { description: 'Johnny red label (Dose)', price: 21 },
      { description: 'Jack Daniels (Dose)', price: 23 }
    ],
    unity: 'Dose'
  },
  {
    name: 'Cachaça artesanal',
    category: 'Drinks',
    options: [
      { description: 'Prata (Dose)', price: 7 },
      { description: 'Envelhecida (Dose)', price: 9 }
    ],
    unity: 'Dose'
  },
  {
    name: 'Gin',
    category: 'Drinks',
    options: [
      { description: 'Seagers (Dose)', price: 12 },
      { description: 'Kalvelage (Dose)', price: 15 }
    ],
    unity: 'Dose'
  },
  {
    name: 'Vodka',
    category: 'Drinks',
    options: [
      { description: 'Smirnoff (Dose)', price: 11 },
      { description: 'Kalvelage (Dose)', price: 12 }
    ],
    unity: 'Dose'
  },
  {
    name: 'Água (com/sem gás)',
    category: 'Bebidas',
    price: 4.0
  },
  {
    name: 'Refrigerantes',
    category: 'Bebidas',
    options: [
      { description: 'Coca-cola' },
      { description: 'Coca-cola Zero' },
      { description: 'Guaraná Antartica' },
      { description: 'Aguá Tônica' }
    ],
    price: 5.0
  },
  {
    name: 'Sucos',
    category: 'Bebidas',
    options: [
      { description: 'Laranja' },
      { description: 'Melancia' },
      { description: 'Abacaxi' }
    ],
    price: 9.0
  },
  {
    name: 'Mix de Frutos Secos',
    category: 'Aperitivos/Petiscos',
    description: 'Temperados artesanalmente',
    price: 8.0,
    unity: 'g'
  },
  {
    name: 'Batata Frita',
    category: 'Aperitivos/Petiscos',
    description: 'Porção de batata frita, acompanha maionese artesanal.',
    options: [
      { quantity: 300, price: 19 },
      { quantity: 600, price: 35 }
    ],
    unity: 'g'
  },
  {
    name: 'Aipim com Bacon',
    category: 'Aperitivos/Petiscos',
    description: 'Delicioso Aipim frito com bacon, acompanha creme de queijo.',
    options: [
      { quantity: 300, price: 24 },
      { quantity: 600, price: 39 }
    ],
    unity: 'g'
  },
  {
    name: 'Bolinho de Costela',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de bolinho de costela com cozimento prolongado, acompanha maionese artesanal e geleia de pimenta.',
    options: [{ quantity: 450, price: 49 }],
    unity: 'g'
  },
  {
    name: 'Bolinho de Linguiça Blumenau',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de bolinho de linguiça blumenau produzida em nossa região, acompanha maionese artesanal.',
    options: [{ quantity: 450, price: 46 }],
    unity: 'g'
  },
  {
    name: 'Tiras de alcatra',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de tiras de alcatra, acompanha batata frita e maionese artesanal.',
    options: [{ quantity: 300, price: 59 }],
    unity: 'g'
  },
  {
    name: 'Linguiça Blumenau',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de linguiça blumenau, acompanha batata frita e maionese artesanal',
    options: [{ quantity: 300, price: 49 }],
    unity: 'g'
  },
  {
    name: 'Porção Mista Especial',
    category: 'Aperitivos/Petiscos',
    description:
      'Coxinha de Frango, Linguiça Blumenau, Alcatra, Batata frita , Farofa e Pão.',
    options: [{ quantity: 800, price: 79 }],
    unity: 'g'
  },
  {
    name: 'Panceta de Porco',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de Panceta de porco, acompanhada de batata frita e maionese artesanal.',
    options: [{ quantity: 300, price: 39 }],
    unity: 'g'
  },
  // {
  //   name: 'Coxinhas de Frango grelhadas',
  //   category: 'Aperitivos/Petiscos',
  //   description:
  //     'Porção de Coxinhas de Frango grelhadas. Acompanha Pães e geleira de pimenta.',
  //   options: [{ quantity: 300, price: 39 }],
  //   unity: 'g'
  // },
  {
    name: 'Hambúrguer Artesanal',
    category: 'Hambúrguers Artesanais',
    description:
      'Pão de Brioche com Hambúrguer Artesanal, Queijo Mozzarella, Alface, Tomate e Cebola Roxa. Acompanha maionese artesanal.',
    options: [
      { description: 'Sem batata', price: 39 },
      { description: 'Com batata (100g)', price: 45 }
    ],
    unity: 'g'
  },
  {
    name: 'Hambúrguer de Costela',
    category: 'Hambúrguers Artesanais',
    description:
      'Pão Ciabatta com Costela Desfiada, Queijo Colonial, Rúcula e Tomate. Acompanha maionese artesanal.',
    options: [
      { description: 'Sem batata', price: 45 },
      { description: 'Com batata (100g)', price: 51 }
    ],
    unity: 'g'
  },
  {
    name: 'Sanduíche de Frango',
    category: 'Sanduíches',
    description:
      'Pão de sanduíche com Frango grelhado, Queijo Mozzarella, Alface e tomate. Acompanha maionese artesanal.',
    options: [
      { description: 'Sem batata', price: 32 },
      { description: 'Com batata (100g)', price: 37 }
    ],
    unity: 'g'
  },
  {
    name: 'Piadina',
    category: 'Pratos Principais',
    description:
      'Panqueca de frigideira com queijo mozzarella, alcatra em tiras, bacon e especiarias.',
    options: [{ quantity: 350, price: 42 }],
    unity: 'g'
  },
  {
    name: 'Alcatra Grelhada',
    category: 'Pratos Principais',
    description: 'Alcatra com arroz, batata frita e salada da casa.',
    options: [{ quantity: 300, price: 49 }]
  },
  {
    name: 'Filé de Frango Grelhado',
    category: 'Pratos Principais',
    description:
      'Filé de frango grelado com arroz, batata frita e salada da casa.',
    options: [{ quantity: 300, price: 42 }]
  },
  {
    name: 'Omelete',
    category: 'Pratos Principais',
    description: 'Omelete com tomate e salada da casa.',
    options: [{ quantity: 350, price: 29 }],
    unity: 'g'
  },
  {
    name: 'Salada Badosha',
    category: 'Pratos Principais',
    description:
      'Frango grelhado com mix de folhas, pepino, tomate, alface crespa roxa e verde, rúcula, morango e croutons. Acompanha maionese artesanal.',
    options: [{ quantity: 350, price: 28 }],
    unity: 'g'
  },
  {
    name: 'Brownie by Badosha',
    category: 'Sobremesas',
    description: 'Brownie com mousse de Chocolate meio amargo e Creme de avelã',
    options: [{ quantity: 150, price: 15 }],
    unity: 'un'
  }
]

type Extra = {
  name: string
  quantity?: string
  price: number
}

type Options = {
  description?: string
  quantity?: number
  price?: number
}

type Item = {
  name: string
  category: string
  unity?: string
  description?: string
  quantity?: string
  price?: number
  options?: Options[]
  extras?: Extra[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {
  res.status(200).json(menu)
}
