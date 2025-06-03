import React from "react";
import NoteForm from "../components/NoteForm";
import useNoteStore from "../store/NoteStore";
import {useParams} from 'react-router-dom'
const EditNote = () => {
 

  const { id } = useParams();
  const note = useNoteStore((state) =>
    state.notes.find((note) => note.id === id)
  );
  if (!note) return <div>Note not found</div>;

  const handleUpdateNote = () => {
    console.log("Note Updated!");
  };

  return (

    <NoteForm
    mode="edit"
    noteId={note.id}
    initialTitle={note.title}
    initialContent={note.content}
    screenTitle="Edit Note"
    selectedNoteColor={note.color}
  />
  );
};

export default EditNote;
