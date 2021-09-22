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
  cursor: pointer;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
  }
  h2{
    margin: 0px 10px;
  }
`

export const Categories = styled.div`
  display: flex;
  width: 100vw;
  overflow: auto;
  margin: 0px 5px;
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
    display: flex;
    align-items: center;
    text-align: center;
    white-space: nowrap;
  }
  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-right: 10px;
    span {
      text-align: left;
      white-space: normal;
    }
    span:first-child {
      font-size: 16px;
      font-weight: 600;
    }
    span:nth-child(2) {
      font-size: 14px;
      font-weight: 400;
      margin-top: 5px;
    }
  }
`
