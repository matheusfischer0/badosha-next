import styled from 'styled-components'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import device from '../sizes'

export const BannerContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  align-items: center;
  > div {
    padding: 10px;
    img {
      border-radius: 20px;
      object-fit: cover;
    }
  }
`

export const SwiperSlideContainer = styled(SwiperSlide)``

export const SwiperContainer = styled(Swiper)`
  border-radius: 20px;
  width: 90%;

  height: 400px;

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
