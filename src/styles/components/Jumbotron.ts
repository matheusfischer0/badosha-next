import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  flex-direction:row;
  width:100vw;
  overflow: hidden;
  z-index: -1;
`;

interface BannerProps {
  backgroundUrl:string;

}

export const Banner = styled.div<BannerProps>`
  display:flex;
  position:absolute;
  flex:1;
  height: 80vh;
  width: 100vw;
  background: url(${props => props.backgroundUrl}) no-repeat center center;
  background-size:cover;
`;
