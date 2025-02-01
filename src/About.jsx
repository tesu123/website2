function About() {
  return (
    <section className="py-16 bg-gray-900 text-gray-200" id="about">
      {/* Section Heading */}
      <div className="text-center mb-12 animate-fade-in-down">
        <small className="text-emerald-400 font-medium text-lg uppercase">
          About Me
        </small>
        <h3 className="text-3xl font-bold text-gray-100 mt-2">
          Get to Know Me
        </h3>
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 px-4 animate-fade-in-up">
        {/* About Text */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 transition transform hover:scale-105">
          <p className="text-gray-300 text-lg leading-relaxed">
            Hello! I'm <span className="font-bold text-emerald-400">Abhijit Rabidas</span>, a
            passionate software developer from <span className="font-bold text-emerald-400">Haldibari, India</span>. Currently pursuing my Master of
            Computer Applications (MCA) at Jadavpur University. With a strong
            foundation in computer science and a keen interest in development,
            I thrive on solving complex problems and building efficient
            solutions.
          </p>
        </div>

        {/* Educational Background */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-6 transition transform hover:scale-105">
          <h4 className="text-xl font-semibold text-gray-100 mb-4">
            Educational Background
          </h4>
          <p className="text-gray-300 mb-2">
            <span className="font-bold text-emerald-400">MCA (Master of Computer Applications)</span> - Jadavpur University (2024 - 2026)
          </p>
          <p className="text-gray-300 mb-2">
            <span className="font-bold text-emerald-400">BSc Computer Science (Hons)</span> - Ananda Chandra College, University of North Bengal (2020 - 2023)
          </p>
          <p className="text-gray-300">
            <span className="font-bold text-emerald-400">Rank</span>: 61 in WB JECA 2024
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
