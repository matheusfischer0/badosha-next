import React from 'react'
import { useRouter } from 'next/router'

import {
  MenuItem,
  Item,
  Button,
  ButtonLink,
  UnderlineItem
} from '../../../styles/components/Navigator'
import { useAuth } from '../../../hooks/useAuth'

const Navigator: React.FC = () => {
  const router = useRouter()
  const { user, logout } = useAuth()

  const routes = [
    { path: '/', label: 'Inicio' },
    { path: '/#quem_somos', label: 'Quem somos' },
    { path: '/cardapio', label: 'Cardápio' },
    { path: '/#contato', label: 'Contato' }
  ]

  const privateRoutes = [
    { path: '/dashboard/products', label: 'Produtos' },
    { path: '/dashboard/categories', label: 'Categorias' }
  ]

  function handleLogout() {
    logout()
    router.push('/')
  }

  return (
    <>
      {!user ? (
        routes.map((route, i) => (
          <MenuItem key={i} active={router.asPath === route.path}>
            <ButtonLink href={route.path}>
              <Item active={router.asPath === route.path}>
                <span>{route.label}</span>
                <UnderlineItem active={router.asPath === route.path} />
              </Item>
            </ButtonLink>
          </MenuItem>
        ))
      ) : (
        <>
          {privateRoutes.map((route, i) => (
            <MenuItem key={i} active={router.asPath === route.path}>
              <ButtonLink href={route.path}>
                <Item active={router.asPath === route.path}>
                  <span>{route.label}</span>
                  <UnderlineItem active={router.asPath === route.path} />
                </Item>
              </ButtonLink>
            </MenuItem>
          ))}
          <MenuItem active={false}>
            <Button onClick={handleLogout}>
              <Item active={false}>
                <span>Logout</span>
                <UnderlineItem active={false} />
              </Item>
            </Button>
          </MenuItem>
        </>
      )}
    </>
  )
}

export default Navigator
