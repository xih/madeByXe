import styled from 'styled-components'

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 5em;
`

const H1 = styled.h1`
  font-size: 6vw;
  line-height: 7vw;
  font-family: brandon-grotesque, sans-serif;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0px;
  margin: 0;
  padding: 0;
  margin-bottom: 0.8em;
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
`

const Img = styled.img`
  height: auto;
  margin-top: 2em;
  @media (max-width: 1500px) {
    width: 15em;
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
  margin: 0.8em;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const ExploreImages = styled.img`
  margin: 0.8em;
  @media (max-width: 2000px) {
    width: 13em;
  }
  @media (max-width: 1200px) {
    width: 13em;
  }
  @media (max-width: 1024px) {
    width: 15em;
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

const H2 = styled.h2`
  font-family: brandon-grotesque, sans-serif;
  font-style: normal;
  font-weight: 900;
  margin-top: 3.5em;
`

const StreetstyleIos = (props) => {
  const { mainPhoto } = props

  const homeImages = mainPhoto.home.map(src =>
    <Img src={src} />
  )

  const exploreImages = mainPhoto.explore.map(src =>
    <ExploreImages src={src} />
  )

  const cartImages = mainPhoto.cart.map(src =>
    <Img src={src} />
  )

  const registerImages = mainPhoto.register.map(src =>
    <Img src={src} />
  )

  return (
    <Div className='container'>
      <H1>{props.title}</H1>
      <P>{props.intro}</P>

      <H2>LOADING GOLD</H2>
      <Img src={mainPhoto.intro} />

      <H2>Home</H2>
      <FlexContainer>
        {homeImages}
      </FlexContainer>

      <H2>Explore</H2>
      <FlexContainer>
        {exploreImages}
      </FlexContainer>

      <H2>Cart</H2>
      <FlexContainer>
        {cartImages}
      </FlexContainer>

      <H2>Create a New Account</H2>
      <FlexContainer>
        {registerImages}
      </FlexContainer>

    </Div>
  )
}

export default StreetstyleIos
