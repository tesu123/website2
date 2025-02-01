import img from "./assets/images/profileimg.png";

function Hero() {
  return (
    <div
      className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-gray-900 via-gray-800 to-black text-gray-200 px-8 relative overflow-hidden"
      id="home"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute w-64 h-64 bg-emerald-500 rounded-full opacity-10 blur-3xl -top-32 -left-32"
          style={{
            animation: "float 6s ease-in-out infinite",
          }}
        ></div>
        <div
          className="absolute w-64 h-64 bg-blue-500 rounded-full opacity-10 blur-3xl -bottom-32 -right-32"
          style={{
            animation: "float-delay 6s ease-in-out infinite",
          }}
        ></div>
      </div>

      {/* Text Section */}
      <div className="text-center md:text-left md:mr-16 mb-8 md:mb-0">
        <h1 className="text-5xl font-bold mb-2">Hello! I Am</h1>
        <h2
          className="text-4xl font-semibold mb-4"
          style={{
            background: "linear-gradient(to right, #34d399, #60a5fa)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Abhijit Rabidas
        </h2>
        <p className="text-lg text-gray-400">
          <span id="dynamic-text" className="font-medium">
            A Passionate Software Developer
          </span>
        </p>

        {/* Social Links */}
        <div className="flex justify-center md:justify-start space-x-6 mt-6">
          <a
            href="#"
            className="text-blue-500 text-2xl hover:scale-110 transition-transform duration-300 hover:text-blue-400"
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="#"
            className="text-blue-400 text-2xl hover:scale-110 transition-transform duration-300 hover:text-blue-300"
            aria-label="Twitter"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://www.instagram.com/aj_das_01?igsh=cnVmMnF1a3M4MjM2"
            target="_blank"
            className="text-pink-500 text-2xl hover:scale-110 transition-transform duration-300 hover:text-pink-400"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/abhijit-rabidas"
            target="_blank"
            className="text-blue-600 text-2xl hover:scale-110 transition-transform duration-300 hover:text-blue-500"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a
            href="https://github.com/Abhijit-Rabidas"
            target="_blank"
            className="text-gray-400 text-2xl hover:scale-110 transition-transform duration-300 hover:text-gray-300"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i>
          </a>
        </div>

        {/* Call-to-Action Button */}
        <a
          href="#contact"
          className="mt-6 inline-block bg-gradient-to-r from-emerald-500 to-blue-500 text-white py-3 px-6 rounded-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          Get in Touch
        </a>
      </div>

      {/* Image Section */}
      <div className="w-40 h-44 md:w-60 md:h-64 mt-8 md:mt-0 md:ml-12">
        <img
          src={img}
          alt="Abhijit Rabidas"
          className="rounded-full shadow-2xl object-cover border-4 border-emerald-500 hover:scale-110 hover:border-emerald-400 transition-all duration-300"
        />
      </div>
    </div>
  );
}

export default Hero;