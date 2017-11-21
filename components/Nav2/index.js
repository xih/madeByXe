import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.nav`
  background-image: url('/static/goyard.jpg');
  @media (max-width: 500px) {
    height: 50px;
  }
  height: 135px;
  border-bottom: 1px solid #ddd;
  a {
    color: #FFF;
    text-decoration: none;
  }
`

const Brand = styled.div`
  font-family: ministry, sans-serif;
  font-style: normal;
  font-weight: 100;
  font-size: 4.7em;
  color: white;
  @media (max-width: 500px) {
    font-size: 2em;
  }
`

const Social = styled.div`
  a {
    margin-left: 0.45em;
  }
  img {
    @media (max-width: 500px) {
      width: 1.4em;
    }
  }
`

const NavContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`

const A = styled.a`
  :hover {
    cursor: pointer;
  }
  margin-top: 0;
`

const Nav2 = () => (
  <Wrapper>
    <NavContainer className='container'>
      <Link href='/'>
        <Brand>
          <A>
            Xe
          </A>
        </Brand>
      </Link>
      <Social>
        <Link href='https://www.twitter.com'>
          <a target='_blank'>
            <img src={'/static/Twitter.svg'} />
          </a>
        </Link>
        <Link href='https://www.instagram.com'>
          <a target='_blank'>
            <img src={'/static/Instagram.svg'} />
          </a>
        </Link>
      </Social>
    </NavContainer>
  </Wrapper>
)

export default Nav2
