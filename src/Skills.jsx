import Clogo from "./assets/icons/cprog.png";
import Cpplogo from "./assets/icons/c_6132222.png";
import Pyhtonlogo from "./assets/icons/python.png";
import Javalogo from "./assets/icons/java.png";
import Htmllogo from "./assets/icons/html.png";
import Csslogo from "./assets/icons/css.png";
import Reactlogo from "./assets/icons/react.png";
import Jslogo from "./assets/icons/js.png";
import githublogo from "./assets/icons/github.png";
import gitlogo from "./assets/icons/git.png";
import VsCodelogo from "./assets/icons/vscode.png";
import Linuxlogo from "./assets/icons/linux.png";

function Skills() {
  return (
    <section className="py-16 bg-gray-900 text-gray-200" id="skills">
      {/* Heading */}
      <div className="text-center mb-12 animate-fade-in-down">
        <small className="text-emerald-400 font-medium text-lg uppercase">
          My Expertise
        </small>
        <h3 className="text-3xl font-bold text-gray-100 mt-2">
          Skills & Tools
        </h3>
      </div>

      {/* Skills Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 animate-fade-in-up">
        {/* Skill Group */}
        {[
          {
            title: "Programming Languages",
            items: [
              { img: Clogo, name: "C" },
              { img: Cpplogo, name: "C++" },
              { img: Pyhtonlogo, name: "Python" },
              { img: Javalogo, name: "Java" },
            ],
          },
          {
            title: "Web Development",
            items: [
              { img: Htmllogo, name: "HTML5" },
              { img: Csslogo, name: "CSS3" },
              { img: Jslogo, name: "JavaScript" },
              { img: Reactlogo, name: "React" },
            ],
          },
          {
            title: "Tools & Platforms",
            items: [
              { img: githublogo, name: "GitHub" },
              { img: gitlogo, name: "Git" },
              { img: VsCodelogo, name: "VS Code" },
              { img: Linuxlogo, name: "Linux" },
            ],
          },
        ].map((group, index) => (
          <div
            key={index}
            className="bg-gray-800 shadow-lg rounded-lg p-6 text-center transition transform hover:scale-105"
          >
            <h4 className="text-xl font-semibold text-gray-100 mb-4">
              {group.title}
            </h4>
            <div className="flex flex-wrap justify-center gap-6">
              {group.items.map((item, idx) => (
                <div key={idx} className="flex flex-col items-center">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="h-12 w-12 object-contain"
                  />
                  <small className="text-gray-300 mt-2">{item.name}</small>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
