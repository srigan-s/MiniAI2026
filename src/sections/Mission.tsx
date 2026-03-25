import React from 'react';
import { Sparkles, Target, Users, Lightbulb } from 'lucide-react';

const featureCards = [
  {
    icon: Sparkles,
    title: 'Our Identity',
    desc: 'At MiniAI, our mission is to make AI education accessible to all, especially underprivileged communities lacking cutting-edge technology exposure. We provide hands-on workshops, mentorship, and insights from industry leaders at companies like Amazon, Google, and Tesla, ensuring that every student—regardless of background—can explore and innovate.'
  },
  {
    icon: Target,
    title: 'Accessibility',
    desc: 'Making AI education available to all communities'
  },
  {
    icon: Users,
    title: 'Mentorship',
    desc: 'Direct guidance from industry professionals'
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Fostering creativity and technical excellence'
  }
];

const Mission = () => {
  return (
    <section id="mission" className="py-20 md:py-24 bg-gradient-to-b from-black to-green-950 min-h-[90vh] flex items-center">
      <div className="container mx-auto px-4 w-full">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 md:mb-16" data-reveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 px-2">
              Our Mission
            </h2>
            <p className="text-base md:text-xl leading-relaxed font-light max-w-4xl mx-auto text-gray-100">
              By breaking financial and systemic barriers, we empower youth with the skills to thrive in an AI-driven world. Our goal is to bridge the educational gap, inspire the next generation of diverse AI pioneers, and create a more inclusive future in technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {featureCards.map((item, index) => (
              <article
                key={item.title}
                data-reveal
                style={{ transitionDelay: `${index * 120}ms` }}
                className="group bg-black/55 backdrop-blur-xl p-6 md:p-8 rounded-2xl border border-white/10 hover:border-green-400/40 transition-all duration-500 hover:-translate-y-1"
              >
                <item.icon className="w-10 h-10 mb-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl md:text-2xl font-bold mb-3">{item.title}</h3>
                <p className="font-light leading-relaxed text-gray-100">{item.desc}</p>
              </article>
            ))}
          </div>

          <div className="mt-10 text-center" data-reveal>
            <a
              href="https://miniai-learn.netlify.app"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-green-400 text-black font-semibold hover:bg-green-300 transition-colors duration-300"
            >
              Try the App
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
