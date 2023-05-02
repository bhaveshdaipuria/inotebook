import NoteContext from "./noteContext";
import { useState } from "react";

const  NoteState = (props)=>{
    const state = {
        "name": "Bhavesh",
        "class": "5b"
    }
    return(
        <NoteContext.Provider value={state}>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState