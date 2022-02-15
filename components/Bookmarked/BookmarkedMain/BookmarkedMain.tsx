import styles from './BookmarkedMain.module.css'
import { MainWrapper } from '../../shared/MainWrapper/MainWrapper'
import Heading from '../../UI/Heading/Heading'
import ListsList from '../ListsList/ListsList'

export const BookmarkedMain = () => {
  return (
    <MainWrapper>
      <Heading>Your lists</Heading>
      {/* todo create component. It is also used on homepage */}
      <div className={styles.bookmarkedMain__header}>
        <span>Saved</span>
        {/* todo create different possibilities to save posts (saved, highlights etc.) */}
        {/* <span>Highlights</span>  */}
      </div>
      <ListsList />
    </MainWrapper>
  )
}

export default BookmarkedMain
