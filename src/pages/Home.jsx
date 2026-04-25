import React from 'react';
import Story from '../components/Story';
import Post from '../components/Post';
import RightSidebar from '../components/RightSidebar';
import FloatingMessenger from '../components/FloatingMessenger';
import { useApp } from '../context/AppContext';

const Home = () => {
  const { posts, stories } = useApp();

  return (
    <div className="flex justify-center max-w-[1015px] mx-auto min-h-screen">
      {/* Main Feed */}
      <section className="flex-1 max-w-[630px] pt-8 overflow-x-hidden">
        {/* Stories Section */}
        <div className="flex gap-4 overflow-x-auto no-scrollbar mb-8 px-4 md:px-0">
          {stories.map((story) => (
            <Story key={story.id} story={story} />
          ))}
        </div>

        {/* Posts Feed */}
        <div className="flex flex-col gap-0 px-4 md:px-0">
          {posts.map((post) => (
            <Post key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* Right Sidebar */}
      <RightSidebar />

      {/* Floating Messenger */}
      <FloatingMessenger />
    </div>
  );
};

export default Home;
