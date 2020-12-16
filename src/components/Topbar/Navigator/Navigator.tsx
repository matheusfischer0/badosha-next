import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'

import {
  Menu,
  MenuItem,
  Item,
  UnderlineItem
} from '../../../styles/components/Navigator'

const Topbar: React.FC = () => {
  const { asPath } = useRouter()

  const routes = [
    { path: '/', label: 'Inicio' },
    { path: '/quem_somos', label: 'Quem somos' },
    { path: '/orcamento', label: 'Cardápio' },
    { path: '/contato', label: 'Contato' },
  ]

  return (
    <Menu>
      {routes.map(route => (
        <MenuItem>
          <Link href={route.path}>
            <Item active={asPath === route.path}>{route.label}</Item>
          </Link>
          <UnderlineItem active={asPath === route.path} />
        </MenuItem>
      ))}
    </Menu>
  )
}

export default Topbar
