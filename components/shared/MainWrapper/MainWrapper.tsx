export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex-grow lg:border-r px-[1.5rem] lg:px-[70px] xl:px-[140px] py-[56px] lg:pb-[4px]">
      {children}
    </div>
  )
}
