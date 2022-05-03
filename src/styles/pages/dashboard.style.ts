import styled from 'styled-components'

export const Container = styled.div``

export const Header = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`
export const Logo = styled.div`
  width: 180px;
`
export const Menu = styled.div`
  display: flex;
  align-items: center;
`
export const Item = styled.div`
  padding-left: 20px;
  font-size: ${({ theme }) => theme.font_sizes.medium_small};
  color: ${({ theme }) => theme.colors.dark_grey};
`
export const LogoutContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  flex: 1;
`

export const Logout = styled.button`
  padding: 10px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.dark_grey};
  border: none;
  font-size: ${({ theme }) => theme.font_sizes.medium_small};
`
