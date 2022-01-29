import styles from './Header.module.css'
import SearchIcon from '@mui/icons-material/Search'
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined';

export const Header = () => {
  return (
    <div className={styles.header__wrapper}>
      <header className={styles.header}>
        {/* Das ist der Header */}

        <div className={styles.header__logo}>
          <img src="/images/logo.png" alt="" />
        </div>

        <div className={styles.header__actions}>
          <SearchIcon />
          <BookmarksOutlinedIcon />
        </div>
      </header>
    </div>
  )
}

export default Header
