export const MainWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen flex-grow border-r px-[140px] pt-[56px] pb-[4px]">
      {children}
    </div>
  )
}
