import MainSidebar from '../../shared/Sidebar/MainSidebar/MainSidebar'

export const HomeSideContent = ({
  tags,
  className,
}: {
  tags: { value: string }[]
  className?: string
}) => {
  return <MainSidebar className={className} tags={tags} />
}

export default HomeSideContent
