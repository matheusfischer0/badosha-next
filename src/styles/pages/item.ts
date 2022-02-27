import styled from 'styled-components'
import Link from 'next/link'

export const MenuRow = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
  margin-right: 10px;
`

export const MenuContainer = styled.div`
  position: relative;
  display: flex;
  flex: 1;
  flex-direction: row;
  margin: 0px 10px;
  padding-bottom: 10px;
  padding-top: 20px;

  border-bottom: 1px solid #ddd;
`

export const MenuTitle = styled.span`
  display: flex;
  align-items: center;
  font-size: 18px;
  font-weight: 600;
  margin-right: 10px;
`

export const MenuItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 6px;
`

export const MenuItemDescription = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

export const MenuDescription = styled.div`
  font-size: 12px;
  font-weight: 400;
  margin-top: 10px;
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

export const Button = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  right: 0;
  padding: 15px;
  background-color: #f6c101;
  border-top-left-radius: 20px;
`
