import '../styles/globals.css'
import { ParallaxProvider } from 'react-scroll-parallax'

function MyApp({ Component, pageProps }) {
  return (
    <ParallaxProvider scrollAxis='vertical'>
      <Component {...pageProps} />
    </ParallaxProvider>
  )
}

export default MyApp
