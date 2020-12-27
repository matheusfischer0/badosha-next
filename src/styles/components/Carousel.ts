import styled from 'styled-components'

import { Swiper , SwiperSlide} from 'swiper/react'

export const Banner = styled.img`
  width:100vw;
  min-width:1400px;
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

