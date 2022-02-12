import styles from './Navigation.module.css'
import Logo from '../UI/Logo/Logo'
import Link from 'next/link'
import HomeIcon from '../Icons/home-filled.svg'
import BookmarkOutlined from '../Icons/bookmark-outlined.svg'
import cn from 'classnames'

export const Navigation = () => {
  return (
    <div className={styles.navigation}>
      <Link href="/" passHref>
        <div className={cn(styles.navigation__item, styles.navigation__logo)}>
          <Logo />
        </div>
      </Link>
      <div className={cn(styles.navigation__item, styles.navigation__links)}>
        <Link href="/" passHref>
          <HomeIcon />
        </Link>
        <BookmarkOutlined />
      </div>
    </div>
  )
}

export default Navigation
