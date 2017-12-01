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
  margin: 0.5em;
`

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const StreetstyleIos = (props) => {
  const images = props.images.map(src =>
    <Img src={src} />
  )
  return (
    <Div className='container'>
      <H1>{props.title}</H1>
      <P>{props.intro}</P>
      <FlexContainer>
        {images}
      </FlexContainer>

    </Div>
  )
}

export default StreetstyleIos
