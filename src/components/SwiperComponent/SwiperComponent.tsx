import { useState } from 'react'
// Import Swiper React components
import SwiperCore, { Navigation, Pagination, Thumbs } from 'swiper'
SwiperCore.use([Navigation, Pagination, Thumbs])

import { Swiper, SwiperSlide } from 'swiper/react'

import {
  Banner,
  SwiperContainer
} from '../../styles/components/SwiperComponent'

const SwiperComponent: React.FC = () => {
  const [swiperThumbs, setSwiperThumbs] = useState(null)

  const images = [
    {
      url: require('../../assets/sorvete.jpg'),
      title: 'Sorvete no prato preto decorado',
      subtitle: '',
      link: 'Sorvete no prato preto decorado',
      alt: 'Sorvete no prato preto decorado'
    },
    {
      url: require('../../assets/pimentas.jpg'),
      title: 'Sorvete no prato preto decorado',
      subtitle: '',
      link: 'Sorvete no prato preto decorado',
      alt: 'Sorvete no prato preto decorado'
    },
    {
      url: require('../../assets/kitchen-731351_1920.jpg'),
      title: 'Sorvete no prato preto decorado',
      subtitle: '',
      link: 'Sorvete no prato preto decorado',
      alt: 'Sorvete no prato preto decorado'
    }
  ]

  return (
    <SwiperContainer
      spaceBetween={0}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={swiper => {
        console.log(swiper)
      }}
      navigation
      pagination
    >
      {images.map((image, i) => (
        <SwiperSlide key={i + image.url} color="#fff">
          <Banner src={image.url} alt={image.alt}></Banner>
          <div className="caption-align">
            <div className="caption">
              <h1>Title</h1>
              <p>Description</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </SwiperContainer>
  )
}

export default SwiperComponent
