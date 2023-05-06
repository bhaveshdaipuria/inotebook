import NoteContext from "./noteContext";
import { useState } from "react";

const NoteState = ({ children }) => {
  const host = "http://localhost:9000";
  const notesInitial = [];
  const [notes, setNotes] = useState(notesInitial);
  
  //Get notes
  const getNotes = async () => {
    const response = await fetch(`${host}/api/notes/fetchallnotes/`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0ZjdkOTRlNjE3OTYxYTBlNjkwY2NjIn0sImlhdCI6MTY4MjkzMTA5Mn0.aha5DAd9kAFEpt6kiTIeYEcavl0bv6TrJYN4TCaER_g",
      },
    });
    const json = await response.json();
    setNotes(json);
  };

  //Add a new note
  const addNote = async (title, description, tag) => {
    const response = await fetch(`${host}/api/notes/addnote`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0ZjdkOTRlNjE3OTYxYTBlNjkwY2NjIn0sImlhdCI6MTY4MjkzMTA5Mn0.aha5DAd9kAFEpt6kiTIeYEcavl0bv6TrJYN4TCaER_g",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
    console.log(note);
    setNotes(notes.concat(note));
  };

  //Delete a note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0ZjdkOTRlNjE3OTYxYTBlNjkwY2NjIn0sImlhdCI6MTY4MjkzMTA5Mn0.aha5DAd9kAFEpt6kiTIeYEcavl0bv6TrJYN4TCaER_g",
      },
    });
    const json = await response.json();
    console.log(json.note._id);

    const deletedNoteIndex = notes.findIndex(x => x._id === json.note._id);
    console.log(deletedNoteIndex);

    notes.splice(deletedNoteIndex, 1);

    // let newNotes = notes.filter((note) => {
    //   return note._id !== id;
    // });
    getNotes();
  };

  //Edit an existing note
  const editNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0ZjdkOTRlNjE3OTYxYTBlNjkwY2NjIn0sImlhdCI6MTY4MjkzMTA5Mn0.aha5DAd9kAFEpt6kiTIeYEcavl0bv6TrJYN4TCaER_g",
      },
      body: JSON.stringify({ title, description, tag })
    });

    console.log(response.json());

    let newNotes = JSON.parse(JSON.stringify(notes));
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        newNotes[index].title = title;
        newNotes[index].description = description;
        newNotes[index].tag = tag;
        break;
      }
    }
    setNotes(newNotes);
    console.log(notes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
