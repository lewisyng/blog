import styles from './SearchBar.module.css'
import Search from '../../Icons/search.svg'
import Icon from '../Icon/Icon'

export const SearchBar = () => {
  return (
    <div className={styles.searchBar}>
      <Icon icon={<Search />} className="ml-[8px] mr-[7px]" />
      <input placeholder="Search" />
    </div>
  )
}
