import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const ApiUrl = import.meta.env.VITE_BACKEND_URL;

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const response = await fetch(`${ApiUrl}/send-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      setStatus(data.success ? "success" : "error");

      if (data.success) {
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (err) {
      console.error("Error:", err);
      setStatus("error");
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Abhijit-Rabidas",
      color: "hover:text-gray-200",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/abhijit-rabidas",
      color: "hover:text-blue-400",
    },
    { icon: <FaTwitter />, url: "#", color: "hover:text-sky-400" },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/aj_das_01",
      color: "hover:text-pink-400",
    },
  ];

  return (
    <section
      id="contact"
      className="relative min-h-screen w-full overflow-hidden py-15 px-0 bg-gradient-to-br from-black via-gray-900 to-black text-white font-mono text-sm sm:text-"
    >
      {/* Cyber Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] animate-pulse"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 tracking-widest">
            <span className="text-cyan-400">{"<"}</span>
            Contact
            <span className="text-purple-400">{"/>"}</span>
          </h2>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl p-10 shadow-lg hover:shadow-[0_0_25px_rgba(0,255,255,0.6)] transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-8">Get in Touch</h3>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-3 rounded-full mr-6 text-black shadow-lg">
                  <FiMapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Location
                  </h4>
                  <a
                    href="https://www.google.com/maps/place/147,+Ananda+Pally,+Bapuji+Nagar,+Jadavpur,+Kolkata,+West+Bengal+700092/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    Jadavpur, Kolkata, West Bengal
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-3 rounded-full mr-6 text-black shadow-lg">
                  <FiPhone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+917679489050"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    +91 7679489050
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-cyan-400 to-purple-500 p-3 rounded-full mr-6 text-black shadow-lg">
                  <FiMail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:ajdas123.ff@gmail.com"
                    className="text-gray-400 hover:text-cyan-400 transition"
                  >
                    ajdas123.ff@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="text-lg font-semibold text-white mb-4">
                  Connect with me
                </h4>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-2xl text-gray-400 ${social.color} transition transform hover:scale-125 hover:shadow-[0_0_20px_rgba(0,255,255,0.7)]`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-900/80 border border-gray-700 rounded-2xl p-10 shadow-lg hover:shadow-[0_0_25px_rgba(200,0,255,0.6)] transition-all duration-500">
            <h3 className="text-2xl font-bold text-white mb-8">
              Send a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black/60 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black/60 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg border border-gray-700 bg-black/60 text-white placeholder-gray-500 focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400"
                placeholder="Your Message"
                required
              ></textarea>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex justify-center items-center px-6 py-3 font-bold rounded-lg border transition-all duration-500 ${
                  status === "sending"
                    ? "bg-gray-800 text-gray-500 cursor-not-allowed"
                    : "border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black shadow-[0_0_15px_rgba(0,255,255,0.6)] hover:shadow-[0_0_25px_rgba(0,255,255,1)]"
                }`}
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-cyan-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <FiSend className="ml-2 -mr-1 w-5 h-5" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {status === "success" && (
                <div className="mt-4 p-4 bg-cyan-900/30 text-cyan-300 rounded-lg border border-cyan-700">
                  ✅ Message sent successfully! I’ll get back to you soon.
                </div>
              )}
              {status === "error" && (
                <div className="mt-4 p-4 bg-red-900/30 text-red-400 rounded-lg border border-red-700">
                  ❌ Failed to send message. Try again later or email me
                  directly.
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
