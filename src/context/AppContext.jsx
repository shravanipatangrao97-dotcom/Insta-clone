import React, { createContext, useContext, useState } from 'react';
import { initialPosts, stories as initialStories } from '../data/dummyData';

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [posts, setPosts] = useState(initialPosts);
  const [stories, setStories] = useState(initialStories);
  const [isDarkMode, setIsDarkMode] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  const toggleLike = (postId) => {
    setPosts(prevPosts => prevPosts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          isLiked: !post.isLiked,
          likes: post.isLiked ? post.likes - 1 : post.likes + 1
        };
      }
      return post;
    }));
  };

  const addComment = (postId, commentText, user) => {
    setPosts(prevPosts => prevPosts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [
            ...post.comments,
            {
              id: Date.now().toString(),
              user,
              text: commentText,
              timestamp: 'Just now'
            }
          ]
        };
      }
      return post;
    }));
  };

  const createPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  return (
    <AppContext.Provider value={{ 
      posts, 
      stories, 
      isDarkMode, 
      toggleLike, 
      addComment, 
      createPost, 
      toggleDarkMode 
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => useContext(AppContext);
