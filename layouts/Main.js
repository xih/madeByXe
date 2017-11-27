import Head from 'next/head'
import Wrapper from './Wrapper'
import Nav2 from 'components/Nav2'

import GaWrapper from './ga-wrapper'

// export default ({ children, title = 'Hi! I\'m Xe' }) => (
const Main = ({ children, title = 'Hi! I\'m Xe' }) => (
  <Wrapper>
    <Head>
      <title>{ title }</title>
    </Head>
    <header>
      <Nav2 />
    </header>

    <main>
      { children }
    </main>
  </Wrapper>
)

export default GaWrapper(Main)
