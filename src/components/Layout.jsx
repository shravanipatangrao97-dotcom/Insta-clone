import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import BottomNav from './BottomNav';

const Layout = () => {
  return (
    <div className="flex bg-black text-white min-h-screen">
      <Sidebar />
      <main className="flex-1 md:ml-[72px] mb-14 md:mb-0">
        <Outlet />
      </main>
      <BottomNav />
    </div>
  );
};

export default Layout;
