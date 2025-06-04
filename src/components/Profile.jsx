import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import Logout from './Logout';

export default function Profile() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block text-left font-sans">
      {/* Profile Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-white rounded-xl shadow cursor-pointer"
      >
        <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-red-500 font-bold text-lg">
          WK
        </div>
        <span className="text-red-500 font-medium">Wajid Khan</span>
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
