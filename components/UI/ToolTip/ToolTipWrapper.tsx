import styles from './ToolTipWrapper.module.css'
import { useState } from 'react'
import cn from 'classnames'

export const ToolTipWrapper = ({
  children,
  text,
  direction = 'right',
  className,
}: {
  children: React.ReactNode
  text: string
  direction?: string
  className?: string
}) => {
  const [show, setShow] = useState(false)

  return (
    <div
      className={cn(className, styles.toolTip__wrapper)}
      onMouseOver={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div className={cn(styles.toolTip, show && styles.toolTip__show)}>
        {text}
      </div>
      {children}
    </div>
  )
}

export default ToolTipWrapper
