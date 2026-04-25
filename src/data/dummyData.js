export const currentUser = {
  id: 'u1',
  username: 'johndoe',
  fullName: 'John Doe',
  profilePic: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
  bio: 'Digital Creator | Minimalist | Nature Lover 🌿',
  followers: '1.2k',
  following: '450',
  postsCount: 12,
};

export const users = [
  {
    id: 'u2',
    username: 'sarah_art',
    profilePic: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150',
    fullName: 'Sarah Jenkins',
    isFollowing: true,
  },
  {
    id: 'u3',
    username: 'pixel_purist',
    profilePic: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&q=80&w=150',
    fullName: 'David Chen',
    isFollowing: false,
  },
  {
    id: 'u4',
    username: 'wanderlust_lucy',
    profilePic: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150',
    fullName: 'Lucy Smith',
    isFollowing: true,
  },
  {
    id: 'u5',
    username: 'tech_guru',
    profilePic: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150',
    fullName: 'Alex Rivera',
    isFollowing: false,
  },
];

export const suggestions = [
  { id: 's1', username: 'creative_mind', fullName: 'Creative Mind', profilePic: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&q=80&w=150', subtitle: 'Followed by sarah_art + 2 more' },
  { id: 's2', username: 'nature_daily', fullName: 'Nature Daily', profilePic: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150', subtitle: 'Suggested for you' },
  { id: 's3', username: 'design_inspire', fullName: 'Design Inspire', profilePic: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=150', subtitle: 'Followed by pixel_purist' },
  { id: 's4', username: 'chef_luigi', fullName: 'Luigi Rossi', profilePic: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150', subtitle: 'Suggested for you' },
  { id: 's5', username: 'travel_junkie', fullName: 'Travel Junkie', profilePic: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150', subtitle: 'New to Instagram' },
];

export const stories = [
  { id: 'st1', user: currentUser, isUser: true },
  { id: 'st2', user: users[0] },
  { id: 'st3', user: users[1] },
  { id: 'st4', user: users[2] },
  { id: 'st5', user: users[3] },
  { id: 'st6', user: users[0] },
  { id: 'st7', user: users[1] },
  { id: 'st8', user: users[2] },
];

export const initialPosts = [
  {
    id: 'p1',
    user: users[0],
    images: [
      'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=800',
      'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=800'
    ],
    audioName: 'Nature Sounds - Original audio',
    caption: 'Nature is the best therapist. 🌲✨',
    likes: '17K',
    commentsCount: '170',
    sharesCount: '17',
    isLiked: false,
    timestamp: '2h',
    isVideo: false,
    comments: [
      { id: 'c1', user: users[1], text: 'Wow, this looks incredible!' },
    ],
  },
  {
    id: 'p2',
    user: users[2],
    images: ['https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800'],
    audioName: 'Lofi Beats - Study Session',
    caption: 'Late night coding sessions are the best. 💻🔥',
    likes: '8.5K',
    commentsCount: '45',
    sharesCount: '12',
    isLiked: true,
    timestamp: '5h',
    isVideo: true,
    comments: [],
  },
];
