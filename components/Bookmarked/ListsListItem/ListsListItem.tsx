import styles from './ListsListItem.module.css'
import cn from 'classnames'
import Heading from '../../UI/Heading/Heading'
import Button from '../../UI/Button/Button'

export const ListsListItem = ({
  className,
  list,
}: {
  className?: string
  list: any
}) => {
  return (
    <div className={cn(className, styles.listsListItem)}>
      <div className="flex flex-col justify-between m-6">
        <Heading type="h2">{list.name}</Heading>
        <div>
          <Button variant='secondary' text="View list" />
          <span className="text-[13px] text-[#757575]">39 stories</span>
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
