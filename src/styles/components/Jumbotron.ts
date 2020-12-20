import styled from 'styled-components'

export const Container = styled.div`
  display:flex;
  position:'relative';
  flex-direction: row;
  justify-content:space-between;
  background-color: ${props => props.theme.colors.topbar};
`;

interface BannerProps {
  backgroundUrl:string;

}

export const Banner = styled.image<BannerProps>`
  display:flex;
  background-image:${props=>props.backgroundUrl};
  background-repeat:no-repeat;
`;
