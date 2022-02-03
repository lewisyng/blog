import Head from 'next/head'
import HomeMainContent from '../components/Home/HomeMainContent/HomeMainContent'
import { MainWrapper } from '../components/MainWrapper/MainWrapper'
import HomeSideContent from '../components/Home/HomeSideContent/HomeSideContent'
import HomeMainShell from '../components/Home/HomeMainShell/HomeMainShell'
import { sanityClient } from '../sanity.js'
import { Post } from '../types'

export default function Home({ posts }: { posts: [Post] }) {
  return (
    <MainWrapper>
      <Head>
        <title>Blog - Home</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HomeMainShell>
        <HomeMainContent posts={posts} />
        <HomeSideContent />
      </HomeMainShell>
      
    </MainWrapper>
  )
}

export const getServerSideProps = async () => {
  const query = `
    *[_type == "post"]{
      _id,
      title,
      slug,
      description,
      author -> {
        name
      }
    }
  `

  const posts = await sanityClient.fetch(query)

  console.log('object', posts)

  return {
    props: { posts },
  }
}
