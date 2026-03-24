import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="relative min-h-screen">
      <div className="absolute inset-0">
        <img
          src="/20250130_141150225_iOS.heic"
          alt="Background"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 px-2">
            Shape the Future with AI
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto font-light px-4">
            Join our mission to make AI education accessible to all and empower the next generation of innovators.
          </p>
          <button className="bg-green-400 hover:bg-green-500 text-black text-lg md:text-xl px-8 md:px-12 py-4 md:py-6 rounded-full flex items-center justify-center space-x-3 mx-auto transition-all duration-300 transform hover:scale-105 hover:shadow-[0_0_30px_rgba(74,222,128,0.5)]">
            <span className="font-semibold">Apply Now</span>
            <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </div>
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-scroll"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;