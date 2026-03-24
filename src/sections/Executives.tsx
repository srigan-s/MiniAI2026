import React from 'react';

const executives = [
  {
    name: "Srigan Sivagnanenthirarajah",
    shortName: "Srigan Siva",
    role: "Chief Executive Officer",
    image: "https://1drv.ms/i/c/e10a92eb637e5e38/EThefmPrkgoggOFDQQAAAAABf85QHpLNK7kQEsKFYNZAXQ?e=VMeTgC",
    description: "Srigan Siva is our CEO and oversees all major operations. He coordinates partnerships, funding, and ensures that all programs and events run smoothly. Srigan organised this mission from the ground up, working closley with industry professionals."
  },
  {
    name: "Vedant Kansara",
    role: "Chief Operating Officer",
    image: "https://1drv.ms/i/c/e10a92eb637e5e38/EThefmPrkgoggOFEQQAAAAABXgps6cshONm9yuBSFYOzDw?e=49ccM8",
    description: "Vedant Kansara is a talented educator tasked with the development of our curriculums, programs, and media. He ensures that presenters, presentations, and activities are all held to a high standard."
  },
  {
    name: "Ugan Sivagnanenthirarajah",
    role: "Director of Curriculum and Instruction",
    image: "https://1drv.ms/i/c/e10a92eb637e5e38/EThefmPrkgoggOFFQQAAAAAB0rJOK7kWTcujTaMJ0ByiIQ?e=hQaoYA",
    description: "With just over 5 years of experience being a Product Manager at Microsoft, Ugan's Senior Role allows the MiniAI team to construct a robust curriculum that follows the principles of AI."
  }
];

const Executives = () => {
  return (
    <section id="executives" className="py-16 md:py-24 bg-gradient-to-b from-green-950 to-black">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 px-2">
          Our Leadership Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {executives.map((exec, index) => (
            <div key={index} className="group">
              <div className="relative overflow-hidden rounded-2xl bg-black/50 backdrop-blur-lg border border-green-400/20 hover:border-green-400/40 transition-all duration-500 hover:transform hover:scale-105">
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={exec.image}
                    alt={exec.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                </div>
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold mb-2">
                    {exec.shortName || exec.name}
                  </h3>
                  <p className="text-green-400 mb-4 font-light">{exec.role}</p>
                  <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base">
                    {exec.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Executives;