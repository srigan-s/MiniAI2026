import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const events = [
  {
    title: "AI Workshop at Tech High",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=800",
    description: "A hands-on workshop introducing students to machine learning basics and practical applications.",
    date: "March 15, 2024"
  },
  {
    title: "AI Career Fair",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
    description: "Connecting students with industry professionals and exploring AI career opportunities.",
    date: "February 28, 2024"
  },
  {
    title: "Hackathon for Good",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=800",
    description: "Students developed AI solutions for local community challenges in this 48-hour event.",
    date: "January 20, 2024"
  }
];

const Events = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Recent Events</h1>
      
      <div className="max-w-4xl mx-auto">
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
          className="h-[600px]"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end">
                  <div className="p-8">
                    <div className="inline-block bg-green-700 text-white px-4 py-1 rounded-full mb-4">
                      {event.date}
                    </div>
                    <h2 className="text-3xl font-bold mb-4">{event.title}</h2>
                    <p className="text-lg max-w-2xl">{event.description}</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Events;