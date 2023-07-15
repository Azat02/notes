import { useEffect, useState } from 'react';
import styled from 'styled-components'
import { Note } from './AddNote';
import { getNotes } from './GetNotes';
import ListItem from './ListItem'

const SidebarWrapper = styled.div`
    width: 30%;
    height: 100%;
    border-right: 1px solid #000;
    @media(max-width: 768px) {
        width: 40%;
    }
`

const Sidebar: React.FC = () => {
    const [notes, setNotes] = useState<Note[]>([]);
  
    useEffect(() => {
      const fetchNotes = async () => {
        try {
          const retrievedNotes = await getNotes();
          setNotes(retrievedNotes);
        } catch (error) {
          console.error('Error retrieving notes:', error);
        }
      };
  
      fetchNotes();
    }, []);
  return (
    <SidebarWrapper>
        {notes.map(note => (
            <ListItem key={note.id} note={note.text}/>
        ))}
    </SidebarWrapper>
  )
return (
    <ul>
      {notes.map(note => (
        <li key={note.id}>{note.text}</li>
      ))}
    </ul>
  );

}

export default Sidebar