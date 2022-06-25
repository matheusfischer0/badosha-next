import styled from 'styled-components'

import { Swiper, SwiperSlide } from 'swiper/react'

export const BannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 20px;

  img {
    border-radius: 20px;
    width: 100%;
    object-fit: cover;
  }
`

export const SwiperSlideContainer = styled(SwiperSlide)``

export const SwiperContainer = styled(Swiper)`
  border-radius: 20px;
  width: 90%;
  max-height: 300px;

  .swiper-button-prev,
  .swiper-button-next {
    color: #ddd;
  }

  .swiper-pagination-bullet {
    background-color: #555;
  }

  .swiper-pagination-bullet-active {
    background-color: #ddd;
  }

  .swiper-slide {
    overflow: hidden;
    /* Magic */
    display: flex;
    align-items: center; /* vertical */
    justify-content: center; /* horizontal */
  }
`
