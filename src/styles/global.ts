import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    position:relative;
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }
`

export const Container = styled.div`
  width: 80vw;
  height: 100px;
  background-color: ${props => props.theme.colors.topbar};
  justify-content:space-between;
`;
