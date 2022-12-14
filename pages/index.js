import Container from '../components/container'
import MoreStories from '../components/more-stories'
import ArticlePanel from '../components/ArticlePanel'
import Hero from '../components/Hero'
import Layout from '../components/layout'
import { getAllPostsForHome } from '../lib/api'
import Head from 'next/head'
import { CMS_NAME } from '../lib/constants'

export default function Index({ allPosts, preview }) {
  const morePosts = allPosts.slice(1)
  return (
    <Container>
      <Hero />
      {morePosts.length > 0 && <ArticlePanel posts={morePosts} />}
    </Container>
  )
}

export async function getStaticProps({ preview = false }) {
  const allPosts = await getAllPostsForHome(preview)
  return {
    props: { allPosts, preview },
    revalidate: 1,
  }
}
