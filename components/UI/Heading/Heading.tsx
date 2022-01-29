import cn from 'classnames'
import styles from './Heading.module.css'

export const Heading = ({
  type = 'h1',
  variant,
  className = [],
  children,
}: {
  type: string
  variant?: string
  className?: string[]
  children: React.ReactNode
}) => {
  return (
    <span className={cn(styles.heading, ...className)} data-type={type}>
      {children}
    </span>
  )
}

export default Heading
