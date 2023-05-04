import React, { useContext } from 'react';
import noteContext from '../context/notes/noteContext';

function NoteItem(props) {
    const context = useContext(noteContext);
    const {notes} = props;
    console.log(props);
    const {deleteNote} = context;
  return (
    <div className='col-sm-3'>
    <div className='card my-3'>
        <div className='card-body'>
            <h5 className='card-title'>{notes.title}</h5>
            <i className="fa-sharp fa-solid fa-trash mx-2" onClick={()=>{deleteNote(note._id)}}></i>
            <i className="fa-solid fa-pen-to-square mx-2"></i>
        </div>
        <p className='card-text'>{notes.description}</p>
    </div>
    </div>
  )
}

export default NoteItem;
