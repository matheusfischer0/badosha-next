import styled from 'styled-components'
import device from '../sizes'

export const Container = styled.div`
  background-color: ${props => props.theme.colors.white};
  color: ${props => props.theme.colors.grey};
  display: flex;
  flex-direction: column;
  text-align: center;
  @media ${device.laptop} {
    justify-content: space-between;
    align-items: center;
    align-items: center;
    flex-direction: row-reverse;
    padding: 0px 20px;
  }
`

export const Phone = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px 16px;
  @media ${device.tablet} {
    flex-direction: row;
    align-items: center;
    padding: 16px 24px;
  }
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    p {
      margin: 0px 0px;
      @media ${device.tablet} {
        margin: 0px 10px;
      }
    }
    a {
      text-decoration: none;
    }
    span.topbar-phone {
      color: ${props => props.theme.colors.grey};
    }
  }
  h3 {
    text-align: start;
  }
`
export const Address = styled.div`
  display: flex;
  padding: 8px 16px;
  flex-direction: column;
  h3 {
    text-align: start;
  }
  address {
    text-align: start;
    margin: 0px 0px;
  }
  @media ${device.tablet} {
    align-items: center;
    padding: 16px 24px;
    flex-direction: row;

    address {
      margin: 0px 10px;
    }
  }
`
export const Signature = styled.div`
  display: flex;
  align-items: center;
  color: ${props => props.theme.colors.grey};
  padding: 16px 16px;
  p {
    text-align: start;
    font-size: ${props => props.theme.font_sizes.extra_small};
  }

  @media ${device.tablet} {
    padding: 16px 24px;
  }
`
export const AdressContainer = styled.div`
  flex-direction: column;
`
