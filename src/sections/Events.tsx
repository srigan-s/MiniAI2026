import React from 'react';

const events = [
  {
    title: '8 Week Summer Cohort',
    image: '/summerAI.png',
    description: 'Students engaged in the vast AI curriculum taught by instructors from across the industry',
    date: 'July 8, 2024'
  },
  {
    title: 'Baycrest Hospital Workshop',
    image: '/baycrestAI.jpg',
    description: 'Patients leaped through generations experiencing the wonders of AI',
    date: 'November 14, 2024'
  },
  {
    title: 'TDSB Middle School Workshop',
    image: '/schoolAI.jpg',
    description: 'Students engaged in a hands-on lesson explaining the dangers of Bias in AI',
    date: 'January 30, 2024'
  },
  {
    title: 'MiniAI + FIRST Robotics',
    image: '/robot.jpg',
    description: 'FTC teams partnered with MiniAI to become educated on the autonmous capabilities of robots.',
    date: 'December 16, 2024'
  },
  {
    title: 'TDSB Highschool Workshop',
    image: '/jolly.jpg',
    description: 'Students engaged hands-on AI workshops and networking opportunities',
    date: 'November 22, 2024'
  }
];

const Events = () => {
  return (
    <section id="events" className="py-16 md:py-24 min-h-[90vh] flex items-center bg-black">
      <div className="container mx-auto px-4 w-full">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 px-2" data-reveal>
          Recent Events
        </h1>

        <div className="max-w-5xl mx-auto space-y-6 md:space-y-8">
          {events.map((event, index) => (
            <article key={event.title} data-reveal style={{ transitionDelay: `${index * 90}ms` }} className="group grid md:grid-cols-[280px_1fr] rounded-2xl overflow-hidden border border-white/10 bg-black/45 hover:border-green-400/40 transition-all duration-500">
              <img src={event.image} alt={event.title} className="w-full h-56 md:h-full object-cover group-hover:scale-105 transition-transform duration-700" loading="lazy" />
              <div className="p-6 md:p-8">
                <div className="inline-block bg-green-400 text-black px-4 py-1 rounded-full mb-4 text-sm font-semibold">{event.date}</div>
                <h2 className="text-2xl md:text-3xl font-bold mb-3">{event.title}</h2>
                <p className="text-base md:text-lg max-w-2xl font-light text-gray-100">{event.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;
