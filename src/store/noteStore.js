// src/store/useNoteStore.js
import { create } from "zustand";
import { persist } from "zustand/middleware";
import useAuthStore from "./authStore";
import noteService from "../services/noteService";
import {serverTimestamp} from 'firebase/firestore'
const useNoteStore = create(
  persist(
    (set, get) => ({
      notes: [],
      filteredNotes: [],
      selectedTagColor: null,
      filterTagColor: null,
      searchTerm:'',
      fetchNotesFromFirestore: async () => {
        const currentUser = useAuthStore.getState().currentUser;
        if (!currentUser) return;

        const notes = await noteService.getAllNotes(currentUser.uid);
        set({ notes, filteredNotes: notes });
      },

      addNote: async (note) => {
        const currentUser = useAuthStore.getState().currentUser;
        if (!currentUser) return;
      
        const newNote = {
          title: note.title,
          content: note.content,
          date: new Date().toDateString(),
          pinned: false,
          archived: false,
          color: note.color || "#D9D9D9",
          blur: false,
          createdAt:serverTimestamp()
        };
      
        await noteService.addNote(currentUser.uid, newNote);
      },
      

      deleteNote: async (id) => {
        const currentUser = useAuthStore.getState().currentUser;
        if (!currentUser) return;

        const success = await noteService.deleteNote(currentUser.uid, id);
        if (success) {
          const updatedNotes = get().notes.filter((note) => note.id !== id);
          set({ notes: updatedNotes, filteredNotes: updatedNotes });
        }
      },

      editNote: async (updatedNote) => {
        const currentUser = useAuthStore.getState().currentUser;
        if (!currentUser) return;

        const success = await noteService.updateNote(
          currentUser.uid,
          updatedNote.id,
          updatedNote
        );

        if (success) {
          const updatedNotes = get().notes.map((note) =>
            note.id === updatedNote.id ? { ...note, ...updatedNote } : note
          );
          set({ notes: updatedNotes, filteredNotes: updatedNotes });
        }
      },
    
      toggleBlur: (id) =>
        set((state) => {
          const updatedNotes = state.notes.map((note) =>
            note.id === id ? { ...note, blur: !note.blur } : note
          );
          return { notes: updatedNotes, filteredNotes: updatedNotes };
        }),

      filterNotesByTagColor: (color) =>
        set((state) => ({
          filteredNotes: state.notes.filter((note) => note.color === color),
          filterTagColor: color,
        })),

      resetFilter: () =>
        set((state) => ({
          filteredNotes: [...state.notes],
          filterTagColor: null,
        })),

      setSelectedTagColor: (color) => set(() => ({ selectedTagColor: color })),

      togglePin: (id) =>
        set((state) => {
          const updatedNotes = state.notes.map((note) =>
            note.id === id ? { ...note, pinned: !note.pinned } : note
          );
          return { notes: updatedNotes, filteredNotes: updatedNotes };
        }),

      toggleArchive: (id) =>
        set((state) => {
          const updatedNotes = state.notes.map((note) =>
            note.id === id ? { ...note, archived: !note.archived } : note
          );
          return { notes: updatedNotes, filteredNotes: updatedNotes };
        }),

      setColor: (id, color) =>
        set((state) => {
          const updatedNotes = state.notes.map((note) =>
            note.id === id ? { ...note, color } : note
          );
          return { notes: updatedNotes, filteredNotes: updatedNotes };
        }),
      searchNotes: (searchTerm) =>
        set((state) => ({
          searchTerm,
          filteredNotes: state.notes.filter((note) =>
            note.title.toLowerCase().includes(searchTerm.toLowerCase())
          ),
        })),
      
    
    }),
    {
      name: "note-storage",
    }
  )
);

export default useNoteStore;
