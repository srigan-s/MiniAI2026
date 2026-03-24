import React from 'react';

const CeoMessage = () => {
  return (
    <section id="message" className="py-16 md:py-24 bg-gradient-to-b from-black to-green-950">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600">
          A Message from our CEO
        </h2>
        <div className="max-w-4xl mx-auto">
          <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden">
            <iframe
              src="https://drive.google.com/file/d/15i-YnM9h3iyXnaoYq0svvCb1mqZN_DJ8/preview"
              allow="autoplay"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CeoMessage;