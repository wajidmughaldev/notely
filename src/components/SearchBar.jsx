import React from 'react'
import { Search } from 'lucide-react'

const SearchBar = () => {
  return (
    <div className='border border-stone-300 flex w-100 items-center px-4 py-2 rounded-full'>
    <input type='text' placeholder='Search Notes' className=' border-none w-[100%] outline-none'></input>
    <Search strokeWidth={1}/>
    </div>
  )
}

export default SearchBar