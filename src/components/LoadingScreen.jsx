import React from 'react';

const LoadingScreen = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center">
      <div className="text-center">
        <div className="relative w-24 h-24 mx-auto mb-8">
          <div className="absolute inset-0 border-4 border-purple-400 rounded-full animate-spin border-t-transparent"></div>
          <div className="absolute inset-2 border-4 border-blue-400 rounded-full animate-spin border-b-transparent animation-delay-150"></div>
        </div>
        <h1 className="text-4xl font-bold text-white mb-4 animate-pulse">NOVA TECH</h1>
        <p className="text-purple-300">Loading the future...</p>
      </div>
    </div>
  );
};

export default LoadingScreen;