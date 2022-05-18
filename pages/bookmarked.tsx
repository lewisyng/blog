import BookmarkedShell from '../components/Bookmarked/BookmarkedShell/BookmarkedShell'
import PageWrapper from '../components/PageWrapper/PageWrapper'
import MainSidebar from '../components/shared/Sidebar/MainSidebar/MainSidebar'
import fetchPosts from '../services/fetching/fetchPosts'
import fetchTags from '../services/fetching/fetchTags'
import { Post } from '../types'
import { useState, useEffect, useCallback } from 'react'

export const Bookmarked = ({
  tags,
  posts,
}: {
  tags: { value: string }[]
  posts: Post[]
}) => {
  const [filteredPostsByTags, setFilteredPostsByTags] = useState<Post[]>([])

  // filter posts for ones that have been bookmarked
  useEffect(() => {
    const bookmarks = JSON.parse(localStorage.getItem('bookmarks') || '[]')

    const filtered = posts.filter((post) => bookmarks.includes(post._id))
    setFilteredPostsByTags(filtered)
  }, [posts])

  return (
    <PageWrapper>
      <BookmarkedShell posts={filteredPostsByTags} />

      <MainSidebar className="hidden lg:block" tags={tags} />
    </PageWrapper>
  )
}

export const getServerSideProps = async () => {
  const tags = await fetchTags()
  const posts = await fetchPosts()

  return {
    props: {
      tags,
      posts,
    },
  }
}

export default Bookmarked
