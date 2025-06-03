import React from 'react'
import {Plus} from 'lucide-react'
import Tags from './Tags'
import { Link } from 'react-router-dom'
const Sidebar = () => {
  const RoundedCircle="w-[70px] h-[70px] my-20 bg-[#141414] text-white rounded-full hover:scale-95 transition-all flex justify-center items-center"
    return (
    <div className='flex flex-col items-center   h-screen  pt-10'>
        <h1 className='font-poppins text-2xl'><Link to="/">Notely</Link></h1>
        <Link to='/add' className={RoundedCircle}><Plus size={40}  strokeWidth='1px'/></Link>
        <Tags />
    </div>
  )
}

export default Sidebar