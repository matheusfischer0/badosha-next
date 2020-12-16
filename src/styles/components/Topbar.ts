import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  background-color: ${props => props.theme.colors.topbar};
`;

export const Menu = styled.div`
  display: flex;
  flex-direction: row;
  align-items:center;
  justify-content:space-between;
  a {
    font-size: 24px;
    padding:0px 20px;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
  }
`;

export const TopLogo = styled.div`
  position:relative;
  cursor:pointer;
  padding: 10px 0px;
`;
