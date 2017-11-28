import styled from 'styled-components'
import MasonryInfiniteScroller from 'react-masonry-infinite'

const Img = styled.img`
  @media (max-width: 2000px) {
    width: 26em;
  }
  @media (max-width: 1200px) {
    width: 20em;
  }
  @media (max-width: 1024px) {
    width: 20em;
  }
  @media (max-width: 768px) {
    width: 22em;
  }
`

const EuropeContainer = styled.div`
  background-color: black;
  padding-bottom: 5em;
`

const MasonryContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
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

const Europe = (props) => {
  const sizes = [{ columns: 1, gutter: 20 },
                 { mq: '768px', columns: 2, gutter: 20 },
                 { mq: '1024px', columns: 3, gutter: 20 }]

  return (
    <EuropeContainer>
      <IntroContainer className='container-fluid'>
        <H1>
          Adventures In Europe
        </H1>
        <img src={'/static/vatican.jpg'} />
      </IntroContainer>

      <MasonryContainer className='hidden-md-up'>
        <MasonryInfiniteScroller sizes={sizes}>
          {props.images.map((src, index) =>
            <div key={index} className='container-fluid'>
              <img src={src} />
            </div>
          )}
        </MasonryInfiniteScroller>
      </MasonryContainer>

      <MasonryContainer className='hidden-sm-down'>
        <MasonryInfiniteScroller sizes={sizes}>
          {props.images.map((src, index) =>
            <div>
              <Img src={src} />
            </div>
          )}
        </MasonryInfiniteScroller>
      </MasonryContainer>
    </EuropeContainer>
  )
}

export default Europe
