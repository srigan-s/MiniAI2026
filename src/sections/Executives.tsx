import React from 'react';
import { Linkedin } from 'lucide-react';

const executives = [
  {
    name: 'Srigan Sivagnanenthirarajah',
    shortName: 'Srigan Siva',
    role: 'Chief Executive Officer',
    image: '/sriganPFP.jpg',
    description: 'Srigan Siva is our CEO and oversees all major operations. He coordinates partnerships, funding, and ensures that all programs and events run smoothly. Srigan organised this mission from the ground up, working closley with industry professionals.',
    linkedin: 'https://www.linkedin.com/in/srigan-sivagnanenthirarajah-418601206/'
  },
  {
    name: 'Vedant Kansara',
    role: 'Chief Operating Officer',
    image: '/vedantPFP.jpg',
    description: 'Vedant Kansara is a talented educator tasked with the development of our curriculums, programs, and media. He ensures that presenters, presentations, and activities are all held to a high standard.',
    linkedin: 'https://www.linkedin.com/in/vedant-kansara-381330221/'
  },
  {
    name: 'Ugan Sivagnanenthirarajah',
    role: 'Director of Curriculum and Instruction',
    image: '/uganPFP.jpg',
    description: "With just over 5 years of experience being a Product Manager at Microsoft, Ugan's Senior Role allows the MiniAI team to construct a robust curriculum that follows the principles of AI.",
    linkedin: 'https://www.linkedin.com/in/ugans/'
  }
];

const Executives = () => {
  return (
    <section id="executives" className="py-16 md:py-24 bg-gradient-to-b from-green-950 to-black min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 px-2" data-reveal>
          Our Leadership Team
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 max-w-6xl mx-auto">
          {executives.map((exec, index) => (
            <article key={exec.name} data-reveal style={{ transitionDelay: `${index * 120}ms` }} className="group rounded-2xl bg-black/55 border border-white/10 hover:border-green-400/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-500/20 overflow-hidden">
              <div className="relative h-64 overflow-hidden">
                <img
                  src={exec.image}
                  alt={exec.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              </div>
              <div className="p-6 md:p-7">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl md:text-2xl font-bold">{exec.shortName || exec.name}</h3>
                  <a href={exec.linkedin} target="_blank" rel="noopener noreferrer" className="text-white hover:text-green-400 transition-colors" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </div>
                <p className="text-green-400 mb-4 font-light">{exec.role}</p>
                <p className="text-gray-300 font-light leading-relaxed text-sm md:text-base">{exec.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Executives;
