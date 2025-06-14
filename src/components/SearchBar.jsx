import React from 'react'
import { Search } from 'lucide-react'
import useNoteStore from '../store/noteStore'
const SearchBar = () => {
  const useSearchNotes = useNoteStore((state)=>state.searchNotes)
  const searchTerm = useNoteStore((state)=>state.searchTerm)
  console.log(searchTerm)
  return (
    <div className='border border-stone-300 flex w-100 items-center px-4 py-2 rounded-full'>
    <input type='text' placeholder='Search Notes' className=' border-none w-[100%] outline-none' value={searchTerm} onChange={(e)=>useSearchNotes(e.target.value)}></input>
    <Search strokeWidth={1}/>
    </div>
  )
}

export default SearchBar