import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const Mission = () => {
  return (
    <section id="mission" className="py-16 md:py-24 bg-gradient-to-b from-black to-green-950">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-16 md:space-y-24">
          <section className="transform hover:scale-105 transition-all duration-500">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 px-2">Our Identity</h1>
            <div className="bg-black/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <p className="text-base md:text-xl leading-relaxed font-light">
                At MiniAI, our mission is to make AI education accessible to all, especially underprivileged communities lacking cutting-edge technology exposure. We provide hands-on workshops, mentorship, and insights from industry leaders at companies like Amazon, Google, and Tesla, ensuring that every student—regardless of background—can explore and innovate.
              </p>
            </div>
          </section>

          <section className="transform hover:scale-105 transition-all duration-500">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 px-2">Our Mission</h2>
            <div className="bg-black/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300">
              <p className="text-base md:text-xl leading-relaxed font-light">
                By breaking financial and systemic barriers, we empower youth with the skills to thrive in an AI-driven world. Our goal is to bridge the educational gap, inspire the next generation of diverse AI pioneers, and create a more inclusive future in technology.
              </p>
            </div>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: Target, title: 'Accessibility', desc: 'Making AI education available to all communities' },
              { icon: Users, title: 'Mentorship', desc: 'Direct guidance from industry professionals' },
              { icon: Lightbulb, title: 'Innovation', desc: 'Fostering creativity and technical excellence' }
            ].map((item, index) => (
              <div key={index} className="group bg-black/50 backdrop-blur-lg p-6 md:p-8 rounded-2xl border border-green-400/20 hover:border-green-400/40 transition-all duration-300 hover:transform hover:scale-105">
                <item.icon className="w-12 h-12 mx-auto mb-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-bold mb-2 text-center">{item.title}</h3>
                <p className="text-center font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;