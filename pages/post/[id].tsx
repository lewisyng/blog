import { MainWrapper } from '../../components/MainWrapper/MainWrapper'
import PostWrapper from '../../components/Post/Wrapper/PostWrapper'
import { sanityClient } from '../../sanity'
import { Richtext } from '../../components/Post/Richtext/Richtext'

export const Post = ({ content }: { content: any }) => {
  if (content) {
    return (
      <MainWrapper>
        <PostWrapper
          author={content[0].author.name}
          publishDate={content[0].publishedAt}
          className={'w-[70%] border-r-2 pb-10'}
        >
          <div className="prose mx-auto">
            <h1>{content[0].title}</h1>
          </div>
          <Richtext content={content} />
        </PostWrapper>
        <div className={'flex-grow'}>Searchbar</div>
      </MainWrapper>
    )
  } else {
    return null
  }
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: 'hello-world' } }],
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
        name
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
