import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

function NoteItem({title, description}) {
    const context = useContext(noteContext);
    const {notes} = useContext();
    console.log(notes.id);
    console.log(title, description);
    const {deleteNote} = context;
  return (
    <div className='col-sm-3'>
    <div className='card my-3'>
        <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <i className="fa-sharp fa-solid fa-trash mx-2" onClick={()=>{deleteNote()}}></i>
            <i className="fa-solid fa-pen-to-square mx-2"></i>
        </div>
        <p className='card-text'>{description}</p>
    </div>
    </div>
  )
}

export default NoteItem;
