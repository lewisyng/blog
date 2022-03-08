import Stories from '../Stories/Stories'
import { Heading } from '../../UI/Heading/Heading'
import LatestTopics from '../LatestTopics/LatestTopics'
import { Post } from '../../../types'

export const HomeMainContent = ({ posts }: { posts: [Post] }) => {
  return (
    <div className="min-h-screen flex-grow p-[50px_20px_30px] lg:border-r lg:px-[140px] lg:pt-[56px]">
      {/* <LatestTopics /> */}
      <div className="hidden border-b lg:block">
        <Heading
          variant="p"
          className={`inline-block cursor-pointer border-b border-[#292929] pb-[16px] font-medium`}
        >
          Recommended
        </Heading>
      </div>
      <Stories posts={posts} />
    </div>
  )
}

export default HomeMainContent
