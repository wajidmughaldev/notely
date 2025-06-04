import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Logout from './Logout';
import useAuthStore from '../store/authStore';

export default function Profile() {
  const [open, setOpen] = useState(false);
  const currentUser = useAuthStore((state)=>state.currentUser)
  const{name}=currentUser
  const profileInitials = name
  ? name
      .split(' ')
      .map(word => word[0])
      .join('')
      .slice(0, 3)
      .toUpperCase()
  : 'USR';

  return (
    <div className="relative inline-block text-left font-sans">
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow cursor-pointer"
      >
        <div className="w-10 h-10 rounded-full bg-stone-500 flex items-center justify-center text-white font-bold text-lg">
          {profileInitials}
        </div>
        <span className="text-stone-600 font-medium">{name.toUpperCase()}</span>
        <ChevronDown className="w-4 h-4 text-gray-600" />
      </button>

      {/* Dropdown Options */}
      {open && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-xl shadow border border-gray-200">
          <div className="px-4 py-3 hover:bg-gray-100 cursor-pointer">
            <Logout text='Log out'/>
          </div>
        </div>
      )}
    </div>
  );
}
