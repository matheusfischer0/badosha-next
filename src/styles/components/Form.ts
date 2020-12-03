import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  background-color: ${props => props.theme.colors.topbar};
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }


`
