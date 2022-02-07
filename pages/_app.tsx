import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation/Navigation'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Blog - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navigation />
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
