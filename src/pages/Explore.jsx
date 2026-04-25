import React from 'react';
import { Heart, MessageCircle } from 'lucide-react';
import { explorePosts } from '../data/dummyData';

const Explore = () => {
  return (
    <div className="pt-4 px-1 md:px-0">
      <div className="grid grid-cols-3 gap-1 md:gap-4">
        {explorePosts.map((post) => (
          <div key={post.id} className="relative aspect-square group cursor-pointer overflow-hidden rounded-sm">
            <img 
              src={post.image} 
              alt="Explore" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold">
              <div className="flex items-center gap-1">
                <Heart className="w-5 h-5 fill-white" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{post.comments}</span>
              </div>
            </div>
          </div>
        ))}
        {/* Repeat some for denser grid */}
        {explorePosts.map((post) => (
          <div key={post.id + '_2'} className="relative aspect-square group cursor-pointer overflow-hidden rounded-sm">
            <img 
              src={post.image} 
              alt="Explore" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-6 text-white font-bold">
              <div className="flex items-center gap-1">
                <Heart className="w-5 h-5 fill-white" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle className="w-5 h-5 fill-white" />
                <span>{post.comments}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Explore;
