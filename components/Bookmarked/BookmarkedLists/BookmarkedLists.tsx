import styles from './BookmarkedLists.module.css'
import BookmarkedList from '../BookmarkedList/BookmarkedList';

export const BookmarkedLists = () => {
  const lists = [
    {
      name: 'Reading List',
    },
    {
      name: 'Reading List',
    },
    {
      name: 'Reading List',
    },
    {
      name: 'Reading List',
    },
  ]

  return (
    <div className={styles.listsList}>
      {lists.map((list, idx) => (
        <BookmarkedList className={styles.list} key={idx} list={list} />
      ))}
    </div>
  )
}

export default BookmarkedLists
