import React from 'react'

import { Menu, MenuItem } from '../../styles/components/Navigator'
import ActiveLink from '../ActiveLink/ActiveLink'

const Topbar: React.FC = () => {
  return (
    <Menu>
      <MenuItem>
        <ActiveLink activeClassName={{ color: '#f00' }} href="/" passHref>
          <span>Inicio</span>
        </ActiveLink>
      </MenuItem>
      <MenuItem>
        <ActiveLink
          activeClassName={{ color: '#f00' }}
          href="/quem_somos"
          passHref
        >
          <span>Quem somos</span>
        </ActiveLink>
      </MenuItem>
      <MenuItem>
        <ActiveLink
          activeClassName={{ color: '#f00' }}
          href="/contato"
          passHref
        >
          <span>Contato</span>
        </ActiveLink>
      </MenuItem>
    </Menu>
  )
}

export default Topbar
