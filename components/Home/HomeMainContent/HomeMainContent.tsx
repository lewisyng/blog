import Stories from '../Stories/Stories'
import { Heading } from '../../UI/Heading/Heading'
import LatestTopics from '../LatestTopics/LatestTopics'
import { Post } from '../../../types'

export const HomeMainContent = ({ posts, selectedTopics }: { posts: [Post], selectedTopics: string[] }) => {
  return (
    <div className="min-h-screen flex-grow border-r px-[140px] pt-[56px] pb-[4px]">
      {/* <LatestTopics /> */}
      <div className="border-b">
        <Heading
          type="p"
          className={`inline-block cursor-pointer border-b border-[#292929] pb-[16px] font-medium`}
        >
          Recommended
        </Heading>
      </div>
      <Stories posts={posts} selectedTopics={selectedTopics} />
    </div>
  )
}

export default HomeMainContent
