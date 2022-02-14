import { Post } from '../../../types'
import StoryListItem from '../StoryListItem/StoryListItem'

export const StoryList = ({
  posts,
  selectedTopics,
}: {
  posts: [Post]
  selectedTopics: string[]
}) => {
  return (
    <div className="storyList mt-[2rem]">
      {posts.map((post: Post) => {
        if (
          selectedTopics.length === 0 ||
          selectedTopics.includes(post.tag.value)
        ) {
          return <StoryListItem key={post._id} post={post} />
        }
      })}
    </div>
  )
}

export default StoryList
