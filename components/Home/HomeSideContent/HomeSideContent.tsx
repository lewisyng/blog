import Heading from '../../UI/Heading/Heading'
import { SearchBar } from '../../UI/SearchBar/SearchBar'
import Badge from '../../UI/Badge/Badge'
import styles from './HomeSideContent.module.css'
import SidebarWrapper from '../../shared/SidbarWrapper'

export const HomeSideContent = ({
  tags,
  handleBadgeClick,
}: {
  tags: { value: string }[]
  handleBadgeClick: (el: string) => void
}) => {
  return (
    <SidebarWrapper>
      <div className={styles.homeSideContent__searchBar}>
        <SearchBar />
      </div>
      <div className={styles.homeSideContent__recommendedTopics}>
        <Heading type="h5" className={'mb-[1rem] mt-[2.5rem]'}>
          Recommended topics
        </Heading>

        {tags && (
          <div className={styles.recommended__topics}>
            {tags.map((tag) => (
              <Badge
                handleBadgeClick={handleBadgeClick}
                key={tag.value}
                size="large"
                as="button"
              >
                {tag.value}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </SidebarWrapper>
  )
}

export default HomeSideContent
