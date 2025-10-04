import React, { useState, useEffect } from "react";

const DailyChallenges = () => {
  const [challenges, setChallenges] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);

  const [newChallenge, setNewChallenge] = useState({
    level: "Beginner",
    title: "",
    description: "",
    algorithm: "",
    code: "",
  });

  useEffect(() => {
    const savedChallenges = JSON.parse(localStorage.getItem("challenges")) || [];
    setChallenges(savedChallenges);
  }, []);

  useEffect(() => {
    localStorage.setItem("challenges", JSON.stringify(challenges));
  }, [challenges]);

  const handleAddChallenge = () => {
    const challenge = {
      level: newChallenge.level,
      title: newChallenge.title,
      description: newChallenge.description,
      algorithm: newChallenge.algorithm
        ? newChallenge.algorithm.split("\n")
        : null,
      code: newChallenge.code || null,
    };

    setChallenges([...challenges, challenge]);
    setNewChallenge({ level: "Beginner", title: "", description: "", algorithm: "", code: "" });
  };

  return (
    <section className="min-h-screen py-20 px-4 bg-slate-800/50">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Daily Challenges & Tasks
        </h2>
        <p className="text-slate-200 mb-12 text-lg">
          Push your limits every day with coding challenges, problem-solving tasks, and quizzes 🚀
        </p>

        <button
          onClick={() => setIsAdmin(!isAdmin)}
          className="mb-8 px-6 py-2 bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-600 rounded-xl text-white transition-all duration-300"
        >
          {isAdmin ? "Exit Admin Mode" : "Enter Admin Mode"}
        </button>

        {isAdmin ? (
          <div className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-600 text-left">
            <h3 className="text-2xl font-bold text-purple-300 mb-4">
              Add New Challenge
            </h3>
            <div className="grid gap-4">
              <select
                value={newChallenge.level}
                onChange={(e) =>
                  setNewChallenge({ ...newChallenge, level: e.target.value })
                }
                className="p-2 rounded bg-slate-900 text-white"
              >
                <option>Beginner</option>
                <option>Intermediate</option>
                <option>Advanced</option>
              </select>
              <input
                type="text"
                placeholder="Challenge Title"
                value={newChallenge.title}
                onChange={(e) =>
                  setNewChallenge({ ...newChallenge, title: e.target.value })
                }
                className="p-2 rounded bg-slate-900 text-white"
              />
              <textarea
                placeholder="Challenge Description"
                value={newChallenge.description}
                onChange={(e) =>
                  setNewChallenge({ ...newChallenge, description: e.target.value })
                }
                className="p-2 rounded bg-slate-900 text-white"
              />
              <textarea
                placeholder="Algorithm (one step per line)"
                value={newChallenge.algorithm}
                onChange={(e) =>
                  setNewChallenge({ ...newChallenge, algorithm: e.target.value })
                }
                className="p-2 rounded bg-slate-900 text-white"
              />
              <textarea
                placeholder="Example Code (optional)"
                value={newChallenge.code}
                onChange={(e) =>
                  setNewChallenge({ ...newChallenge, code: e.target.value })
                }
                className="p-2 rounded bg-slate-900 text-white"
              />
              <button
                onClick={handleAddChallenge}
                className="px-6 py-2 bg-green-600 hover:bg-green-700 rounded-xl text-white transition-all duration-300"
              >
                Add Challenge
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 text-left">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-slate-700/50 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-slate-600 flex flex-col"
              >
                <h3 className="text-xl font-semibold text-purple-300">{challenge.level}</h3>
                <p className="text-slate-200 mt-2 font-bold">{challenge.title}</p>
                <p className="text-slate-300 mt-1 flex-grow">{challenge.description}</p>

                {challenge.algorithm && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-purple-300">Algorithm:</h4>
                    <ul className="list-disc ml-5 mt-2 text-slate-400 text-sm space-y-1">
                      {challenge.algorithm.map((step, i) => (
                        <li key={i}>{step}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {challenge.code && (
                  <div className="mt-4">
                    <h4 className="font-semibold text-purple-300">Example Code:</h4>
                    <pre className="bg-slate-900 text-purple-300 p-3 rounded-md mt-2 text-sm overflow-x-auto">
                      <code>{challenge.code}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default DailyChallenges;
