"use client";
import { Link as ScrollLink } from "react-scroll"; // For smooth scrolling

const Header = () => (
  <header className="fixed top-0 left-0 w-full lg:w-60 lg:h-screen bg-gradient-to-r lg:bg-gradient-to-b from-blue-500 to-indigo-600 text-white py-4 lg:py-6 px-4 flex lg:flex-col items-center shadow-lg z-50 gap-2 lg:gap-6 overflow-y-auto">
    {/* Logo Section */}
    <h1 className="text-2xl w-full font-bold text-center text-yellow-300 hover:text-yellow-400 transition-colors duration-300">
      A.R
    </h1>

    {/* Navigation Links */}
    <nav className="space-y-2 lg:space-y-4 w-full flex lg:flex-col justify-around lg:justify-start">
      {["Home", "About", "Skills", "Experience", "Projects", "Contact"].map((section) => (
        <ScrollLink
          key={section}
          to={section.toLowerCase()}
          smooth={true}
          duration={500}
          className="cursor-pointer text-lg font-medium hover:text-yellow-300 transition-colors duration-300 text-center block px-3 py-2 rounded-lg hover:bg-blue-700"
        >
          {section}
        </ScrollLink>
      ))}
    </nav>
  </header>
);

export default Header;