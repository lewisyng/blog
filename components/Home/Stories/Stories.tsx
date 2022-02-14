import { Post } from '../../../types'
import StoryList from '../StoryList/StoryList'

export const Stories = ({
  posts,
  selectedTopics,
}: {
  posts: [Post]
  selectedTopics: string[]
}) => {
  return <StoryList posts={posts} selectedTopics={selectedTopics} />
}

export default Stories
