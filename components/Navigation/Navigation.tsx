import styles from './Navigation.module.css'
import Logo from '../UI/Logo/Logo'
import Link from 'next/link'
import HomeIcon from '../Icons/home-filled.svg'
import BookmarkOutlined from '../Icons/bookmark-outlined.svg'
import cn from 'classnames'
import ToolTipWrapper from '../UI/ToolTip/ToolTipWrapper'

export const Navigation = () => {
  return (
    <>
      {/* Desktop Navigation */}
      <div className={cn(styles.navigation__desktop)}>
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
          
          <Link href="/bookmarked" passHref>
            <div>
              <ToolTipWrapper text="Bookmarked">
                <BookmarkOutlined />
              </ToolTipWrapper>
            </div>
          </Link>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={'w-[100vw] lg:hidden'}>
        <div
          className={cn(
            'fixed',
            'top-0',
            'left-[50%]',
            'z-10',
            'flex',
            'items-center',
            'h-[56px]',
            'w-full',
            'translate-x-[-50%]',
            'items-center',
            'justify-center',
            'bg-white',
            'shadow-[0_-2px_10px_rgba(0,0,0,0.15)]'
          )}
        >
          <Link href="/" passHref>
            <div
              className={cn(styles.navigation__item, styles.navigation__logo)}
            >
              <Logo />
            </div>
          </Link>
        </div>
        <div
          className={
            'fixed bottom-0 z-10 flex h-[56px] w-[100vw] items-center justify-around bg-white shadow-[0_2px_10px_rgba(0,0,0,0.15)]'
          }
        >
          <Link href="/" passHref>
            <div>
              <ToolTipWrapper text="Home">
                <HomeIcon />
              </ToolTipWrapper>
            </div>
          </Link>
          <Link href="/bookmarked" passHref>
            <div>
              <ToolTipWrapper text="Bookmarked">
                <BookmarkOutlined />
              </ToolTipWrapper>
            </div>
          </Link>
        </div>
      </div>
    </>
  )
}

export default Navigation
