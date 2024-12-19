"use client"
import { Link as ScrollLink } from 'react-scroll'; // For smooth scrolling

const Header = () => (
  <header className="fixed top-0 left-0 w-full lg:w-60 lg:h-full bg-gradient-to-r lg:bg-gradient-to-b from-blue-500 to-indigo-600 text-white py-4 lg:py-6 px-4 sm:px-4 flex lg:flex-col items-center shadow-lg z-50 gap-2 lg:gap-6">
    {/* Logo Section */}
    <h1 className="text-2xl font-bold text-center text-yellow-300 hover:text-yellow-400 transition-colors duration-300">
      A.R
    </h1>

    {/* Navigation Links */}
    <nav className="space-y-2 lg:space-y-4 w-full flex lg:flex-col justify-around lg:justify-start">
      <ScrollLink
        to="hero"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg font-medium hover:text-yellow-300 transition-colors duration-300 text-center block px-3 py-2 rounded-lg hover:bg-blue-700"
      >
        Home
      </ScrollLink>
      <ScrollLink
        to="about"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg font-medium hover:text-yellow-300 transition-colors duration-300 text-center block px-3 py-2 rounded-lg hover:bg-blue-700"
      >
        About
      </ScrollLink>
      <ScrollLink
        to="skills"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg font-medium hover:text-yellow-300 transition-colors duration-300 text-center block px-3 py-2 rounded-lg hover:bg-blue-700"
      >
        Skills
      </ScrollLink>
      <ScrollLink
        to="exp"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg font-medium hover:text-yellow-300 transition-colors duration-300 text-center block px-3 py-2 rounded-lg hover:bg-blue-700"
      >
        Experience
      </ScrollLink>
      <ScrollLink
        to="proj"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg font-medium hover:text-yellow-300 transition-colors duration-300 text-center block px-3 py-2 rounded-lg hover:bg-blue-700"
      >
        Projects
      </ScrollLink>
      <ScrollLink
        to="contact"
        smooth={true}
        duration={500}
        className="cursor-pointer text-lg font-medium hover:text-yellow-300 transition-colors duration-300 text-center block px-3 py-2 rounded-lg hover:bg-blue-700"
      >
        Contact
      </ScrollLink>
    </nav>
  </header>
);

export default Header;
