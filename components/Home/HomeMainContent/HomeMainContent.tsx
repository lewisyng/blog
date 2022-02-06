import Stories from '../Stories/Stories'
import { Heading } from '../../UI/Heading/Heading'
import LatestTopics from '../LatestTopics/LatestTopics'
import { Post } from '../../../types'

export const HomeMainContent = ({ posts }: { posts: [Post] }) => {
  return (
    <div className="home__content min-h-screen border-r-2 px-[140px] pt-[56px] pb-[4px]">
      {/* <LatestTopics /> */}
      <Heading
        type="p"
        className={[
          'border-b',
          'border-[#292929]',
          'pb-[16px]',
          'inline-block',
          'cursor-pointer',
          'font-medium',
        ]}
      >
        Recommended
      </Heading>
      <Stories posts={posts} />
    </div>
  )
}

export default HomeMainContent
