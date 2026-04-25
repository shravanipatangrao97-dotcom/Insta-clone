import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (login(username, password)) {
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-black p-4">
      <div className="w-full max-w-[350px]">
        {/* Login Box */}
        <div className="bg-white dark:bg-black border border-gray-300 dark:border-zinc-800 p-8 mb-4 flex flex-col items-center">
          <h1 className="text-4xl font-bold italic mb-8">Instagram</h1>
          
          <form onSubmit={handleLogin} className="w-full flex flex-col gap-2">
            <input
              type="text"
              placeholder="Username"
              className="w-full p-3 text-xs bg-gray-50 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-sm focus:outline-none focus:border-gray-500"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full p-3 text-xs bg-gray-50 dark:bg-zinc-900 border border-gray-300 dark:border-zinc-700 rounded-sm focus:outline-none focus:border-gray-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="submit"
              className="btn-primary mt-2 text-sm py-1.5"
            >
              Log In
            </button>
            
            {error && <p className="text-instagram-red text-center text-xs mt-4">{error}</p>}
            
            <div className="flex items-center gap-4 my-4 w-full">
              <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-800" />
              <span className="text-xs font-semibold text-gray-500">OR</span>
              <div className="flex-1 h-px bg-gray-200 dark:bg-zinc-800" />
            </div>

            <button type="button" className="text-indigo-900 dark:text-blue-400 font-semibold text-sm">
              Log in with Facebook
            </button>
            
            <a href="#" className="text-xs text-center mt-4">Forgot password?</a>
          </form>
        </div>

        {/* Sign Up Box */}
        <div className="bg-white dark:bg-black border border-gray-300 dark:border-zinc-800 p-6 text-center text-sm">
          <span>Don't have an account? </span>
          <button className="text-instagram-blue font-semibold">Sign up</button>
        </div>
      </div>
    </div>
  );
};

export default Login;
