import styled from 'styled-components'

const QuestKebabtallrik = (props) => {
  return (
    <div>
      <div className='container-fluid'>
        <H1> {props.title} </H1>
        <ContentImage src={props.mainPhoto} />
      </div>
      <div className='container'>
        <Div dangerouslySetInnerHTML={{ __html: props.content }} />
      </div>
    </div>
  )
}

const ContentImage = styled.img`
  width: 100%;
  max-width: 100%;
  margin-bottom: 3em;
`

const H1 = styled.h1`
  font-size: 6.7vw;
  line-height: 7vw;
  text-align: center;
  font-family: brandon-grotesque, sans-serif;
  font-style: normal;
  font-weight: 900;
  letter-spacing: 0px;
  margin: 0;
  padding: 0;
`

const Div = styled.div`
  font-family: futura-pt, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 1.1825em;
  line-height: 1.625em;
  margin: auto;

  @media (min-width: 768px) {
    width: 637px;
  }

  a {
      color: #e74c3c;
      &:hover {
        text-decoration: none;
      }
  }

  h1 {
    font-family: brandon-grotesque, sans-serif;
    font-style: normal;
    font-weight: 700;
  }

  h2 {
    font-family: brandon-grotesque, sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 0.5em;
  }

  h3 {
    font-family: brandon-grotesque, sans-serif;
    font-style: normal;
    font-weight: 700;
    line-height: 0.9em;
  }

  img {
    max-width: 100%;
    max-height: 100%;
    margin-bottom: 1em;
  }

  .videoWrapper {
    position: relative;
    padding-bottom: 56.25%; /* 16:9 */
    padding-top: 25px;
    height: 0;
  }

  .videoWrapper iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .link {
    &:link {
      color: black;
      text-decoration: none;
    }
    &:visited {
      color: black;
      text-decoration: none;
    }
    &:hover {
      color: #9b59b6;
      text-decoration: none;
    }
    &:active {
      color: black;
      text-decoration: none;
    }
  }

  .brand-header {
    margin-bottom: 0.5em;
  }
`

export default QuestKebabtallrik
