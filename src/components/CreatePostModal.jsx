import React, { useState } from 'react';
import { X, Image as ImageIcon, MapPin } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { currentUser } from '../data/dummyData';

const CreatePostModal = ({ isOpen, onClose }) => {
  const { createPost } = useApp();
  const [caption, setCaption] = useState('');
  const [imagePreview, setImagePreview] = useState('https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=800');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = {
      id: Date.now().toString(),
      user: currentUser,
      image: imagePreview,
      caption: caption,
      likes: 0,
      isLiked: false,
      timestamp: 'Just now',
      comments: []
    };
    createPost(newPost);
    setCaption('');
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/60"
            onClick={onClose}
          />
          <motion.div 
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white dark:bg-zinc-900 w-full max-w-3xl rounded-xl overflow-hidden shadow-2xl relative flex flex-col md:flex-row h-[500px]"
          >
            {/* Left: Image Preview */}
            <div className="flex-1 bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center relative border-r border-gray-200 dark:border-zinc-800">
               <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
               <div className="absolute inset-0 flex items-center justify-center opacity-0 hover:opacity-100 bg-black/20 text-white cursor-pointer transition-opacity">
                  <ImageIcon className="w-12 h-12" />
               </div>
            </div>

            {/* Right: Details */}
            <div className="w-full md:w-[300px] flex flex-col bg-white dark:bg-black">
              <div className="p-4 border-b border-gray-200 dark:border-zinc-800">
                <h3 className="font-bold text-center">Create new post</h3>
              </div>
              <div className="p-4 flex items-center gap-2">
                <img src={currentUser.profilePic} alt="" className="w-8 h-8 rounded-full" />
                <span className="font-bold text-sm">{currentUser.username}</span>
              </div>
              <textarea
                placeholder="Write a caption..."
                className="flex-1 w-full p-4 bg-transparent focus:outline-none resize-none text-sm"
                value={caption}
                onChange={(e) => setCaption(e.target.value)}
              />
              <div className="p-4 border-t border-gray-200 dark:border-zinc-800 flex flex-col gap-3">
                <div className="flex items-center justify-between text-gray-500 cursor-pointer">
                  <span className="text-sm">Add location</span>
                  <MapPin className="w-4 h-4" />
                </div>
                <button 
                  onClick={handleSubmit}
                  className="w-full btn-primary py-1.5 text-sm"
                >
                  Share
                </button>
              </div>
            </div>
            
            <button 
              onClick={onClose}
              className="absolute top-4 right-4 text-white hover:scale-110 transition-transform"
            >
              <X className="w-6 h-6" />
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CreatePostModal;
