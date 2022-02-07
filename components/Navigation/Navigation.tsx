import styles from './Navigation.module.css'
import BookmarksOutlinedIcon from '@mui/icons-material/BookmarksOutlined'
import Logo from '../UI/Logo/Logo'
import Link from 'next/link'

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link href="/" passHref>
        <div className={styles.navigation__logo}>
          <Logo />
        </div>
      </Link>

      {/* <div className={styles.navigation__actions}>
        <BookmarksOutlinedIcon />
      </div> */}
    </div>
  )
}

export default Navigation
