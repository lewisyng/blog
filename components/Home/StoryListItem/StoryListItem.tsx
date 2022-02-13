import Badge from '../../UI/Badge/Badge'
import Icon from '../../UI/Icon/Icon'
import Text from '../../UI/Text/Text'
import Heading from '../../UI/Heading/Heading'
import CustomImage from '../../UI/Image/CustomImage'
import styles from './StoryListItem.module.css'
import { Post } from '../../../types'
import Link from 'next/link'
import { urlFor } from '../../../sanity'
import BookmarkAddOutlined from '../../Icons/bookmarkAdd-outlined.svg'

export const StoryListItem = ({ post }: { post: Post }) => {
  console.log('post', post)
  const { title, _id } = post

  return (
    <div className={styles.storyList__item}>
      <div className="storyListItem__content w-[100%]">
        <div className="storyListItem__heading mb-2 flex items-center">
          {/* <Icon src="/icons/read.png" height={20} width={20} /> */}
          <div className="mr-2 h-[20px] w-[20px] overflow-hidden rounded-full">
            <img src={urlFor(post.author.image).url()!} alt="" />
          </div>
          <Heading type="h6" className="mr-1">
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

        <Link
          href={{
            pathname: `/post/[id]`,
            query: { id: _id },
          }}
          passHref
        >
          <div>
            <Heading type="h2" className="inline-block cursor-pointer pb-[8px]">
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
          <div>
            <Text className="cursor-pointer">{post.description}</Text>
          </div>
        </Link>

        <div className="flex items-center gap-3 py-[2rem] !text-[13px]">
          {post.tag && (
            <>
              <Badge>{post.tag.value}</Badge>·
            </>
          )}
          <Icon className="ml-auto" icon={<BookmarkAddOutlined />} />
        </div>
      </div>
      <div className="ml-[60px] flex w-[112px] justify-end">
        <Link
          href={{
            pathname: `/post/[id]`,
            query: { id: _id },
          }}
          passHref
        >
          <div>
            <CustomImage
              src="/static/img/story.jpeg"
              className="cursor-pointer object-cover"
              alt="image"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default StoryListItem
