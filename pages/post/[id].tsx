import { MainWrapper } from '../../components/MainWrapper/MainWrapper'
import PostWrapper from '../../components/Post/Wrapper/PostWrapper'
import { sanityClient } from '../../sanity'
import { Richtext } from '../../components/Post/Richtext/Richtext'

export const Post = ({ id, content }: { id: string; content: any }) => {
  if (content) {
    return (
      <MainWrapper>
        <PostWrapper
          author={content[0].author.name}
          publishDate={content[0].publishedAt}
        >
          <h1>
            <strong>{content[0].title}</strong>
          </h1>
          <Richtext content={content} />
        </PostWrapper>
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
  console.log('params', params)
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

  console.log('query', query)

  const content = await sanityClient.fetch(query)
  console.log('content', content)

  return {
    props: {
      id,
      content,
    },
  }
}

export default Post
