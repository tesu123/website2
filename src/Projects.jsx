import ProjectThumbnail from "./assets/images/thumnail2.png";

function Projects() {
  return (
    <section className="py-16 bg-gray-900 text-white" id="projects">
      {/* Heading */}
      <div className="text-center mb-12">
        <small className="text-blue-400 font-medium text-lg uppercase animate-fade-in">My Work</small>
        <h3 className="text-3xl font-bold mt-2 animate-fade-in">Projects I've Built</h3>
      </div>

      {/* Projects Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 animate-fade-in-up">
        {[1, 2, 3].map((index) => (
          <div key={index} className="bg-gray-800 shadow-lg rounded-lg overflow-hidden transform hover:scale-105 transition duration-300">
            <img
              src={ProjectThumbnail}
              alt={`Project ${index} Thumbnail`}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h4 className="text-xl font-semibold mb-2">Project Title {index}</h4>
              <p className="text-gray-400 mb-4">A brief description of Project {index} goes here</p>
              <div className="flex justify-between space-x-4">
                <a
                  href={`https://github.com/username/project${index}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-600 transition"
                >
                  View Code
                </a>
                <a
                  href={`https://project${index}-live-demo.com`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-400 transition"
                >
                  Live View
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
