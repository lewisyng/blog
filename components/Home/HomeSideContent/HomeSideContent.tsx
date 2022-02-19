import MainSidebar from '../../shared/Sidebar/MainSidebar/MainSidebar'

export const HomeSideContent = ({ tags }: { tags: { value: string }[] }) => {
  return <MainSidebar tags={tags} />
}

export default HomeSideContent
