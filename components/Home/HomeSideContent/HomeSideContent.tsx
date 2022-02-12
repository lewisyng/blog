import Heading from '../../UI/Heading/Heading'
import { SearchBar } from '../../UI/SearchBar/SearchBar'
import Badge from '../../UI/Badge/Badge'
import styles from './HomeSideContent.module.css'

export const HomeSideContent = ({ tags }: { tags: { value: string }[] }) => {
  return (
    <div className="flex w-[32%] flex-col m-[30px]">
      <div className={styles.homeSideContent__searchBar}>
        <SearchBar />
      </div>
      <div className={styles.homeSideContent__recommendedTopics}>
        <Heading type="h5" className={"mb-[1rem] mt-[2.5rem]"}>Recommended topics</Heading>

        {tags && (
          <div className={styles.recommended__topics}>
            {tags.map((tag) => (
              <Badge key={tag.value} size="large" as="button">{tag.value}</Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default HomeSideContent
