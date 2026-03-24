import React from 'react';
import { Target, Users, Lightbulb } from 'lucide-react';

const Mission = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <section className="mb-16">
          <h1 className="text-4xl font-bold text-center mb-8">Our Identity</h1>
          <div className="bg-green-900 p-8 rounded-lg">
            <p className="text-lg leading-relaxed">
              At MiniAI, our mission is to make AI education accessible to all, especially underprivileged communities lacking cutting-edge technology exposure. We provide hands-on workshops, mentorship, and insights from industry leaders at companies like Amazon, Google, and Tesla, ensuring that every student—regardless of background—can explore and innovate.
            </p>
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-center mb-8">Our Mission</h2>
          <div className="bg-green-900 p-8 rounded-lg">
            <p className="text-lg leading-relaxed">
              By breaking financial and systemic barriers, we empower youth with the skills to thrive in an AI-driven world. Our goal is to bridge the educational gap, inspire the next generation of diverse AI pioneers, and create a more inclusive future in technology.
            </p>
          </div>
        </section>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-green-900 rounded-lg">
            <Target className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-bold mb-2">Accessibility</h3>
            <p>Making AI education available to all communities</p>
          </div>
          <div className="text-center p-6 bg-green-900 rounded-lg">
            <Users className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-bold mb-2">Mentorship</h3>
            <p>Direct guidance from industry professionals</p>
          </div>
          <div className="text-center p-6 bg-green-900 rounded-lg">
            <Lightbulb className="w-12 h-12 mx-auto mb-4 text-green-400" />
            <h3 className="text-xl font-bold mb-2">Innovation</h3>
            <p>Fostering creativity and technical excellence</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mission;