import React from 'react';
import { MessageCircle } from 'lucide-react';
import { currentUser } from '../data/dummyData';

const FloatingMessenger = () => {
  return (
    <button className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-white rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95 group">
      <MessageCircle className="w-8 h-8 text-black fill-black" />
      
      {/* Notification Badge */}
      <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#FF3040] rounded-full border-2 border-white flex items-center justify-center text-[10px] text-white font-bold">
        3
      </div>
      
      {/* Avatar Thumbnail */}
      <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white flex items-center justify-center overflow-hidden">
        <img src={currentUser.profilePic} alt="" className="w-full h-full object-cover" />
      </div>

      {/* Label Tooltip (Optional) */}
      <div className="absolute right-full mr-4 bg-zinc-900 text-white text-xs px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
        Messages
      </div>
    </button>
  );
};

export default FloatingMessenger;
