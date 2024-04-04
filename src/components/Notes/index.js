import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  Container1,
  Heading1,
  Container2,
  Container3,
  Input1,
  Input2,
  Con2,
  Button1,
  Image1,
  Heading2,
  UnOrder,
  P1,
} from './styledComponents'

// Write your code here
const Notes = () => {
  const [input1, setInput1] = useState('')
  const [input2, setInput2] = useState('')
  const [inputList, setList] = useState([])

  const onChangeInput1 = event => {
    setInput1(event.target.value)
  }

  const onChangeInput2 = event => {
    setInput2(event.target.value)
  }

  const onAddValue = event => {
    event.preventDefault()
    const newData = {
      id: uuidv4(),
      input1,
      input2,
    }

    setList(prevState => [...prevState, newData])
    setInput1('')
    setInput2('')
  }

  const isValue = inputList.length === 0

  return (
    <Container1>
      <Heading1>Notes</Heading1>
      <Container2 onSubmit={onAddValue}>
        <Input1
          value={input1}
          onChange={onChangeInput1}
          placeholder="Title"
          type="text"
        />
        <Input2
          onChange={onChangeInput2}
          value={input2}
          row="10"
          type="text"
          placeholder="Take a Note..."
        />
        <Con2>
          <Button1 type="submit">Add</Button1>
        </Con2>
      </Container2>
      {isValue ? (
        <Container3>
          <Image1
            alt="notes empty"
            src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
          />
          <Heading2>No Notes Yet</Heading2>
          <P1>Notes you add will appear here</P1>
        </Container3>
      ) : (
        <UnOrder>
          {inputList.map(each => (
            <NoteItem key={each.id} dataList={each} />
          ))}
        </UnOrder>
      )}
    </Container1>
  )
}

export default Notes
