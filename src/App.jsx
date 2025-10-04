import React from "react";

const App = () => {
  return (
    <div className="font-sans bg-gray-50">


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
