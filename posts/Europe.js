import styled from 'styled-components'

const Img = styled.img`
  margin: 0.5em;
  @media (max-width: 2000px) {
    width: 25em;
  }
  @media (max-width: 1200px) {
    width: 20em;
  }
  @media (max-width: 1024px) {
    width: 20em;
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

const EuropeContainer = styled.div`
  background-color: black;
  padding-bottom: 5em;
`

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 2em;
  margin-bottom: 4em;
  color: white;
`

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

const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
`

const Europe = (props) => {
  var childElements = props.images.map(function (src) {
    return (
      <Img src={src} />
    )
  })

  return (
    <EuropeContainer>
      <IntroContainer className='container-fluid'>
        <H1>
          Adventures In Europe
        </H1>
        <img src={'/static/vatican.jpg'} />
      </IntroContainer>

      <FlexContainer>
        {childElements}
      </FlexContainer>

    </EuropeContainer>
  )
}

export default Europe
