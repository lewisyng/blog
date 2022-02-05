import Heading from '../../UI/Heading/Heading'
import { SearchBar } from '../../UI/SearchBar/SearchBar'
export const HomeSideContent = () => {
  return (
    <div className="flex flex-col p-[40px]">
      <SearchBar />
      <Heading type="h5">Recommended topics</Heading>
    </div>
  )
}

export default HomeSideContent
