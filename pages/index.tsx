import HomeMainContent from '../components/Home/HomeMainContent/HomeMainContent'
import { MainWrapper } from '../components/MainWrapper/MainWrapper'
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
    <MainWrapper>
      <HomeMainContent posts={posts} />
      <HomeSideContent tags={tags} />
    </MainWrapper>
  )
}

export const getServerSideProps = async () => {
  const posts = await fetchPosts()
  const tags = await fetchTags()

  return {
    props: { posts, tags },
  }
}
