import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'

import Navigator from './Navigator/Navigator'

import {
  Container,
  TopLogo,
  Menu,
  MenuMobile,
  NavigatorIcon
} from '../../styles/components/Topbar'
import Logo from '../../assets/logo_badosha.png'

import { MenuToggle } from '../MenuToggle/MenuToggle'
import { motion, useCycle } from 'framer-motion'
import useWindowSize from '../../hooks/UseWindowSize'

const Topbar: React.FC = () => {
  const router = useRouter()
  const { height } = useWindowSize()

  const [isOpen, toggleOpen] = useCycle(false, true)

  const handleRedirectToHome = () => {
    router.push('/')
  }

  return (
    <Container>
      <MenuMobile>
        <TopLogo onClick={handleRedirectToHome}>
          <Image
            src={Logo}
            alt="Badosha logo"
            layout={'fixed'}
            width={100}
            height={100}
            quality={100}
          />
        </TopLogo>
        <NavigatorIcon>
          <motion.div
            initial={false}
            animate={isOpen ? 'open' : 'closed'}
            custom={height}
          >
            <MenuToggle toggle={() => toggleOpen()}></MenuToggle>
          </motion.div>
        </NavigatorIcon>
      </MenuMobile>

      <Menu
        initial={false}
        animate={
          isOpen
            ? { x: 0, y: 0, height: 'auto' }
            : { x: 0, y: `-100%`, height: '0px' }
        }
        transition={{ ease: 'easeInOut', duration: 0.3 }}
      >
        <Navigator />
      </Menu>
    </Container>
  )
}

export default Topbar
