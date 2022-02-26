// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const menu = [
  {
    slug: 'pilsen-schorstein',
    name: 'Pilsen Schorstein',
    category: 'Chopp',
    options: [
      { quantity: 500, price: 15 },
      { quantity: 300, price: 12 }
    ],
    unity: 'ml'
  },
  {
    slug: 'ipa-schorstein',
    name: 'Indian Pale Ale (IPA) Schorstein',
    category: 'Chopp',
    options: [
      { quantity: 500, price: 18 },
      { quantity: 300, price: 14 }
    ],
    unity: 'ml'
  },
  {
    slug: 'pilsen-blumenau',
    name: 'Pilsen Cervejaria Blumenau',
    category: 'Chopp',
    options: [
      { quantity: 500, price: 15 },
      { quantity: 300, price: 12 }
    ],
    unity: 'ml'
  },
  {
    slug: 'frida-blumenau',
    name: 'Blond Ale Frida Cervejaria Blumenau',
    category: 'Chopp',
    options: [
      { quantity: 500, price: 16 },
      { quantity: 300, price: 12 }
    ],
    unity: 'ml'
  },
  {
    slug: 'chope-vinho',
    name: 'Chope de Vinho',
    category: 'Chopp',
    options: [
      { quantity: 500, price: 17 },
      { quantity: 300, price: 13 }
    ],
    unity: 'ml'
  },
  {
    slug: 'capivara-blumenau',
    name: 'Capirava Little IPA',
    category: 'Cervejas',
    options: [{ quantity: 500, price: 28 }],
    unity: 'ml'
  },
  {
    slug: 'ipe-amarelo-blumenau',
    name: 'Ipê Amarelo Hop Lager',
    category: 'Cervejas',
    options: [{ quantity: 500, price: 22 }],
    unity: 'ml'
  },
  {
    slug: 'frida-garrafa-blumenau',
    name: 'Frida Blond Ale',
    category: 'Cervejas',
    options: [{ quantity: 500, price: 20 }],
    unity: 'ml'
  },
  {
    slug: 'vila-weiss-blumenau',
    name: 'Vila Weissbier',
    category: 'Cervejas',
    options: [{ quantity: 500, price: 22 }],
    unity: 'ml'
  },
  {
    slug: 'heineken-long',
    name: 'Heineken',
    category: 'Cervejas',
    options: [{ quantity: 330, price: 12 }],
    unity: 'ml',
    images: ['/heineken1.jpg']
  },
  {
    slug: 'budweiser-long',
    name: 'Budweiser',
    category: 'Cervejas',
    options: [{ quantity: 330, price: 10 }],
    unity: 'ml'
  },
  {
    slug: 'stella-long',
    name: 'Stella Artois',
    category: 'Cervejas',
    options: [{ quantity: 330, price: 10 }],
    unity: 'ml'
  },
  {
    slug: 'caipiroska-frutas',
    name: 'Caipiroska (Vodka)',
    category: 'Drinks',
    price: 20,
    options: [
      {
        slug: 'caipiroska-limao',
        description: 'Limão'
      },
      {
        slug: 'caipiroska-morango',
        description: 'Morango'
      },
      {
        slug: 'caipiroska-melancia',
        description: 'Melância com manjericão'
      },
      {
        slug: 'caipiroska-maracuja',
        description: 'Maracujá com hortelã'
      }
    ],
    unity: 'ml'
  },
  {
    slug: 'caipirinha-frutas',
    name: 'Caipirinha (Cachaça)',
    category: 'Drinks',
    price: 17,
    options: [
      {
        slug: 'caipirinha-limao',
        description: 'Limão'
      },
      {
        slug: 'caipirinha-morango',
        description: 'Morango'
      },
      {
        slug: 'caipirinha-melancia',
        description: 'Melância com manjericão'
      },
      {
        slug: 'caipirinha-maracuja',
        description: 'Maracujá com hortelã'
      }
    ],
    unity: 'ml'
  },
  {
    slug: 'gin-tonica',
    name: 'Gim Tônica',
    category: 'Drinks',
    price: 23,
    options: [
      {
        slug: 'gin-tonica-trad',
        description: 'Tradicional'
      },
      {
        slug: 'gin-tonica-limao',
        description: 'Limão'
      },
      {
        slug: 'gin-tonica-maracuja',
        description: 'Maracujá Tropical'
      },
      {
        slug: 'gin-tonica-melancia',
        description: 'Melância'
      }
    ],
    unity: 'ml'
  },
  {
    slug: 'whisky',
    name: 'Whisky',
    category: 'Doses',
    options: [
      {
        slug: 'whisky-johnny-red',
        description: 'Johnny red label (Dose)',
        price: 21
      },
      {
        slug: 'whisky-jack-daniels',
        description: 'Jack Daniels (Dose)',
        price: 23
      }
    ],
    unity: 'Dose'
  },
  {
    slug: 'cachaca',
    name: 'Cachaça artesanal',
    category: 'Doses',
    options: [
      {
        slug: 'cachaca-prata',
        description: 'Prata (Dose)',
        price: 7
      },
      {
        slug: 'cachaca-envelhecida',
        description: 'Envelhecida (Dose)',
        price: 9
      }
    ],
    unity: 'Dose'
  },
  {
    slug: 'gin',
    name: 'Gin',
    category: 'Doses',
    options: [
      {
        slug: 'gin-seagers',
        description: 'Seagers (Dose)',
        price: 12
      },
      {
        slug: 'gin-kalvelage',
        description: 'Kalvelage (Dose)',
        price: 15
      }
    ],
    unity: 'Dose'
  },
  {
    slug: 'vodka',
    name: 'Vodka',
    category: 'Doses',
    options: [
      {
        slug: 'vodka-smirnoff',
        description: 'Smirnoff (Dose)',
        price: 11
      },
      {
        slug: 'vodka-kalvelage',
        description: 'Kalvelage (Dose)',
        price: 12
      }
    ],
    unity: 'Dose'
  },
  {
    slug: 'agua',
    name: 'Água (com/sem gás)',
    category: 'Bebidas',
    price: 4.0
  },
  {
    slug: 'refrigerante',
    name: 'Refrigerantes',
    category: 'Bebidas',
    options: [
      {
        slug: 'refrigerante-coca',
        description: 'Coca-cola'
      },
      {
        slug: 'refrigerante-coca-zero',
        description: 'Coca-cola Zero'
      },
      {
        slug: 'refrigerante-guarana',
        description: 'Guaraná Antartica'
      },
      {
        slug: 'refrigerante-guarana-zero',
        description: 'Guaraná Antartica Zero'
      },
      {
        slug: 'refrigerante-tonica',
        description: 'Aguá Tônica'
      }
    ],
    price: 5.0
  },
  {
    slug: 'sucos',
    name: 'Sucos',
    category: 'Bebidas',
    options: [
      {
        slug: 'sucos-laranja',
        description: 'Laranja'
      },
      {
        slug: 'sucos-melancia',
        description: 'Melância'
      },
      {
        slug: 'sucos-abacaxi',
        description: 'Abacaxi'
      }
    ],
    price: 9.0
  },
  {
    slug: 'petiscos-aneis-cebola',
    name: 'Anéis de cebola',
    category: 'Aperitivos/Petiscos',
    description: 'Porção de anéis de cebola empanado.',
    options: [{ quantity: 200, price: 18 }],
    unity: 'g',
    images: ['/aneis3.jpg', '/aneis1.jpg', '/aneis3.jpg']
  },
  {
    slug: 'petiscos-aipim-bacon',
    name: 'Aipim com Bacon',
    category: 'Aperitivos/Petiscos',
    description: 'Delicioso Aipim frito com bacon, acompanha creme de queijo.',
    options: [
      { quantity: 300, price: 24 },
      { quantity: 600, price: 39 }
    ],
    unity: 'g',
    images: ['/aipim_frito1.jpg']
  },
  {
    slug: 'petiscos-batata-frita',
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
    slug: 'petiscos-bolinho-costela',
    name: 'Bolinho de Costela',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de bolinho de costela com cozimento prolongado, acompanha maionese artesanal e geleia de pimenta.',
    options: [
      { quantity: 8, price: 49 },
      { quantity: 4, price: 29 }
    ],
    unity: 'un',
    images: ['/bolinho_costela_2.jpg', '/bolinho_costela_1.jpg']
  },
  {
    slug: 'petiscos-linguica-blumenau',
    name: 'Bolinho de Linguiça Blumenau',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de bolinho de linguiça blumenau produzida em nossa região, acompanha maionese artesanal.',
    options: [
      { quantity: 8, price: 46 },
      { quantity: 4, price: 26 }
    ],
    unity: 'un',
    images: ['/bolinho_costela_2.jpg', '/bolinho_costela_1.jpg']
  },
  {
    slug: 'petiscos-croquete-frango',
    name: 'Mini Croquetes de Frango com Catupiry',
    category: 'Aperitivos/Petiscos',
    description: 'Deliciosos croquetes de frango com catupity.',
    options: [{ quantity: 10, price: 18 }],
    unity: 'un'
  },
  {
    slug: 'petiscos-quibe',
    name: 'Mini Quibe com Catupiry',
    category: 'Aperitivos/Petiscos',
    description: 'Deliciosos quibes com catupity.',
    options: [{ quantity: 10, price: 20 }],
    unity: 'un'
  },
  {
    slug: 'petiscos-pasteis',
    name: 'Mini Pastéis',
    category: 'Aperitivos/Petiscos',
    description: 'Porção de mini pastéis de frango.',
    options: [
      {
        slug: 'petiscos-pasteis-frango',
        description: 'Frango',
        quantity: 10,
        price: 18
      },
      {
        slug: 'petiscos-pasteis-carne',
        description: 'Carne',
        quantity: 10,
        price: 18
      }
    ],
    unity: 'un'
  },

  {
    slug: 'petiscos-hackepeter',
    name: 'Hackepeter',
    category: 'Aperitivos/Petiscos',
    description:
      'Prato típico alemão feito à base de carne crua com condimentos. Acompanha pão.',
    options: [{ quantity: 250, price: 42 }],
    unity: 'g',
    images: ['/hackapeter1.jpg', '/hackapeter2.jpg']
  },
  {
    slug: 'petiscos-tiras-alcatra',
    name: 'Tiras de alcatra',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de tiras de alcatra, acompanha batata frita e maionese artesanal.',
    options: [{ quantity: 300, price: 40 }],
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
    slug: 'petiscos-mista-especial',
    name: 'Porção Mista Especial',
    category: 'Aperitivos/Petiscos',
    description:
      'Coxinha de Frango, Linguiça Blumenau, Alcatra, Batata frita , Farofa e Pão.',
    options: [{ quantity: 800, price: 79 }],
    unity: 'g',
    images: ['/mista3.jpg', '/mista2.jpg', '/mista1.jpg']
  },
  {
    slug: 'petiscos-panceta',
    name: 'Panceta de Porco',
    category: 'Aperitivos/Petiscos',
    description: 'Porção de Panceta de porco, acompanha maionese artesanal.',
    options: [
      { description: 'Individual', price: 24 },
      { description: 'Para compartilhar', price: 45 }
    ],
    images: ['/panceta1.jpg', '/panceta2.jpg']
  },
  {
    slug: 'hamburguer-cheeseburguer',
    name: 'Cheeseburguer',
    category: 'Hambúrguers',
    description:
      'Pão de Brioche com Hambúrguer Artesanal, Queijo Cheddar. Acompanha maionese artesanal.',
    options: [{ description: 'Porção de Batata frita', price: 8 }],
    price: 20,
    images: ['/cheeseburguer2.jpeg']
  },
  {
    slug: 'hamburguer-classico',
    name: 'Hambúrguer Clássico',
    category: 'Hambúrguers',
    description:
      'Pão de Brioche com Hambúrguer Artesanal, Queijo Mozzarella, Alface, Tomate e Cebola Roxa. Acompanha maionese artesanal.',
    options: [{ description: 'Porção de Batata frita', price: 8 }],
    price: 29,
    images: ['/lanche_artesanal1.jpg']
  },
  {
    slug: 'hamburguer-costela',
    name: 'Hambúrguer de Costela',
    category: 'Hambúrguers',
    description:
      'Pão Ciabatta com Costela Desfiada, Queijo Colonial, Rúcula e Tomate. Acompanha maionese artesanal.',
    options: [{ description: 'Porção de Batata frita', price: 8 }],
    price: 36,
    images: ['/lanche_costela1.jpg', '/lanche_costela2.jpg']
  },
  {
    slug: 'sanduiche-frango',
    name: 'Sanduíche de Frango',
    category: 'Sanduíches',
    description:
      'Pão de sanduíche com Frango grelhado, Queijo Mozzarella, Alface e tomate. Acompanha maionese artesanal.',
    options: [{ description: 'Porção de Batata frita', price: 8 }],
    price: 28
  },
  {
    slug: 'prato-alcatra',
    name: 'Alcatra Grelhada',
    category: 'Pratos Principais',
    description: 'Alcatra com arroz, batata frita e salada da casa.',
    price: 49,
    images: ['/alcatra1.jpg', '/alcatra2.jpg']
  },
  {
    slug: 'prato-file-frango',
    name: 'Filé de Frango Grelhado',
    category: 'Pratos Principais',
    description:
      'Filé de frango grelado com arroz, batata frita e salada da casa.',
    price: 42
  },
  {
    slug: 'prato-omelete',
    name: 'Omelete',
    category: 'Pratos Principais',
    description: 'Omelete com tomate e salada da casa.',
    options: [{ quantity: 350, price: 29 }],
    unity: 'g'
  },
  {
    slug: 'prato-salada',
    name: 'Salada Badosha',
    category: 'Pratos Principais',
    description:
      'Frango grelhado com mix de folhas, pepino, tomate, alface crespa roxa e verde, rúcula, morango e croutons. Acompanha maionese artesanal.',
    options: [{ quantity: 350, price: 28 }],
    unity: 'g'
  },
  {
    slug: 'sobremesa-brownie',
    name: 'Brownie by Badosha',
    category: 'Sobremesas',
    description: 'Brownie com sorvete de creme',
    price: 15
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
