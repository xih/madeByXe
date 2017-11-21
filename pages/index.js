import React from 'react'
import Layout from 'layouts/Main'
import { getPosts } from 'api/posts'
import styled from 'styled-components'
import Card from 'components/Card'

const Div = styled.div`
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 100;
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
  font-size: 1.6em;
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
      <Card url={'/static/streetstyle.jpg'} title={'Streetstyle Photography x iOS'} slug={'streetstyle-ios'} cardText={'hi'} />
      <Card url={'/static/5v2.jpg'} title={'Designed and Sewed By Me'} slug={'designed-and-sewed-by-me'} cardText={'hello'} />
      <Card url={'/static/forwalkingv2.jpg'} height='424px' title={'Future Clothing Designs'} slug={'future-clothing-designs'} cardText={''} />
    </CardsContainer>
    <CardsContainer className='container card-deck'>
      <Card url={'/static/vatican.jpg'} title={'Europe'} slug={'europe'} cardText={''} />
      <Card url={'/static/interiorDesignChair.jpg'} height='232px' title={'Sketches of Designer Chairs'} slug={'sketches-designer-chairs'} cardText={''} />
      <Card url={'/static/KEBAB.jpg'} title={'Quest to Find the Best Valued Kebabtallrik in Lund'} slug={'kebabtallrik-lund'} cardText={''} />
    </CardsContainer>
  </Layout>

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default IndexPage
