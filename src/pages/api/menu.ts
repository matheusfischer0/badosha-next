// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

const menu = [
  {
    name: "Batata Frita",
    category: "Aperitivos/Petiscos",
    description: "Batata frita com maionese verde",
    quantity: "250g",
    price: 19.0,
  },
  {
    name: "Torresmo",
    category: "Aperitivos/Petiscos",
    description: "Torresmo suíno",
    quantity: "100g",
    price: 18.0,
  },
  {
    name: "Costelinha Barbecue",
    category: "Aperitivos/Petiscos",
    description: "Costelinha suína com fritas",
    quantity: "250g",
    price: 29.9,
  },
  {
    name: "Isca de Tilápia",
    category: "Aperitivos/Petiscos",
    description: "Isca de tilápia frita",
    quantity: "250g",
    price: 25.9,
  },
  {
    name: "Hamburguer Clássico",
    category: "Lanches",
    description:
      "Pão, Hamburguer 160g, Mussarela, Tomate, Alface e Cebola caramelizada",
    price: 28.8,
  },
  {
    name: "Hamburguer Cheddar e Bacon",
    category: "Lanches",
    description: "Pão, Hamburguer 160g, Cheddar, Bacon e Cebola caramelizada",
    price: 33.0,
  },
  {
    name: "Pão com Bolinho",
    category: "Lanches",
    description: "3 unidades de Mini Pão com bolinho de carne",
    price: 19.9,
  },
  {
    name: "Dog Alemão",
    category: "Lanches",
    description: "Hot Dog com Salsicha Alemã de 25cm",
    price: 33.0,
  },
  {
    name: "Salada Mediterrânea",
    category: "Saladas",
    description: "Grão de bico, Cebola roxa, Pepino, Tomate cereja e Azeitona",
    price: 22.0,
  },
  {
    name: "Frango tropical",
    category: "Saladas",
    description:
      "Peito de frango, Alface americana, Rúcula, Abacaxi e Tomate cereja",
    price: 26.0,
  },
  {
    name: "Bife à Cavalo",
    category: "Pratos Principais",
    description: "Arroz, Feijão, Farofa, Ovo e Molho campanha",
    price: 39.0,
    extras: [
      {
        name: "Batata Frita",
        quantity: "180g",
        price: 8.0,
      },
      {
        name: "Arroz ou Feijão",
        price: 6.0,
      },
      {
        name: "Bacon",
        price: 3.0,
      },
      {
        name: "Ovo",
        price: 2.0,
      },
    ],
  },
  {
    name: "Frango ao Molho Mostarda",
    category: "Pratos Principais",
    description: "Arroz, Legumes assados e Farofa",
    price: 35.0,
    extras: [
      {
        name: "Batata Frita",
        quantity: "180g",
        price: 8.0,
      },
      {
        name: "Arroz ou Feijão",
        price: 6.0,
      },
      {
        name: "Bacon",
        price: 3.0,
      },
      {
        name: "Ovo",
        price: 2.0,
      },
    ],
  },
  {
    name: "Osvaldo Aranha",
    category: "Pratos Principais",
    description: "Bife Osvaldo Aranha, Arroz, Batata frita e Farofa",
    price: 37.0,
    extras: [
      {
        name: "Batata Frita",
        quantity: "180g",
        price: 8.0,
      },
      {
        name: "Arroz ou Feijão",
        price: 6.0,
      },
      {
        name: "Bacon",
        price: 3.0,
      },
      {
        name: "Ovo",
        price: 2.0,
      },
    ],
  },
  {
    name: "Canja de Galinha",
    category: "Pratos Principais",
    description: "Sopa de frango com legumes",
    price: 26.5,
    extras: [
      {
        name: "Batata Frita",
        quantity: "180g",
        price: 8.0,
      },
      {
        name: "Arroz ou Feijão",
        price: 6.0,
      },
      {
        name: "Bacon",
        price: 3.0,
      },
      {
        name: "Ovo",
        price: 2.0,
      },
    ],
  },
  {
    name: "Strogonoff de Carne",
    category: "Pratos Principais",
    description: "Arroz, Batata palha e Farofa",
    price: 33.0,
    extras: [
      {
        name: "Batata Frita",
        quantity: "180g",
        price: 8.0,
      },
      {
        name: "Arroz ou Feijão",
        price: 6.0,
      },
      {
        name: "Bacon",
        price: 3.0,
      },
      {
        name: "Ovo",
        price: 2.0,
      },
    ],
  },
  {
    name: "Waffle de Brigadeiro com Morango",
    category: "Sobremesas",
    description: "Waffle de Brigadeiro com Morango",
    price: 15.99,
  },
  {
    name: "Petit Gateau",
    category: "Sobremesas",
    description: "Bolinho de chocolate com recheio derretido",
    price: 12.99,
  },
  {
    name: "Água com ou sem gás",
    category: "Bebidas",
    price: 4.0,
  },
  {
    name: "Refrigerante",
    category: "Bebidas",
    price: 5.0,
  },
  {
    name: "Suco | Soda Italiana",
    category: "Bebidas",
    description: "Verificar disponibilidade",
    price: 9.0,
  },
  {
    name: "Café Pequeno",
    category: "Bebidas",
    price: 2.5,
  },
  {
    name: "Café Grande",
    category: "Bebidas",
    price: 4.5,
  },
  {
    name: "Cappuccino",
    category: "Bebidas",
    price: 4.5,
  },
];

type Extra = {
  name: string;
  quantity?: string;
  price: number;
};

type Item = {
  name: string;
  category: string;
  description?: string;
  quantity?: string;
  price: number;
  extras?: Extra[];
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Item[]>
) {
  res.status(200).json(menu);
}
