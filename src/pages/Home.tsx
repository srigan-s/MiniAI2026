import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          className="w-full h-screen object-cover"
          poster="/home/project/public/background.jpg"
        >
          <source
            src="https://cdn.coverr.co/videos/coverr-artificial-intelligence-visualization-2401/1080p.mp4"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      <div className="relative min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Shape the Future with AI
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Join our mission to make AI education accessible to all and empower the next generation of innovators.
          </p>
          <button className="bg-green-700 hover:bg-green-600 text-white text-xl px-8 py-4 rounded-full flex items-center justify-center space-x-2 mx-auto transition-all transform hover:scale-105">
            <span>Apply Now</span>
            <ArrowRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;