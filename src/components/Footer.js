import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-6 text-center">
      <div className="flex justify-center space-x-4">
        {/* Social Media Links */}
        <a href="https://github.com/rohitraj07372" target="_blank"  >
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/github.png"
            alt="GitHub"
            className="hover:opacity-75"
          />
        </a>

        <a href="https://www.linkedin.com/in/rohit-kumar-61101024b/" target="_blank"  >
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/linkedin.png"
            alt="LinkedIn"
            className="hover:opacity-75"
          />
        </a>

        <a href="https://instagram.com/your-instagram-username" target="_blank" rel="noopener noreferrer">
          <img
            src="https://img.icons8.com/ios-glyphs/30/ffffff/instagram-new.png"
            alt="Instagram"
            className="hover:opacity-75"
          />
        </a>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-4 space-x-4">
        <Link to='/'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Home
        </button></Link>
    <Link to='/about'><button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          About
        </button></Link>

<Link to='/projects'> <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Projects
        </button></Link>
        
       
      </div>

      {/* Additional Footer Content */}
      <p className="mt-4">&copy; 2023 Rohit Kumar</p>
    </footer>
  );
};

export default Footer;
