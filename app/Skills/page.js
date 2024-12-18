"use client";
import React from 'react';
import Header from '../../components/Header';
import { FaJava, FaJsSquare, FaReact, FaNodeJs, FaDocker, FaLinux } from 'react-icons/fa'; // Icons for skills

const Skills = () => {
  return (
    <div className="bg-gradient-to-br from-purple-800 via-blue-900 to-gray-900 text-white min-h-screen">
      <div className="text-center py-10">
        {/* Title */}
        <div className="text-5xl font-extrabold text-pink-500 mb-2">Technical Skills</div>
        <p className="text-lg text-gray-300">A showcase of the technologies I work with</p>

        {/* Skills Sections */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-10">
          {/* Languages Section */}
          <div className="bg-gradient-to-t from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h1 className="text-2xl font-bold text-yellow-400 flex items-center gap-2">
              <FaJava className="text-red-400" /> Languages
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full font-semibold">Java</span>
              <span className="bg-blue-500 text-gray-900 px-3 py-1 rounded-full font-semibold">JavaScript</span>
            </div>
          </div>

          {/* Frameworks Section */}
          <div className="bg-gradient-to-t from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h1 className="text-2xl font-bold text-blue-400 flex items-center gap-2">
              <FaReact className="text-blue-500" /> Frameworks
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-green-500 text-gray-900 px-3 py-1 rounded-full font-semibold">Node.js</span>
              <span className="bg-purple-500 text-gray-900 px-3 py-1 rounded-full font-semibold">React.js</span>
              <span className="bg-pink-500 text-gray-900 px-3 py-1 rounded-full font-semibold">Next.js</span>
            </div>
          </div>

          {/* Tools Section */}
          <div className="bg-gradient-to-t from-gray-800 to-gray-700 p-6 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <h1 className="text-2xl font-bold text-green-400 flex items-center gap-2">
              <FaDocker className="text-blue-500" /> Tools
            </h1>
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="bg-blue-400 text-gray-900 px-3 py-1 rounded-full font-semibold">Docker</span>
              <span className="bg-gray-500 text-gray-900 px-3 py-1 rounded-full font-semibold">Linux</span>
              <span className="bg-red-500 text-gray-900 px-3 py-1 rounded-full font-semibold">Redis</span>
              <span className="bg-yellow-500 text-gray-900 px-3 py-1 rounded-full font-semibold">ELK</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
