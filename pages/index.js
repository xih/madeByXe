import React from 'react'
import Layout from 'layouts/Main'
import { getPosts } from 'api/posts'
import styled from 'styled-components'
import Card from 'components/Card'

// import Post from 'components/Post'

const Div = styled.div`
  font-family: didoni-urw, serif;
  font-style: normal;
  font-weight: 400;
  font-size: 3em;
  @media (max-width: 500px) {
    font-size: 1.5em;
  }
  margin-top: 1.5em;
`

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 3em;
  margin-bottom: 3em;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`

const ParagraphDiv = styled.div`
  font-family: brandon-grotesque, sans-serif;
  font-style: normal;
  font-weight: 100;
`

const IndexPage = ({ posts }) =>
  <Layout>
    <Div className='container'>
      Hi! I'm Xe (pronounced Ze)
    </Div>
    <ParagraphDiv className='container'>
      I’m a self taught designer who loves clothes and interiors. Previously I studied Engineering at UC Berkeley.
    </ParagraphDiv>
    <Div className='container'>
      Portfolio
    </Div>
    <CardsContainer className='container card-deck'>
      <Card url={'/static/streetstyle.jpg'} />
      <Card url={'/static/5v2.jpg'} />
      <Card url={'/static/forwalkingv2.jpg'} height='424px' />
    </CardsContainer>
    <CardsContainer className='container card-deck'>
      <Card url={'/static/vatican.jpg'} />
      <Card url={'/static/interiorDesignChair.jpg'} height='232px' />
      <Card url={'/static/KEBAB.jpg'} />
    </CardsContainer>
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
