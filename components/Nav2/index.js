import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.nav`
  background-image: url('/static/goyard.jpg');
  @media (max-width: 500px) {
    height: 50px;
  }
  height: 135px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  justify-content: space-around;

  a {
    margin: 0 10px;
    color: #FFF;
    text-decoration: none;
  }
`

const Brand = styled.div`
  font-family: freight-neo-pro, sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 4.7em;
  color: white;

  @media (max-width: 500px) {
    font-size: 2em;
  }
`

const Social = styled.div`
  a {
    margin-right: -0.2em;
  }
`
const Fill = styled.div`
  flex: 0.26;
`

const Nav2 = () => (
  <Wrapper>
    <Link href='/'>
      <Brand>
        <a>
          Xe
        </a>
      </Brand>
    </Link>
    <Fill />
    <Social>
      <Link href='https://www.twitter.com'>
        <a>
          <img src={'/static/twitter.png'} />
        </a>
      </Link>
      <Link href='/'>
        <a>
          <img src={'/static/instagram.png'} />
        </a>
      </Link>
    </Social>
  </Wrapper>
)

export default Nav2
