import React from 'react'
// import styled from 'styled-components'
import Layout from 'layouts/Main'
import Europe from '/posts/Europe'
import QuestKebabtallrik from '/posts/QuestKebabtallrik'
import DesignedAndSewed from '/posts/DesignedAndSewed'
import FutureClothingDesigns from '/posts/FutureClothingDesigns'
import StreetstyleIos from '/posts/StreetstyleIos'
import SketchesDesignerChairs from '/posts/SketchesDesignerChairs'

import { getPortfolio } from 'api/contentful'

const portfolioEntryPage = (props) => {
  if (props.url.query.portfolioEntry === 'europe') {
    const images = props.entries.includes.Asset.map((el) => 'https:' + el.fields.file.url)
    return (
      <Layout>
        <Europe images={images} />
      </Layout>
    )
  } else if (props.url.query.portfolioEntry === 'kebabtallrik-lund') {
    // const images = props.entries.includes.Asset.map((el) => 'https:' + el.fields.file.url)
    const content = props.entries.items[0].fields.content
    const title = props.entries.items[0].fields.title
    const mainPhoto = props.entries.items[0].fields.mainPhoto.mainPhoto

    return (
      <Layout>
        <QuestKebabtallrik content={content} title={title} mainPhoto={mainPhoto} />
      </Layout>
    )
  } else if (props.url.query.portfolioEntry === 'streetstyle-ios') {
    const images = props.entries.includes.Asset.map((el) => 'https:' + el.fields.file.url)
    const title = props.entries.items[0].fields.title
    const introduction = props.entries.items[0].fields.introduction
    return (
      <Layout>
        <StreetstyleIos title={title} images={images} intro={introduction} />
      </Layout>
    )
  } else if (props.url.query.portfolioEntry === 'designed-and-sewed-by-me') {
    const images = props.entries.includes.Asset.map((el) => 'https:' + el.fields.file.url)
    const title = props.entries.items[0].fields.title
    const introduction = props.entries.items[0].fields.introduction
    return (
      <Layout>
        <DesignedAndSewed title={title} images={images} intro={introduction} />
      </Layout>
    )
  } else if (props.url.query.portfolioEntry === 'future-clothing-designs') {
    const images = props.entries.includes.Asset.map((el) => 'https:' + el.fields.file.url)
    const title = props.entries.items[0].fields.title
    const introduction = props.entries.items[0].fields.introduction
    return (
      <Layout>
        <FutureClothingDesigns title={title} images={images} intro={introduction} />
      </Layout>
    )
  } else if (props.url.query.portfolioEntry === 'sketches-designer-chairs') {
    return (
      <Layout>
        <SketchesDesignerChairs />
      </Layout>
    )
  }
}

portfolioEntryPage.getInitialProps = async ({ req, query }) => {
  const portfolio = await getPortfolio(query.portfolioEntry)
  const json1 = await portfolio.json()
  return { entries: json1 }
}

export default portfolioEntryPage
