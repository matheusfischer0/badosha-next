import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction: row;
  justify-content:space-between;
  background-color: ${props => props.theme.colors.whiter};
`;

export const TopLogo = styled.div`
  position:relative;
  cursor:pointer;
  padding: 10px 0px;
  margin: 10px 20px;
  `;
