import cn from 'classnames'

export const SidebarWrapper = ({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) => {
  return (
    <div className={cn(className, 'mx-[30px] my-[40px] flex w-[25%] flex-col')}>
      {children}
    </div>
  )
}

export default SidebarWrapper
