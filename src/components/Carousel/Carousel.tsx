import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
SwiperCore.use([Navigation, Pagination, Autoplay])

import { SwiperSlide } from 'swiper/react'

// import Logo from '../../assets/logo_badosha.png'

import {
  Banner,
  BannerContainer,
  SwiperContainer,
  Overlay
} from '../../styles/components/Carousel'

interface ImageProps {
  url: string
  alt: string
  link: string
}
interface CarouselProps {
  images: ImageProps[]
}
const Carousel: React.FC<CarouselProps> = ({ images, ...props }) => {
  const [imagesList, setImagesList] = useState<ImageProps[]>([])

  useEffect(() => {
    setImagesList(images)
  }, [images])
  return (
    <SwiperContainer
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => {
        console.log(swiper)
      }}
      autoplay={{
        delay: 2500,
        stopOnLastSlide: true,
        disableOnInteraction: true
      }}
      speed={1000}
      navigation
      pagination
    >
      {imagesList.map((image, i) => (
        <SwiperSlide key={i + image.url} color="#fff">
          <BannerContainer>
            <Overlay></Overlay>
            <Image src={image.url} alt={image.alt} layout={'fill'}></Image>
          </BannerContainer>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  )
}

export default Carousel
