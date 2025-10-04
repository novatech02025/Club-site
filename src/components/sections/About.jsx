import React from 'react';
import { Users, Calendar, Zap, MapPin } from 'lucide-react';

const About = () => {
  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          About Nova Tech  
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-white">Our Mission</h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              Nova Tech Club is dedicated to fostering innovation, creativity, and technical excellence among students. 
              We believe in the power of collaborative learning and hands-on experience to shape the future of technology.
            </p>
            <p className="text-slate-300 text-lg leading-relaxed">
              Through workshops, hackathons, and real-world projects, we provide our members with the skills and 
              confidence needed to tackle tomorrow's challenges.
            </p>

            {/* New Info about Club */}
            <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 flex items-start gap-4 mt-6">
              <MapPin className="w-10 h-10 text-cyan-400 mt-1" />
              <div>
                <h4 className="text-xl font-bold text-white mb-2">Nova Tech Club</h4>
                <p className="text-slate-300 leading-relaxed">
                  A coding and innovation club at <span className="text-purple-400 font-semibold">RIMT Bareilly</span>,  
                  fostering future-ready skills in programming and technology.  
                  <br />
                  <span className="text-slate-400">Venue:</span> Robotics Lab, Room No. <span className="font-semibold text-cyan-400">209</span>.
                </p>
              </div>
            </div>
          </div>

          {/* Two images side by side */}
          <div className="relative flex gap-6">
            <div className="w-1/2 h-64 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src="src/assets/nova.png"   
                alt="Nova Tech Left"
                className="w-58 h-65 object-contain"
              />
            </div>

            <div className="w-1/2 h-64 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center overflow-hidden">
              <img 
                src="src/assets/rimt.png"   
                alt="Nova Tech Illustration"
                className="w-58 h-65 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
            <Users className="w-12 h-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-4">Community Driven</h3>
            <p className="text-slate-300">
              Join a vibrant community of like-minded individuals passionate about technology and innovation.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
            <Calendar className="w-12 h-12 text-blue-400 mb-4" />
            <h3 className="text-xl font-bold mb-4">Regular Events</h3>
            <p className="text-slate-300">
              Participate in weekly workshops, monthly hackathons, and exclusive tech talks with industry experts.
            </p>
          </div>
          
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
            <Zap className="w-12 h-12 text-cyan-400 mb-4" />
            <h3 className="text-xl font-bold mb-4">Hands-on Learning</h3>
            <p className="text-slate-300">
              Work on real-world projects and gain practical experience with the latest technologies and frameworks.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
