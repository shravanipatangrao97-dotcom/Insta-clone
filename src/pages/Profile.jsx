import React from 'react';
import { Settings, Grid, Bookmark, Tag } from 'lucide-react';
import { currentUser, initialPosts } from '../data/dummyData';

const Profile = () => {
  return (
    <div className="pt-8 px-4 max-w-4xl mx-auto">
      {/* Header */}
      <header className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-20 mb-12">
        <div className="story-ring p-1">
          <img 
            src={currentUser.profilePic} 
            alt={currentUser.username} 
            className="w-20 h-20 md:w-36 md:h-36 rounded-full border-4 border-white dark:border-black object-cover"
          />
        </div>
        
        <div className="flex-1 flex flex-col gap-6 w-full md:w-auto">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <h2 className="text-xl">{currentUser.username}</h2>
            <div className="flex gap-2">
              <button className="bg-gray-100 dark:bg-zinc-800 px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors">
                Edit profile
              </button>
              <button className="bg-gray-100 dark:bg-zinc-800 px-4 py-1.5 rounded-lg text-sm font-semibold hover:bg-gray-200 dark:hover:bg-zinc-700 transition-colors">
                View archive
              </button>
              <Settings className="w-6 h-6 cursor-pointer" />
            </div>
          </div>

          <div className="flex justify-center md:justify-start gap-8">
            <div className="text-center md:text-left">
              <span className="font-bold">{currentUser.postsCount}</span> posts
            </div>
            <div className="text-center md:text-left font-semibold">
              <span className="font-bold">{currentUser.followers}</span> followers
            </div>
            <div className="text-center md:text-left">
              <span className="font-bold">{currentUser.following}</span> following
            </div>
          </div>

          <div className="text-center md:text-left">
            <p className="font-bold">{currentUser.fullName}</p>
            <p className="text-sm whitespace-pre-line">{currentUser.bio}</p>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="border-t border-gray-200 dark:border-zinc-800 flex justify-center gap-12 text-xs uppercase tracking-widest font-semibold">
        <div className="border-t border-black dark:border-white py-4 flex items-center gap-2 cursor-pointer">
          <Grid className="w-3 h-3" /> POSTS
        </div>
        <div className="py-4 flex items-center gap-2 text-gray-400 cursor-pointer">
          <Bookmark className="w-3 h-3" /> SAVED
        </div>
        <div className="py-4 flex items-center gap-2 text-gray-400 cursor-pointer">
          <Tag className="w-3 h-3" /> TAGGED
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-1 md:gap-6">
        {[...initialPosts, ...initialPosts].map((post, i) => (
          <div key={i} className="aspect-square bg-zinc-100 dark:bg-zinc-900 group relative cursor-pointer overflow-hidden rounded-sm">
            <img src={post.image} alt="" className="w-full h-full object-cover" />
            {/* Minimal overlay on profile */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Profile;
