// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const menu = [
  {
    name: 'Batata Frita',
    category: 'Aperitivos/Petiscos',
    description: 'Porção de batata frita, acompanha maionese artesanal',
    quantity: '300g',
    price: 23
  },
  {
    name: 'Aipim com Bacon',
    category: 'Aperitivos/Petiscos',
    description: 'Delicioso Aipim frito com bacon, acompanha creme de queijo',
    quantity: '300g',
    price: 25
  },
  {
    name: 'Bolinho de Costela',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de bolinho de costela com cozimento prolongado (6 unidades), acompanha maionese artesanal e geleia de pimenta',
    quantity: '300g',
    price: 26
  },
  {
    name: 'Bolinho de Linguiça Blumenau',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de bolinho de linguiça blumenau produzida em nossa região (6 unidades), acompanha maionese artesanal',
    quantity: '300g',
    price: 26
  },
  {
    name: 'Bolinho de Carne seca com Cream Cheese',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de bolinho de carne seca recheado com cream cheese (6 unidades), acompanha maionese artesanal',
    quantity: '300g',
    price: 28
  },
  {
    name: 'Tiras de alcatra',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de tiras de alcatra, acompanha batata frita e maionese artesanal',
    quantity: '300g',
    price: 39
  },
  {
    name: 'Linguiça Blumenau',
    category: 'Aperitivos/Petiscos',
    description: 'Porção de linguiça blumenau',
    quantity: '300g',
    price: 35
  },
  {
    name: 'Porção Mista Especial',
    category: 'Aperitivos/Petiscos',
    description: 'Frango, Linguiça, Alcatra, Batata frita, Farofa e Pão',
    quantity: '500g',
    price: 60
  },
  {
    name: 'Hambúrguer Artesanal',
    category: 'Hambúrguers Artesanais',
    description:
      'Hambúrguer Artesanal (200g), Queijo Mozzarella, Cebola Caramelizada',
    price: 39
  },
  {
    name: 'Hambúrguer de Costela',
    category: 'Hambúrguers Artesanais',
    description:
      'Hambúrguer de Costela (200g), Queijo Colonial, Pão Ciabatta, Brotos de alface e tomate. Acompanha batata frita e maionese artesanal',
    price: 40
  },
  {
    name: 'Hambúrguer de Frango',
    category: 'Hambúrguers Artesanais',
    description:
      'Hambúrguer de Frango (200g), Queijo Mozzarella, Pão Ciabatta, Brotos de alface e tomate. Acompanha batata frita e maionese artesanal',
    price: 36
  },
  {
    name: 'Hambúrguer Vegano',
    category: 'Hambúrguers Artesanais',
    description:
      'Hambúrguer Vegano (200g), Pão Ciabatta, Brotos de alface e tomate. Acompanha batata frita e maionese artesanal',
    price: 35
  },
  {
    name: 'Piadina',
    category: 'Pratos',
    description:
      'Panqueca com queijo mozzarella, alcatra em tiras, bacon e ervas',
    price: 46.0,
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
    category: 'Pratos',
    description: 'Alcatra (300g) com arroz, batata frita e salada da casa',
    price: 53.0,
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
    category: 'Pratos',
    description:
      'Filé de frango grelado (300g) com arroz, batata frita e salada da casa',
    price: 45.0,
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
    category: 'Pratos',
    description:
      'Omelete (300g) com tomate, cebola e salada de folhas diversas',
    price: 36.0,
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
    category: 'Pratos',
    description:
      'Frango grelhado em tiras com alfaces, queijo parmesão, croutons. Acompanha maionese artesanal',
    price: 36.0,
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
    description: 'Bolinho de chocolate com recheio derretido',
    price: 12.99
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
    description: 'Verificar disponibilidade',
    price: 9.0
  }
]

type Extra = {
  name: string
  quantity?: string
  price: number
}

type Item = {
  name: string
  category: string
  description?: string
  quantity?: string
  price: number
  extras?: Extra[]
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {
  res.status(200).json(menu)
}
