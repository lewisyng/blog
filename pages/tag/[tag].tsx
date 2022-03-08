import Stories from '../../components/Home/Stories/Stories'
import { MainWrapper } from '../../components/shared/MainWrapper/MainWrapper'
import { PageWrapper } from '../../components/PageWrapper/PageWrapper'
import fetchPostsByTag from '../../services/fetching/fetchPostsByTag'
import Heading from '../../components/UI/Heading/Heading'
import TaggedFilled from '../../components/Icons/tagged-filled.svg'
import MainSidebar from '../../components/shared/Sidebar/MainSidebar/MainSidebar'
import fetchTags from '../../services/fetching/fetchTags'

export const tag = ({
  tag,
  tags,
  posts,
}: {
  tag: string
  tags: { value: string }[]
  posts: any
}) => {
  return (
    <PageWrapper>
      <MainWrapper>
        <div className="flex items-center gap-3">
          <div className="flex items-center justify-center rounded-full bg-[#ededed] fill-[#292929] p-[0.25em]">
            <TaggedFilled />
          </div>
          <Heading variant="h1" className="text-[#292929]">
            {tag}
          </Heading>
        </div>

        {posts && posts.length > 0 ? (
          <Stories posts={posts} />
        ) : (
          <div className="">
            No stories were found for this tag. Please select another
          </div>
        )}
      </MainWrapper>
      <MainSidebar className="hidden lg:block" tags={tags} />
    </PageWrapper>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          tag: 'HTML',
        },
      },
    ],
    fallback: true,
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: { tag: string }
}) => {
  const { tag } = params

  const tags = await fetchTags()
  const posts = await fetchPostsByTag(tag)

  return {
    props: { tag, tags, posts },
  }
}

export default tag
