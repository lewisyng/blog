import { SearchBar } from '../../../UI/SearchBar/SearchBar'
import styles from './MainSidebar.module.css'
import Recommended from '../Recommended/Recommended'
import SidebarWrapper from '../Wrapper/Wrapper'

export const MainSidebar = ({
  tags,
  className,
}: {
  tags: { value: string }[]
  className?: string
}) => {
  return (
    <SidebarWrapper className={className}>
      <SearchBar className={styles.mainSidebar__searchBar} />

      <Recommended tags={tags} />
    </SidebarWrapper>
  )
}

export default MainSidebar
