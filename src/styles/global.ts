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
    background: ${props => props.theme.colors.whiter};
    color: ${props => props.theme.colors.grey};
    font: 400 16px Roboto, sans-serif;
  }

`
