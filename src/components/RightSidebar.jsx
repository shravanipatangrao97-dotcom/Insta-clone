import React from 'react';
import { currentUser, suggestions } from '../data/dummyData';

const RightSidebar = () => {
  return (
    <aside className="hidden lg:block w-[320px] pt-8 pl-8 flex-shrink-0">
      {/* Current User Profile */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <img 
            src={currentUser.profilePic} 
            alt={currentUser.username} 
            className="w-12 h-12 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-bold text-sm">{currentUser.username}</span>
            <span className="text-[#A8A8A8] text-sm">{currentUser.fullName}</span>
          </div>
        </div>
        <button className="text-[#0095F6] text-xs font-bold hover:text-white transition-colors">
          Switch
        </button>
      </div>

      {/* Suggestions Header */}
      <div className="flex items-center justify-between mb-4">
        <span className="text-[#A8A8A8] font-bold text-sm">Suggested for you</span>
        <button className="text-white text-xs font-bold hover:text-[#A8A8A8] transition-colors">
          See All
        </button>
      </div>

      {/* Suggestions List */}
      <div className="flex flex-col gap-4 mb-8">
        {suggestions.map((user) => (
          <div key={user.id} className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img 
                src={user.profilePic} 
                alt={user.username} 
                className="w-8 h-8 rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="font-bold text-xs">{user.username}</span>
                <span className="text-[#A8A8A8] text-[10px] truncate max-w-[150px]">
                  {user.subtitle}
                </span>
              </div>
            </div>
            <button className="text-[#0095F6] text-xs font-bold hover:text-white transition-colors">
              Follow
            </button>
          </div>
        ))}
      </div>

      {/* Footer Links */}
      <div className="flex flex-wrap gap-x-2 gap-y-1 mb-6">
        {['About', 'Help', 'Press', 'API', 'Jobs', 'Privacy', 'Terms', 'Locations', 'Language', 'Meta Verified'].map((link) => (
          <span key={link} className="text-[#737373] text-[12px] hover:underline cursor-pointer">
            {link}
          </span>
        ))}
      </div>
      
      <p className="text-[#737373] text-[12px] uppercase">
        © 2026 INSTAGRAM FROM META
      </p>
    </aside>
  );
};

export default RightSidebar;
