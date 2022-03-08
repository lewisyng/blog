import cn from 'classnames'
import styles from './Heading.module.css'

export type HeadingVariant = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'

export const Heading = ({
  variant = 'h1',
  className,
  children,
}: {
  variant?: HeadingVariant
  className?: string
  children: React.ReactNode
}) => {
  return (
    <div className={cn(styles.heading, className)} data-variant={variant}>
      {children}
    </div>
  )
}

export default Heading
