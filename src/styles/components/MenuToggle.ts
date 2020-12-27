import styled from 'styled-components'
import device from '../sizes';

export const Button = styled.div`
  display:flex;
  align-items:center;
  cursor: pointer;
  @media ${device.tablet} {
    display: none;
  }
`;
