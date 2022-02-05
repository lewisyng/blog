export const PostHeader = ({
  author,
  publishDate,
}: {
  author: string
  publishDate: string
}) => {
  return (
    <div>
      <h1>{author}</h1>
      <h2>{publishDate}</h2>
    </div>
  )
}

export default PostHeader
