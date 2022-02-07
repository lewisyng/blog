import styles from './SearchBar.module.css'
import SearchIcon from '@mui/icons-material/Search'

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <SearchIcon className={styles.searchBar__icon} />
      <input placeholder="Search" />
    </div>
  )
}
