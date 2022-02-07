export interface Post {
  _id: string
  title: string
  slug: { _type: string; current: string }
  description: string
  tag: {
    value: string
  }
  author: {
    name: string
    image: string
  }
}
