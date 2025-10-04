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
    </div>
  );
};

export default App;
