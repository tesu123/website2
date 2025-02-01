import Maplogo from "./assets/icons/maps.png";
import Tellogo from "./assets/icons/tel.png";
import Emaillogo from "./assets/icons/google.png";

function Contact() {
  return (
    <section className="py-16 bg-gray-900 text-white" id="contact">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <small className="text-blue-400 font-medium text-lg uppercase">
          Get in Touch
        </small>
        <h3 className="text-3xl font-bold text-white mt-2">
          Any Questions? Feel Free to Contact
        </h3>
      </div>

      {/* Contact Container */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-2">
        {/* Contact Info Box */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col justify-center h-full transition-transform transform hover:scale-105 duration-300">
          <div className="flex items-start space-x-4 mb-6">
            <img src={Maplogo} alt="Map Icon" className="w-12 h-12" />
            <div>
              <h4 className="text-lg font-semibold text-white">Address</h4>
              <p className="text-gray-400">
                <a
                  href="https://www.google.com/maps/place/147,+Ananda+Pally,+Bapuji+Nagar,+Jadavpur,+Kolkata,+West+Bengal+700092/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400"
                >
                  Jadavpur, Kolkata, West Bengal
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4 mb-6">
            <img src={Tellogo} alt="Phone Icon" className="w-12 h-12" />
            <div>
              <h4 className="text-lg font-semibold text-white">Phone</h4>
              <p className="text-gray-400">
                <a href="tel:+917679489050" className="text-blue-400">
                  +91 7679489050
                </a>
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-4">
            <img src={Emaillogo} alt="Email Icon" className="w-12 h-12" />
            <div>
              <h4 className="text-lg font-semibold text-white">Email</h4>
              <p className="text-gray-400">
                <a
                  href="mailto:ajdas123.ff@gmail.com"
                  className="text-blue-400"
                >
                  ajdas123.ff@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-gray-800 shadow-lg rounded-lg p-8 flex flex-col justify-center h-full transition-transform transform hover:scale-105 duration-300">
          <form id="contact-form" className="space-y-6">
            {/* Name */}
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control w-full px-4 py-2 bg-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                placeholder="Name"
                required
              />
            </div>
            {/* Email */}
            <div className="form-group">
              <input
                type="email"
                name="email"
                className="form-control w-full px-4 py-2 bg-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                placeholder="E-mail"
                required
              />
            </div>
            {/* Mobile */}
            <div className="form-group">
              <input
                type="number"
                name="mobile"
                className="form-control w-full px-4 py-2 bg-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                placeholder="Mobile No."
              />
            </div>
            {/* Message */}
            <div className="form-group">
              <textarea
                name="message"
                className="form-control w-full px-4 py-2 bg-white border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
                placeholder="Message"
                rows="5"
                required
              ></textarea>
            </div>
            {/* Submit Button */}
            <button
              type="submit"
              className="w-30 bg-blue-800 text-white font-medium py-2 px-4 rounded-lg hover:bg-blue-600 transition duration-300 transform hover:scale-105"
            >
              Submit
            </button>
            <div id="form-message" className="mt-3"></div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
