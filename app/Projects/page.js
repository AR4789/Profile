import React from 'react';

const Project = () => {
  return (
    <div className="bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 min-h-screen text-white">
      
      {/* Project Section Title */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-yellow-300">My Projects</h1>
        <p className="mt-4 text-xl text-gray-200">Here are a couple of projects I have worked on:</p>
      </div>

      {/* Autopilot Project */}
      <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-lg shadow-lg p-8 mt-10">
        <h2 className="text-3xl font-semibold text-indigo-600">Autopilot</h2>
        <p className="mt-4 text-lg text-gray-600">A smart automation platform that automates tasks using AI and machine learning models.</p>
        <ul className="mt-6 space-y-3 text-lg">
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">🤖</span>
            <span>Automates routine tasks and processes using AI algorithms.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">💡</span>
            <span>Uses machine learning to adapt and improve over time.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">🔧</span>
            <span>Customizable automation flows based on user input.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">🌐</span>
            <span>Integrates with popular third-party services and APIs.</span>
          </li>
        </ul>
      </div>

      {/* Postmaker Project */}
      <div className="max-w-4xl mx-auto bg-white text-gray-900 rounded-lg shadow-lg p-8 mt-10">
        <h2 className="text-3xl font-semibold text-indigo-600">Postmaker</h2>
        <p className="mt-4 text-lg text-gray-600">A social media posting and real-time chat application for seamless communication and content sharing.</p>
        <ul className="mt-6 space-y-3 text-lg">
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">📱</span>
            <span>Allows users to schedule posts and share content across multiple platforms.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">💬</span>
            <span>Real-time messaging for users to communicate with each other.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">🔒</span>
            <span>Includes secure login and account management features.</span>
          </li>
          <li className="flex items-center space-x-3">
            <span className="text-blue-500">🌍</span>
            <span>Supports integration with major social media platforms like Facebook, Twitter, and Instagram.</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;
