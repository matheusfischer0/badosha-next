import styled from 'styled-components'

import { Swiper } from 'swiper/react'

export const Banner = styled.img`
  width:100vw;
  min-width:1400px;
  min-height:700px;
`;

export const SwiperContainer = styled(Swiper)`
  height:700px;

.swiper-slide-active{
  justify-content:center;
}
.swiper-button-prev,
.swiper-button-next {
   color: white;
}

.swiper-pagination-bullets{
  padding-bottom:20;
}

.swiper-pagination-bullet{
  background-color: #555;
}
.swiper-pagination-bullet-active {
  background-color: #fff;
}
`;
