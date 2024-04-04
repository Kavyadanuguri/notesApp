// Write your code here
import {ListContainer, Heading1, P1} from './styledComponents'

const NoteItem = props => {
  const {dataList} = props
  const {input1, input2, id} = dataList
  return (
    <ListContainer key={id}>
      <Heading1>{input1}</Heading1>
      <P1>{input2}</P1>
    </ListContainer>
  )
}

export default NoteItem
