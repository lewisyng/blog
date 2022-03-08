import { PageWrapper } from '../../components/PageWrapper/PageWrapper'
import PostWrapper from '../../components/Post/Wrapper/PostWrapper'
import { sanityClient } from '../../sanity'
import { Richtext } from '../../components/Post/Richtext/Richtext'
import MainSidebar from '../../components/shared/Sidebar/MainSidebar/MainSidebar'
import { MainWrapper } from '../../components/shared/MainWrapper/MainWrapper'

export const Post = ({ content }: { content: any }) => {
  if (content) {
    return (
      <PageWrapper>
        <MainWrapper>
          <PostWrapper
            author={content[0].author.name}
            authorImage={content[0].author.image}
            publishDate={content[0].publishedAt}
            className={'flex-grow pb-10'}
            content={content}
          >
            <div className="prose mx-auto">
              <h1>{content[0].title}</h1>
            </div>
            {content[0].description && (
              <div className="prose mx-auto">{content[0].description}</div>
            )}
            <Richtext content={content} />
          </PostWrapper>
        </MainWrapper>
        <MainSidebar className="hidden lg:block" tags={null} />
      </PageWrapper>
    )
  } else {
    return null
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '687ac157-5a21-45ec-b887-66ad82faaef8' } }],
    fallback: true,
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: { id: string }
}) => {
  const { id } = params

  const query = `
    *[_id == "${id}"]{
      title,
      slug,
      description,
      publishedAt,
      body,
      author -> {
        name,
        image
      }
    }
  `

  const content = await sanityClient.fetch(query)

  return {
    props: {
      content,
    },
  }
}

export default Post
