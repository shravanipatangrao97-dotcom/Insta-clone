import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Compass, PlaySquare, PlusSquare, User, MessageCircle } from 'lucide-react';

const BottomNav = () => {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 right-0 h-14 bg-black border-t border-[#262626] flex items-center justify-around z-50">
      <NavLink to="/home" className={({ isActive }) => `p-2 ${isActive ? 'text-white' : 'text-[#A8A8A8]'}`}>
        <Home className="w-6 h-6" />
      </NavLink>
      <NavLink to="/explore" className={({ isActive }) => `p-2 ${isActive ? 'text-white' : 'text-[#A8A8A8]'}`}>
        <Compass className="w-6 h-6" />
      </NavLink>
      <div className="p-2 text-[#A8A8A8]">
        <PlaySquare className="w-6 h-6" />
      </div>
      <div className="p-2 text-[#A8A8A8]">
        <PlusSquare className="w-6 h-6" />
      </div>
      <NavLink to="/messages" className={({ isActive }) => `p-2 ${isActive ? 'text-white' : 'text-[#A8A8A8]'}`}>
        <MessageCircle className="w-6 h-6" />
      </NavLink>
      <NavLink to="/profile/johndoe" className={({ isActive }) => `p-2 ${isActive ? 'text-white' : 'text-[#A8A8A8]'}`}>
        <User className="w-6 h-6" />
      </NavLink>
    </nav>
  );
};

export default BottomNav;
