import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import About from './About/page';
import HoverEffect from '../components/HoverEffect';
import Skills from './Skills/page';
import Experience from './Experience/page';
import Project from './Projects/page';
import Contact from './Contact/page';

const Home = () => (
  <div className="relative bg-gray-900 min-h-screen overflow-hidden ml-48"> {/* Added 'ml-48' to offset the sidebar width */}
    <HoverEffect />
    <div className="relative z-10">
      <Header />
      <HeroSection />
      <div id="about">
        <About />
      </div>
      <div id="skills">
        <Skills />
      </div>
      <div id="exp">
        <Experience />
      </div>
      <div id="proj">
        <Project />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </div>
  </div>
);

export default Home;
