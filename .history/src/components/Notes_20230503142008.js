import React, {useContext} from 'react';
import noteContext from '../context/notes/noteContext';
import NoteItem from './NoteItem';

function Notes() {
    const context = useContext(noteContext);
    const {notes, setNotes} = context;
  return (
    <div className='container my-3'>
    <h2>Your Notes</h2>
    <div className='row'>
    {notes.map((note)=>{
      return <NoteItem title={note.title} description={note.description}/>
    })}
    </div>
    </div>
  )
}

export default Notes;
