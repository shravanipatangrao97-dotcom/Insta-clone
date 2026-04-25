import React from 'react';

const Story = ({ story }) => {
  return (
    <div className="flex flex-col items-center gap-1.5 cursor-pointer flex-shrink-0 group">
      <div className={story.isUser ? 'story-ring-user' : 'story-ring-standard'}>
        <div className="p-[2.5px] bg-black rounded-full transition-transform group-active:scale-95">
          <img 
            src={story.user.profilePic} 
            alt={story.user.username}
            className="w-[66px] h-[66px] rounded-full object-cover"
          />
        </div>
      </div>
      <span className="text-[11px] text-white truncate w-20 text-center font-normal">
        {story.isUser ? 'Your story' : story.user.username}
      </span>
    </div>
  );
};

export default Story;
