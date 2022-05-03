import styled from 'styled-components'

export const Container = styled.div`
  height: 100px;
  background-color: ${props => props.theme.colors.white};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  h1 {
    font-size: ${props => props.theme.font_sizes.extra_large};
    color: ${props => props.theme.colors.grey};
    margin-top: 40px;
  }
`
