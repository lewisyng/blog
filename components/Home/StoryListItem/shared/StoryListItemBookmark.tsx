import ToolTipWrapper from '../../../UI/ToolTip/ToolTipWrapper'
import Icon from '../../../UI/Icon/Icon'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import { BookmarkAddOutlined } from '@mui/icons-material'
import { FunctionComponent } from 'react'

type StoryListItemBookmarkProps = {
  onClick: (id: string) => void
  id: string
  isBookmarked: boolean
}

export const StoryListItemBookmark: FunctionComponent<
  StoryListItemBookmarkProps
> = ({ onClick, id, isBookmarked }) => {
  return (
    <ToolTipWrapper
      text="Add to bookmarks"
      className="ml-auto"
      onClick={() => onClick(id)}
    >
      <Icon icon={isBookmarked ? <BookmarkIcon /> : <BookmarkAddOutlined />} />
    </ToolTipWrapper>
  )
}
