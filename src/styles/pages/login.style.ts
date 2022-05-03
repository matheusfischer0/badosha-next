import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.light_grey};
`

export const LoginContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-width: 320px;

  border-radius: 10px;
  background-color: ${({ theme }) => theme.colors.white};

  padding: 20px;

  box-shadow: 5px 5px 16px ${({ theme }) => theme.colors.grey};
`
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`
export const Title = styled.span`
  color: ${({ theme }) => theme.colors.dark_grey};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ theme }) => theme.font_sizes.extra_small};
  padding-top: 10px;
`
export const Logo = styled.div`
  width: 60%;
  margin: 0 auto;
`
export const Form = styled.div`
  padding: 0px 20px;
`
export const Placeholder = styled.span`
  color: ${({ theme }) => theme.colors.dark_grey};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ theme }) => theme.font_sizes.extra_small};
  padding-top: 10px;
`

export const Input = styled.input`
  width: 100%;
  height: 36px;
  border: 1px solid ${({ theme }) => theme.colors.grey};
  border-radius: 5px;
  padding: 0px 10px;
  margin-top: 10px;
  background-color: ${({ theme }) => theme.colors.light_grey};
`
export const Submit = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 5px;
  /* border: 1px solid ${({ theme }) => theme.colors.grey}; */

  width: 100%;
  height: 36px;
  margin-top: 10px;

  color: ${({ theme }) => theme.colors.dark_grey};

  background-color: ${({ theme }) => theme.colors.gold};
  border: 0px;
  cursor: pointer;
`
