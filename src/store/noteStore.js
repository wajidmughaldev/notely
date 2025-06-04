// src/store/useNoteStore.js
import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Utility to generate unique IDs
const generateId = () => Date.now().toString()

const useNoteStore = create(
  persist(
    (set, get) => ({
      notes: [
        
      ],
      selectedTagColor:null,
      filteredNotes: [],
      filterTagColor:null,
      addNote: (note) => {
        const newNote = {
          id: generateId(),
          title: note.title,
          content: note.content,
          date: new Date().toDateString(),
          pinned: false,
          archived: false,
          color: note.color || '#D9D9D9',
          blur:false
        }
        set((state) => ({
          notes: [...state.notes, newNote],
        }))
      },
      deleteNote: (id) =>
        set((state) => ({
          notes: state.notes.filter((note) => note.id !== id),
        })),
      editNote: (updatedNote) =>
        set((state) => ({
          notes: state.notes.map((note) =>
            note.id === updatedNote.id ? { ...note, ...updatedNote } : note
          ),
        })),
        toggleBlur:(id)=>
          set((state)=>({
            notes:state.notes.map((note)=>
              note.id == id?{...note,blur:!note.blur}:note)
          })),
        filterNotesByTagColor:(color)=>
          set((state)=>({
            notes:state.notes.filter((note)=>
              note.color == color
            )
          })),
          filterNotesByTagColor: (color) =>
            set((state) => ({
              filteredNotes: state.notes.filter((note) => note.color === color),
            })),
           
          resetFilter: () =>
            set((state) => ({
              filteredNotes: [...state.notes],
            })),
            setSelectedTagColor: (color) =>
              set((state) => ({
                selectedTagColor: state.selectedTagColor=color,
              })),
              setFilterTagColor: (color) =>
                set((state) => ({
                  filterTagColor: color,
                })),
    //   togglePin: (id) =>
    //     set((state) => ({
    //       notes: state.notes.map((note) =>
    //         note.id === id ? { ...note, pinned: !note.pinned } : note
    //       ),
    //     })),
    //   toggleArchive: (id) =>
    //     set((state) => ({
    //       notes: state.notes.map((note) =>
    //         note.id === id ? { ...note, archived: !note.archived } : note
    //       ),
    //     })),
    //   setColor: (id, color) =>
    //     set((state) => ({
    //       notes: state.notes.map((note) =>
    //         note.id === id ? { ...note, color } : note
    //       ),
    //     })),
      // Optional filters
    //   searchTerm: '',
    //   setSearchTerm: (term) => set({ searchTerm: term }),

    //   colorFilter: '',
    //   setColorFilter: (color) => set({ colorFilter: color }),
    }),
    {
      name: 'note-storage', // key in localStorage
    }
  )
)

export default useNoteStore
