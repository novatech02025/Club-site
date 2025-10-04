import React from 'react';
import { Code } from 'lucide-react';

const Projects = ({ projects, projectTemplates = [] }) => {
  return (
    <section className="min-h-screen py-20 px-4 bg-slate-900">
      <div className="max-w-6xl mx-auto">

        {/* --- Our Projects Section --- */}
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Our Projects
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <div className={`h-32 ${project.image} flex items-center justify-center`}>
                <Code className="w-12 h-12 text-white/80" />
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                    project.status === 'In Progress' ? 'bg-blue-500/20 text-blue-400' :
                    'bg-yellow-500/20 text-yellow-400'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-slate-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-700 rounded-full text-xs text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- Project Templates Section --- */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-indigo-300 mb-4">Project Templates</h2>
          <p className="text-slate-300">
            Kickstart your next build with ready-made templates for websites, apps, and coding projects 🔥
          </p>
        </div>

        {projectTemplates.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectTemplates.map((template, index) => (
              <div
                key={index}
                className="bg-slate-800/70 p-6 rounded-2xl shadow-lg border border-slate-700 hover:border-indigo-400 transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 flex items-start space-x-4"
              >
                <div className="text-indigo-400 bg-slate-900 p-3 rounded-lg">{template.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-indigo-300">{template.title}</h3>
                  <p className="text-slate-400 mt-2">{template.description}</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-slate-400 mt-6">No project templates available.</p>
        )}

      </div>
    </section>
  );
};

export default Projects;
