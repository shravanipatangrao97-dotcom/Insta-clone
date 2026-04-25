import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, Search, Compass, PlaySquare, MessageCircle, 
  Heart, PlusSquare, User, Instagram, Menu, LogOut
} from 'lucide-react';
import { useApp } from '../context/AppContext';
import { useAuth } from '../context/AuthContext';
import CreatePostModal from './CreatePostModal';

const Sidebar = () => {
  const { isDarkMode, toggleDarkMode } = useApp();
  const { logout } = useAuth();
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);

  const navItems = [
    { icon: Home, path: '/home', label: 'Home' },
    { icon: Search, path: '#', label: 'Search' },
    { icon: Compass, path: '/explore', label: 'Explore' },
    { icon: PlaySquare, path: '#', label: 'Reels' },
    { icon: MessageCircle, path: '/messages', label: 'Messages' },
    { icon: Heart, path: '#', label: 'Notifications', hasDot: true },
    { icon: PlusSquare, path: '#', label: 'Create', isButton: true },
    { icon: User, path: '/profile/johndoe', label: 'Profile' },
  ];

  return (
    <>
      <aside className="hidden md:flex flex-col h-screen w-[72px] border-r border-[#262626] py-8 items-center fixed left-0 top-0 bg-black z-40">
        {/* Logo */}
        <div className="mb-10 group cursor-pointer">
          <Instagram className="w-7 h-7 text-white group-hover:scale-110 transition-transform" />
        </div>

        {/* Nav Items */}
        <nav className="flex-1 flex flex-col gap-2 w-full px-2">
          {navItems.map((item, index) => (
            item.isButton ? (
              <button
                key={index}
                onClick={() => setIsCreateModalOpen(true)}
                className="nav-item group"
                title={item.label}
              >
                <item.icon className="nav-icon group-hover:scale-110" />
              </button>
            ) : (
              <NavLink
                key={index}
                to={item.path}
                className={({ isActive }) => `
                  nav-item relative group ${isActive ? 'bg-zinc-900/50' : ''}
                `}
                title={item.label}
              >
                <item.icon className={`nav-icon group-hover:scale-110 ${item.hasDot ? 'relative' : ''}`} />
                {item.hasDot && (
                  <div className="absolute top-2 right-2 min-w-[18px] h-[18px] px-1 bg-[#FF3040] rounded-full border-2 border-black flex items-center justify-center text-[10px] text-white font-bold">
                    5
                  </div>
                )}
              </NavLink>
            )
          ))}
        </nav>

        {/* Bottom Actions */}
        <div className="mt-auto flex flex-col gap-4 w-full px-2">
          <button 
            onClick={logout}
            className="nav-item group"
            title="Logout"
          >
            <LogOut className="nav-icon group-hover:scale-110" />
          </button>
          <button className="nav-item group">
            <Menu className="nav-icon group-hover:scale-110" />
          </button>
        </div>
      </aside>

      <CreatePostModal 
        isOpen={isCreateModalOpen} 
        onClose={() => setIsCreateModalOpen(false)} 
      />
    </>
  );
};

export default Sidebar;
