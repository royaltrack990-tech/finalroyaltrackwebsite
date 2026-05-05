'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const PROJECTS = [
  {
    id: 1,
    name: 'Dubai Hills Estate',
    category: 'Residential',
    location: 'Dubai Hills, UAE',
    image: '/images/dubai_hills.png',
    images: ['/images/dubai_hills.png', '/images/dubai_hills.png', '/images/dubai_hills.png', '/images/dubai_hills.png'],
    description: 'Luxury villa with premium interior fit-out and landscaped pool',
    fullDescription: 'Experience the epitome of luxury living with our comprehensive villa transformation. This project showcases premium interior design, state-of-the-art MEP systems, and exquisite landscaping with an infinity pool.',
    services: ['Interior Fit-Out', 'Pool & Landscaping', 'Turnkey', 'MEP Works'],
    size: 'large',
  },
  {
    id: 2,
    name: 'Arabian Ranches',
    category: 'Residential',
    location: 'Arabian Ranches, Dubai',
    image: '/images/arabian_ranches1.jpg',
    images: ['/images/arabian_ranches1.jpg', '/images/arabian_ranches1.jpg', '/images/arabian_ranches1.jpg', '/images/arabian_ranches1.jpg'],
    description: 'Modern villa renovation with bespoke interior design',
    fullDescription: 'A contemporary villa renovation featuring custom interior design, premium finishes, and innovative space planning. Every element has been carefully curated to reflect modern luxury.',
    services: ['Interior Fit-Out', 'Renovation', 'Joinery', 'Custom Design'],
    size: 'medium',
  },
  {
    id: 3,
    name: 'Jumeirah Village Triangle',
    category: 'Residential',
    location: 'JVT, Dubai',
    image: '/images/Jumeirah_Village_triangle.jpg',
    images: ['/images/Jumeirah_Village_triangle.jpg', '/images/Jumeirah_Village_triangle.jpg', '/images/Jumeirah_Village_triangle.jpg', '/images/Jumeirah_Village_triangle.jpg'],
    description: 'Contemporary townhouse with custom finishes',
    fullDescription: 'This contemporary townhouse features cutting-edge design with custom finishes throughout. The project emphasizes functionality without compromising on aesthetic excellence.',
    services: ['Interior Fit-Out', 'Joinery', 'Flooring', 'Wall Finishes'],
    size: 'large',
  },
  {
    id: 4,
    name: 'The Valley',
    category: 'Residential',
    location: 'The Valley, Dubai',
    image: '/images/the_valley.jpg',
    images: ['/images/the_valley.jpg', '/images/the_valley.jpg', '/images/the_valley.jpg', '/images/the_valley.jpg'],
    description: 'Premium villa with full turnkey solution',
    fullDescription: 'A comprehensive turnkey solution for a premium villa including complete interior design, MEP coordination, and project management from concept to handover.',
    services: ['Turnkey', 'MEP Works', 'Project Management', 'Quality Assurance'],
    size: 'medium',
  },
  {
    id: 5,
    name: 'Tilal Al Ghaf',
    category: 'Residential',
    location: 'Tilal Al Ghaf, Dubai',
    image: '/images/talal_al_ghaf.jpg',
    images: ['/images/talal_al_ghaf.jpg', '/images/talal_al_ghaf.jpg', '/images/talal_al_ghaf.jpg', '/images/talal_al_ghaf.jpg'],
    description: 'Lakeside villa with infinity pool design',
    fullDescription: 'An exclusive lakeside villa featuring a stunning infinity pool design that seamlessly blends with the landscape. Premium interior fit-out with smart home integration.',
    services: ['Pool & Landscaping', 'Interior Fit-Out', 'Smart Home', 'Lighting Design'],
    size: 'medium',
  },
  {
    id: 6,
    name: 'Al Jurf, Abu Dhabi',
    category: 'Residential',
    location: 'Al Jurf, Abu Dhabi',
    image: '/images/al_jurf.jpeg',
    images: ['/images/al_jurf.jpeg', '/images/al_jurf.jpeg', '/images/al_jurf.jpeg', '/images/al_jurf.jpeg'],
    description: 'Beachfront residence with custom landscaping',
    fullDescription: 'A stunning beachfront property with custom landscaping that maximizes ocean views. Features include private beach access, luxury finishes, and sustainable design principles.',
    services: ['Landscaping', 'Pool Construction', 'Hardscaping', 'Drainage'],
    size: 'large',
  },
  {
    id: 7,
    name: 'Yas Island',
    category: 'Commercial',
    location: 'Yas Island, Abu Dhabi',
    image: '/images/yas_island.webp',
    images: ['/images/yas_island.webp', '/images/yas_island.webp', '/images/yas_island.webp', '/images/yas_island.webp'],
    description: 'Commercial fit-out with premium finishes',
    fullDescription: 'A world-class commercial space featuring premium finishes, modern MEP systems, and ergonomic design for optimal workplace functionality and aesthetics.',
    services: ['Commercial Fit-Out', 'MEP', 'Office Design', 'AV Integration'],
    size: 'medium',
  },
  {
    id: 8,
    name: 'Emirates Hills',
    category: 'Residential',
    location: 'Emirates Hills, Dubai',
    image: '/images/living_marble.jpg',
    images: ['/images/living_marble.jpg', '/images/living_marble.jpg', '/images/living_marble.jpg', '/images/living_marble.jpg'],
    description: 'Luxury mansion with marble interiors',
    fullDescription: 'An opulent mansion featuring exquisite marble work, custom joinery, and premium interior design. Every detail reflects sophistication and timeless elegance.',
    services: ['Interior Fit-Out', 'Joinery', 'Marble Work', 'Luxury Finishes'],
    size: 'medium',
  },
  {
    id: 9,
    name: 'Palm Jumeirah',
    category: 'Residential',
    location: 'Palm Jumeirah, Dubai',
    image: '/images/project_2.jpg',
    images: ['/images/project_2.jpg', '/images/project_2.jpg', '/images/project_2.jpg', '/images/project_2.jpg'],
    description: 'Beachfront villa with panoramic sea views',
    fullDescription: 'A spectacular beachfront villa on Palm Jumeirah with panoramic sea views. Features a complete turnkey solution with premium landscaping and pool design.',
    services: ['Turnkey', 'Pool & Landscaping', 'Waterfront Design', 'Luxury Finishes'],
    size: 'large',
  },
];

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const autoPlayRef = useRef(null);

  useEffect(() => {
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, 4000);

    return () => clearInterval(autoPlayRef.current);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
    clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    }, 4000);
  };

  const nextSlide = () => {
    goToSlide((currentIndex - 1 + images.length) % images.length);
  };

  const prevSlide = () => {
    goToSlide((currentIndex + 1) % images.length);
  };

  return (
    <div className="relative w-full aspect-video bg-stone-300 rounded-lg overflow-hidden group">
      {images.map((img, idx) => (
        <img
          key={idx}
          src={img}
          alt={`Slide ${idx + 1}`}
          className={`absolute w-full h-full object-cover transition-opacity duration-700 ${
            idx === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 bg-black/50 hover:bg-black/70 text-white rounded-full flex items-center justify-center transition-all opacity-0 group-hover:opacity-100 z-10"
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => goToSlide(idx)}
            className={`h-2 rounded-full transition-all ${
              idx === currentIndex ? 'bg-[#E8B92C] w-8' : 'bg-white/50 w-2 hover:bg-white'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [stats, setStats] = useState({ projects: 0, clients: 0, years: 0, locations: 0 });
  const statsRef = useRef(null);
  const [statsAnimated, setStatsAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !statsAnimated) {
          setStatsAnimated(true);
          animateStats();
        }
      },
      { threshold: 0.3 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, [statsAnimated]);

  const animateStats = () => {
    const targets = { projects: 150, clients: 95, years: 15, locations: 25 };
    const duration = 2000;
    const steps = 60;
    const interval = duration / steps;
    let count = 0;

    const timer = setInterval(() => {
      count++;
      const progress = count / steps;
      setStats({
        projects: Math.floor(targets.projects * progress),
        clients: Math.floor(targets.clients * progress),
        years: Math.floor(targets.years * progress),
        locations: Math.floor(targets.locations * progress),
      });
      if (count >= steps) {
        setStats(targets);
        clearInterval(timer);
      }
    }, interval);
  };

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;1,400&family=Inter:wght@300;400;500;600;700;800&display=swap');

        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(60px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes slideRight {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.9); }
          to { opacity: 1; transform: scale(1); }
        }
        @keyframes textReveal {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
        @keyframes scrollText {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-slide-up { animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-slide-right { animation: slideRight 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-scale-in { animation: scaleIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        .animate-text-reveal { animation: textReveal 1s cubic-bezier(0.16, 1, 0.3, 1) forwards; }

        .gold-gradient {
          background: linear-gradient(135deg, #F5D547 0%, #E8B92C 50%, #C9831A 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          -webkit-text-fill-color: transparent;
        }

        .text-mask {
          overflow: hidden;
          display: block;
        }

        .marquee-text {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 8vw, 12rem);
          font-weight: 800;
          line-height: 1;
          white-space: nowrap;
          color: transparent;
          -webkit-text-stroke: 2px rgba(232, 185, 44, 0.2);
          letter-spacing: -0.02em;
        }

        .marquee-container {
          display: flex;
          animation: scrollText 60s linear infinite;
          width: max-content;
        }

        .stagger-1 { animation-delay: 0.1s; opacity: 0; }
        .stagger-2 { animation-delay: 0.2s; opacity: 0; }
        .stagger-3 { animation-delay: 0.3s; opacity: 0; }
        .stagger-4 { animation-delay: 0.4s; opacity: 0; }
        .stagger-5 { animation-delay: 0.5s; opacity: 0; }
        .stagger-6 { animation-delay: 0.6s; opacity: 0; }

        .glow-gold {
          box-shadow: 0 0 40px rgba(232, 185, 44, 0.3);
        }

        @media (max-width: 640px) {
          .marquee-text {
            font-size: clamp(1.5rem, 5vw, 4rem);
            -webkit-text-stroke: 1px rgba(232, 185, 44, 0.2);
          }
        }
      `}</style>

      {/* ============ HERO SECTION ============ */}
      <section className="relative min-h-screen flex items-center bg-stone-900 text-white overflow-hidden pt-20 sm:pt-32 pb-12 sm:pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-10 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-[#E8B92C] blur-3xl" />
          <div className="absolute bottom-20 left-10 w-48 h-48 sm:w-96 sm:h-96 rounded-full bg-[#C9831A] blur-3xl" />
        </div>

        <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 overflow-hidden pointer-events-none hidden sm:block">
          <div className="marquee-container">
            <div className="marquee-text">PROJECTS — CRAFTSMANSHIP — EXCELLENCE — PROJECTS — CRAFTSMANSHIP — EXCELLENCE —</div>
            <div className="marquee-text">PROJECTS — CRAFTSMANSHIP — EXCELLENCE — PROJECTS — CRAFTSMANSHIP — EXCELLENCE —</div>
          </div>
        </div>

        <div className="relative max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 w-full z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center">
            <div className="lg:col-span-8">
              <div className="text-mask mb-4 sm:mb-6">
                <div className="animate-text-reveal stagger-1 inline-flex items-center gap-3">
                  <span className="w-8 sm:w-12 h-px bg-[#E8B92C]" />
                  <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.4em]">Our Portfolio</span>
                </div>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] mb-6 sm:mb-8">
                <span className="text-mask block">
                  <span className="block animate-text-reveal stagger-2">Building</span>
                </span>
                <span className="text-mask block">
                  <span className="block animate-text-reveal stagger-3 gold-gradient italic">Excellence.</span>
                </span>
                <span className="text-mask block">
                  <span className="block animate-text-reveal stagger-4">Delivered.</span>
                </span>
              </h1>

              <div className="text-mask">
                <p className="animate-slide-up stagger-5 text-white/70 text-base sm:text-lg md:text-xl max-w-2xl leading-relaxed font-light">
                  A curated collection of our finest construction projects across the UAE — where vision meets precision, and every detail tells a story of luxury and craftsmanship.
                </p>
              </div>
            </div>

            <div className="lg:col-span-4 hidden lg:block">
              <div className="animate-scale-in stagger-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-[#E8B92C] to-[#C9831A] rounded-2xl sm:rounded-3xl rotate-6 glow-gold" />
                <div className="relative bg-stone-900 border-2 border-[#E8B92C] rounded-2xl sm:rounded-3xl p-6 sm:p-8">
                  <div className="text-[#E8B92C] text-xs font-bold uppercase tracking-widest mb-4">Total Projects</div>
                  <div className="font-display text-5xl sm:text-6xl md:text-7xl font-bold gold-gradient mb-2">150+</div>
                  <div className="text-white/60 text-sm">Across UAE & beyond</div>
                  <div className="mt-6 pt-6 border-t border-white/10 flex items-center justify-between">
                    <div>
                      <div className="text-xl sm:text-2xl font-display text-white font-bold">15+</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">Years</div>
                    </div>
                    <div>
                      <div className="text-xl sm:text-2xl font-display text-white font-bold">95%</div>
                      <div className="text-xs text-white/50 uppercase tracking-wider">Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-white/40">
            <span className="text-xs uppercase tracking-widest">Scroll to Explore</span>
            <div className="w-px h-12 bg-gradient-to-b from-[#E8B92C] to-transparent" />
          </div>
        </div>
      </section>

      {/* ============ SPACER SECTION ============ */}
      <section className="py-12 sm:py-20 bg-gradient-to-b from-stone-900 to-stone-800">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center">
            <p className="text-stone-400 text-xs sm:text-sm tracking-widest uppercase px-2">ENGINEERING LEGACY STRUCTURES WITH UNCOMPROMISING PRECISION</p>
          </div>
        </div>
      </section>

      {/* ============ PORTFOLIO HEADING SECTION ============ */}
      <section className="py-12 sm:py-20 bg-stone-100">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-20">
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-stone-900 leading-tight px-2">
              A PORTFOLIO OF STRENGTH, SCALE, AND METICULOUS DESIGN
            </h1>
          </div>

          {/* Section with OUR PROJECTS and Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-16 sm:mb-24">
            <div>
              <h2 className="font-display text-5xl sm:text-6xl md:text-7xl font-bold text-stone-900 leading-tight">
                OUR<br className="hidden sm:block" />
                PROJECTS
              </h2>
            </div>
            <div>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                ENGINEERING LEGACY STRUCTURES WITH UNCOMPROMISING PRECISION. OUR COMMERCIAL AND RESIDENTIAL PORTFOLIO DEFINES THE URBAN SKYLINE THROUGH HEAVY-DUTY EXECUTION.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROJECTS GRID SECTION ============ */}
      <section className="py-12 sm:py-20 bg-stone-700">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Projects Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12">
            {PROJECTS.slice(0, 4).map((project, idx) => (
              <div
                key={project.id}
                className="group cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                {/* Project Header with Number and Title */}
                <div className="mb-4 sm:mb-6">
                  <div className="flex items-start gap-4 sm:gap-8 mb-3 sm:mb-4">
                    <span className="text-2xl sm:text-3xl md:text-4xl font-light text-white/60 font-display min-w-fit">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-bold text-[#D4AF37] group-hover:text-white transition-colors pt-1">
                      {project.name.toUpperCase()}
                    </h3>
                  </div>
                </div>

                {/* Image */}
                <div className="relative h-48 sm:h-64 md:h-80 overflow-hidden rounded-lg mb-4 sm:mb-6">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Text Content */}
                <div className="space-y-2 sm:space-y-3">
                  <span className="text-[#D4AF37] text-xs font-bold uppercase tracking-widest inline-block">
                    {project.category}
                  </span>
                  <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                    {project.description}
                  </p>
                  <div className="pt-2 sm:pt-3 flex items-center gap-2 text-white/60 text-xs sm:text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {project.location}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* View All Projects Button */}
          <div className="mt-12 sm:mt-16 md:mt-20 flex justify-center">
            <Link
              href="/projects"
              className="inline-flex items-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37] hover:text-stone-900 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full"
            >
              VIEW ALL PROJECTS
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ============ STATS COUNTER SECTION ============ */}
      <section ref={statsRef} className="py-16 sm:py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: 'linear-gradient(rgba(232,185,44,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(232,185,44,0.1) 1px, transparent 1px)',
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
            {[
              { value: stats.projects, suffix: '+', label: 'Projects Completed' },
              { value: stats.clients, suffix: '%', label: 'Client Satisfaction' },
              { value: stats.years, suffix: '+', label: 'Years of Excellence' },
              { value: stats.locations, suffix: '+', label: 'Locations Across UAE' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center lg:text-left">
                <div className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-2 sm:mb-3">
                  <span className="gold-gradient">{stat.value}</span>
                  <span className="text-[#E8B92C]">{stat.suffix}</span>
                </div>
                <div className="text-white/60 text-xs sm:text-sm font-bold uppercase tracking-widest">
                  {stat.label}
                </div>
                <div className="mt-2 sm:mt-3 w-8 sm:w-12 h-px bg-[#E8B92C] mx-auto lg:mx-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ PROCESS / APPROACH ============ */}
      <section className="py-16 sm:py-24 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-12 sm:mb-20">
            <div className="inline-flex items-center gap-2 sm:gap-3 mb-4">
              <span className="w-6 sm:w-8 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">Our Process</span>
              <span className="w-6 sm:w-8 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              How We <span className="gold-gradient italic">Build</span>
            </h2>
            <p className="text-stone-600 text-base sm:text-lg max-w-2xl mx-auto px-4">
              From concept to completion, we follow a refined methodology that ensures excellence at every stage
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { step: '01', title: 'Consultation', desc: 'Understanding your vision through detailed discussions and site analysis.' },
              { step: '02', title: 'Design', desc: 'Crafting bespoke designs that align with your aesthetic and functional needs.' },
              { step: '03', title: 'Construction', desc: 'Executing with precision, premium materials, and skilled craftsmanship.' },
              { step: '04', title: 'Handover', desc: 'Final inspection, quality checks, and seamless project delivery.' },
            ].map((item, idx) => (
              <div key={idx} className="group relative">
                <div className="bg-white p-6 sm:p-8 rounded-xl sm:rounded-2xl border-2 border-stone-200 hover:border-[#E8B92C] transition-all duration-500 h-full hover:shadow-2xl">
                  <div className="font-display text-5xl sm:text-6xl font-bold text-stone-200 group-hover:gold-gradient transition-all mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl sm:text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
                {idx < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-[#E8B92C] z-10" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA SECTION ============ */}
      <section className="py-16 sm:py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#E8B92C]/10 to-transparent" />
        </div>

        <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 relative">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 sm:gap-3 mb-4">
                <span className="w-6 sm:w-8 h-px bg-[#E8B92C]" />
                <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">Start Your Project</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                Have a <span className="gold-gradient italic">Vision?</span>
                <br />
                Let's Build It.
              </h2>
              <p className="text-white/70 text-base sm:text-lg mb-8 max-w-xl leading-relaxed">
                Every great project starts with a conversation. Share your ideas with us and we'll bring them to life with the precision and luxury Royal Track is known for.
              </p>

              <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-xl hover:shadow-2xl hover:scale-105"
                >
                  Get Free Consultation
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white hover:bg-white hover:text-stone-900 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full"
                >
                  View Services
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10">
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-6 text-[#E8B92C]">Quick Contact</h3>
                <div className="space-y-4 sm:space-y-5">
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50 mb-1">Call Us</div>
                    <a href="tel:+97143934374" className="text-white text-lg sm:text-xl font-display hover:text-[#E8B92C] transition-colors break-all">
                      +971 4 393 4374
                    </a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50 mb-1">WhatsApp</div>
                    <a href="https://wa.me/971552824492" className="text-white text-lg sm:text-xl font-display hover:text-[#E8B92C] transition-colors break-all">
                      +971 5 5282 4492
                    </a>
                  </div>
                  <div>
                    <div className="text-xs uppercase tracking-widest text-white/50 mb-1">Email</div>
                    <a href="mailto:Info@royaltrack.ae" className="text-white text-lg sm:text-xl font-display hover:text-[#E8B92C] transition-colors break-all">
                      Info@royaltrack.ae
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PROJECT DETAIL MODAL ============ */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="bg-stone-950 max-w-6xl w-full rounded-xl sm:rounded-2xl overflow-hidden my-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 p-4 sm:p-8 lg:p-12">
              {/* Left Side - Image Slider */}
              <div className="flex flex-col justify-start">
                <ImageSlider images={selectedProject.images} />
                
                {/* Small Details Below Slider */}
                <div className="mt-4 sm:mt-6 space-y-2 sm:space-y-3">
                  <div className="flex items-center gap-2 text-stone-400 text-xs sm:text-sm">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    </svg>
                    {selectedProject.location}
                  </div>
                  <span className="inline-block px-3 py-1 bg-[#E8B92C] text-stone-900 text-xs font-bold uppercase tracking-widest rounded-full w-fit">
                    {selectedProject.category}
                  </span>
                </div>
              </div>

              {/* Right Side - Content */}
              <div className="flex flex-col justify-between text-white">
                {/* Title & Description */}
                <div>
                  <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-white">
                    {selectedProject.name}
                  </h2>
                  
                  <div className="mb-6 sm:mb-8 pb-6 sm:pb-8 border-b border-stone-700">
                    <p className="text-stone-300 text-base sm:text-lg leading-relaxed">
                      {selectedProject.fullDescription}
                    </p>
                  </div>

                  {/* Services */}
                  <div>
                    <h3 className="font-display text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-[#E8B92C]">
                      Services Delivered
                    </h3>
                    <div className="space-y-2">
                      {selectedProject.services.map((service, idx) => (
                        <div key={idx} className="flex items-center gap-3 text-stone-300 text-sm sm:text-base">
                          <svg className="w-5 h-5 text-[#E8B92C] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                          <span>{service}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <Link
                  href="/#contact"
                  className="inline-flex items-center justify-center gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 font-bold uppercase tracking-wider rounded-full transition-all w-full mt-6 sm:mt-8 text-sm sm:text-base"
                >
                  Start Similar Project
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
