import styles from './BookmarkedList.module.css'
import cn from 'classnames'
import Heading from '../../UI/Heading/Heading'
import Button from '../../UI/Button/Button'

export const BookmarkedList = ({
  className,
  list,
}: {
  className?: string
  list: any
}) => {
  return (
    <div className={cn(className, styles.bookmarked__list)}>
      <div className="m-6 flex flex-col justify-between">
        <Heading variant="h2">{list.name}</Heading>

        <div>
          <Button
            className="hidden sm:inline"
            variant="secondary"
            text="View list"
          />

          <span className="text-[13px] text-[#757575]">39 stories</span>
        </div>
      </div>

      <div className="relative flex h-[105px] sm:h-full">
        <div className={styles.default} />
        <div className={styles.default} />
        <div className={styles.default} />
      </div>
    </div>
  )
}

export default BookmarkedList
