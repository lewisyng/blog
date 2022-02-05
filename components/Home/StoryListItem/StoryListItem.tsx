import Badge from '../../UI/Badge/Badge'
import Icon from '../../UI/Icon/Icon'
import Text from '../../UI/Text/Text'
import Heading from '../../UI/Heading/Heading'
import Image from '../../UI/Image/Image'
import styles from './StoryListItem.module.css'
import { Post } from '../../../types'
import Link from 'next/link'

export const StoryListItem = ({ post }: { post: Post }) => {
  const { title, _id } = post

  return (
    <div className={styles.storyList__item}>
      <div className="storyListItem__content">
        <div className="storyListItem__heading mb-2 flex items-center gap-3">
          <Icon src="/icons/read.png" height={20} width={20} />

          <Heading type="h6">June Redwood in Enlear Academy</Heading>
        </div>

        <Heading type="h2">{title}</Heading>

        <Text>Why You Should Choose CSS Libraries Instead of Vanilla CSS</Text>

        <div className="mt-2 flex items-center gap-3 !text-[13px]">
          <Text>Oct 14, 2021</Text>·<Text>5 min read</Text>·<Badge>CSS</Badge>
          <Icon src="/icons/read.png" />
          <Icon src="/icons/read.png" />
        </div>
      </div>
      <Link
        href={{
          pathname: `/post/[id]`,
          query: {id: _id },
        }}
      >
        <div>
          <Image src="/images/story.jpeg" height={134} width={200} />
        </div>
      </Link>
    </div>
  )
}

export default StoryListItem
