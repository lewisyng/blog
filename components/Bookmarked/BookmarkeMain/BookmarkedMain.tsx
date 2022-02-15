import { MainWrapper } from '../../shared/MainWrapper/MainWrapper'
import Heading from '../../UI/Heading/Heading'

export const BookmarkedMain = () => {
  return (
    <MainWrapper>
      <Heading>Your lists</Heading>
      {/* todo create component. It is also used on homepage */}
      <div className="">
        <span>Saved</span>
        {/* todo create different possibilities to save posts (saved, highlights etc.) */}
        {/* <span>Highlights</span>  */}
      </div>
    </MainWrapper>
  )
}

export default BookmarkedMain
