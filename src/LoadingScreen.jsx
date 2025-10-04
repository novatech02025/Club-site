import React from 'react';
import Logo from '../assets/logo.png'; 

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="relative w-32 h-32">
        {/* Outer spinning ring */}
        <div className="absolute inset-0 border-4 border-purple-400 rounded-full animate-spin border-t-transparent"></div>

        {/* Inner spinning ring */}
        <div className="absolute inset-4 border-4 border-blue-400 rounded-full animate-spin border-b-transparent"></div>

        {/* Logo in center */}
        <div className="absolute inset-0 flex items-center justify-center">
          <img src={Logo} alt="Nova Tech Logo" className="w-16 h-16 object-contain" />
        </div>
      </div>

      <div className="text-center mt-8">
        <h1 className="text-4xl font-bold text-white mb-2 animate-pulse">NOVA TECH</h1>
        <p className="text-purple-300">Loading the future...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;
