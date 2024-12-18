import React from 'react'
import Header from '../../components/Header';

const Experience = () => {
  return (
    <>
      <div className="bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-500 min-h-screen text-white">
        <div className="text-center py-16">
          {/* Title */}
          <h1 className="text-4xl font-bold text-yellow-400">Professional Experience</h1>
          <p className="mt-4 text-xl text-gray-300">Here's a glimpse of my work and experiences as a software engineer</p>
        </div>

        {/* Experience Section */}
        <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-lg shadow-lg p-8 mt-10">
          <h2 className="text-3xl font-semibold text-indigo-600">Associate Software Engineer</h2>
          <p className="mt-4 text-lg text-gray-600">March 2023 - Present</p>
          <p className="mt-6 text-lg">
            As an Associate Software Engineer, I work with cutting-edge technologies like Java and Node.js to build
            robust and scalable applications. My responsibilities include:
          </p>
          <ul className="mt-4 space-y-3 text-lg">
            <li className="flex items-center space-x-3">
              <span className="text-blue-500">🔧</span>
              <span>Developing server-side applications using Node.js</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-blue-500">💻</span>
              <span>Building responsive UIs with React.js</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-blue-500">⚙️</span>
              <span>Optimizing and maintaining databases</span>
            </li>
            <li className="flex items-center space-x-3">
              <span className="text-blue-500">🌐</span>
              <span>Collaborating with cross-functional teams to deliver high-quality software</span>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Experience;
