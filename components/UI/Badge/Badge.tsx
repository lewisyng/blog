import styles from './Badge.module.css'

type Size = 'small' | 'medium' | 'large'

type As = 'button' | 'span'

export const Badge = ({
  children,
  size,
  as,
  handleBadgeClick,
}: {
  children: React.ReactNode
  size?: Size
  as?: As
  handleBadgeClick?: (el: string) => void
}) => {
  const Tag = as === 'button' ? 'button' : 'span'

  return (
    <Tag
      onClick={() => handleBadgeClick(children as string)}
      className={styles.badge}
      data-size={size}
    >
      {children}
    </Tag>
  )
}

export default Badge
