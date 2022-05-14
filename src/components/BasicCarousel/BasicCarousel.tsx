import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
SwiperCore.use([Navigation, Pagination, Autoplay])

import { SwiperSlide } from 'swiper/react'

// import Logo from '../../assets/logo_badosha.png'

import {
  BannerContainer,
  SwiperContainer
} from '../../styles/components/BasicCarousel'

interface ImageProps {
  url: string
  alt: string
  link: string
}
interface CarouselProps {
  images: string[]
}
const BasicCarousel: React.FC<CarouselProps> = ({ images, ...props }) => {
  const [imagesList, setImagesList] = useState<string[]>([])

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
        delay: 2500
      }}
      speed={1000}
      loop={true}
      pagination={{
        clickable: true
      }}
      navigation={true}
    >
      {imagesList.map((image, i) => (
        <SwiperSlide key={image} color="#fff">
          <BannerContainer>
            <Image src={image} alt={image} layout={'fill'} quality={50}></Image>
          </BannerContainer>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  )
}

export default BasicCarousel
