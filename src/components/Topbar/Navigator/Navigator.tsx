import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  MenuItem,
  Item,
  Button,
  UnderlineItem
} from '../../../styles/components/Navigator'

const Navigator: React.FC = () => {
  const { asPath } = useRouter()

  const routes = [
    { path: '/', label: 'Inicio' },
    { path: '/#quem_somos', label: 'Quem somos' },
    { path: '/cardapio', label: 'Cardápio' },
    { path: '/#contato', label: 'Contato' }
  ]

  return (
    <>
      {routes.map((route, i) => (
        <MenuItem key={i} active={asPath === route.path}>
          <Button href={route.path}>
            <Item active={asPath === route.path}>
              <span>{route.label}</span>
              <UnderlineItem active={asPath === route.path} />
            </Item>
          </Button>
        </MenuItem>
      ))}
    </>
  )
}

export default Navigator
