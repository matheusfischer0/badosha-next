import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  overflow: hidden;
  z-index: -1;
`;

export const TextContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:64px;
  color:#555;

  >h3{
    font-size: ${props=> props.theme.font_sizes.large};
    font-weight:500;
  }
  >p{
    margin-top:35px;
    text-align:justify;
  }
`;

export const ImageContainer = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  padding:64px 0px;
`;



