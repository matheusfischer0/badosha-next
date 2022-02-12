import styled from 'styled-components'
import Image from 'next/image'

import { Swiper, SwiperSlide } from 'swiper/react'
import device from '../sizes'

export const BannerContainer = styled.div`
  position: relative;
  height: 100%;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  > div {
    img {
      object-fit: cover;
    }
  }
`

export const Banner = styled(Image)`
  height: 100%;
  @media ${device.mobileL} {
    object-fit: cover;
  }
  @media ${device.tablet} {
    height: unset;
  }
  @media ${device.laptopL} {
    height: unset;
    width: 100%;
  }
`

export const Overlay = styled.div`
  position: absolute;
  flex: 1;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  background-color: #000 !important;
`

export const Logo = styled.div`
  position: absolute;
  bottom: 50px;
  width: 40%;
  min-width: 300px;
  height: 20%;
  opacity: 1;
  background-color: transparent !important;
  > div {
    border-radius: 20px;
    img {
      object-fit: contain;
      filter: invert();
    }
  }
`

export const TextContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-left: -50%;
  }

  h2 {
    text-align: center;
    font-size: 24px;
  }
`

export const SwiperSlideContainer = styled(SwiperSlide)``

export const SwiperContainer = styled(Swiper)`
  height: 400px;

  @media ${device.mobileL} {
    height: 600px;
  }
  @media ${device.tablet} {
    height: 800px;
  }

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
