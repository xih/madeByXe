import React from 'react'
// import styled from 'styled-components'
import Layout from 'layouts/Main'
import Europe from '/posts/Europe'
import QuestKebabtallrik from '/posts/QuestKebabtallrik'

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
    return (
      <Layout>
        <QuestKebabtallrik />
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
