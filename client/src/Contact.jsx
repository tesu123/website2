// // function Contact() {
// //   return (
// //     <div>
// //       <h1>Contact</h1>
// //       <p>This is the contact page.</p>
// //     </div>
// //   );
// // }

// // export default Contact;
// import React, { useState } from "react";
// import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
// import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
// import { motion } from "framer-motion";

// function Contact() {
//   // const [isSubmitting, setIsSubmitting] = useState(false);
//   // const [submitStatus, setSubmitStatus] = useState(null);
//   // const [formData, setFormData] = useState({
//   //   name: "",
//   //   email: "",
//   //   phone: "",
//   //   message: "",
//   // });

//   // const handleChange = (e) => {
//   //   const { name, value } = e.target;
//   //   setFormData((prev) => ({
//   //     ...prev,
//   //     [name]: value,
//   //   }));
//   // };

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   setIsSubmitting(true);
//   //   setSubmitStatus(null);

//   //   // Simulate API call
//   //   try {
//   //     await new Promise((resolve) => setTimeout(resolve, 1500));
//   //     setSubmitStatus("success");
//   //     setFormData({
//   //       name: "",
//   //       email: "",
//   //       phone: "",
//   //       message: "",
//   //     });
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //     setSubmitStatus("error");
//   //   } finally {
//   //     setIsSubmitting(false);
//   //   }
//   // };

//     const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });
//   const [status, setStatus] = useState("");

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setStatus("sending");

//     try {
//       const response = await fetch("http://localhost:3001/send-email", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       setStatus(data.success ? "success" : "error");
//       if (data.success) setFormData({ name: "", email: "", message: "" });
//     } catch (err) {
//       console.error("Error:", err);
//       setStatus("error");
//     }
//   };

//   const socialLinks = [
//     {
//       icon: <FaGithub />,
//       url: "https://github.com/Abhijit-Rabidas",
//       color: "hover:text-gray-900 dark:hover:text-white",
//     },
//     {
//       icon: <FaLinkedinIn />,
//       url: "https://www.linkedin.com/in/abhijit-rabidas",
//       color: "hover:text-blue-600",
//     },
//     { icon: <FaTwitter />, url: "#", color: "hover:text-blue-400" },
//     {
//       icon: <FaInstagram />,
//       url: "https://www.instagram.com/aj_das_01",
//       color: "hover:text-pink-500",
//     },
//   ];

//   return (
//     <section
//       className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden"
//       id="contact"
//     >
//       {/* Animated background elements */}
//       <div className="absolute inset-0 z-0">
//         {[...Array(5)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10"
//             style={{
//               width: `${Math.random() * 200 + 100}px`,
//               height: `${Math.random() * 200 + 100}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animation: `float ${6 + Math.random() * 6}s ease-in-out infinite`,
//               animationDelay: `${Math.random() * 5}s`,
//               opacity: 0.05 + Math.random() * 0.05,
//               filter: "blur(40px)",
//             }}
//           />
//         ))}
//       </div>

//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         {/* Section Heading */}
//         <div className="text-center mb-16">
//           <span className="inline-block px-4 py-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-gray-800 rounded-full mb-4">
//             GET IN TOUCH
//           </span>
//           <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
//             Contact{" "}
//             <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
//               Me
//             </span>
//           </h2>
//           <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
//         </div>

//         {/* Contact Container */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
//           {/* Contact Info Box */}
//           <motion.div
//             initial={{ opacity: 0, x: -50 }}
//             whileInView={{ opacity: 1, x: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-500"
//           >
//             <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
//               Contact Information
//             </h3>

//             <div className="space-y-4">
//               {/* Address */}
//               <div className="flex items-start">
//                 <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full mr-6 text-white">
//                   <FiMapPin className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
//                     Location
//                   </h4>
//                   <a
//                     href="https://www.google.com/maps/place/147,+Ananda+Pally,+Bapuji+Nagar,+Jadavpur,+Kolkata,+West+Bengal+700092/"
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
//                   >
//                     Jadavpur, Kolkata, West Bengal
//                   </a>
//                 </div>
//               </div>

//               {/* Phone */}
//               <div className="flex items-start">
//                 <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full mr-6 text-white">
//                   <FiPhone className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
//                     Phone
//                   </h4>
//                   <a
//                     href="tel:+917679489050"
//                     className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
//                   >
//                     +91 7679489050
//                   </a>
//                 </div>
//               </div>

//               {/* Email */}
//               <div className="flex items-start">
//                 <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full mr-6 text-white">
//                   <FiMail className="h-6 w-6" />
//                 </div>
//                 <div>
//                   <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
//                     Email
//                   </h4>
//                   <a
//                     href="mailto:ajdas123.ff@gmail.com"
//                     className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
//                   >
//                     ajdas123.ff@gmail.com
//                   </a>
//                 </div>
//               </div>

