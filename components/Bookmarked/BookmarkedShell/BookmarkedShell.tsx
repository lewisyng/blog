import { MainWrapper } from '../../shared/MainWrapper/MainWrapper'
import Heading from '../../UI/Heading/Heading'
import BookmarkedLists from '../BookmarkedLists/BookmarkedLists'

export const BookmarkedShell = () => {
  return (
    <MainWrapper>
      <Heading className={"!text-[22px] md:!text-[42px] my-[1rem] md:my-[2rem]"}>Your lists</Heading>
      {/* todo create component. It is also used on homepage */}
      <BookmarkedLists />
    </MainWrapper>
  )
}

export default BookmarkedShell
