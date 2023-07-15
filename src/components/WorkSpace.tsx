import { useState } from "react";
import styled from "styled-components";
import { addNote } from "./AddNote";

const Time = styled.div`
    text-align: center;
    margin: 0 auto;
    padding-top: 20px ;
`
const Wrapper = styled.div`
    width: 70%;
    height: 100%;
    @media(max-width: 576px) {
        width: 60%;
        font-size: 14px;
    }
`
const WorkSpace: React.FC = () => {
    const [noteText, setNoteText] = useState('');
    const currentDate = new Date();

    const handleNoteSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
          await addNote({ id: Date.now(), text: noteText });
          setNoteText('');
        } catch (error) {
          console.error('Error adding note:', error);
        }
    };

  const options = {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
  };

  const Content = styled.div`
    width: 100%;
    height: 94%;
    padding: 20px;
    outline: none;
  `

  const formattedDate = currentDate.toLocaleString('en-US', options);
  return (
    <Wrapper onSubmit={handleNoteSubmit}>
        <Time>{formattedDate}</Time>
        <Content contentEditable defaultValue={noteText} onChange={e => setNoteText(e.target.value)}></Content>
        <button type="submit">Add Note</button>
    </Wrapper>
  )
  
//   return (
//     <form onSubmit={handleNoteSubmit}>
//       <textarea value={noteText} onChange={e => setNoteText(e.target.value)} />
//       <button type="submit">Add Note</button>
//     </form>
//   );
}

export default WorkSpace