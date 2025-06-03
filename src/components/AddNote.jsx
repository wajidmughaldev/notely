// src/pages/AddNote.jsx
import React from "react";
import NoteForm from "../components/NoteForm";

const AddNote = () => {
  const handleAddNote = () => {
    console.log("Note Added!");
  };

  return (
    <NoteForm
      mode="add"
      screenTitle="Write a Note"
      onSubmit={handleAddNote}
    />
  );
};

export default AddNote;
