import styled from 'styled-components'

const Img = styled.img`
  margin-top: 2em;
`

const QuestKebabtallrik = (props) => {
  const content = props.images.map((src) =>
    <Img src={src} />
  )

  return (
    <div className='container'>
      {content}
    </div>
  )
}

export default QuestKebabtallrik
