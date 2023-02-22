import Text from '../../UI/Text/Text'
import Heading from '../../UI/Heading/Heading'
import styles from './StoryListItem.module.css'
import { Post } from '../../../types'
import { urlFor } from '../../../sanity'
import Image from 'next/image'
import { StoryListItemTitle } from './shared/StoryListItemTitle'
import { StoryListItemDescription } from './shared/StoryListItemDescription'
import { StoryListItemTags } from './shared/StoryListItemTags'
import { StoryListItemImage } from './shared/StoryListItemImage'
import { StoryListItemBookmark } from './shared/StoryListItemBookmark'

export const StoryListItem = ({
  post,
  handleBookmark,
  isBookmarked,
}: {
  post: Post
  handleBookmark: (id: string) => void
  isBookmarked: boolean
}) => {
  const { title, _id } = post

  return (
    <div className={styles.storyList__item}>
      <div className="storyListItem__heading mb-2 flex items-center">
        {/* <Icon src="/icons/read.png" height={20} width={20} /> */}
        <div className="mr-2 h-[20px] w-[20px] overflow-hidden rounded-full">
          <img src={urlFor(post.author.image).url()!} alt="" />
        </div>

        <Heading variant="h6" className="mr-1">
          {post.author.name}
        </Heading>

        {post.publishedAt && (
          <>
            {'·'}
            <Text className="ml-1 text-[14px] text-[#757575]">
              {post.publishedAt.split('T')[0]}
            </Text>
          </>
        )}
      </div>

      <div className="flex justify-between">
        <div className="storyListItem__content flex-[1_1_auto] flex-grow">
          <StoryListItemTitle id={_id}>{title}</StoryListItemTitle>

          <StoryListItemDescription id={_id}>
            <Text className="cursor-pointer">{post.description}</Text>
          </StoryListItemDescription>

          <div className="items-between flex gap-3 py-[1rem] pr-10 !text-[13px] md:py-[2rem]">
            <StoryListItemTags tag={post.tag.value} />

            <StoryListItemBookmark
              id={_id}
              onClick={handleBookmark}
              isBookmarked={isBookmarked}
            />
          </div>
        </div>

        <StoryListItemImage id={_id}>
          <Image src="/static/img/story.jpeg" alt="image" fill />
        </StoryListItemImage>
      </div>
    </div>
  )
}

export default StoryListItem
