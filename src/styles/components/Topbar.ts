import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100px;
  background-color: ${props => props.theme.colors.topbar};
  display: flex;
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

export const TopLogo = styled.img`
  width:8rem;
`;
