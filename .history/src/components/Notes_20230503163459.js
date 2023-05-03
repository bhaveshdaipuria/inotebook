import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";
import NoteItem from "./NoteItem";

function Notes() {
  const context = useContext(noteContext);
  const { notes, addNote } = context;
  return (
    <div class="row my-3">
      <h2>Your Notes</h2>
      {notes.map((note) => {
        return <NoteItem title={note.title} description={note.description} />;
      })}
    </div>
  );
}

export default Notes;