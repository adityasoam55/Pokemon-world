import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <span className="ml-3 text-xl font-bold">Pokemon World</span>
            </div>
            <p className="mt-4 text-gray-300">Explore the wonderful world of Pokemon with our comprehensive Pokedex.</p>
          </div>
          
          <div className='text-center'>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-300 hover:text-white">Home</Link></li>
              <li><Link to="/pokedex" className="text-gray-300 hover:text-white">Pokedex</Link></li>
              <li><Link to="/types" className="text-gray-300 hover:text-white">Pokemon Types</Link></li>
              <li><Link to="/about" className="text-gray-300 hover:text-white">About Us</Link></li>
            </ul>
          </div>
          
          <div className='text-center'>
            <h3 className="text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex justify-center gap-4">
              <a href="https://www.linkedin.com/in/aditya-som55" className="text-gray-300 hover:text-white">
                <span className="sr-only">Linkedin</span>
                <FaLinkedin className='h-7 w-7'/>
              </a>
              <a href="https://github.com/adityasoam55" className="text-gray-300 hover:text-white">
                <span className="sr-only">GitHub</span>
                <FaGithub className='h-7 w-7'/>
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-10 border-t border-gray-700 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Aditya som. All rights reserved. This is a fan-made website.</p>
          <p className="mt-2">Pokemon and Pokemon character names are trademarks of Nintendo.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 