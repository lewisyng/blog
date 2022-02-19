import BookmarkedMain from '../components/Bookmarked/BookmarkedMain/BookmarkedMain'
import { MainWrapper } from '../components/MainWrapper/MainWrapper'
import SidebarWrapper from '../components/shared/SidbarWrapper'

export const bookmarked = () => {
  return (
    <MainWrapper>
      <BookmarkedMain />
      <SidebarWrapper>Sidebar</SidebarWrapper>
    </MainWrapper>
  )
}

export default bookmarked
