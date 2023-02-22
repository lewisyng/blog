import { FunctionComponent, ReactNode } from 'react'
import styles from './PageWrapper.module.css'
import cn from 'classnames'

type PageWrapperProps = {
  children: ReactNode
}

const PageWrapper: FunctionComponent<PageWrapperProps> = ({ children }) => {
  return (
    <div className={cn(styles.page__wrapper, 'relative lg:left-[87px]')}>
      {children}
    </div>
  )
}

export default PageWrapper
