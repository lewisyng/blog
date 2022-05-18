import { Post } from '../../../types'
import Stories from '../../Home/Stories/Stories'
import { MainWrapper } from '../../shared/MainWrapper/MainWrapper'
import Heading from '../../UI/Heading/Heading'
import BookmarkedLists from '../BookmarkedLists/BookmarkedLists'

export const BookmarkedShell = ({ posts }: { posts: Post[] }) => {
  return (
    <MainWrapper>
      <Heading
        className={'my-[1rem] !text-[22px] md:my-[2rem] md:!text-[42px]'}
      >
        Your bookmarked stories
      </Heading>

      <Stories posts={posts} />

      {/* <BookmarkedLists /> */}
    </MainWrapper>
  )
}

export default BookmarkedShell
