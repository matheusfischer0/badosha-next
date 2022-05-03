import React, { useEffect, useState } from 'react'
import { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { NextShield } from 'next-shield'

import { useRouter } from 'next/router'

import { AuthProvider } from '../hooks/useAuth'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from '../lib/firebase'

// Import Swiper styles
import 'swiper/swiper.scss'
import 'swiper/components/effect-fade/effect-fade.scss'
import 'swiper/components/navigation/navigation.min.css'
import 'swiper/components/pagination/pagination.min.css'

import theme from '../styles/theme'
import GlobalStyle from '../styles/global'

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [isAuth, setIsAuth] = useState(false)

  useEffect(() => {
    setLoading(true)
    const unsubscribe = onAuthStateChanged(auth, user => {
      if (user) {
        setIsAuth(true)
      } else {
        setIsAuth(false)
      }
    })
    setLoading(false)

    return () => unsubscribe()
  }, [])

  return (
    <AuthProvider>
      <ThemeProvider theme={theme}>
        <NextShield
          isAuth={isAuth}
          isLoading={loading}
          router={router}
          privateRoutes={['/dashboard']}
          publicRoutes={['/', '/login', '/cardapio']}
          accessRoute="/dashboard"
          loginRoute="/"
          LoadingComponent={<p>Loading...</p>}
        >
          <Component {...pageProps} />
        </NextShield>
        <GlobalStyle />
      </ThemeProvider>
    </AuthProvider>
  )
}

export default MyApp
