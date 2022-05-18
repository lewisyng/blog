import HomeMainContent from '../components/Home/HomeMainContent/HomeMainContent'
import PageWrapper from '../components/PageWrapper/PageWrapper'
import HomeSideContent from '../components/Home/HomeSideContent/HomeSideContent'
import { Post } from '../types'
import fetchPosts from '../services/fetching/fetchPosts'
import fetchTags from '../services/fetching/fetchTags'

export default function Home({
  posts,
  tags,
}: {
  posts: [Post]
  tags: { value: string }[]
}) {
  return (
    <PageWrapper>
      <HomeMainContent posts={posts} />
      
      <HomeSideContent className="hidden lg:block" tags={tags} />
    </PageWrapper>
  )
}

export const getServerSideProps = async () => {
  const posts = await fetchPosts()
  const tags = await fetchTags()

  return {
    props: { posts, tags },
  }
}
