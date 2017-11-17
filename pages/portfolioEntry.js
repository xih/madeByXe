import React from 'react'
// import styled from 'styled-components'
import Layout from 'layouts/Main'
import Europe from '/posts/Europe'
import QuestKebabtallrik from '/posts/QuestKebabtallrik'

const portfolioEntryPage = (props) => {
  if (props.url.query.portfolioEntry === 'europe') {
    return (
      <Layout>
        <Europe />
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

export default portfolioEntryPage
