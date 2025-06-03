import React,{useEffect} from 'react'
import Note from './Note'
import useNoteStore from '../store/noteStore'
import Button from './Button';

const NotesArea = () => {
  
  const notes = useNoteStore((state) => state.filteredNotes);
  const allNotes = useNoteStore((state) => state.notes);
  const resetFilter = useNoteStore((state) => state.resetFilter);
  
  useEffect(() => {
    if (notes.length === 0 && allNotes.length > 0) {
      resetFilter(); // load all notes
    }
  }, []);
  return (
    <div className='w-12/12 pt-20'>
        <h1 className='text-4xl font-poppins pb-10'>Notes</h1>
        {notes&&<small className='mb-3 border border-stone-600 inline-block px-2 cursor-pointer rounded-md hover:bg-stone-800 hover:text-white transition-colors'  onClick={resetFilter}>Clear Tags</small>}
        
        <div className='flex gap-3 flex-wrap '>
        
        {allNotes.length<=0?<p>Click + Button To Add Notes</p>:notes.map((note)=>{
          return <Note key={note.id} data={note}/>
        })}
        
        </div>
    </div>
  )
}

export default NotesArea