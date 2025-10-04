import React from "react";

const App = () => {
  return (
    <div className="font-sans bg-gray-50">
      {/* Header */}
      <header className="bg-gray-900 text-white py-4 shadow-md fixed w-full z-50">
        <div className="container flex justify-between items-center px-6">
          <h1 className="text-2xl font-bold tracking-wide">Digital Boost</h1>
          <nav className="space-x-6">
            <a href="#services" className="nav-link">Services</a>
            <a href="#about" className="nav-link">About</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="section bg-yellow-500 text-gray-900 text-center mt-16 shadow-inner">
        <h2 className="text-5xl md:text-6xl font-extrabold mb-4">Grow Your Business Online</h2>
        <p className="text-lg md:text-xl mb-8">SEO, Social Media Marketing, Paid Ads & Content Strategy</p>
        <a href="#contact" className="btn btn-primary">Get Started</a>
      </section>

      {/* Services Section */}
      <section id="services" className="section bg-gray-100 text-center">
        <div className="container">
          <h2 className="text-4xl mb-12">Our Services</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="card">
              <h3 className="text-xl mb-2">SEO Optimization</h3>
              <p>Improve your website ranking and drive organic traffic.</p>
            </div>
            <div className="card">
              <h3 className="text-xl mb-2">Social Media Marketing</h3>
              <p>Engage your audience and grow your brand on social platforms.</p>
            </div>
            <div className="card">
              <h3 className="text-xl mb-2">Paid Ads Strategy</h3>
              <p>Maximize ROI with targeted advertising campaigns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="section text-center">
        <div className="container">
          <h2 className="text-4xl mb-6">About Digital Boost</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            Digital Boost helps businesses grow online with innovative digital marketing strategies,
            customized campaigns, and measurable results.
          </p>
        </div>
      </section>

            {/* Services Section */}
      <section id="services" className="py-24 text-center px-6">
        <h2 className="text-4xl font-bold mb-12 text-gray-900">Our Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-2">SEO Optimization</h3>
            <p className="text-gray-600 text-sm">Improve your website visibility and rank higher on search engines.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-2">Social Media Marketing</h3>
            <p className="text-gray-600 text-sm">Engage your audience on all major social media platforms.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-2">Pay-Per-Click Ads</h3>
            <p className="text-gray-600 text-sm">Drive traffic quickly with targeted ad campaigns.</p>
          </div>
          <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1">
            <h3 className="font-semibold text-lg mb-2">Content Marketing</h3>
            <p className="text-gray-600 text-sm">Create engaging content that converts visitors into customers.</p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 text-center max-w-3xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-gray-900">About Us</h2>
        <p className="text-gray-700 text-lg">
          Digital Boost is a full-service marketing agency focused on growing businesses online. 
          Our team combines creativity, strategy, and analytics to deliver measurable results and increase revenue.
        </p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-gray-100 text-center px-6">
        <h2 className="text-4xl font-bold mb-8 text-gray-900">Contact Us</h2>
        <form className="flex flex-col max-w-md mx-auto gap-4">
          <input type="text" placeholder="Name" className="p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          <input type="email" placeholder="Email" className="p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          <textarea placeholder="Message" rows={5} className="p-4 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500" />
          <button className="bg-gray-900 text-white p-4 rounded-lg hover:bg-gray-800 transition shadow">Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-6 text-center">
        © 2025 Digital Boost. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
