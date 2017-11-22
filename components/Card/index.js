import styled from 'styled-components'
import { Link } from 'routes'

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
  box-shadow: 0 1px 2px rgba(0,0,0,.15);
  transition: all .4s cubic-bezier(.77,0,.175,1);
  :hover {
    box-shadow: 0 20px 40px rgba(0,0,0,.2);
    cursor: pointer;
  }
`

const Img = styled.img`
  width: auto;
  height:  ${props => props.height};
  display: block;
  object-fit: cover;
`

const Card = (props) => (
  // <Link href={{ pathname: '/', query: { portfolioEntry: props.slug } }} >
  // <Link prefetch href={'/' + props.slug}>
  <Link route={props.slug}>
    <CardContainer className='card'>
      <Img className='card-img-top' src={props.url} alt='Card image cap' height={props.height} />
      <div className='card-block'>
        <h4 className='card-title'>{props.title}</h4>
        <p className='card-text'>{props.cardText}</p>
        <p className='card-text'><small class='text-muted' /></p>
      </div>
    </CardContainer>
  </Link>
)

export default Card
