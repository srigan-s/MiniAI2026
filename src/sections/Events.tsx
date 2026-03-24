import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const events = [
  {
    title: "8 Week Summer Cohort",
    image: "/summerAI.png",
    description: "Students engaged in the vast AI curriculum taught by instructors from across the industry",
    date: "July 8, 2024"
  },
  {
    title: "Baycrest Hospital Workshop",
    image: "/baycrestAI.jpg",
    description: "Patients leaped through generations experiencing the wonders of AI",
    date: "November 14, 2024"
  },
  {
    title: "TDSB Middle School Workshop",
    image: "/schoolAI.jpg",
    description: "Students engaged in a hands-on lesson explaining the dangers of Bias in AI",
    date: "January 30, 2024"
  },
  {
    title: "MiniAI + FIRST Robotics",
    image: "/robot.jpg",
    description: "FTC teams partnered with MiniAI to become educated on the autonmous capabilities of robots.",
    date: "December 16, 2024"
  },
  {
    title: "TDSB Highschool Workshop",
    image: "/jolly.jpg",
    description: "Students engaged hands-on AI workshops and networking opportunities",
    date: "November 22, 2024"
  }
];

const Events = () => {
  return (
    <section id="events" className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-600 px-2">Recent Events</h1>
        
        <div className="max-w-5xl mx-auto">
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation={true}
            className="h-[400px] md:h-[600px] rounded-2xl overflow-hidden"
          >
            {events.map((event, index) => (
              <SwiperSlide key={index}>
                <div className="relative h-full group">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent flex items-end">
                    <div className="p-6 md:p-12">
                      <div className="inline-block bg-green-400 text-black px-4 md:px-6 py-1 md:py-2 rounded-full mb-4 md:mb-6 text-sm md:text-base font-semibold">
                        {event.date}
                      </div>
                      <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-4">{event.title}</h2>
                      <p className="text-base md:text-xl max-w-2xl font-light line-clamp-3 md:line-clamp-none">{event.description}</p>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Events;