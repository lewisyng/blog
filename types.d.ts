export interface Post {
  _id: string
  title: string
  slug: { _type: string; current: string }
  description: string
  author: {
    name: string
  }
}
