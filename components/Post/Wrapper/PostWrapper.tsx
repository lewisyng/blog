import PostHeader from '../Header/PostHeader'
import styles from './PostWrapper.module.css'
import cn from 'classnames'

export const PostWrapper = ({
  children,
  author,
  authorImage,
  publishDate,
  className,
  content,
}: {
  children: React.ReactNode
  author: string
  authorImage: string
  publishDate: string
  className?: string
  content: any
}) => {
  console.log("authorImage", authorImage)
  return (
    <div className={cn(className, styles.postWrapper, 'pt-[3.5rem]')}>
      <PostHeader
        author={author}
        authorImage={authorImage}
        publishDate={publishDate}
        content={content}
      />
      {children}
    </div>
  )
}

export default PostWrapper
