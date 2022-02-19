import styles from './PageWrapper.module.css'
import cn from 'classnames'

export const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(styles.main__wrapper, 'relative left-[87px]')}>
      {children}
    </div>
  )
}

export default PageWrapper