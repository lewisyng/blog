import styles from './Badge.module.css';

export const Badge = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.badge}>{children}</div>
}

export default Badge
