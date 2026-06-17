'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import InquiryForm from './components/InquiryForm';

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z"/>
  </svg>
);

const socialLinks = [
  { name: 'Email', href: 'mailto:Info@royaltrack.ae', icon: <EmailIcon /> },
  { name: 'Facebook', href: 'https://www.facebook.com/royaltrackcontractingllc', icon: <FacebookIcon /> },
  { name: 'Instagram', href: 'https://www.instagram.com/royal.track.ae/', icon: <InstagramIcon /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/royal-track-building-contracting-llc/', icon: <LinkedInIcon /> },
  { name: 'TikTok', href: 'https://www.tiktok.com/@royaltrack.ae?_r=1&_t=ZS-96BMgvj2qCw', icon: <TikTokIcon /> },
];

const IMG = {
  pool_landscape: '/images/pool_landscape_hero_section.jpg',
  kitchen_marble: '/images/kitchen_marble.jpg',
  kitchen_gold: '/images/kitchen_gold.jpg',
  living_marble: '/images/living_marble.jpg',
  living_modern: '/images/living_modern.jpg',
  turnkey: '/images/turnkey.png',
  dubai_hills: '/images/dubai_hills.png',
  arabian_ranches: '/images/arabian_ranches1.jpg',
  jumeirah_village: '/images/Jumeirah_Village_triangle.jpg',
  the_valley: '/images/the_valley.jpg',
  tilal_al_ghaf: '/images/talal_al_ghaf.jpg',
  al_jurf: '/images/al_jurf.jpeg',
  yas_island: '/images/yas_island.webp',
  project_2: '/images/project_2.jpg',
  royal_tech_group: '/images/R_tech_group_LLC_oman.png',
  royal_tech_ofs: '/images/Royal_Tech_1.png',
  royal_tech_ogt: '/images/Royal_Track_02.png',
  royal_tech_igt: '/images/Royal_Track_3.png',
};

export default function RoyalTrackHome() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    { image: IMG.pool_landscape, service: "Pools & Landscaping", title: "Transform Your Outdoor Paradise", description: "Luxury pool design and premium landscaping solutions across Dubai and UAE." },
    { image: IMG.kitchen_gold, service: "Interior Fit-Out", title: "Exquisite Interior Craftsmanship", description: "Premium interior design and fit-out services for your residential and commercial spaces." },
    { image: IMG.turnkey, service: "Turnkey Solutions", title: "Complete Project Excellence", description: "End-to-end construction management from concept to completion with guaranteed quality." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }
        .gold-gradient { background: linear-gradient(135deg, #F5D547 0%, #E8B92C 50%, #C9831A 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .curved-box { border-radius: 20px; overflow: hidden; }
        .hover-lift { transition: transform 0.4s ease; }
        .hover-lift:hover { transform: translateY(-10px); }
      `}</style>

      {/* Sticky social icons - top right, fixed below header, visible on scroll */}
      <div className="fixed top-[84px] right-6 lg:right-12 z-30 hidden md:flex items-center gap-3 bg-stone-900/70 backdrop-blur-sm px-4 py-2.5 rounded-full">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.name}
            className="text-white/80 hover:text-[#E8B92C] transition-all duration-200 hover:scale-110"
          >
            {social.icon}
          </a>
        ))}
      </div>

      {/* HERO SLIDER */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.image} alt={slide.service} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-3xl">
                  <div className="inline-block px-4 py-2 bg-[#E8B92C]/20 backdrop-blur-sm rounded-full border border-[#E8B92C] mb-4">
                    <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.2em]">{slide.service}</span>
                  </div>
                  {index === 0 ? (
                    <h1 className="font-display text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 font-bold">{slide.title}</h1>
                  ) : (
                    <h2 className="font-display text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 font-bold">{slide.title}</h2>
                  )}
                  <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-6 max-w-2xl">{slide.description}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link href="/services" className="px-6 py-3 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-xl">EXPLORE SERVICES →</Link>
                    <a href="#contact" className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-stone-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full">GET IN TOUCH</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#E8B92C] w-6' : 'bg-white/50'}`} />
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">BUILDING BEYOND EXPECTATIONS</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">Where Vision Meets <span className="gold-gradient">Precision</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="curved-box overflow-hidden shadow-2xl">
              <img src={IMG.kitchen_marble} alt="Royal Track premium interior fit-out craftsmanship in Dubai" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="p-8">
              <p className="text-stone-700 text-lg leading-relaxed mb-6">
                At <strong className="text-stone-900">Royal Track Building & Contracting L.L.C</strong>, a proud subsidiary of <a href="https://royal-techgroup.com/" target="_blank" rel="noopener noreferrer" className="text-[#E8B92C] font-bold hover:text-[#C9831A] underline transition-colors">Royal Tech Group</a>, we don't just build structures. We create spaces that define modern living and luxury across Dubai and the UAE.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-8">
                Driven by deep expertise and passionate commitment to excellence, we bring together innovative design, superior craftsmanship, and flawless execution in every interior fit-out, pool and landscaping, and turnkey construction project we deliver.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white text-sm font-bold uppercase tracking-wider rounded-full">LEARN MORE →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR SERVICES</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4 mb-6">Comprehensive <span className="gold-gradient">Construction</span> Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Interior Fit-Out', desc: 'Complete interior solutions with high-quality detailing.', image: IMG.kitchen_gold },
              { title: 'Pools & Landscaping', desc: 'Professional design and construction of pools and landscapes.', image: IMG.pool_landscape },
              { title: 'Turnkey Solutions', desc: 'End-to-end project execution from planning to delivery.', image: IMG.turnkey },
            ].map((service) => (
              <div key={service.title} className="curved-box bg-white border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all duration-500 hover-lift">
                <div className="aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-3xl mb-4">{service.title}</h3>
                  <p className="text-stone-600 text-sm">{service.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-bold uppercase tracking-wider rounded-full">VIEW ALL SERVICES →</Link>
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR CRAFTSMANSHIP</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">Featured <span className="gold-gradient">Projects</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: 'Dubai Hills', image: IMG.dubai_hills },
              { name: 'Arabian Ranches', image: IMG.arabian_ranches },
              { name: 'The Valley', image: IMG.the_valley },
              { name: 'Tilal Al Ghaf', image: IMG.tilal_al_ghaf },
              { name: 'Al Jurf', image: IMG.al_jurf },
              { name: 'Yas Island', image: IMG.yas_island },
            ].map((project) => (
              <div key={project.name} className="relative overflow-hidden curved-box aspect-[4/3] hover-lift">
                <img src={project.image} alt={`Royal Track construction project in ${project.name}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="font-display text-2xl text-white">{project.name}</div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 hover:bg-[#E8B92C] hover:text-stone-900 text-white text-sm font-bold uppercase tracking-wider rounded-full">VIEW ALL PROJECTS →</Link>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <InquiryForm />

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-stone-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">GET IN TOUCH</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">We're Here to <span className="gold-gradient">Assist</span> You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">Email</div>
              <a href="mailto:Info@royaltrack.ae" className="text-white text-lg hover:text-[#E8B92C]">Info@royaltrack.ae</a>
            </div>
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">Phone</div>
              <a href="tel:+97143934374" className="text-white text-lg hover:text-[#E8B92C] block">+971 4 393 4374</a>
              <a href="tel:+971552824492" className="text-white text-lg hover:text-[#E8B92C] block mt-2">+971 5 5282 4492</a>
            </div>
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center">
              <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">Location</div>
              <div className="text-white text-sm">21st Century Building, Office 303, Al Muraqqabat, Dubai, UAE</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
