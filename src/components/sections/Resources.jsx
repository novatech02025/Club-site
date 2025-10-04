import React from 'react';
import { BookOpen, FileText, Link } from 'lucide-react';

const Resources = ({ setActiveSection }) => {
  const resources = [
    {
      title: "Coding Tutorials",
      description: "Step-by-step tutorials for Python, C, Java, and web development.",
      icon: <BookOpen className="w-8 h-8 text-white" />,
      link: "#",
    },
    {
      title: "Project Templates",
      description: "Ready-to-use templates for your web, app, and coding projects.",
      icon: <FileText className="w-8 h-8 text-white" />,
      link: "#",
    },
    {
      title: "External Resources",
      description: "Curated links, articles, and videos for advanced learning.",
      icon: <Link className="w-8 h-8 text-white" />,
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen py-20 px-4 bg-slate-800/50" id="resources">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-5xl font-bold mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          Resources & Study Material
        </h2>
        <p className="text-slate-300 mb-12 text-lg">
          Explore curated resources to enhance your coding, project development, and tech skills.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {resources.map((resource, index) => (
            <div
              key={index}
              className="bg-slate-700/70 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 cursor-pointer"
              onClick={() => window.open(resource.link, "_blank")}
            >
              <div className="mb-4">{resource.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
              <p className="text-slate-300">{resource.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;
