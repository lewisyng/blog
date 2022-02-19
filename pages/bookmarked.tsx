import BookmarkedMain from '../components/Bookmarked/BookmarkedMain/BookmarkedMain'
import PageWrapper from '../components/PageWrapper/PageWrapper'
import MainSidebar from '../components/shared/Sidebar/MainSidebar/MainSidebar'
import fetchTags from '../services/fetching/fetchTags'

export const bookmarked = ({ tags }: { tags: { value: string }[] }) => {
  return (
    <PageWrapper>
      <BookmarkedMain />
      <MainSidebar tags={tags} />
    </PageWrapper>
  )
}

export const getServerSideProps = async () => {
  const tags = await fetchTags()

  return {
    props: {
      tags,
    },
  }
}

export default bookmarked
