import styles from './Button.module.css'

export const Button = ({
  text,
  variant,
  handleClick,
}: {
  text: string
  variant: 'primary' | 'secondary' | 'tertiary'
  handleClick?: () => void
}) => {
  return (
    <button
      className={styles.button}
      data-variant={variant}
      onClick={handleClick}
    >
      {text}
    </button>
  )
}

export default Button
