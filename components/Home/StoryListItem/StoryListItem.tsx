import Badge from '../../UI/Badge/Badge'
import Icon from '../../UI/Icon/Icon'
import Text from '../../UI/Text/Text'
import Heading from '../../UI/Heading/Heading'
import Image from '../../UI/Image/Image'
import styles from './StoryListItem.module.css'
import { Post } from '../../../types'
import Link from 'next/link'
import { urlFor } from '../../../sanity'
import BookmarkAddOutlinedIcon from '@mui/icons-material/BookmarkAddOutlined'

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
            June Redwood in Enlear Academy
          </Heading>
          ·
          <Text className={'ml-1 text-[14px] text-[#757575]'}>
            Oct 14, 2021
          </Text>
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
        >
          <div>
            <Text className="cursor-pointer">
              Why You Should Choose CSS Libraries Instead of Vanilla CSS
            </Text>
          </div>
        </Link>

        <div className="flex items-center gap-3 py-[2rem] !text-[13px]">
          {post.tag && (
            <>
              <Badge>{post.tag.value}</Badge>·
            </>
          )}
          <Text className="text-[#757575]">5 min read</Text>
          <Icon className="ml-auto" icon={<BookmarkAddOutlinedIcon />} />
        </div>
      </div>
      <div className="flex w-[172px] justify-end">
        <Link
          href={{
            pathname: `/post/[id]`,
            query: { id: _id },
          }}
        >
          <div>
            <Image
              src="/images/story.jpeg"
              className="cursor-pointer h-[112px] w-[112px] object-cover"
            />
          </div>
        </Link>
      </div>
    </div>
  )
}

export default StoryListItem
