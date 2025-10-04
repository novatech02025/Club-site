import React, { useState } from "react";
import { dailyChallenges } from "../data/SiteData";


const AdminDashboard = () => {
  const [challenges, setChallenges] = useState(dailyChallenges);
  const [newChallenge, setNewChallenge] = useState({
    level: "",
    title: "",
    description: "",
    algorithm: "",
    code: "",
  });

  const handleAddChallenge = () => {
    if (!newChallenge.title) return;
    setChallenges([
      ...challenges,
      {
        ...newChallenge,
        algorithm: newChallenge.algorithm.split("\n"),
      },
    ]);
    setNewChallenge({ level: "", title: "", description: "", algorithm: "", code: "" });
  };

  const handleDelete = (index) => {
    const updated = challenges.filter((_, i) => i !== index);
    setChallenges(updated);
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <h1 className="text-3xl font-bold text-purple-300 mb-6">Admin Dashboard</h1>

      {/* Add Challenge Form */}
      <div className="bg-slate-800 p-6 rounded-xl mb-8">
        <h2 className="text-xl font-semibold mb-4">Add New Challenge</h2>
        <input
          type="text"
          placeholder="Level (Beginner/Intermediate/Advanced)"
          className="w-full p-3 mb-3 rounded bg-slate-700"
          value={newChallenge.level}
          onChange={(e) => setNewChallenge({ ...newChallenge, level: e.target.value })}
        />
        <input
          type="text"
          placeholder="Title"
          className="w-full p-3 mb-3 rounded bg-slate-700"
          value={newChallenge.title}
          onChange={(e) => setNewChallenge({ ...newChallenge, title: e.target.value })}
        />
        <textarea
          placeholder="Description"
          className="w-full p-3 mb-3 rounded bg-slate-700"
          value={newChallenge.description}
          onChange={(e) =>
            setNewChallenge({ ...newChallenge, description: e.target.value })
          }
        />
        <textarea
          placeholder="Algorithm (each step in new line)"
          className="w-full p-3 mb-3 rounded bg-slate-700"
          value={newChallenge.algorithm}
          onChange={(e) =>
            setNewChallenge({ ...newChallenge, algorithm: e.target.value })
          }
        />
        <textarea
          placeholder="Code Example"
          className="w-full p-3 mb-3 rounded bg-slate-700"
          value={newChallenge.code}
          onChange={(e) =>
            setNewChallenge({ ...newChallenge, code: e.target.value })
          }
        />
        <button
          className="bg-purple-500 hover:bg-purple-600 p-3 rounded font-semibold"
          onClick={handleAddChallenge}
        >
          Add Challenge
        </button>
      </div>

      {/* Challenges List */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Existing Challenges</h2>
        <div className="space-y-4">
          {challenges.map((ch, index) => (
            <div
              key={index}
              className="bg-slate-800 p-4 rounded flex justify-between items-center"
            >
              <div>
                <p className="font-bold text-purple-300">{ch.level} - {ch.title}</p>
                <p className="text-slate-300 text-sm">{ch.description}</p>
              </div>
              <button
                className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded"
                onClick={() => handleDelete(index)}
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
