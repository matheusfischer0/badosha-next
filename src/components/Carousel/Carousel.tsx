import Link from 'next/link'
import React, { useEffect, useState } from 'react'
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper'
SwiperCore.use([Navigation, Pagination, Autoplay])

import { SwiperSlide } from 'swiper/react'

import { Banner, SwiperContainer } from '../../styles/components/Carousel'

interface ImageProps {
  url: string
  title: string
  subtitle: string
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
      speed={1500}
      navigation
      pagination
    >
      {imagesList.map((image, i) => (
        <>
          <SwiperSlide key={i + image.url} color="#fff">
            <Link href={image.link}>
              <Banner src={image.url} alt={image.alt}></Banner>
            </Link>
          </SwiperSlide>
          <span slot="container-end">Container End</span>
        </>
      ))}
    </SwiperContainer>
  )
}

export default Carousel
