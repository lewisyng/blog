import { sanityClient } from '../../sanity'

export const fetchPosts = async () => {
  const query = `
    *[_type == "post"]{
      _id,
      title,
      slug,
      tag -> {
        value
      },
      publishedAt,
      description,
      author -> {
        name,
        image
      }
    }
  `

  const posts = await sanityClient.fetch(query)

  return posts
}

export default fetchPosts
