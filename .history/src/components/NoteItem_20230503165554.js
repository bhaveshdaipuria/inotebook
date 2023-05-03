import React from 'react'

function NoteItem({title, description}) {
  return (
    <div className='col-sm-3'>
    <div className='card my-3'>
        <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <i className="fa-sharp fa-solid fa-trash mx-2"></i>
            <i className="fa-solid fa-pen-to-square mx-2"></i>
        </div>
    </div>
    </div>
  )
}

export default NoteItem;
