import { Post } from '../../../types'
import StoryListItem from '../StoryListItem/StoryListItem'

export const StoryList = ({ posts }: { posts: [Post] }) => {
  return (
    <div className="mt-[2rem]">
      {posts &&
        posts.map((post: Post) => <StoryListItem key={post._id} post={post} />)}
    </div>
  )
}

export default StoryList
