import React from "react";
import Link from "next/link";
import InquiryForm from '../components/InquiryForm';

export const metadata = {
  title: 'Projects | Royal Track Contracting UAE',
  description: 'View our completed construction projects across Dubai and UAE',
  alternates: {
    canonical: 'https://royaltrack.ae/projects',
  },
};

export default function Projects() {
  const projects = [
    { image: '/images/dubai_hills.png', name: 'Dubai Hills', location: 'Dubai' },
    { image: '/images/arabian_ranches1.jpg', name: 'Arabian Ranches', location: 'Dubai' },
    { image: '/images/the_valley.jpg', name: 'The Valley', location: 'Dubai' },
    { image: '/images/talal_al_ghaf.jpg', name: 'Tilal Al Ghaf', location: 'Dubai' },
    { image: '/images/al_jurf.jpeg', name: 'Al Jurf', location: 'Dubai' },
    { image: '/images/yas_island.webp', name: 'Yas Island', location: 'Abu Dhabi' },
  ];

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-stone-900 to-stone-50 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="gold-gradient">Projects</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Explore our portfolio of premium construction projects
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {projects.map((project, idx) => (
              <div key={idx} className="relative overflow-hidden curved-box aspect-[4/3] hover-lift">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-display text-2xl text-white font-bold">{project.name}</div>
                  <div className="text-white/80 text-sm mt-1">{project.location}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="font-display text-5xl font-bold text-[#E8B92C] mb-2">50+</div>
              <p className="text-white/80">Projects Completed</p>
            </div>
            <div>
              <div className="font-display text-5xl font-bold text-[#E8B92C] mb-2">100%</div>
              <p className="text-white/80">Client Satisfaction</p>
            </div>
            <div>
              <div className="font-display text-5xl font-bold text-[#E8B92C] mb-2">10+</div>
              <p className="text-white/80">Years Experience</p>
            </div>
            <div>
              <div className="font-display text-5xl font-bold text-[#E8B92C] mb-2">500+</div>
              <p className="text-white/80">Happy Clients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <InquiryForm />
    </div>
  );
}
