import { sanityClient } from '../../sanity'

export const fetchPostsByTag = async (tag) => {
  const query = `
    *[_type == "post" && tag -> value == "${tag}"]{
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

export default fetchPostsByTag
