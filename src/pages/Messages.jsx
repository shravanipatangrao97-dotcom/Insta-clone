import React, { useState } from 'react';
import { Edit, Info, Video, Phone, ChevronDown } from 'lucide-react';
import { messages, currentUser } from '../data/dummyData';

const Messages = () => {
  const [activeChat, setActiveChat] = useState(messages[0]);
  const [chatInput, setChatInput] = useState('');
  const [chatMessages, setChatMessages] = useState([
    { id: 1, sender: 'them', text: 'Hey, did you see that post?', time: '10:30 AM' },
    { id: 2, sender: 'me', text: 'Yeah, looks cool! Where was it?', time: '10:32 AM' },
  ]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (chatInput.trim()) {
      setChatMessages([...chatMessages, {
        id: Date.now(),
        sender: 'me',
        text: chatInput,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }]);
      setChatInput('');
    }
  };

  return (
    <div className="h-[calc(100vh-100px)] md:h-[calc(100vh-40px)] m-2 md:m-4 flex border border-gray-200 dark:border-zinc-800 rounded-md overflow-hidden bg-white dark:bg-black">
      {/* Chats Sidebar */}
      <div className="w-full md:w-80 flex flex-col border-r border-gray-200 dark:border-zinc-800">
        <div className="p-5 flex items-center justify-between border-b border-gray-100 dark:border-zinc-900">
          <div className="flex items-center gap-2 font-bold cursor-pointer">
            {currentUser.username} <ChevronDown className="w-4 h-4" />
          </div>
          <Edit className="w-5 h-5 cursor-pointer" />
        </div>
        
        <div className="flex-1 overflow-y-auto">
          {messages.map((chat) => (
            <div 
              key={chat.id} 
              onClick={() => setActiveChat(chat)}
              className={`flex items-center gap-3 p-4 cursor-pointer hover:bg-gray-50 dark:hover:bg-zinc-900 transition-colors ${activeChat.id === chat.id ? 'bg-gray-50 dark:bg-zinc-900' : ''}`}
            >
              <img src={chat.user.profilePic} alt="" className="w-14 h-14 rounded-full" />
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-sm truncate">{chat.user.username}</p>
                <p className={`text-xs truncate ${chat.unread ? 'font-bold text-black dark:text-white' : 'text-gray-500'}`}>
                  {chat.lastMessage} • {chat.time}
                </p>
              </div>
              {chat.unread && <div className="w-2 h-2 bg-instagram-blue rounded-full" />}
            </div>
          ))}
        </div>
      </div>

      {/* active Chat Window */}
      <div className="hidden md:flex flex-1 flex-col">
        <div className="p-4 border-b border-gray-200 dark:border-zinc-800 flex items-center justify-between">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src={activeChat.user.profilePic} alt="" className="w-8 h-8 rounded-full" />
            <span className="font-bold">{activeChat.user.username}</span>
          </div>
          <div className="flex items-center gap-4">
            <Phone className="w-5 h-5 cursor-pointer" />
            <Video className="w-6 h-6 cursor-pointer" />
            <Info className="w-6 h-6 cursor-pointer" />
          </div>
        </div>

        <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4">
          <div className="flex flex-col items-center py-8">
            <img src={activeChat.user.profilePic} alt="" className="w-24 h-24 rounded-full mb-2" />
            <p className="font-bold text-xl">{activeChat.user.fullName}</p>
            <p className="text-gray-500 text-sm">{activeChat.user.username} • Instagram</p>
            <button className="mt-4 bg-gray-100 dark:bg-zinc-900 px-4 py-1.5 rounded-lg text-sm font-semibold">
              View Profile
            </button>
          </div>

          {chatMessages.map((msg) => (
            <div 
              key={msg.id} 
              className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
            >
              <div 
                className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
                  msg.sender === 'me' 
                  ? 'bg-instagram-blue text-white' 
                  : 'border border-gray-200 dark:border-zinc-800 text-black dark:text-white'
                }`}
              >
                {msg.text}
              </div>
            </div>
          ))}
        </div>

        <div className="p-4">
          <form 
            onSubmit={handleSendMessage}
            className="flex items-center gap-3 border border-gray-200 dark:border-zinc-800 rounded-full px-4 py-2"
          >
            <input 
              type="text" 
              placeholder="Message..." 
              className="flex-1 bg-transparent focus:outline-none text-sm"
              value={chatInput}
              onChange={(e) => setChatInput(e.target.value)}
            />
            {chatInput.trim() && (
              <button type="submit" className="text-instagram-blue font-bold text-sm">
                Send
              </button>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Messages;
