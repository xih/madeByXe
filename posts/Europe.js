import styled from 'styled-components'

import Masonry from 'react-masonry-component'

var masonryOptions = {
  transitionDuration: 0
}

const Img = styled.img`
  display: block;
  max-width: 28em;
  margin: 0.5em;
  @media (max-width: 500px) {
    max-width: 25em;
  }
`

const EuropeContainer = styled.div`
  ${''}
  ${''}
  ${''}
  ${''}
  background-color: black;
`
//
const MasonryContainer = styled.div`
  margin: 0 auto;

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
  margin-bottom: 1em;
`

const Europe = (props) => {
  var childElements = props.images.map(function (src) {
    return (
      <div>
        <Img src={src} />
      </div>
    )
  })

  return (
    <EuropeContainer >
      <IntroContainer>
        <H1>
          Adventures In Europe
        </H1>
        <img src={'/static/vatican.jpg'} />
      </IntroContainer>

      <MasonryContainer>
        <Masonry
          // className='container-fluid mx-auto' // default ''
          elementType={'ul'} // default 'div'
          options={masonryOptions} // default {}
          disableImagesLoaded={false} // default false
          updateOnEachImageLoad={false} // default false and works only if disableImagesLoaded is false
        >
          {childElements}
        </Masonry>
      </MasonryContainer>
    </EuropeContainer>
  )
}

export default Europe
