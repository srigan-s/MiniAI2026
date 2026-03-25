import React from 'react';

const partners = [
  {
    name: 'Microsoft',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/9/96/Microsoft_logo_%282012%29.svg'
  },
  {
    name: 'Meta',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg'
  },
  {
    name: 'Amazon',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg'
  },
  {
    name: 'University of Waterloo',
    logo: '/University_of_Waterloo_logo.png'
  },
  {
    name: 'TDSB',
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/6/60/Toronto_District_School_Board_Logo.svg/1200px-Toronto_District_School_Board_Logo.svg.png'
  },
  {
    name: 'Baycrest Hospital',
    logo: 'https://baycrestfoundation.org/wp-content/uploads/2024/07/Baycrest-Blue-and-White-300.png'
  }
];

const Partners = () => {
  return (
    <section id="partners" className="scene py-16 md:py-24 bg-gradient-to-b from-black to-green-950 scroll-mt-24">
      <div className="container mx-auto px-4 w-full">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600" data-reveal>
          Knowledge Partners
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <div key={partner.name} data-reveal style={{ transitionDelay: `${index * 80}ms` }} className="bg-black/55 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:border-green-400/40 transition-all duration-500 hover:-translate-y-1 hover:shadow-lg hover:shadow-green-500/20">
              <img src={partner.logo} alt={partner.name} className="w-full h-16 object-contain filter brightness-0 invert" loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
