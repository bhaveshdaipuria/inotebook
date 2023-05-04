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
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0ZjdkOTRlNjE3OTYxYTBlNjkwY2NjIn0sImlhdCI6MTY4MjkzMTA5Mn0.aha5DAd9kAFEpt6kiTIeYEcavl0bv6TrJYN4TCaER_g",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const note = await response.json();
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
    console.log(json);

    let newNotes = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(newNotes);
  };

  //Edit an existing note
  const updateNote = async (id, title, description, tag) => {
    const response = await fetch(`${host}/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjQ0ZjdkOTRlNjE3OTYxYTBlNjkwY2NjIn0sImlhdCI6MTY4MjkzMTA5Mn0.aha5DAd9kAFEpt6kiTIeYEcavl0bv6TrJYN4TCaER_g",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    const json = response.json();
    let newNotes = JSON.parse(JSON.stringify(notes));
    console.log(json);
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
        break;
      }
    }
    setNotes(newNotes);
  };

  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, updateNote, getNotes }}
    >
      {children}
    </NoteContext.Provider>
  );
};

export default NoteState;
