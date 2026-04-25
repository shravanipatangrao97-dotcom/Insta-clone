import React, { useState } from 'react';
import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal, Music, VolumeX, Volume2, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useApp } from '../context/AppContext';
import { currentUser } from '../data/dummyData';

const Post = ({ post }) => {
  const { toggleLike, addComment } = useApp();
  const [commentText, setCommentText] = useState('');
  const [showHeartPop, setShowHeartPop] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  const handleDoubleClick = () => {
    if (!post.isLiked) {
      toggleLike(post.id);
    }
    setShowHeartPop(true);
    setTimeout(() => setShowHeartPop(false), 1000);
  };

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === post.images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? post.images.length - 1 : prev - 1));
  };

  const handleSubmitComment = (e) => {
    e.preventDefault();
    if (commentText.trim()) {
      addComment(post.id, commentText, currentUser);
      setCommentText('');
    }
  };

  return (
    <article className="max-w-[470px] mx-auto mb-8 pb-4">
      {/* Header */}
      <div className="flex items-center justify-between p-3 px-0">
        <div className="flex items-center gap-3">
          <div className="story-ring-standard p-[2px]">
            <img 
              src={post.user.profilePic} 
              alt={post.user.username} 
              className="w-8 h-8 rounded-full border-2 border-black"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="font-bold text-sm hover:text-zinc-400 cursor-pointer">{post.user.username}</span>
              <span className="text-[#A8A8A8] text-sm">• {post.timestamp}</span>
            </div>
            {post.audioName && (
              <div className="flex items-center gap-1">
                <Music className="w-2 h-2 text-white" />
                <span className="text-[12px] font-normal truncate max-w-[200px]">{post.audioName}</span>
              </div>
            )}
          </div>
        </div>
        <MoreHorizontal className="w-5 h-5 cursor-pointer text-white" />
      </div>

      {/* Media Container */}
      <div 
        className="relative aspect-square bg-[#121212] rounded-md overflow-hidden"
        onDoubleClick={handleDoubleClick}
      >
        <img 
          src={post.images[currentImageIndex]} 
          alt="Post content" 
          className="w-full h-full object-cover transition-opacity duration-300"
        />

        {/* Carousel Controls */}
        {post.images.length > 1 && (
          <>
            <button 
              onClick={(e) => { e.stopPropagation(); prevImage(); }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-zinc-900/60 rounded-full hover:bg-zinc-800 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={(e) => { e.stopPropagation(); nextImage(); }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-zinc-900/60 rounded-full hover:bg-zinc-800 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Mute Button */}
        {post.isVideo && (
          <button 
            onClick={(e) => { e.stopPropagation(); setIsMuted(!isMuted); }}
            className="absolute bottom-3 right-3 p-1.5 bg-[#1a1a1a]/80 rounded-full text-white"
          >
            {isMuted ? <VolumeX className="w-3 h-3" /> : <Volume2 className="w-3 h-3" />}
          </button>
        )}
        
        {/* Heart Animation */}
        <AnimatePresence>
          {showHeartPop && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1.2, opacity: 1 }}
              exit={{ scale: 0, opacity: 0 }}
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
            >
              <Heart className="w-20 h-20 text-white fill-white shadow-2xl" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Indicators */}
      {post.images.length > 1 && (
        <div className="flex justify-center gap-1.5 mt-3">
          {post.images.map((_, i) => (
            <div 
              key={i} 
              className={`w-1.5 h-1.5 rounded-full transition-colors ${i === currentImageIndex ? 'bg-[#0095F6]' : 'bg-[#262626]'}`} 
            />
          ))}
        </div>
      )}

      {/* Actions */}
      <div className="pt-3">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-4">
            <button onClick={() => toggleLike(post.id)} className="transition-transform active:scale-125">
              <Heart 
                className={`w-6 h-6 ${post.isLiked ? 'text-[#FF3040] fill-[#FF3040]' : 'hover:text-[#A8A8A8]'}`} 
              />
            </button>
            <MessageCircle className="w-6 h-6 hover:text-[#A8A8A8] cursor-pointer" />
            <Send className="w-6 h-6 hover:text-[#A8A8A8] cursor-pointer" />
          </div>
          <Bookmark className="w-6 h-6 hover:text-[#A8A8A8] cursor-pointer" />
        </div>

        <div className="flex gap-4 mb-2">
          <span className="font-bold text-sm">{post.likes} likes</span>
          <span className="font-bold text-sm text-[#A8A8A8]">{post.commentsCount} comments</span>
          <span className="font-bold text-sm text-[#A8A8A8]">{post.sharesCount} shares</span>
        </div>
        
        <div className="text-sm">
          <span className="font-bold mr-2">{post.user.username}</span>
          <span className="font-normal">{post.caption}</span>
        </div>

        {post.comments.length > 0 && (
          <button className="text-[#A8A8A8] text-sm mt-1 hover:text-zinc-500 transition-colors">
            View all {post.commentsCount} comments
          </button>
        )}

        <form onSubmit={handleSubmitComment} className="mt-3 flex items-center gap-2">
          <input
            type="text"
            placeholder="Add a comment..."
            className="flex-1 bg-transparent text-sm focus:outline-none placeholder-[#A8A8A8]"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
          {commentText.trim() && (
            <button type="submit" className="text-[#0095F6] font-bold text-sm">Post</button>
          )}
        </form>
      </div>
    </article>
  );
};

export default Post;
