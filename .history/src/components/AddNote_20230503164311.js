import React, {useContext} from "react";
import noteContext from "../context/notes/noteContext";

function AddNote() {
  const context = useContext(noteContext);
  const {  addNote } = context;

  const handleClick = ()=>{

  }
  return (
    <div className="container my-3">
      <h1>Add a Note</h1>
      <form className="my-3">
        <div className="mb-3">
          <label for="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label for="desc" className="form-label">
            Description
          </label>
          <input
            type="password"
            className="form-control"
            id="desc"
            onChange={onChange}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={handleClick}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddNote;
