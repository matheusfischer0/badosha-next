import styled, { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  body {
    position:relative;
    background: ${props => props.theme.colors.white};
    color: ${props => props.theme.colors.black};
    font: 400 16px Roboto, sans-serif;
  }

  button, a {
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    color: ${props => props.theme.colors.black};
    cursor: pointer;
  }

 input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

`
