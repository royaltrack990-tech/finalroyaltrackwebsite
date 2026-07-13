'use client';

import React from "react";
import Link from "next/link";
import InquiryForm from '../components/InquiryForm';

export const metadata = {
  title: 'Construction Services | Royal Track Dubai',
  description: 'Interior fit-out, pools, landscaping & turnkey solutions in UAE',
  alternates: {
    canonical: 'https://royaltrack.ae/services',
  },
};

export default function Services() {
  const services = [
    {
      title: 'Interior Fit-Out',
      image: '/images/kitchen_gold.jpg',
      description: 'Transform your interiors with our premium fit-out services. We specialize in residential and commercial spaces.',
      features: ['Custom Design', 'High-Quality Materials', 'Expert Installation'],
    },
    {
      title: 'Pools & Landscaping',
      image: '/images/pool_landscape_hero_section.jpg',
      description: 'Create stunning outdoor spaces with our pool design and landscaping expertise.',
      features: ['Pool Construction', 'Landscape Design', 'Maintenance Services'],
    },
    {
      title: 'Turnkey Solutions',
      image: '/images/turnkey.png',
      description: 'End-to-end project management from concept to completion.',
      features: ['Project Planning', 'Full Execution', 'Quality Assurance'],
    },
  ];

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }
        .gold-gradient {
          background: linear-gradient(135deg, #F5D547 0%, #E8B92C 50%, #C9831A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .curved-box {
          border-radius: 16px;
        }
        .hover-lift {
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }
        .hover-lift:hover {
          transform: translateY(-8px);
        }
      `}</style>

      {/* Hero */}
      <section className="relative py-20 bg-gradient-to-b from-stone-900 to-stone-50 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="gold-gradient">Services</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div key={idx} className="curved-box bg-white border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all duration-500 hover-lift overflow-hidden">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-3xl mb-3 font-bold">{service.title}</h3>
                  <p className="text-stone-600 text-sm mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, i) => (
                      <li key={i} className="text-stone-700 text-sm flex items-center gap-2">
                        <span className="w-2 h-2 bg-[#E8B92C] rounded-full"></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">
              OUR PROCESS
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">
              How We <span className="gold-gradient">Work</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understand your vision and requirements' },
              { step: '02', title: 'Planning', desc: 'Create detailed project plans' },
              { step: '03', title: 'Execution', desc: 'Professional implementation' },
              { step: '04', title: 'Completion', desc: 'Quality assurance & handover' },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E8B92C] to-[#C9831A] flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">{item.step}</span>
                </div>
                <h3 className="font-display text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-stone-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-stone-900 text-white text-center">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <h2 className="font-display text-4xl md:text-5xl mb-6 font-bold">
            Ready to Start Your <span className="gold-gradient">Project</span>?
          </h2>
          <p className="text-white/80 text-lg max-w-2xl mx-auto mb-8">
            Contact us today to discuss how we can bring your vision to life
          </p>
          <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-bold uppercase tracking-wider rounded-full">
            GET YOUR QUOTE →
          </Link>
        </div>
      </section>

      {/* Inquiry Form */}
      <InquiryForm />
    </div>
  );
}
