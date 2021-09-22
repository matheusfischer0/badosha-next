import styled from 'styled-components'
import device from '../sizes'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  overflow: hidden;
`

export const TopLogo = styled.div`
  display: flex;
  align-items: flex-end;
  cursor: pointer;
  padding: 10px 0px;
  margin: 10px 20px;
  h2 {
    margin-left: 20px;
  }
`

export const Categories = styled.div`
  display: flex;
  width: 100vw;
  overflow: auto;
  &::-webkit-scrollbar {
    display: none;
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
    text-align: center;
    white-space: nowrap;
  }
`

export const ActiveCategory = styled.h3`
  margin: 10px;
`

export const List = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
`

export const MenuItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0px;
  border-radius: 6px;
  margin: 10px;
  span {
    text-align: center;
    white-space: nowrap;
  }
`
