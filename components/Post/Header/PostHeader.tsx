import { useEffect } from 'react'
import useCalculateWordCount from '../../../hooks/useCalculateWordCount'
import { urlFor } from '../../../sanity'
import styles from './PostHeader.module.css'
import useCalculateReadingTime from '../../../hooks/useCalculateReadingTime'

export const PostHeader = ({
  author,
  publishDate,
  content,
  authorImage,
}: {
  author: string
  publishDate: string
  content: any
  authorImage: string
}) => {
  const [wordCount] = useCalculateWordCount(content)
  const [readingTime] = useCalculateReadingTime(wordCount)

  return (
    <div className="mx-auto flex max-w-[65ch] items-center">
      <div className="mr-4 h-[48px] w-[48px] overflow-hidden rounded-full">
        <img src={urlFor(authorImage).url()!} alt="" />
      </div>
      <div className="prose">
        <div className={styles.postHeader__author}>{author}</div>
        <div className={styles.postHeader__data}>
          {publishDate && <div>{publishDate.split('T')[0]}</div>}
          {wordCount && (
            <div className={styles.postHeader__wordCount}>
              {wordCount} {wordCount === 1 ? 'word' : 'words'}
            </div>
          )}
          {readingTime && (
            <div className={styles.postHeader__wordCount}>
              {readingTime} min
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default PostHeader
