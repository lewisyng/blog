import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation/Navigation'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className={"main__wrapper"}>
      <Navigation />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
