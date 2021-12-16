// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const menu = [
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
      { quantity: 300, price: 21 },
      { quantity: 600, price: 39 }
    ],
    unity: 'g'
  },
  {
    name: 'Bolinho de Costela',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de bolinho de costela com cozimento prolongado, acompanha maionese artesanal e geleia de pimenta.',
    options: [{ quantity: 8, price: 33 }],
    unity: 'un'
  },
  {
    name: 'Bolinho de Linguiça Blumenau',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de bolinho de linguiça blumenau produzida em nossa região, acompanha maionese artesanal.',
    options: [{ quantity: 8, price: 30 }],
    unity: 'un'
  },
  {
    name: 'Tiras de alcatra',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de tiras de alcatra, acompanha batata frita e maionese artesanal.',
    options: [{ quantity: 300, price: 56 }],
    unity: 'g'
  },
  {
    name: 'Linguiça Blumenau',
    category: 'Aperitivos/Petiscos',
    description: 'Porção de linguiça blumenau.',
    options: [{ quantity: 300, price: 49 }],
    unity: 'g'
  },
  {
    name: 'Porção Mista Especial',
    category: 'Aperitivos/Petiscos',
    description: 'Frango, Linguiça, Alcatra, Batata frita, Farofa e Pão.',
    options: [{ price: 63 }]
  },
  {
    name: 'Panceta de Porco',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de Panceta de porco, acompanhada de batata frita e maionese artesanal.',
    options: [{ quantity: 300, price: 33 }],
    unity: 'g'
  },
  {
    name: 'Coxinhas de Frango grelhadas',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de Coxinhas de Frango grelhadas. Acompanha Pães e geleira de pimenta.',
    options: [{ quantity: 300, price: 33 }],
    unity: 'g'
  },
  {
    name: 'Hambúrguer Artesanal',
    category: 'Hambúrguers Artesanais',
    description:
      'Hambúrguer Artesanal (200g), Queijo Mozzarella, Cebola Caramelizada.',
    options: [
      { description: 'Sem batata', price: 28.8 },
      { description: 'Com batata', price: 35 }
    ],
    unity: 'g'
  },
  {
    name: 'Hambúrguer de Costela',
    category: 'Hambúrguers Artesanais',
    description:
      'Hambúrguer de Costela (200g), Queijo Colonial, Pão Ciabatta, Brotos de alface e tomate. Acompanha batata frita e maionese artesanal.',
    options: [
      { description: 'Sem batata', price: 35 },
      { description: 'Com batata', price: 39 }
    ],
    unity: 'g'
  },
  {
    name: 'Hambúrguer de Frango',
    category: 'Hambúrguers Artesanais',
    description:
      'Hambúrguer de Frango (200g), Queijo Mozzarella, Pão Ciabatta, Brotos de alface e tomate. Acompanha batata frita e maionese artesanal.',
    options: [
      { description: 'Sem batata', price: 32 },
      { description: 'Com batata', price: 37 }
    ],
    unity: 'g'
  },
  {
    name: 'Sanduíche Vegano',
    category: 'Hambúrguers Artesanais',
    description:
      'Sanduíche Vegano, Pão Ciabatta, Brotos de alface e tomate. Acompanha batata frita e maionese artesanal.',
    options: [
      { description: 'Sem batata', price: 32 },
      { description: 'Com batata', price: 37 }
    ],
    unity: 'g'
  },
  {
    name: 'Piadina',
    category: 'Pratos Principais',
    description:
      'Panqueca de frigideira com queijo mozzarella, alcatra em tiras, bacon e ervas.',
    options: [{ price: 42 }],
    extras: [
      {
        name: 'Batata Frita',
        quantity: '150g',
        price: 8.0
      },
      {
        name: 'Bacon',
        price: 6.0
      },
      {
        name: 'Ovo',
        price: 5.0
      },
      {
        name: 'Arroz',
        price: 6.0
      }
    ]
  },
  {
    name: 'Alcatra Grelhada',
    category: 'Pratos Principais',
    description: 'Alcatra (300g) com arroz, batata frita e salada da casa.',
    options: [{ price: 50 }],
    extras: [
      {
        name: 'Batata Frita',
        quantity: '150g',
        price: 8.0
      },
      {
        name: 'Bacon',
        price: 6.0
      },
      {
        name: 'Ovo',
        price: 5.0
      },
      {
        name: 'Arroz',
        price: 6.0
      }
    ]
  },
  {
    name: 'Filé de Frango Grelhado',
    category: 'Pratos Principais',
    description:
      'Filé de frango grelado (300g) com arroz, batata frita e salada da casa.',
    options: [{ price: 42 }],
    extras: [
      {
        name: 'Batata Frita',
        quantity: '150g',
        price: 8.0
      },
      {
        name: 'Bacon',
        price: 6.0
      },
      {
        name: 'Ovo',
        price: 5.0
      },
      {
        name: 'Arroz',
        price: 6.0
      }
    ]
  },
  {
    name: 'Omelete',
    category: 'Pratos Principais',
    description: 'Omelete com tomate, cebola e salada de folhas diversas.',
    options: [{ price: 28 }],
    extras: [
      {
        name: 'Batata Frita',
        quantity: '150g',
        price: 8.0
      },
      {
        name: 'Bacon',
        price: 6.0
      },
      {
        name: 'Ovo',
        price: 5.0
      },
      {
        name: 'Arroz',
        price: 6.0
      }
    ]
  },
  {
    name: 'Salada Ceasar',
    category: 'Pratos Principais',
    description:
      'Frango grelhado em tiras com alfaces, queijo parmesão, croutons. Acompanha maionese artesanal.',
    options: [{ price: 28 }],
    extras: [
      {
        name: 'Batata Frita',
        quantity: '150g',
        price: 8.0
      },
      {
        name: 'Bacon',
        price: 6.0
      },
      {
        name: 'Ovo',
        price: 5.0
      },
      {
        name: 'Arroz',
        price: 6.0
      }
    ]
  },
  {
    name: 'Petit Gateau',
    category: 'Sobremesas',
    description: 'Bolinho de chocolate com recheio derretido.',
    price: 12.99
  },
  {
    name: 'Pilsen Schorstein',
    category: 'Chopp',
    options: [
      { quantity: 473, price: 17 },
      { quantity: 330, price: 14 }
    ],
    unity: 'ml'
  },
  {
    name: 'Indian Pale Ale (IPA) Schorstein',
    category: 'Chopp',
    options: [
      { quantity: 473, price: 19 },
      { quantity: 330, price: 15 }
    ],
    unity: 'ml'
  },
  {
    name: 'Pilsen Cervejaria Blumenau',
    category: 'Chopp',
    options: [
      { quantity: 473, price: 17 },
      { quantity: 330, price: 14 }
    ],
    unity: 'ml'
  },
  {
    name: 'Indian Pale Ale (IPA) Cervejaria Blumenau',
    category: 'Chopp',
    options: [
      { quantity: 473, price: 17 },
      { quantity: 330, price: 14 }
    ],
    unity: 'ml'
  },
  {
    name: 'Caipiroska (Vodka)',
    category: 'Caipirinhas',
    options: [
      { description: 'Limão', quantity: 473, price: 20 },
      { description: 'Morango', quantity: 473, price: 20 }
    ],
    unity: 'ml'
  },
  {
    name: 'Caipirinha (Cachaça)',
    category: 'Caipirinhas',
    options: [
      { description: 'Limão', quantity: 473, price: 19 },
      { description: 'Morango', quantity: 473, price: 19 }
    ],
    unity: 'ml'
  },
  {
    name: 'Água com ou sem gás',
    category: 'Bebidas',
    price: 4.0
  },
  {
    name: 'Refrigerante',
    category: 'Bebidas',
    price: 5.0
  },
  {
    name: 'Suco | Soda Italiana',
    category: 'Bebidas',
    description: 'Verificar disponibilidade.',
    price: 9.0
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
  price: number
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
