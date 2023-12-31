import React from 'react';
import logo from '../assets/logo.png'

import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 py-8  ">
      <div className="container w-10/12 mx-auto grid xs:grid-cols-1 xs:grid-rows-2 md:grid-cols-2 md:grid-rows-1 xs:place-items-center    ">
        {/* Company Logo */}
        <div className="flex items-center place-self-start ">
          <img
            src={logo} // Replace with your company logo
            alt="Company Logo"
            className="w-40"
          /> 
          
        </div>

        {/* Social Links */}
        <div className="flex items-center space-x-4 place-self-end  ">
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
