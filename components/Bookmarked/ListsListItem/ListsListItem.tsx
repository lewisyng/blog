import styles from './ListsListItem.module.css'
import cn from 'classnames'
import Heading from '../../UI/Heading/Heading'

export const ListsListItem = ({
  className,
  list,
}: {
  className?: string
  list: any
}) => {
  return (
    <div className={cn(className, styles.listsListItem)}>
      <div className="flex flex-col justify-between m-[1.5rem]">
        <Heading type="h2">{list.name}</Heading>
        <div>
          <span>View list</span>
          <span>39 stories</span>
        </div>
      </div>
      <div className="relative">
          <div className={styles.default}/>
          <div className={styles.default}/>
          <div className={styles.default}/>
      </div>

    </div>
  )
}

export default ListsListItem
