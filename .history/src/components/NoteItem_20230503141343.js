import React from 'react'

function NoteItem({title, description}) {
  return (
    <div className='col-mid-3'>
    <div className='card my-3'>
        <div className='card-body'>
            <h5 className='card-title'>{title}</h5>
            <p className='card-text'>{description}</p>
        </div>
    </div>
    </div>
  )
}

export default NoteItem;
