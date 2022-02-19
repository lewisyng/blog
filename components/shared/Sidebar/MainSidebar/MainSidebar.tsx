import { SearchBar } from '../../../UI/SearchBar/SearchBar'
import styles from './MainSidebar.module.css'
import Recommended from '../Recommended/Recommended'
import SidebarWrapper from '../Wrapper/Wrapper'

export const MainSidebar = ({ tags }: { tags: { value: string }[] }) => {
  return (
    <SidebarWrapper>
      <SearchBar className={styles.mainSidebar__searchBar} />

      <Recommended tags={tags} />
    </SidebarWrapper>
  )
}

export default MainSidebar
