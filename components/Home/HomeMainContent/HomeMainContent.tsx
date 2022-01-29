import Stories from '../Stories/Stories'
import { Heading } from '../../UI/Heading/Heading'

export const HomeMainContent = () => {
  return (
    <div className="home__content mt-[56px] w-[70%] border-r-2 pb-[4px] pr-[56px]">
      <Heading
        type="h5"
        className={['border-b-2', 'pb-[4px]', 'inline-block', 'cursor-pointer']}
      >
        EMPFOHLEN FÜR DICH
      </Heading>
      <Stories />
    </div>
  )
}

export default HomeMainContent