//               {/* Social Links */}
//               <div className="pt-4">
//                 <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
//                   Connect With Me
//                 </h4>
//                 <div className="flex space-x-6">
//                   {socialLinks.map((social, index) => (
//                     <a
//                       key={index}
//                       href={social.url}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`text-2xl text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300 hover:-translate-y-1`}
//                       aria-label={`${social.icon.type.displayName} profile`}
//                     >
//                       {social.icon}
//                     </a>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </motion.div>

//           {/* Contact Form */}
//           <div className="contact-container">
//       <h2>Send me a message</h2>
//       <form onSubmit={handleSubmit}>
//         <input
//           type="text"
//           name="name"
//           placeholder="Your Name"
//           value={formData.name}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="email"
//           name="email"
//           placeholder="Your Email"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <textarea
//           name="message"
//           placeholder="Your Message"
//           value={formData.message}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit" disabled={status === "sending"}>
//           {status === "sending" ? "Sending..." : "Send Message"}
//         </button>
//         {status === "success" && (
//           <p className="success">Message sent successfully!</p>
//         )}
//         {status === "error" && (
//           <p className="error">Failed to send message. Please try again.</p>
//         )}
//       </form>
//     </div>
//         </div>
//       </div>

//       {/* Global styles for animations */}
//       <style jsx global>{`
//         @keyframes float {
//           0%,
//           100% {
//             transform: translateY(0) rotate(0deg);
//           }
//           50% {
//             transform: translateY(-20px) rotate(5deg);
//           }
//         }
//       `}</style>
//     </section>
//   );
// }

// export default Contact;

import React, { useState } from "react";
import { FiMapPin, FiPhone, FiMail, FiSend } from "react-icons/fi";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";

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
      if (data.success) setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      console.error("Error:", err);
      setStatus("error");
    }
  };

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/Abhijit-Rabidas",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      icon: <FaLinkedinIn />,
      url: "https://www.linkedin.com/in/abhijit-rabidas",
      color: "hover:text-blue-600",
    },
    { icon: <FaTwitter />, url: "#", color: "hover:text-blue-400" },
    {
      icon: <FaInstagram />,
      url: "https://www.instagram.com/aj_das_01",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <section
      className="relative py-20 bg-gray-50 dark:bg-gray-900 overflow-hidden"
      id="contact"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10"
            style={{
              width: `${Math.random() * 200 + 100}px`,
              height: `${Math.random() * 200 + 100}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${6 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 5}s`,
              opacity: 0.05 + Math.random() * 0.05,
              filter: "blur(40px)",
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 text-sm font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-gray-800 rounded-full mb-4">
            GET IN TOUCH
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Contact{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 to-teal-600 mx-auto rounded-full"></div>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info Box */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-500"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Contact Information
            </h3>

            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full mr-6 text-white">
                  <FiMapPin className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Location
                  </h4>
                  <a
                    href="https://www.google.com/maps/place/147,+Ananda+Pally,+Bapuji+Nagar,+Jadavpur,+Kolkata,+West+Bengal+700092/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    Jadavpur, Kolkata, West Bengal
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full mr-6 text-white">
                  <FiPhone className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Phone
                  </h4>
                  <a
                    href="tel:+917679489050"
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    +91 7679489050
                  </a>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-600 p-3 rounded-full mr-6 text-white">
                  <FiMail className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-1">
                    Email
                  </h4>
                  <a
                    href="mailto:ajdas123.ff@gmail.com"
                    className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                  >
                    ajdas123.ff@gmail.com
                  </a>
                </div>
              </div>

              {/* Social Links */}
              <div className="pt-4">
                <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-4">
                  Connect With Me
                </h4>
                <div className="flex space-x-6">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-2xl text-gray-600 dark:text-gray-400 ${social.color} transition-colors duration-300 hover:-translate-y-1`}
                      aria-label={`${social.icon.type.displayName} profile`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-10 hover:shadow-2xl transition-shadow duration-500"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">
              Send Me a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="Your Name"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="Your Email"
                  required
                />
              </div>

              {/* Message */}
              <div>
                <textarea
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 dark:focus:ring-emerald-400 dark:focus:border-emerald-400 bg-white dark:bg-gray-700 text-gray-900 dark:text-white transition-all duration-300"
                  placeholder="Your Message"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={status === "sending"}
                className={`w-full flex justify-center items-center px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-lg text-white bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 transition-all duration-500 hover:shadow-xl ${
                  status === "sending" ? "opacity-80 cursor-not-allowed" : ""
                }`}
              >
                {status === "sending" ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
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
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 rounded-lg border border-emerald-200 dark:border-emerald-800"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-400 rounded-lg border border-red-200 dark:border-red-800"
                >
                  Failed to send message. Please try again later or contact me
                  directly at ajdas123.ff@gmail.com.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>

      {/* Global styles for animations */}
      <style jsx global>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-20px) rotate(5deg);
          }
        }
      `}</style>
    </section>
  );
}

export default Contact;
