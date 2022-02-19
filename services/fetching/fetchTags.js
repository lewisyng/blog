import {sanityClient} from '../../sanity'

export async function fetchTags() {
  const tagQuery = `
    *[_type == "tag"]{
      value
    }
  `

  const tags = await sanityClient.fetch(tagQuery)

  return tags
}

export default fetchTags