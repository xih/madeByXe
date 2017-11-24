import styled from 'styled-components'

const Img = styled.img`
  height: auto;
  max-width: 30em;
  margin-top: 2em;
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

const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2em;
  margin-bottom: 5em;
`

const P = styled.p`
  white-space: pre-wrap;
  max-width: 40em;
  font-family: futura-pt, sans-serif;
  font-style: normal;
  font-weight: 300;
`

const DesignedAndSewed = (props) => {
  const images = props.images.map(src =>
    <div>
      <Img src={src} />
    </div>
  )
  return (
    <Div className='container'>
      <H1>{props.title}</H1>
      <P>{props.intro}</P>
      {images}
    </Div>
  )
}

export default DesignedAndSewed
