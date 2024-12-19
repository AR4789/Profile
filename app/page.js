import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from './About/page';
import HoverEffect from '../components/HoverEffect';
import Skills from './Skills/page';
import Experience from './Experience/page';
import Project from './Projects/page';
import Contact from './Contact/page';

const Home = () => (
  <div className="relative bg-gray-900 min-h-screen">
    {/* Hover Effect in Background */}
    <HoverEffect />
    
    {/* Header */}
    <Header />

    {/* Main Content */}
    <main className="lg:ml-60 flex-1 mt-16 lg:mt-0"> {/* Add margin-top to avoid content hiding */}
      <section id="hero">
        <HeroSection />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="projects">
        <Project />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  </div>
);

export default Home;