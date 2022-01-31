import Stories from '../Stories/Stories'
import { Heading } from '../../UI/Heading/Heading'
import LatestTopics from '../LatestTopics/LatestTopics';

export const HomeMainContent = () => {
  return (
    <div className="home__content mt-[56px] w-[70%] border-r-2 pb-[4px] px-[140px]">
      {/* <LatestTopics /> */}
      <Heading
        type="p"
        className={['border-b', 'border-[#292929]', 'pb-[16px]', 'inline-block', 'cursor-pointer', 'font-medium']}
      >
        Recommended
      </Heading>
      <Stories />
    </div>
  )
}

export default HomeMainContent
