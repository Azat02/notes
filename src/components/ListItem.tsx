import styled from 'styled-components'
import { Note } from './AddNote'

const ListNote = styled.div`
    width: 100%;
    height: 12%;
    background-color: ${({theme}) => theme.bg2};
    padding: 15px 25px;
    @media(max-width: 375px) {
        padding: 15px 10px ;
    }
    @media(max-width: 320px) {
        padding: 15px 5px ;
    }
`

const Time = styled.div`
    display: inline-block;
    @media (max-width: 768px){
        font-size: 14px;
    }
`

const SubTitile = styled.div`
    display: inline-block;
    font-size: 15px;
    color: ${({theme}) => theme.text3};
    @media (max-width: 768px){
        font-size: 14px;
    }
`
const Title = styled.h2`
    @media (max-width: 768px){
        font-size: 16px;
    }
`
const Wrapper = styled.div`
    display: flex;
    margin-top: 15px;
    gap: 8px;
`

const currentTime = new Date ().toLocaleTimeString([], { hour: 'numeric', minute: '2-digit' });

interface NoteItemProps {
    note: Note;
    onDelete: (noteId: number) => void;
  }

const ListItem: React.FC<NoteItemProps> = ({ note, onDelete }) => {
    const handleDeleteClick = () => {
      onDelete(note.id);
    };
  return (
    <ListNote>
        <Title>New Note {note}</Title>
        <Wrapper>
            <Time>{currentTime}</Time> 
            <SubTitile>No extra text</SubTitile>
            <button onClick={handleDeleteClick}>Delete</button>
        </Wrapper>
    </ListNote>
  )
}

export default ListItem