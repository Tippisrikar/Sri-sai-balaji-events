import React, { useState, useEffect, useRef } from "react";

function App() {
  const sections = {
    home: useRef(null),
    services: useRef(null),
    extraservices: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sections[section].current.scrollIntoView({ behavior: "smooth" });
  };

  const services = [
    "Birthday Parties",
    "Private Parties",
    "Bridal Parties",
    "Mangal Snanam",
    "Half Saree Functions",
    "Dhothi Function",
    "Cradle Ceremony",
    "House Parties Decorations",
    "2D & 3D Themes",
  ];

  const extraServices = [
    "DJ & Dance Floor",
    "Special Entries",
    "Car Entry",
    "Magician",
    "Anchoring",
    "Welcome Dolls",
    "Bouncy Castle",
    "Caricature Artist",
    "Tattoo Artist",
    "Mimicry",
    "Chocolate Fountain",
    "Popcorn / Sugar Candy",
    "Games Organizer",
    "Generator",
  ];

  const heroImages = [
    "/images/slideshow/image1.jpg",
    "/images/slideshow/image2.jpg",
    "/images/slideshow/image3.jpg",
    "/images/slideshow/image4.png",
    "/images/slideshow/image5.jpg",
    "/images/slideshow/image6.jpg",
    "/images/slideshow/image7.jpg",
    "/images/slideshow/image8.jpg"
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    heroImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useEffect(() => {
    const interval = setInterval(
      () => setCurrentImage((prev) => (prev + 1) % heroImages.length),
      4000
    );
    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <header
        ref={sections.home}
        className="relative h-[70vh] md:h-[90vh] flex flex-col items-center justify-center text-center overflow-hidden"
      >
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
            style={{
              backgroundImage: `url(${image})`,
              backgroundColor: "#000",
            }}
          ></div>
        ))}

        <div className="absolute inset-0 bg-black bg-opacity-50"></div>

        <div className="relative z-10 text-white flex flex-col items-center">
          <img
            src="/images/logo/logo1.png"
            alt="Sri Balaji Events"
            className="h-28 md:h-36 w-auto mb-4"
          />
          <h1 className="text-5xl font-extrabold drop-shadow-lg">
            ✨ Sri Balaji Events ✨
          </h1>
          <p className="mt-4 text-lg max-w-2xl mx-auto drop-shadow-lg">
            We make your dream celebrations come true with premium stage
            decorations and unforgettable event experiences.
          </p>
          <button
            onClick={() => scrollToSection("contact")}
            className="mt-6 px-6 py-3 bg-pink-500 text-white font-bold rounded-full shadow-lg hover:bg-pink-600 transition"
          >
            📞 Contact Us
          </button>
        </div>
      </header>

      {/* Services */}
      <section ref={sections.services} className="py-12 px-6 bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
          🎉 Our Decoration Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-2xl transition"
            >
              <h3 className="text-xl font-semibold text-pink-600">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Extra Services */}
      <section ref={sections.extraservices} className="bg-pink-50 py-12 px-6">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-700">
          💡 Extra Services
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {extraServices.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
            >
              <h3 className="text-lg font-medium text-gray-700">{service}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Us */}
      <section
        ref={sections.contact}
        className="bg-gray-900 text-white py-12 px-6 text-center"
      >
        <h2 className="text-3xl font-bold mb-6">📞 Contact Us</h2>
        <p className="mb-8">We are here to make your event unforgettable!</p>

        <div className="flex flex-col items-center gap-4">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919281472224?text=Hello%20Sri%20Balaji%20Events!%20I%20want%20to%20know%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-green-400 rounded-full hover:bg-green-500 transition w-fit text-sm text-gray-900"
          >
            <img
              src="images/icons/whatsapp_icon.png"
              alt="WhatsApp"
              className="w-5 h-5"
            />
            <span>+91 9281472224</span>
          </a>

          {/* Email */}
          <a
            href="mailto:sribalajievents@gmail.com"
            className="flex items-center gap-2 px-4 py-2 bg-blue-400 rounded-full hover:bg-blue-500 transition w-fit text-sm text-gray-900"
          >
            <img src="images/icons/mail.png" alt="Email" className="w-6 h-6" />
            <span>sribalajievents@gmail.com</span>
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com/yourinstagram"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-pink-400 rounded-full hover:bg-pink-500 transition w-fit text-sm text-gray-900"
          >
            <img
              src="images/icons/instagram.png"
              alt="Instagram"
              className="w-5 h-5"
            />
            <span>@sribalajievents</span>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center py-6 mt-8">
        <p>© 2025 Sri Balaji Events. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
