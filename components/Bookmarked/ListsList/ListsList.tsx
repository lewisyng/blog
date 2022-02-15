import styles from "./ListsList.module.css";
import { ListsListItem } from '../ListsListItem/ListsListItem';

export const ListsList = () => {
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
        <ListsListItem className={styles.list} key={idx} list={list} />
      ))}
    </div>
  )
}

export default ListsList
