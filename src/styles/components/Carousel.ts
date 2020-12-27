import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react'


export const BannerContainer = styled.div`
  position:relative;
  width:100vw;
  justify-content:center;
  align-items:center;
`;

export const Banner = styled.img`
  width:100vw;
  min-width:1400px;
`;

export const Overlay = styled.div`
  position:absolute;
  flex:1;
  width:100%;
  height:100%;
  opacity:0.4;
  background-color: #000 !important;
`;

export const TextContainer = styled.div`
  position:absolute;
  width:100%;
  height:100%;

  h2{
    color:#fff;
  }

`;

export const SwiperSlideContainer = styled(SwiperSlide)`

`;



export const SwiperContainer = styled(Swiper)`
  height:800px;

.swiper-button-prev,
.swiper-button-next {
   color: white;
}

.swiper-pagination-bullet{
  background-color: #555;
}

.swiper-pagination-bullet-active {
  background-color: #fff;
}

.swiper-slide{
  overflow: hidden;
  /* Magic */
  display: flex;
  align-items: center; /* vertical */
  justify-content: center; /* horizontal */
}
`;

