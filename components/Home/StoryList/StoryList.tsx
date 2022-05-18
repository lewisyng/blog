import { useEffect, useState } from 'react'
import { Post } from '../../../types'
import StoryListItem from '../StoryListItem/StoryListItem'

export const StoryList = ({ posts }: { posts: Post[] }) => {
  const [bookmarks, setBookmarks] = useState<string[]>([])

  useEffect(() => {
    setBookmarks(JSON.parse(localStorage.getItem('bookmarks') || '[]'))
  }, [])

  const handleBookmark = (_id: string) => {
    if (bookmarks.includes(_id)) {
      const newBookmarks = bookmarks.filter((id: string) => id !== _id)
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
      setBookmarks(newBookmarks)
    } else {
      const newBookmarks = [...bookmarks, _id]
      localStorage.setItem('bookmarks', JSON.stringify(newBookmarks))
      setBookmarks([...bookmarks, _id])
    }
  }
  return (
    <div className="mt-[2rem]">
      {posts &&
        posts.map((post: Post) => (
          <StoryListItem
            key={post._id}
            post={post}
            isBookmarked={bookmarks.includes(post._id)}
            handleBookmark={handleBookmark}
          />
        ))}
    </div>
  )
}

export default StoryList
