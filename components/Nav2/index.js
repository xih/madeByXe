import Link from 'next/link'
import styled from 'styled-components'

const Wrapper = styled.nav`
  background-image: url('/static/goyard.jpg');
  height: 145px;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;

  a {
    margin: 0 10px;
    color: #FFF;
    text-decoration: none;
  }
`

const Nav2 = () => (
  <Wrapper>
    <Link href='/'>
      <a>
        Xe
      </a>
    </Link>
    <Link href='www.twitter.com'>
      <a>
        <img src={'/static/twitter.png'} />
      </a>
    </Link>
    <Link href='/'>
      <a>
        <img src={'/static/instagram.png'} />
      </a>
    </Link>

  </Wrapper>
)

export default Nav2
