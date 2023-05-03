import React from 'react'

function NoteItem({title, description}) {
  return (
    <div className='col-sm-3'>
    <div className='card my-3'>
        <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
            <i class="fa-sharp fa-solid fa-trash"></i>
            <i class="fa-solid fa-pen-to-square"></i>
        </div>
    </div>
    </div>
  )
}

export default NoteItem;