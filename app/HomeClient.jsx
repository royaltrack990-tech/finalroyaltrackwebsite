'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import InquiryForm from './components/InquiryForm';

export default function HomeClient() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: '/images/pool_landscape_hero_section.jpg',
      badge: 'Pools & Landscaping',
      title: 'Transform Your Outdoor Paradise',
      description: 'Luxury pool design and premium landscaping solutions across Dubai and UAE.',
    },
    {
      image: '/images/kitchen_gold.jpg',
      badge: 'Interior Fit-Out',
      title: 'Exquisite Interior Craftsmanship',
      description: 'Premium interior design and fit-out services for your spaces.',
    },
    {
      image: '/images/turnkey.png',
      badge: 'Turnkey Solutions',
      title: 'Complete Project Excellence',
      description: 'End-to-end construction management from concept to completion.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      {/* Hero Slider */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.badge}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-3xl">
                  <div className="inline-block px-4 py-2 bg-[#E8B92C]/20 backdrop-blur-sm rounded-full border border-[#E8B92C] mb-4">
                    <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.2em]">
                      {slide.badge}
                    </span>
                  </div>
                  <h1 className="font-display text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 font-bold">
                    {slide.title}
                  </h1>
                  <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-6 max-w-2xl">
                    {slide.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link href="/services" className="px-6 py-3 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-xl">
                      EXPLORE SERVICES →
                    </Link>
                    <Link href="#contact" className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-stone-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full">
                      GET IN TOUCH
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slide Indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentSlide ? 'bg-[#E8B92C] w-6' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">
              BUILDING BEYOND EXPECTATIONS
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">
              Crafting Excellence with <span className="gold-gradient">Every Detail</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="curved-box overflow-hidden shadow-2xl">
              <img
                src="/images/kitchen_marble.jpg"
                alt="Royal Track"
                className="w-full aspect-[4/5] object-cover"
              />
            </div>
            <div className="p-8">
              <p className="text-stone-700 text-lg leading-relaxed mb-6">
                At <strong className="text-stone-900">Royal Track Building & Contracting L.L.C</strong>, a proud subsidiary of{' '}
                <Link href="https://royal-techgroup.com/" target="_blank" rel="noopener noreferrer" className="text-[#E8B92C] font-bold hover:text-[#C9831A] underline transition-colors">
                  Royal Tech Group
                </Link>
                , we don't just build structures. We create spaces that define modern living and luxury.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-8">
                Driven by deep expertise and passionate commitment to excellence, we bring together innovative design, superior craftsmanship, and flawless execution.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white text-sm font-bold uppercase tracking-wider rounded-full">
                LEARN ABOUT OUR STORY →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">
              OUR SERVICES
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4 mb-6">
              Comprehensive <span className="gold-gradient">Construction</span> Solutions
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="curved-box bg-white border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all duration-500 hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/kitchen_gold.jpg" alt="Interior Fit-Out" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-3xl mb-4">Interior Fit-Out</h3>
                <p className="text-stone-600 text-sm">Complete interior solutions with high-quality detailing.</p>
              </div>
            </div>
            <div className="curved-box bg-white border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all duration-500 hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/pool_landscape_hero_section.jpg" alt="Pools & Landscaping" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-3xl mb-4">Pools & Landscaping</h3>
                <p className="text-stone-600 text-sm">Professional design and construction of pools and landscapes.</p>
              </div>
            </div>
            <div className="curved-box bg-white border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all duration-500 hover-lift">
              <div className="aspect-[4/3] overflow-hidden">
                <img src="/images/turnkey.png" alt="Turnkey Solutions" className="w-full h-full object-cover" />
              </div>
              <div className="p-8">
                <h3 className="font-display text-3xl mb-4">Turnkey Solutions</h3>
                <p className="text-stone-600 text-sm">End-to-end project execution from planning to delivery.</p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-bold uppercase tracking-wider rounded-full">
              VIEW ALL SERVICES →
            </Link>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">
              OUR CRAFTSMANSHIP
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">
              Featured <span className="gold-gradient">Projects</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              { src: '/images/dubai_hills.png', name: 'Dubai Hills' },
              { src: '/images/arabian_ranches1.jpg', name: 'Arabian Ranches' },
              { src: '/images/the_valley.jpg', name: 'The Valley' },
              { src: '/images/talal_al_ghaf.jpg', name: 'Tilal Al Ghaf' },
              { src: '/images/al_jurf.jpeg', name: 'Al Jurf' },
              { src: '/images/yas_island.webp', name: 'Yas Island' },
            ].map((project, index) => (
              <div key={index} className="relative overflow-hidden curved-box aspect-[4/3] hover-lift">
                <img src={project.src} alt={project.name} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-display text-2xl text-white">{project.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 hover:bg-[#E8B92C] hover:text-stone-900 text-white text-sm font-bold uppercase tracking-wider rounded-full">
              VIEW ALL PROJECTS →
            </Link>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <InquiryForm />

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-stone-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">
              GET IN TOUCH
            </span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">
              We're Here to <span className="gold-gradient">Assist</span> You
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">
                Email
              </div>
              <Link href="mailto:Info@royaltrack.ae" className="text-white text-lg hover:text-[#E8B92C]">
                Info@royaltrack.ae
              </Link>
            </div>
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">
                Phone
              </div>
              <Link href="tel:+97143934374" className="text-white text-lg hover:text-[#E8B92C] block">
                +971 4 393 4374
              </Link>
              <Link href="tel:+971552824492" className="text-white text-lg hover:text-[#E8B92C] block mt-2">
                +971 5 5282 4492
              </Link>
            </div>
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">
                Location
              </div>
              <div className="text-white text-sm">
                21st Century Building, Office 303, Al Muraqqabat, Dubai, UAE
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
