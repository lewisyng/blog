import styles from './Navigation.module.css'
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined'
import Logo from '../UI/Logo/Logo'

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <a href="" className={styles.navigation__logo}>
        <Logo />
      </a>

      {/* <div className={styles.navigation__actions}>
        <BookmarksOutlinedIcon />
      </div> */}
    </div>
  )
}

export default Navigation
