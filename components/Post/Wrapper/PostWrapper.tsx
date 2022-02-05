import PostHeader from '../Header/PostHeader'
import styles from './PostWrapper.module.css'
import cn from 'classnames'

export const PostWrapper = ({
  children,
  author,
  publishDate,
}: {
  children: React.ReactNode
  author: string
  publishDate: string
}) => {
  return (
    <div className={cn(styles.postWrapper, 'mt-[3.5rem]')}>
      <PostHeader author={author} publishDate={publishDate} />
      {children}
    </div>
  )
}

export default PostWrapper
