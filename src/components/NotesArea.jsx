import React, { useEffect } from 'react';
import Note from './Note';
import useNoteStore from '../store/noteStore';
import useAuthStore from '../store/authStore';

const NotesArea = () => {
  const currentUser = useAuthStore((state) => state.currentUser);
  const notes = useNoteStore((state) => state.filteredNotes);
  const allNotes = useNoteStore((state) => state.notes);
  const resetFilter = useNoteStore((state) => state.resetFilter);
  const fetchNotesFromFirestore = useNoteStore((state) => state.fetchNotesFromFirestore);

  useEffect(() => {
    if (currentUser) {
      fetchNotesFromFirestore(currentUser.uid);
    }
  }, [currentUser]);

  const isFiltered = notes.length !== allNotes.length && allNotes.length > 0;

  const showNoNotesMessage = () => {
    if (allNotes.length === 0) {
      return <p className="text-gray-500">Click <strong>+</strong> icon to add new notes.</p>;
    }

    if (notes.length === 0 && allNotes.length > 0) {
      return <p className="text-gray-500">Note Unavailable For This Tag</p>;
    }

    return null;
  };

  return (
    <div className="w-full pt-20">
      <h1 className="text-4xl font-poppins pb-10">Notes</h1>

      {isFiltered && (
        <small
          className="mb-3 border border-stone-600 inline-block px-2 cursor-pointer rounded-md hover:bg-stone-800 hover:text-white transition-colors"
          onClick={resetFilter}
        >
          Clear Tags
        </small>
      )}

      <div className="flex gap-3 flex-wrap">
        {notes.length > 0 ? (
          notes.map((note) => <Note key={note.id} data={note} />)
        ) : (
          showNoNotesMessage()
        )}
      </div>
    </div>
  );
};

export default NotesArea;
