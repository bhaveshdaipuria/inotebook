import React, {useContext, useEffect} from 'react'
import noteContext from '../context/notes/noteContext';

function About(){
  return (
    <div>
      This is about {a.state.name} and he is in class {a.state.class}
    </div>
  )
}

export default About;