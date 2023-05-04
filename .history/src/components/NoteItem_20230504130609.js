import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

function NoteItem(props) {
    const context = useContext(noteContext);
    const {deleteNote} = context;
    const {note} = props;
  return (
    <div className='col-sm-3'>
    <div className='card my-3'>
        <div className='card-body'>
            <h5 className='card-title'>{note.bhavesh}</h5>
            <i className="fa-sharp fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}/>
            <i className="fa-solid fa-pen-to-square mx-2"></i>
        </div>
        <p className='card-text'>{note.description}</p>
    </div>
    </div>
  )
}

export default NoteItem;
