import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  overflow: hidden;
  z-index: -1;
`;

interface BannerProps {
  backgroundUrl:string;

}

export const Banner = styled.div<BannerProps>`
  display:flex;
  position:absolute;
  flex-basis:1;
  height: 80vh;
  left:-100vw;
  background: url(${props => props.backgroundUrl}) no-repeat center center;
  background-size:cover;
`;
