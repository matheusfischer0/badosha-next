import styled from 'styled-components'
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
  flex: 1;
  justify-content: center;
  > div {
    display: block;
    width: 80%;
    margin: 10px;
  }
`

export const Button = styled(Link)`
  cursor: pointer;
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
interface ItemProps {
  active: boolean
}
export const Item = styled.div<ItemProps>`
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
  font-size: 22px;
  margin: 10px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const MenuRow = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`

export const MenuItemDescription = styled.div`
  flex: 1;
`

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: row;
  margin: 0px 10px;
  margin-bottom: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;
`

export const MenuTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
`

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 6px;
`

export const MenuDescription = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 15px;
  font-weight: 400;
  margin-top: 10px;
`

export const MenuOption = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  margin-left: 10px;
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
`

export const MenuImage = styled.div`
  display: flex;
  margin-top: 10px;
  margin-bottom: 10px;
  max-height: 180px;
  justify-content: center;

  > div {
    width: 100%;
    max-width: 320px;
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
