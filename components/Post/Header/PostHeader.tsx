import { parseISO } from "date-fns";

export const PostHeader = ({
  author,
  publishDate,
}: {
  author: string
  publishDate: string
}) => {
  const date = new Date(publishDate)
  date.toISOString().substring(0, 10)
  console.log("date", date);
  return (
    <div className="prose mx-auto">
      <div>{author}</div>
      <div>{publishDate}</div>
      {/* <div>{parseISO(new Date(publishDate).toString())}</div> */}
    </div>
  )
}

export default PostHeader
