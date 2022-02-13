export interface Post {
  _id: string
  title: string
  slug: { _type: string; current: string }
  description: string
  tag: {
    value: string
  }
  publishedAt: Date
  author: {
    name: string
    image: string
  }
}
