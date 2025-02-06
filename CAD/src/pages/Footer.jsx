import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
       
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact  */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="text-gray-400">Email: support@example.com</p>
            <p className="text-gray-400">Phone: +1 123 -456-7890</p>
            <p className="text-gray-400">Address: 123 Main St, City, Country</p>
          </div>

          {/* Privacy  */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Privacy</h3>
            <ul>
              <li><a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              <li><a href="/cookies" className="text-gray-400 hover:text-white">Cookie Policy</a></li>
            </ul>
          </div>

    
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-white">Facebook</a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-white">Twitter</a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-white">LinkedIn</a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-white">Instagram</a>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-400 text-sm">© 2025 CAD Gurukul. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
