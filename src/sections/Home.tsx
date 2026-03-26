import React from 'react';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="scene relative min-h-screen overflow-hidden py-24 scroll-mt-24">
      <div className="absolute inset-0">
        <img
          src="/plp.png"
          alt="Background"
          className="w-full h-full object-cover object-center md:object-right"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/70" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(74,222,128,0.2),transparent_58%)]" />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid lg:grid-cols-2 items-center gap-12">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight text-balance reveal animate-sequence-1">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
                Shape the Future with AI
              </span>
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto lg:mx-0 font-light text-gray-100 reveal animate-sequence-2">
              Join our mission to make AI education accessible to all and empower the next generation of innovators.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 reveal animate-sequence-3">
              <a
                href="https://learn.miniai.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-black text-base md:text-lg px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(74,222,128,0.45)]"
              >
                Start Learning
                <ArrowRight className="w-5 h-5" />
              </a>
              <a
                href="#mission"
                className="inline-flex items-center justify-center px-8 py-4 rounded-full border border-white/30 hover:border-green-300 hover:text-green-300 transition-all duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          <div className="hidden lg:block reveal animate-sequence-3">
            <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-black/50">
              <img
                src="/plp.png"
                alt="Background"
                className="w-full h-[480px] object-cover object-center transform hover:scale-105 transition-transform duration-700 will-change-transform"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
