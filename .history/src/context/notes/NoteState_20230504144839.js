import NoteContext from "./noteContext";
import { useState } from "react";

const  NoteState = ({children})=>{
  const host = 'http://localhost:9000'
    const notesInitial = [
        {
          "_id": "644f7e8be617961a0e690ce2",
          "user": "644f7d94e617961a0e690ccc",
          "title": "This is an alarm",
          "description": "Wake up at 7AM",
          "tag": "General",
          "date": "2023-05-01T08:55:39.717Z",
          "__v": 0
        },
        {
          "_id": "644f7ea9e617961a0e690ce5",
          "user": "644f7d94e617961a0e690ccc",
          "title": "Updating my existing alarm",
          "description": "Wake me up at 8AM",
          "tag": "Updated Alarm",
          "date": "2023-05-01T08:56:09.511Z",
          "__v": 0
        },
        {
          "_id": "644f8271f19dd960cfe94ffd",
          "user": "644f7d94e617961a0e690ccc",
          "title": "This is a trial note",
          "description": "Trial note description",
          "tag": "General",
          "date": "2023-05-01T09:12:17.622Z",
          "__v": 0
        }
      ]
      const [notes, setNotes] = useState(notesInitial);

      const addNote = (title, description, tag)=>{
        const note = {
            "_id": "644f8271f19dd960cfe94ffd",
            "user": "644f7d94e617961a0e690ccc",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2023-05-01T09:12:17.622Z",
            "__v": 0
          };
        setNotes(notes.concat(note))
      }

      const deleteNote = (id)=>{
        let newNotes = notes.filter((note)=>{return note._id !== id});
        setNotes(newNotes);
      }

      const editNote = async(id, title, description, tag)=>{

        const response = await fetch(`${host}/api/notes/updatenote/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(data)
        })

        for(let index = 0; index<notes.length; index++){
          const element = notes[index];
          if(element._id === id)
          element.title = title;
          element.description = description;
          element.tag = tag;
        }
      }

    return(
        <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
            {children}
        </NoteContext.Provider>
    )
}

export default NoteState;