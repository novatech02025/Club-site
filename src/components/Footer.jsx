import React from "react";
import { Zap, Instagram, Linkedin, Twitter, Github } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10 text-slate-300">
        
        {/* Logo + About */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              <Zap className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              NOVA TECH
            </span>
          </div>
          <p className="text-slate-400 text-sm leading-relaxed">
            Innovating the future, one line of code at a time.  
            Join us in building projects, sharing knowledge, and growing together.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-purple-400">Home</a></li>
            <li><a href="/about" className="hover:text-purple-400">About</a></li>
            <li><a href="/events" className="hover:text-purple-400">Events</a></li>
            <li><a href="/team" className="hover:text-purple-400">Team</a></li>
            <li><a href="/contact" className="hover:text-purple-400">Contact</a></li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h3 className="text-white font-semibold mb-4">Resources</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/docs" className="hover:text-purple-400">Docs</a></li>
            <li><a href="/blog" className="hover:text-purple-400">Blog</a></li>
            <li><a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="hover:text-purple-400">GitHub</a></li>
            <li><a href="/join" className="hover:text-purple-400">Join Us</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-purple-400"><Instagram size={20} /></a>
            <a href="#" className="hover:text-purple-400"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-purple-400"><Twitter size={20} /></a>
            <a href="#" className="hover:text-purple-400"><Github size={20} /></a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-slate-700 py-4 text-center text-sm text-slate-500">
        © {new Date().getFullYear()} Nova Tech Club. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
