import Badge from '../../../UI/Badge/Badge'
import { FunctionComponent } from 'react'

type StoryListItemTagsProps = {
  tag: string
}

export const StoryListItemTags: FunctionComponent<StoryListItemTagsProps> = ({
  tag,
}) => {
  return <Badge>{tag}</Badge>
}
