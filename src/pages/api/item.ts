// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

const content = [
  {
    slug: 'pilsen-schorstein',
    name: 'Pilsen Schorstein',
    category: 'Chopp',
    options: [
      { slug: 'pilsen-schorstein-500', quantity: 500, price: 15 },
      { slug: 'pilsen-schorstein-300', quantity: 300, price: 12 }
    ],
    unity: 'ml'
  },
  {
    slug: 'ipa-schorstein',
    name: 'Indian Pale Ale (IPA) Schorstein',
    category: 'Chopp',
    options: [
      { slug: 'ipa-schorstein-500', quantity: 500, price: 18 },
      { slug: 'ipa-schorstein-300', quantity: 300, price: 14 }
    ],
    unity: 'ml'
  },
  {
    slug: 'pilsen-blumenau',
    name: 'Pilsen Cervejaria Blumenau',
    category: 'Chopp',
    options: [
      { slug: 'pilsen-blumenau-500', quantity: 500, price: 15 },
      { slug: 'pilsen-blumenau-300', quantity: 300, price: 12 }
    ],
    unity: 'ml'
  },
  {
    slug: 'frida-blumenau',
    name: 'Blond Ale Frida Cervejaria Blumenau',
    category: 'Chopp',
    options: [
      {
        slug: 'frida-blumenau-500',
        quantity: 500,
        price: 16
      },
      {
        slug: 'frida-blumenau-300',
        quantity: 300,
        price: 12
      }
    ],
    unity: 'ml'
  },
  {
    slug: 'chope-vinho',
    name: 'Chope de Vinho',
    category: 'Chopp',
    options: [
      {
        slug: 'chope-vinho-500',
        quantity: 500,
        price: 17
      },
      {
        slug: 'chope-vinho-300',
        quantity: 300,
        price: 13
      }
    ],
    unity: 'ml'
  },
  {
    slug: 'capivara-blumenau',
    name: 'Capirava Little IPA',
    category: 'Cervejas',
    options: [
      {
        slug: 'capivara-blumenau-500',
        quantity: 500,
        price: 28
      }
    ],
    unity: 'ml'
  },
  {
    slug: 'ipe-amarelo-blumenau',
    name: 'Ipê Amarelo Hop Lager',
    category: 'Cervejas',
    options: [
      {
        slug: 'ipe-amarelo-blumenau-500',
        quantity: 500,
        price: 22
      }
    ],
    unity: 'ml'
  },
  {
    slug: 'frida-garrafa-blumenau',
    name: 'Frida Blond Ale',
    category: 'Cervejas',
    options: [
      {
        slug: 'frida-garrafa-blumenau-500',
        quantity: 500,
        price: 20
      }
    ],
    unity: 'ml'
  },
  {
    slug: 'vila-weiss-blumenau',
    name: 'Vila Weissbier',
    category: 'Cervejas',
    options: [
      {
        slug: 'vila-weiss-blumenau-500',
        quantity: 500,
        price: 22
      }
    ],
    unity: 'ml'
  },
  {
    slug: 'heineken-long',
    name: 'Heineken',
    category: 'Cervejas',
    options: [
      {
        slug: 'heineken-long-330',
        quantity: 330,
        price: 12
      }
    ],
    unity: 'ml',
    images: ['/heineken1.jpg']
  },
  {
    slug: 'budweiser-long',
    name: 'Budweiser',
    category: 'Cervejas',
    options: [
      {
        slug: 'budweiser-long-330',
        quantity: 330,
        price: 10
      }
    ],
    unity: 'ml'
  },
  {
    slug: 'stella-long',
    name: 'Stella Artois',
    category: 'Cervejas',
    options: [
      {
        slug: 'stella-long-330',
        quantity: 330,
        price: 10
      }
    ],
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
    options: [
      {
        slug: 'petiscos-aneis-cebola-200',
        quantity: 200,
        price: 18
      }
    ],
    unity: 'g',
    images: ['/aneis3.jpg', '/aneis1.jpg', '/aneis2.jpg']
  },
  {
    slug: 'petiscos-aipim-bacon',
    name: 'Aipim com Bacon',
    category: 'Aperitivos/Petiscos',
    description: 'Delicioso Aipim frito com bacon, acompanha creme de queijo.',
    options: [
      {
        slug: 'petiscos-aipim-bacon-300',
        quantity: 300,
        price: 24
      },
      {
        slug: 'petiscos-aipim-bacon-600',
        quantity: 600,
        price: 39
      }
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
      {
        slug: 'petiscos-batata-frita-300',
        quantity: 300,
        price: 19
      },
      {
        slug: 'petiscos-batata-frita-600',
        quantity: 600,
        price: 35
      }
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
      {
        slug: 'petiscos-bolinho-costela-8',
        quantity: 8,
        price: 49
      },
      {
        slug: 'petiscos-bolinho-costela-4',
        quantity: 4,
        price: 29
      }
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
      {
        slug: 'petiscos-linguica-blumenau-8',
        quantity: 8,
        price: 46
      },
      {
        slug: 'petiscos-linguica-blumenau-4',
        quantity: 4,
        price: 26
      }
    ],
    unity: 'un',
    images: ['/bolinho_costela_2.jpg', '/bolinho_costela_1.jpg']
  },
  {
    slug: 'petiscos-croquete-frango',
    name: 'Mini Croquetes de Frango com Catupiry',
    category: 'Aperitivos/Petiscos',
    description: 'Deliciosos croquetes de frango com catupity.',
    options: [
      {
        slug: 'petiscos-croquete-frango-10',
        quantity: 10,
        price: 18
      }
    ],
    unity: 'un'
  },
  {
    slug: 'petiscos-quibe',
    name: 'Mini Quibe com Catupiry',
    category: 'Aperitivos/Petiscos',
    description: 'Deliciosos quibes com catupity.',
    options: [
      {
        slug: 'petiscos-quibe-10',
        quantity: 10,
        price: 20
      }
    ],
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
    options: [
      {
        slug: 'petiscos-hackepeter-250',
        quantity: 250,
        price: 42
      }
    ],
    unity: 'g',
    images: ['/hackapeter1.jpg', '/hackapeter2.jpg']
  },
  {
    slug: 'petiscos-tiras-alcatra',
    name: 'Tiras de alcatra',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de tiras de alcatra, acompanha batata frita e maionese artesanal.',
    options: [
      {
        slug: 'petiscos-tiras-alcatra-300',
        quantity: 300,
        price: 40
      }
    ],
    unity: 'g'
  },
  {
    slug: 'petiscos-linguica',
    name: 'Linguiça Blumenau',
    category: 'Aperitivos/Petiscos',
    description:
      'Porção de linguiça blumenau, acompanha batata frita e maionese artesanal',
    options: [
      {
        slug: 'petiscos-linguica-300',
        quantity: 300,
        price: 49
      }
    ],
    unity: 'g'
  },
  {
    slug: 'petiscos-mista-especial',
    name: 'Porção Mista Especial',
    category: 'Aperitivos/Petiscos',
    description:
      'Coxinha de Frango, Linguiça Blumenau, Alcatra, Batata frita , Farofa e Pão.',
    options: [
      {
        slug: 'petiscos-mista-especial-800',
        quantity: 800,
        price: 79
      }
    ],
    unity: 'g',
    images: ['/mista3.jpg', '/mista2.jpg', '/mista1.jpg']
  },
  {
    slug: 'petiscos-panceta',
    name: 'Panceta de Porco',
    category: 'Aperitivos/Petiscos',
    description: 'Porção de Panceta de porco, acompanha maionese artesanal.',
    options: [
      {
        slug: 'petiscos-panceta-ind',
        description: 'Individual',
        price: 24
      },
      {
        slug: 'petiscos-panceta-comp',
        description: 'Para compartilhar',
        price: 45
      }
    ],
    images: ['/panceta1.jpg', '/panceta2.jpg']
  },
  {
    slug: 'hamburguer-cheeseburguer',
    name: 'Cheeseburguer',
    category: 'Hambúrguers',
    description:
      'Pão de Brioche com Hambúrguer Artesanal, Queijo Cheddar. Acompanha maionese artesanal.',
    price: 20,
    images: ['/cheeseburguer2.jpeg']
  },
  {
    slug: 'hamburguer-classico',
    name: 'Hambúrguer Clássico',
    category: 'Hambúrguers',
    description:
      'Pão de Brioche com Hambúrguer Artesanal, Queijo Mozzarella, Alface, Tomate e Cebola Roxa. Acompanha maionese artesanal.',
    price: 29,
    images: ['/lanche_artesanal1.jpg']
  },
  {
    slug: 'hamburguer-costela',
    name: 'Hambúrguer de Costela',
    category: 'Hambúrguers',
    description:
      'Pão Ciabatta com Costela Desfiada, Queijo Colonial, Rúcula e Tomate. Acompanha maionese artesanal.',
    price: 36,
    images: ['/lanche_costela1.jpg', '/lanche_costela2.jpg']
  },
  {
    slug: 'sanduiche-frango',
    name: 'Sanduíche de Frango',
    category: 'Hambúrguers',
    description:
      'Pão de sanduíche com Frango grelhado, Queijo Mozzarella, Alface e tomate. Acompanha maionese artesanal.',
    price: 28
  },
  {
    slug: 'hamburguers-adicionais',
    name: 'Adicionais',
    category: 'Hambúrguers',
    options: [
      {
        slug: 'hamburguers-add-batata',
        description: 'Batata frita',
        price: 8
      },
      { slug: 'hamburguers-add-bacon', description: 'Bacon', price: 6 },
      { slug: 'hamburguers-add-ovo', description: 'Ovo', price: 3 }
    ]
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
    options: [
      {
        slug: 'prato-omelete-350',
        quantity: 350,
        price: 29
      }
    ],
    unity: 'g'
  },
  {
    slug: 'prato-salada',
    name: 'Salada Badosha',
    category: 'Pratos Principais',
    description:
      'Frango grelhado com mix de folhas, pepino, tomate, alface crespa roxa e verde, rúcula, morango e croutons. Acompanha maionese artesanal.',
    options: [
      {
        slug: 'prato-salada-350',
        quantity: 350,
        price: 28
      }
    ],
    unity: 'g'
  },
  {
    slug: 'prato-adicionais',
    name: 'Adicionais',
    category: 'Pratos Principais',
    options: [
      { slug: 'prato-add-feijao', description: 'Feijão', price: 6 },
      { slug: 'prato-add-arroz', description: 'Arroz', price: 4 },
      { slug: 'prato-add-batata', description: 'Batata frita', price: 8 },
      { slug: 'prato-add-bacon', description: 'Bacon', price: 6 },
      { slug: 'prato-add-ovo', description: 'Ovo', price: 3 }
    ]
  },
  {
    slug: 'sobremesa-brownie',
    name: 'Brownie by Badosha',
    category: 'Sobremesas',
    description: 'Brownie com sorvete de creme',
    price: 15
  }
]

type Options = {
  slug: string
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
  res: NextApiResponse<Item>
) {
  const { slug } = req.query
  const item = content.find(item => item.slug === slug)
  if (item) {
    res.status(200).json(item)
  } else return []
}
