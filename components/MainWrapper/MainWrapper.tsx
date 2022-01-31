import styles from './MainWrapper.module.css'
import cn from 'classnames'

export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={cn(styles.main__wrapper, 'relative left-[87px]')}>
      {children}
    </div>
  )
}
