export const Post = ({ slug }: { slug: string }) => {
  return (
    <div>
      <h1>HI</h1>
      <h2>{slug}</h2>
    </div>
  )
}

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { slug: 'hello-world' } }],
    fallback: true,
  }
}

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string }
}) => {
  const { slug } = params

  return {
    props: {
      slug,
    },
  }
}

export default Post
