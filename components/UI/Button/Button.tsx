import styles from './Button.module.css'
import cn from 'classnames'

export const Button = ({
  text,
  variant,
  handleClick,
  className,
}: {
  text: string
  variant: 'primary' | 'secondary' | 'tertiary'
  handleClick?: () => void
  className?: string
}) => {
  return (
    <button
      className={cn(className, styles.button)}
      data-variant={variant}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button
