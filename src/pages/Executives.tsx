import React from 'react';

const executives = [
  {
    name: "Sarah Chen",
    role: "Chief Executive Officer",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800",
    description: "Former AI Research Lead at Google, Sarah brings 15 years of experience in artificial intelligence and a passion for educational equity. She has led numerous initiatives making technology accessible to underserved communities."
  },
  {
    name: "Marcus Johnson",
    role: "Chief Technology Officer",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    description: "With a background in both education and AI development at Amazon, Marcus oversees our technical curriculum and ensures our programs stay at the cutting edge of AI advancement."
  },
  {
    name: "Dr. John Patel",
    role: "Director of Education",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800",
    description: "Former professor of Computer Science at MIT, Dr. Patel has dedicated her career to making complex technical concepts accessible to students of all backgrounds."
  }
];

const Executives = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl font-bold text-center mb-16">Our Leadership Team</h1>
      <div className="grid md:grid-cols-3 gap-12">
        {executives.map((exec, index) => (
          <div key={index} className="bg-green-900 rounded-lg overflow-hidden transform transition-all hover:scale-105">
            <img
              src={exec.image}
              alt={exec.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{exec.name}</h3>
              <p className="text-green-400 mb-4">{exec.role}</p>
              <p className="text-gray-300">{exec.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Executives;