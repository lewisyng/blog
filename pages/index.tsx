import Head from 'next/head'
import HomeMainContent from '../components/Home/HomeMainContent/HomeMainContent'
import { MainWrapper } from '../components/MainWrapper/MainWrapper'
import HomeSideContent from '../components/Home/HomeSideContent/HomeSideContent'
import { sanityClient } from '../sanity.js'
import { Post } from '../types'
import { useState } from 'react'

export default function Home({
  posts,
  tags,
}: {
  posts: [Post]
  tags: { value: string }[]
}) {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  const handleBadgeClick = (badge: string) => {
    setSelectedTopics([...selectedTopics, badge])
  }

  return (
    <MainWrapper>
      <HomeMainContent posts={posts} selectedTopics={selectedTopics} />
      <HomeSideContent tags={tags} handleBadgeClick={handleBadgeClick} />
    </MainWrapper>
  )
}

export const getServerSideProps = async () => {
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

  const tagQuery = `
    *[_type == "tag"]{
      value
    }
  `

  const posts = await sanityClient.fetch(query)
  const tags = await sanityClient.fetch(tagQuery)

  console.log('object', posts)

  return {
    props: { posts, tags },
  }
}
