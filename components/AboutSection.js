const AboutSection = () => (
  <section id="about" className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white py-16 px-8 md:py-20 md:px-16 lg:py-24 lg:px-32 ">
    <div className="max-w-4xl mx-auto">
      {/* Heading */}
      <h2 className="text-4xl font-extrabold text-center mb-8">About Me</h2>

      {/* Content */}
      <p className="text-lg leading-relaxed mb-6 text-center">
        I am a passionate <span className="font-semibold">Software Engineer</span> with 2 years of hands-on experience building innovative applications and systems. I have expertise in:
      </p>

      {/* Skills */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 text-center">
        <div className="bg-white bg-opacity-10 rounded-lg p-4 shadow-md">
          <span className="block text-2xl font-bold">Java</span>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-4 shadow-md">
          <span className="block text-2xl font-bold">Node.js</span>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-4 shadow-md">
          <span className="block text-2xl font-bold">React.js</span>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-4 shadow-md">
          <span className="block text-2xl font-bold">Docker</span>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-4 shadow-md">
          <span className="block text-2xl font-bold">Linux</span>
        </div>
        <div className="bg-white bg-opacity-10 rounded-lg p-4 shadow-md">
          <span className="block text-2xl font-bold">CI/CD</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-lg leading-relaxed mt-8 text-center">
        Over the past 2 years, I've developed several applications using modern technologies like 
        <span className="font-semibold"> Node.js, MongoDB,</span> and <span className="font-semibold">React.js</span>. 
        I thrive in dynamic environments where I can leverage my skills to build scalable, user-friendly systems.
      </p>
    </div>

    {/* Decorative Background Elements */}
    <div className="absolute top-0 left-0 w-40 h-40 bg-purple-300 opacity-20 rounded-full blur-3xl"></div>
    <div className="absolute bottom-0 right-0 w-60 h-60 bg-pink-300 opacity-20 rounded-full blur-3xl"></div>
  </section>
);

export default AboutSection;
