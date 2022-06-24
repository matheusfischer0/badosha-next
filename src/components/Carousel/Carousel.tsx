import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
SwiperCore.use([Navigation, Pagination, Autoplay])

import { SwiperSlide } from 'swiper/react'
import useWindowSize from '../../hooks/UseWindowSize'

// import Logo from '../../assets/logo_badosha.png'

import {
  Banner,
  BannerContainer,
  SwiperContainer,
  Overlay,
  Logo,
  LogoImage
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

  const windowWidth = useWindowSize()

  const isMobile = windowWidth.width <= 768

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
        delay: 4000,
        disableOnInteraction: true
      }}
      speed={1500}
      loop={true}
      pagination={{
        clickable: true
      }}
      navigation={!isMobile}
    >
      {imagesList.map((image, i) => (
        <SwiperSlide key={i + image.url} color="#fff">
          <BannerContainer>
            <Banner src={image.url} alt={image.alt} layout={'fill'} />
            <Overlay></Overlay>
            <Logo>
              <LogoImage
                src={'/logo_badosha-removebg-preview.png'}
                alt={'Logo Restaurante Badosha'}
                layout={'fill'}
              />
            </Logo>
          </BannerContainer>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  )
}

export default Carousel
