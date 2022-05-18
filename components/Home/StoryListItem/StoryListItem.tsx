import Badge from '../../UI/Badge/Badge'
import Icon from '../../UI/Icon/Icon'
import Text from '../../UI/Text/Text'
import Heading from '../../UI/Heading/Heading'
import CustomImage from '../../UI/Image/CustomImage'
import styles from './StoryListItem.module.css'
import { Post } from '../../../types'
import Link from 'next/link'
import { urlFor } from '../../../sanity'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import BookmarkAddOutlined from '../../Icons/bookmarkAdd-outlined.svg'
import ToolTipWrapper from '../../UI/ToolTip/ToolTipWrapper'
import Image from 'next/image'
import cn from 'classnames'

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
            ·
            <Text className={'ml-1 text-[14px] text-[#757575]'}>
              {post.publishedAt.split('T')[0]}
            </Text>
          </>
        )}
      </div>

      <div className="flex justify-between">
        <div className="storyListItem__content flex-[1_1_auto] flex-grow">
          <Link
            href={{
              pathname: `/post/[id]`,
              query: { id: _id },
            }}
            passHref
          >
            <div>
              <Heading
                variant="h2"
                className="inline-block cursor-pointer pb-[8px]"
              >
                {title}
              </Heading>
            </div>
          </Link>

          <Link
            href={{
              pathname: `/post/[id]`,
              query: { id: _id },
            }}
            passHref
          >
            <div className={'hidden md:block'}>
              <Text className="cursor-pointer">{post.description}</Text>
            </div>
          </Link>

          <div className="items-between flex gap-3 py-[1rem] pr-10 !text-[13px] md:py-[2rem]">
            {post.tag && <Badge>{post.tag.value}</Badge>}

            <ToolTipWrapper
              text="Add to bookmarks"
              className="ml-auto"
              onClick={() => handleBookmark(_id)}
            >
              {isBookmarked ? (
                <Icon icon={<BookmarkIcon />} />
              ) : (
                <Icon icon={<BookmarkAddOutlined />} />
              )}
            </ToolTipWrapper>
          </div>
        </div>

        <div className="ml-2 flex">
          <Link
            href={{
              pathname: `/post/[id]`,
              query: { id: _id },
            }}
            passHref
          >
            <div
              className={cn(
                'relative',
                'h-[60px]',
                'w-[60px]',
                'md:h-[112px]',
                'md:w-[112px]'
              )}
            >
              <Image
                src="/static/img/story.jpeg"
                alt="image"
                objectFit="cover"
                layout="fill"
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default StoryListItem
