import { forwardRef } from 'react'

export const LinkWrapper = forwardRef(
  (
    {
      onClick,
      href,
      children,
    }: {
      onClick: any
      href: any
      children: React.ReactNode
    },
    ref
  ) => {
    return (
      <a className="cursor-pointer" onClick={onClick} href={href} ref={ref}>
        {children}
      </a>
    )
  }
)

export default LinkWrapper
