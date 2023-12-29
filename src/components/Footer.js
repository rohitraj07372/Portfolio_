import React from 'react';
import logo from '../assets/logo.png'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8  ">
      <div className="container w-10/12 mx-auto flex items-center justify-between">
        {/* Company Logo */}
        <div className="flex items-center">
          <img
            src={logo} // Replace with your company logo
            alt="Company Logo"
            className="w-40"
          /> 
          
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4">
          <a href="https://www.facebook.com/profile.php?id=100007583531392" target="_blank" rel=" ">
            <FaFacebook className="text-2xl hover:text-blue-700 transition-all" />
          </a>
          {/* <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <FaTwitter className="text-2xl hover:text-blue-700 transition-all" />
          </a> */}
          <a href="https://www.instagram.com/artistan_73/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-2xl hover:text-blue-700 transition-all" />
          </a>
          <a href="https://www.linkedin.com/in/rohit-kumar-61101024b/" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-2xl hover:text-blue-700 transition-all" />
          </a>
          <a href="https://github.com/rohitraj07372" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-2xl" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
