import { motion } from 'framer-motion'
import styled from 'styled-components'
import device from '../sizes'

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  overflow: hidden;
  background-color: ${props => props.theme.colors.whiter};
  @media ${device.tablet} {
    align-items: center;
    flex-direction: row;
  }
`

export const TopLogo = styled.div`
  cursor: pointer;
  padding: 10px 0px;
  margin: 10px 20px;
`

export const Menu = styled(motion.ul)`
  flex-direction: column;
  width: 100vw;
  height: auto;

  @media ${device.tablet} {
    display: flex;
    position: relative;
    right: auto;
    top: auto;
    width: auto;
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    margin-right: 10px;
  }
`

export const MenuMobile = styled.div`
  display: flex;
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: space-between;
`

export const NavigatorIcon = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  cursor: pointer;
  @media ${device.tablet} {
    display: none;
  }
`
