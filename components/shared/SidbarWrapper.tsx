export const SidebarWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="mx-[30px] my-[40px] flex w-[25%] flex-col">{children}</div>
  )
}

export default SidebarWrapper
