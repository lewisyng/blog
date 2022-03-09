import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navigation from '../components/Navigation/Navigation'
import Head from 'next/head'
import GeneralWrapper from '../components/shared/GeneralWrapper/GeneralWrapper'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Blog - Home</title>
        <link rel="icon" href="/Images/LogoIcon.png" />
      </Head>

      <GeneralWrapper>
        <Navigation />
        <Component {...pageProps} />
      </GeneralWrapper>

    </div>
  )
}

export default MyApp
