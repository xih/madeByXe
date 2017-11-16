import styled from 'styled-components'

const CardContainer = styled.div`
  width: 20rem;
  font-size: 1rem;
  font-family: brandon-grotesque, sans-serif;
  font-style: normal;
  font-weight: 100;
  @media (max-width: 500px) {
    margin-top: 2em;
    width: 100%;
  }

`

const Img = styled.img`
  width: auto;
  height:  ${props => props.height};
  display: block;
  object-fit: cover;
`

const Card = (props) => (
  <CardContainer className='card'>
    <Img className='card-img-top' src={props.url} alt='Card image cap' height={props.height} />
    <div className='card-block'>
      <h4 className='card-title'>Card title</h4>
      <p className='card-text'>This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
      <p className='card-text'><small class='text-muted'>Last updated 3 mins ago</small></p>
    </div>
  </CardContainer>
)

export default Card
