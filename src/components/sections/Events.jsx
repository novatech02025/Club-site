import { winners } from "../../data/SiteData";

import React, { useState } from "react";
import { Calendar, Clock, ArrowRight, X } from "lucide-react";
// import { winners } from "../data/SiteData";


 // <-- import winners

const Events = ({ events }) => {
  const [showForm, setShowForm] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(null);

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowForm(true);
  };

  const closeForm = () => {
    setShowForm(false);
    setSelectedEvent(null);
  };

  return (
    <section className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Upcoming Events
        </h2>

        {/* Events Grid */}
        <div className="grid gap-8 mb-20">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300 transform hover:scale-[1.02]"
            >
              <div className="p-8">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                  <div className="flex items-center gap-4">
                    <div
                      className={`px-4 py-2 ${event.color} rounded-full text-white font-semibold text-sm`}
                    >
                      {event.type}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                  </div>
                  <div className="flex items-center gap-4 text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                </div>
                <p className="text-slate-300 text-lg mb-6">{event.description}</p>
                <button
                  onClick={() => handleRegisterClick(event)}
                  className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300 transform hover:scale-105"
                >
                  Register Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Winners Panel */}
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">
          🏆 Our Winners
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {winners.map((winner, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 hover:border-yellow-500/50 overflow-hidden transition-all duration-300 transform hover:scale-[1.05]"
            >
              <img
                src={winner.image}
                alt={winner.name}
                className="w-full h-56 object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-bold text-white">{winner.name}</h3>
                <p className="text-slate-400 mt-2">{winner.event}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal Registration Form */}
      {showForm && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
          <div className="bg-slate-900 p-8 rounded-2xl w-full max-w-lg relative">
            <button
              onClick={closeForm}
              className="absolute top-4 right-4 text-slate-400 hover:text-white"
            >
              <X className="w-6 h-6" />
            </button>
            <h3 className="text-2xl font-bold text-white mb-4">
              Register for {selectedEvent?.title}
            </h3>
            <form className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-purple-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-purple-500 focus:outline-none"
              />
              <input
                type="tel"
                placeholder="Your Phone"
                className="px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-purple-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your College Name"
                className="px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-purple-500 focus:outline-none"
              />
              <input
                type="text"
                placeholder="Your Department and Year"
                className="px-4 py-2 rounded-lg bg-slate-800 text-white border border-slate-700 focus:border-purple-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-semibold hover:from-purple-700 hover:to-blue-700 transition-all duration-300"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};

export default Events;
