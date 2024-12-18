"use client"
import { motion } from 'framer-motion';
import HoverEffect from '../components/HoverEffect';


const HeroSection = () => (
  <section id="hero" className="text-center py-20 bg-gradient-to-r from-blue-500 to-purple-600 text-white">
    <HoverEffect />
    <motion.h1 
      className="text-5xl font-extrabold mb-4"
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }} 
      transition={{ duration: 1 }}
    >
      Hi, I'm Aman Rai
    </motion.h1>
    <p className="text-xl mb-8">Software Engineer</p>
    <button 
  onClick={() => window.scrollTo(0, document.body.scrollHeight)} 
  className="bg-white text-blue-500 font-semibold py-2 px-6 rounded shadow-md hover:bg-blue-500 hover:text-white transform hover:scale-105 transition-all duration-300"
>
  View My Work
</button>

  </section>
);

export default HeroSection;