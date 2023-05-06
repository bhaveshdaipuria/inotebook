import React from 'react'

function Badge() {
  return (
    <>
    <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
    99+
    <span class="visually-hidden">unread messages</span>
  </span>
    </>
  )
}

export default Badge;
