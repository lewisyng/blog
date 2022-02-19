import BookmarkedMain from '../components/Bookmarked/BookmarkedMain/BookmarkedMain'
import { MainWrapper } from '../components/MainWrapper/MainWrapper'
import MainSidebar from '../components/shared/Sidebar/MainSidebar/MainSidebar'
import fetchTags from '../services/fetching/fetchTags'

export const bookmarked = ({ tags }: { tags: { value: string }[] }) => {
  return (
    <MainWrapper>
      <BookmarkedMain />
      <MainSidebar tags={tags} />
    </MainWrapper>
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
