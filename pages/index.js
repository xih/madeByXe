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

const streetStylexIosCardText = 'Conceptualized a new way to buy clothes through e-commerce. Instead of scrolling through hundreds or thousands ' +
'of clothes that look the same bar minor differences, humans should be able to see clothes that normal everyday people wear in the street and incorporate ' +
'this style into their own. After all humans are the masters of imitation. The Sartorialist, Tommy Ton, HBNam amoung countless others serve as inspiration ' +
'Designed with Sketch.'

const designedAndSewedCardText = 'I fell in love with clothes in high school, but I never thought when I was young that I could make them myself. Here is my ' +
'first attempt. Presented Winter 2016 during UC Berkeley\'s FAST fashion show.'

const futureClothingDesignsCardText = 'There is rather little inherent technological innovations within the realm of fashion. To get people to buy new clothes ' +
'every season, every year, fashion brands invent this concept of \'cool\', and do a very good job of selling this ideal. I have nothing against this, I like to be ' +
'\'cool\' as well. But these are my visions into how clothes will be made in the future.'

const europeCardText = 'In 2017, I spent nine months in Europe. Although I was primarily in the city of Lund in Sweden, I traveled to Iceland, Norway, Portugal, ' +
'the United Kingdom, Belgium, Italy, France and more. These are photos from my adventures. I shot everything using a Canon T6i. Photographers make photos, not cameras.'

const sketchesOfDesignerChairs = 'I stumbled upon \'MAGNI MODERNISM\' by James Magni in the library and checked it out. The interiors he designs are crazy!@!@ Combining ' +
'pieces from Art Deco furniture and LOUIS XVI chairs with white lacquer and chocolate-colored wenge wood and Japanese Tansu\'s and Ming Dynasty vases, he creates an extreme sleek ' +
'and modern look. I sketched all these chairs and designs for me to learn from the master.'

const questKebabtallrik = 'During my time that I lived in Lund, I was introduced to this dish, Kebabtallrik, or in English Kebab Plate. ' +
'While a university student in California, I would go to Chipotle because it was good-valued, tasty, and fast\u2014also Mexican food. Kebabtallrik ' +
'is the Swedish equivalent of Chipotle. But it\'s not standardized in terms of value and taste, meaning there are a plethora of local kebabtallrik joints ' +
'with differing price points and taste. I wrote and photographed this guide to change that fact.'

const pianoLessons = 'I started playing piano when I was 7 years old. I took private lessons for around eight years, during which time I built up my foundation. Now I learn pieces myself. My training' +
' is in classical music where I passed Certificate of Merit Advanced (Level 10). If given the opportunity, I hope to instill in your child not just the foundations of rhythm and pitch but also the love of music'

const IndexPage = ({ posts }) =>
  <Layout>
    <Div className='container'>
      Hi! I'm Xe (pronounced Z)
    </Div>
    <ParagraphDiv className='container'>
      I’m a software engineer / self-taught designer. Previously I studied Engineering at UC Berkeley.
      Currently, I teach piano on the side. Click the card below to schedule an appointment.
    </ParagraphDiv>
    <Div className='container'>
      Portfolio
    </Div>
    <div className='container card-deck'>
      <Card url={'/static/yuja.jpg'} title={'Piano Lessons'} slug={'piano'} cardText={pianoLessons} />
    </div>
    <CardsContainer className='container card-deck'>
      <Card url={'/static/streetstyle.jpg'} title={'Streetstyle Photography x iOS'} slug={'streetstyle-ios'} cardText={streetStylexIosCardText} />
      <Card url={'/static/5v2.jpg'} title={'Designed and Sewed By Me'} slug={'designed-and-sewed-by-me'} cardText={designedAndSewedCardText} />
      <Card url={'/static/forwalkingv2.jpg'} height='424px' title={'Future Clothing Designs'} slug={'future-clothing-designs'} cardText={futureClothingDesignsCardText} />
    </CardsContainer>
    <CardsContainer className='container card-deck'>
      <Card url={'/static/vatican.jpg'} title={'Europe'} slug={'europe'} cardText={europeCardText} />
      <Card url={'/static/magni.jpg'} height='232px' title={'Sketches of Designer Chairs'} slug={'sketches-designer-chairs'} cardText={sketchesOfDesignerChairs} />
      <Card url={'/static/KEBAB.jpg'} title={'Quest to Find the Best Valued Kebabtallrik in Lund'} slug={'kebabtallrik-lund'} cardText={questKebabtallrik} />
    </CardsContainer>
  </Layout>

IndexPage.getInitialProps = async ({ req }) => {
  const res = await getPosts()
  const json = await res.json()
  return { posts: json }
}

export default IndexPage
