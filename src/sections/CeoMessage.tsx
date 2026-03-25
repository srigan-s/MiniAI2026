import React from 'react';

const CeoMessage = () => {
  return (
    <section className="py-16 md:py-24 min-h-[80vh] flex items-center bg-gradient-to-b from-green-950 to-black">
      <div className="container mx-auto px-4 w-full" data-reveal>
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8 items-center bg-black/45 border border-white/10 rounded-3xl p-8 md:p-12">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-green-500">
              MiniAI Learn
            </h2>
            <p className="text-gray-100 font-light leading-relaxed">
              Explore our growing platform and continue your journey with accessible, modern AI learning experiences built for students and communities.
            </p>
            <a
              href="https://miniai-learn.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex mt-6 px-6 py-3 rounded-full bg-green-400 text-black font-semibold hover:bg-green-300 transition-colors"
            >
              Start Learning
            </a>
          </div>
          <img
            src="/miniAiElement.png"
            alt="MiniAI"
            className="w-full max-h-72 object-contain"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;
