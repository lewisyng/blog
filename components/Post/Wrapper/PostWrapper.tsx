import PostHeader from '../Header/PostHeader'
import styles from './PostWrapper.module.css'
import cn from 'classnames'

export const PostWrapper = ({
  children,
  author,
  publishDate,
  className,
}: {
  children: React.ReactNode
  author: string
  publishDate: string
  className?: string
}) => {
  return (
    <div className={cn(className, styles.postWrapper, 'pt-[3.5rem]')}>
      <PostHeader author={author} publishDate={publishDate} />
      {children}
    </div>
  )
}

export default PostWrapper
