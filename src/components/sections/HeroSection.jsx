import React from 'react';

const Hero = ({ setActiveSection }) => {
  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 bg-cover bg-center"
      style={{
        backgroundImage: "url('src/assets/bgimgjpg')", // <-- replace with your image path
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 via-blue-900/40 to-indigo-900/40"></div>

      {/* Blurry glowing blobs */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
      </div>

      {/* Content */}
      <div className="text-center z-10 max-w-4xl mx-auto px-4">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent animate-fade-in">
          NOVA TECH
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto leading-relaxed">
          Empowering the next generation of innovators through cutting-edge technology and collaborative learning
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => setActiveSection('about')}
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            Discover More
          </button>
          <button
            onClick={() => setActiveSection('events')}
            className="px-8 py-4 border-2 border-slate-600 rounded-full font-semibold hover:border-purple-400 hover:text-purple-400 transition-all duration-300 transform hover:scale-105"
          >
            Upcoming Events
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
