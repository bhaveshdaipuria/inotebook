import React from 'react'

function Badge(props) {
    const {tagProp} = props;
  return (
    <>
    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    {tagProp}
    <span className="visually-hidden">unread message</span>
  </span>
    </>
  )
}

export default Badge;
