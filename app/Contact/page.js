import React from 'react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 min-h-screen text-white">
      
      {/* Contact Section */}
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold text-yellow-300">Contact Me</h1>
        <p className="mt-4 text-lg text-gray-200">I would love to hear from you! Feel free to reach out to me through any of the following channels:</p>
      </div>

      {/* Contact Details */}
      <div className="max-w-3xl mx-auto bg-white text-gray-900 rounded-lg shadow-lg p-8 mt-10">
        <h2 className="text-3xl font-semibold text-indigo-600">My Contact Information</h2>
        <div className="mt-6 space-y-4 text-lg">
          {/* Email */}
          <div className="flex items-center space-x-3">
            <span className="text-blue-500">📧</span>
            <a href="mailto:amanr1871@gmail.com" className="text-indigo-600 hover:text-indigo-800">
              amanr1871@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <span className="text-blue-500">📱</span>
            <span className="text-indigo-600">6387104028</span>
          </div>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="text-center mt-10">
        <h2 className="text-2xl font-semibold text-indigo-600">Connect With Me</h2>
        <div className="space-x-6 mt-4">
          <a href="https://www.linkedin.com" className="text-2xl text-blue-500 hover:text-blue-700" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://github.com" className="text-2xl text-gray-800 hover:text-gray-600" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a href="https://twitter.com" className="text-2xl text-blue-400 hover:text-blue-600" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
