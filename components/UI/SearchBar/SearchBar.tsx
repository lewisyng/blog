import styles from './SearchBar.module.css'
import { Search } from '../../Icons'
import Icon from '../Icon/Icon'
import cn from 'classnames'

export const SearchBar = ({ className }: { className?: string }) => {
  return (
    <div className={cn(className, styles.searchBar)}>
      <Icon icon={<Search />} className="ml-[8px] mr-[7px]" />
      <input placeholder="Search" />
    </div>
  )
}
