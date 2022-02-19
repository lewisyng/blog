import Stories from '../../components/Home/Stories/Stories'
import { MainWrapper } from '../../components/shared/MainWrapper/MainWrapper'
import { PageWrapper } from '../../components/PageWrapper/PageWrapper'
import fetchPostsByTag from '../../services/fetching/fetchPostsByTag'
import SidebarWrapper from '../../components/shared/Sidebar/Wrapper/Wrapper'
import { SearchBar } from '../../components/UI/SearchBar/SearchBar'

export const tag = ({ posts }: { posts: any }) => {
  return (
    <PageWrapper>
      <MainWrapper>
        <Stories posts={posts} />
      </MainWrapper>
      <SidebarWrapper>
        <SearchBar />
      </SidebarWrapper>
    </PageWrapper>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          tag: 'HTML',
        },
      },
    ],
    fallback: true,
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: { tag: string }
}) => {
  const { tag } = params

  const posts = await fetchPostsByTag(tag)

  return {
    props: { posts },
  }
}

export default tag
