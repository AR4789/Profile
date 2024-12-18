"use client"
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling

const Header = () => (
  <header className="fixed top-0 left-0 h-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-6 px-6 flex flex-col justify-between items-center shadow-lg w-50">
    {/* Logo Section */}
    <h1 className="text-3xl font-bold text-center mb-10 text-yellow-300 hover:text-yellow-400 transition-colors duration-300">
      A.R
    </h1>

    {/* Navigation Links */}
    <nav className="space-y-6 w-full">
      {/* Smooth scroll links for sections */}
      <ScrollLink
        to="hero"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg font-medium hover:text-yellow-300 transition-colors duration-300 text-center block px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg font-medium hover:text-yellow-300 transition-colors duration-300 text-center block px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        About
      </ScrollLink>
   

      <ScrollLink
        to="skills"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg font-medium hover:text-yellow-300 transition-colors duration-300 text-center block px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Skills
      </ScrollLink>
      <ScrollLink
        to="exp"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg font-medium hover:text-yellow-300 transition-colors duration-300 text-center block px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Experience
      </ScrollLink>
      <ScrollLink
        to="proj"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg font-medium hover:text-yellow-300 transition-colors duration-300 text-center block px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Projects
      </ScrollLink>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg font-medium hover:text-yellow-300 transition-colors duration-300 text-center block px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Contact
      </ScrollLink>
    </nav>

    {/* Footer Section */}
    <footer className="mt-auto text-sm text-gray-300 text-center">
      © 2024 Your Name
    </footer>
  </header>
);

export default Header;
