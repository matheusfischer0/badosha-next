import styled, { css } from 'styled-components'
import Link from 'next/link'

export const Container = styled.div`
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  overflow: hidden;
  padding-bottom: 100px;
  h2 {
    margin: 0px 10px;
  }
`

export const TopLogo = styled.div`
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  flex-direction: column;
  align-items: center;
  > a {
    display: flex;
    align-items: center;
    color: #999;
    text-decoration: none;
    > span {
      margin-right: 10px;
    }
  }
`

type ButtonProps = { inactive?: boolean }

export const Button = styled(Link)<ButtonProps>`
  position: relative;
  ${({ inactive = false }) => css`
    cursor: ${inactive ? 'not-allowed' : 'pointer'};
  `}
`
export const Unavailable = styled.div`
  position: absolute;
  background-color: #000;
  opacity: 0.5;
  width: 100%;
  height: 100%;
  cursor: not-allowed;
  border-radius: 12px;
`

type ItemProps = { inactive?: boolean }

export const Item = styled.div<ItemProps>`
  position: relative;
  border-bottom: 1px solid #ddd;
  padding: 10px 10px;
  border-radius: 12px;
  ${({ inactive = false }) => css`
    background-color: ${inactive ? '#ddd' : 'transparent'};
    opacity: ${inactive ? 0.5 : 1};
  `};
`

export const Categories = styled.div`
  display: flex;
  width: 100%;
  overflow: auto;
  margin: 0px 5px;

  /* width */
  &::-webkit-scrollbar {
    height: 6px;
  }
  /* Track */
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }
  /* Handle */
  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: #888;
  }
  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`
interface ProductProps {
  active: boolean
}
export const ProductView = styled.div<ProductProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${props => (props.active ? '#ddd' : '#eee')};
  padding: 10px 10px;
  border: 1px solid #eee;
  border-radius: 6px;
  margin: 10px 5px;
  span {
    min-width: 80px;
    text-align: center;
    white-space: nowrap;
  }
`

export const ActiveCategory = styled.h3`
  text-align: center;
  font-size: 22px;
  margin: 10px;
  border-bottom: 1px solid #ddd;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const MenuRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-right: 10px;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const MenuTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  margin-right: 10px;
`

export const MenuProduct = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
`

export const MenuProductDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const MenuDescription = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
  width: 80%;
`

export const MenuOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  span {
    font-size: 14px;
  }
`
export const MenuOptionDescription = styled.div`
  display: flex;
  flex: 1;
`
export const MenuQuantity = styled.div`
  display: flex;
  flex: 1;
`
export const MenuPrice = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-start;
  font-size: 14px;
`

export const MenuImage = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  justify-content: center;
  max-width: 180px;
  max-height: 180px;
  width: 20%;
  height: 80%;

  > div {
    width: 100%;
    position: unset !important;
  }

  img {
    object-fit: cover;
    width: 100% !important;
    position: relative !important;
    height: unset !important;
    border-radius: 12px;
  }
`
