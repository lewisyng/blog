import Head from 'next/head'
import HomeMainContent from '../components/Home/HomeMainContent/HomeMainContent'
import { MainWrapper } from '../components/MainWrapper/MainWrapper'
import HomeSideContent from '../components/Home/HomeSideContent/HomeSideContent'
import HomeMainShell from '../components/Home/HomeMainShell/HomeMainShell'

export default function Home() {
  return (
    <MainWrapper>
      <Head>
        <title>Blog - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeMainShell>
        <HomeMainContent />
        <HomeSideContent />
      </HomeMainShell>
    </MainWrapper>
  )
}
