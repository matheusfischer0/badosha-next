import styled from 'styled-components'
import Link from 'next/link'
import device from '../sizes'

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  overflow: hidden;
`

export const TopLogo = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 5px;
  }
  h2 {
    margin: 0px 10px;
  }
`
export const Content = styled.div`
  margin: 20px 10px;
  h3 {
    margin-top: 20px;
  }
`

export const Button = styled(Link)`
  display: flex;
  flex: 1;
  justify-content: center;
  cursor: pointer;
`
