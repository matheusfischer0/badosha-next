import styled from 'styled-components'
import device from '../sizes';

export const Button = styled.div`
  display:flex;
  align-items:center;
  margin-right:20px;
  cursor: pointer;
  @media ${device.tablet} {
    display: none;
  }
`;
