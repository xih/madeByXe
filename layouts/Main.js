import Head from 'next/head'
import Wrapper from './Wrapper'
// import Footer from 'components/Footer'

import Nav2 from 'components/Nav2'

export default ({ children, title = 'Hi! I\'m Xe' }) => (
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

    {/* <Footer> */}
    {/* Footer */}
    {/* </Footer> */}
  </Wrapper>
)
