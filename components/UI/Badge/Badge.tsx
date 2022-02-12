import styles from './Badge.module.css'

type Size = 'small' | 'medium' | 'large'

type As = 'button' | 'span'

export const Badge = ({
  children,
  size,
  as,
}: {
  children: React.ReactNode
  size?: Size
  as?: As
}) => {
  const Tag = as === 'button' ? 'button' : 'span'
  
  return (
    <Tag className={styles.badge} data-size={size}>
      {children}
    </Tag>
  )
}

export default Badge
