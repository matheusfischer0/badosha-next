import React from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { motion } from 'framer-motion'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/effect-fade/effect-fade.scss'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import Topbar from '../components/Topbar/Topbar'
import Footer from '../components/Footer/Footer'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <ThemeProvider theme={theme}>
      <Topbar></Topbar>
      <Component {...pageProps} />
      <Footer></Footer>
      <GlobalStyle />
    </ThemeProvider>
  )
}

export default MyApp
