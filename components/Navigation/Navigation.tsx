import styles from './Navigation.module.css'
import Logo from '../UI/Logo/Logo'
import Link from 'next/link'
import HomeIcon from '../Icons/home-filled.svg'
import BookmarkOutlined from '../Icons/bookmark-outlined.svg'
import cn from 'classnames'
import ToolTipWrapper from '../UI/ToolTip/ToolTipWrapper'

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
          <div>
            <ToolTipWrapper text="Home">
              <HomeIcon />
            </ToolTipWrapper>
          </div>
        </Link>
        <ToolTipWrapper text="Bookmarked">
          <BookmarkOutlined />
        </ToolTipWrapper>
      </div>
    </div>
  )
}

export default Navigation
