import React from 'react'
import Layout from 'layouts/Main'
import { getPosts } from 'api/posts'
// import styled from 'styled-components'

// import Post from 'components/Post'

const IndexPage = ({ posts }) =>
  <Layout>
    <div>
      Hi! I'm Xe (pronounced Ze)
    </div>
    {/* <ul>
      {posts.map(p => <Post key={p.title} post={p} />)}
    </ul> */}
  </Layout>

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default IndexPage
