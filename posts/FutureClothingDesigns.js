import styled from 'styled-components'
import Link from 'next/link'

const H1 = styled.h1`
  font-size: 6.7vw;
  line-height: 7vw;
  font-family: brandon-grotesque, sans-serif;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0px;
  margin: 0;
  padding: 0;
  margin-bottom: 0.8em;
`

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 3em;
`

const P = styled.p`
  white-space: pre-wrap;
  max-width: 40em;
  font-family: futura-pt, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.1825em;
  line-height: 1.625em;
  margin: auto;
  margin-top: 1em;

  a {
      color: #e74c3c;
      &:hover {
        text-decoration: none;
      }
  }
`

const Img = styled.img`
  height: auto;
  margin-top: 2em;
  margin: 0.5em;
  @media (max-width: 2000px) {
    width: 40em;
  }
  @media (max-width: 1200px) {
    width: 40em;
  }
  @media (max-width: 1024px) {
    width: 40em;
  }
  @media (max-width: 768px) {
    width: 24.5em;
  }
  @media (max-width: 414px) {
    width: 24.5em;
  }
  @media (max-width: 375px) {
    width: 22em;
  }
  @media (max-width: 320px) {
    width: 19em;
  }
`

const FutureClothingDesigns = (props) => {
  const images = props.images.map(src =>
    <Img src={src} />
  )

  return (
    <Div className='container'>
      <H1>{props.title}</H1>
      <P>{props.intro}</P>
      {images}

      <P>Silly you! You thought I was gonna give away my clothing ideas that easily? Go steal my
        {/* <Link href={{ pathname: '/portfolioEntry/streetstyle-ios' }} as={`/portfolioEntry/streetstyle-ios`}> */}
        <Link href={'/portfolioEntry/streetstyle-ios'}>
          <a> app </a>
        </Link>
      idea instead.</P>
    </Div>
  )
}

export default FutureClothingDesigns
