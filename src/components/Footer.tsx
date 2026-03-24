import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black/90 backdrop-blur-md text-white py-8 md:py-12 border-t border-green-400/20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <img 
              src="/miniAIhorizontal.png" 
              alt="MiniAI" 
              className="h-16 md:h-18 mx-auto md:mx-0" 
            />
            <p className="text-base md:text-lg mt-2 font-light">Empowering the next generation of AI innovators</p>
          </div>
          <div className="flex space-x-6 md:space-x-8">
            <a href="#" className="text-green-400 hover:text-green-300 transition-colors duration-300">
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="#" className="text-green-400 hover:text-green-300 transition-colors duration-300">
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a href="#" className="text-green-400 hover:text-green-300 transition-colors duration-300">
              <Twitter className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 md:mt-12 text-center text-xs md:text-sm font-light">
          <p>&copy; {new Date().getFullYear()} MiniAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;