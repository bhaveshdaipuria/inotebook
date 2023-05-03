import React, {useContext} from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

function Notes() {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
  return (
    <div class="row">
  <h2>Your Notes</h2>
    {notes.map((note)=>{
      return <NoteItem title={note.title} description={note.description}/>
    })}
</div>
  )
}

export default Notes;
