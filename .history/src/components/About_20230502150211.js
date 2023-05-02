import React, {useContext, useEffect} from 'react'
import NoteState from '../context/notes/NoteState';

function About() {
  const a = useContext(NoteState)
  useEffect(()=>{
    a.update();
  }, [])
  return (
    <div>
      This is about {a.state.name} and he is in class {a.state.class}
    </div>
  )
}

export default About;