'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import InquiryForm from './components/InquiryForm';

const IMG = {
  pool_landscape: '/images/pool_landscape_hero_section.jpg',
  kitchen_marble: '/images/kitchen_marble.jpg',
  kitchen_gold: '/images/kitchen_gold.jpg',
  living_marble: '/images/living_marble.jpg',
  living_modern: '/images/living_modern.jpg',
  turnkey: '/images/turnkey.png',
  dubai_hills: '/images/dubai_hills.png',
  arabian_ranches: '/images/arabian_ranches1.jpg',
  the_valley: '/images/the_valley.jpg',
  tilal_al_ghaf: '/images/talal_al_ghaf.jpg',
  al_jurf: '/images/al_jurf.jpeg',
  yas_island: '/images/yas_island.webp',
};

export default function RoyalTrackHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState(null);
  const [currentReview, setCurrentReview] = useState(0);
  const [activeServiceTab, setActiveServiceTab] = useState(0);

  const slides = [
    { image: IMG.pool_landscape, service: "Pools & Landscaping", title: "Transform Your Outdoor Paradise", description: "Luxury pool design and premium landscaping solutions across Dubai and UAE." },
    { image: IMG.kitchen_gold, service: "Interior Fit-Out", title: "Exquisite Interior Craftsmanship", description: "Premium interior design and fit-out services for your residential and commercial spaces." },
    { image: IMG.turnkey, service: "Turnkey Solutions", title: "Complete Project Excellence", description: "End-to-end construction management from concept to completion with guaranteed quality." }
  ];

  const services = [
    { title: 'Interior Fit-Out', icon: '🏠', desc: 'Premium interior design, kitchens, bathrooms, living spaces' },
    { title: 'Pools & Landscaping', icon: '🏊', desc: 'Luxury pools, gardens, outdoor lighting, hardscaping' },
    { title: 'Turnkey Solutions', icon: '🔨', desc: 'Complete project management from concept to handover' },
    { title: 'Waterproofing', icon: '💧', desc: 'Basement, roof, and exterior waterproofing solutions' },
    { title: 'Electrical Works', icon: '⚡', desc: 'Wiring, lighting, automation, safety systems' },
    { title: 'MEP Works', icon: '🔧', desc: 'Mechanical, electrical, plumbing installations' },
    { title: 'Flooring & Tiling', icon: '🧱', desc: 'Marble, granite, ceramic, wooden flooring' },
    { title: 'Painting & Finishing', icon: '🎨', desc: 'Interior and exterior painting, wall finishes' },
  ];

  const portfolioLocations = [
    { name: 'Dubai', projects: 45, image: IMG.dubai_hills },
    { name: 'Abu Dhabi', projects: 28, image: IMG.arabian_ranches },
    { name: 'Sharjah', projects: 18, image: IMG.the_valley },
    { name: 'Ras Al Khaimah', projects: 12, image: IMG.tilal_al_ghaf },
  ];

  const reviews = [
    {
      text: "Royal Track transformed our villa with exceptional interior fit-out. The team's professionalism and attention to detail were outstanding. We couldn't be happier with the results!",
      author: "Ahmed Hassan",
      project: "Villa Renovation - Arabian Ranches",
      rating: 5
    },
    {
      text: "The landscaping and pool design exceeded our expectations. The entire project was completed on time and within budget. The outdoor space is now our favorite part of the home.",
      author: "Fatima Al Mansouri",
      project: "Pool & Landscaping - Dubai Hills",
      rating: 5
    },
    {
      text: "We engaged Royal Track for our commercial interior fit-out. Their turnkey solution made the entire process seamless, stress-free, and professional from start to finish.",
      author: "Mohammed Al Maktoum",
      project: "Commercial Fit-Out - Downtown Dubai",
      rating: 5
    },
    {
      text: "Excellent work on our waterproofing project. The team was professional, efficient, and completed everything to the highest standards. Highly recommended for any construction needs.",
      author: "Sarah Johnson",
      project: "Waterproofing - Jumeirah",
      rating: 5
    },
    {
      text: "From MEP works to final finishing, Royal Track handled everything flawlessly. Our new office looks amazing and everything works perfectly.",
      author: "Hassan Al Noor",
      project: "Complete Turnkey - Business Bay",
      rating: 5
    },
  ];

  const partners = [
    { name: 'DAMAC', initials: 'DAMAC', color: 'from-red-500 to-red-600' },
    { name: 'Nakheel', initials: 'NKL', color: 'from-blue-500 to-blue-600' },
    { name: 'Emaar', initials: 'EMR', color: 'from-yellow-500 to-amber-600' },
    { name: 'Shoba', initials: 'SHOBA', color: 'from-green-500 to-green-600' },
    { name: 'Azizi', initials: 'AZZ', color: 'from-purple-500 to-purple-600' },
    { name: 'Sobha', initials: 'SOBHA', color: 'from-pink-500 to-pink-600' },
  ];

  const faqItems = [
    {
      question: 'What services does Royal Track offer?',
      answer: 'We offer comprehensive construction services including interior fit-out, pool & landscaping design, turnkey solutions, waterproofing, electrical works, MEP installations, flooring, and painting.'
    },
    {
      question: 'Do you work across the UAE?',
      answer: 'Yes, we operate throughout the UAE including Dubai, Abu Dhabi, Sharjah, and Ras Al Khaimah. We have completed projects in all major communities.'
    },
    {
      question: 'What is your project timeline?',
      answer: 'Project timelines vary based on scope and complexity. We provide detailed timelines during the consultation phase and ensure on-time delivery for all projects.'
    },
    {
      question: 'Do you provide warranty on work?',
      answer: 'Yes, we provide comprehensive warranties on all our work. Details vary by project type and are discussed during the planning phase.'
    },
    {
      question: 'How do I get a quote?',
      answer: 'Contact us via phone, email, or WhatsApp with project details. Our team will schedule a consultation and provide a detailed quote within 24-48 hours.'
    },
    {
      question: 'Do you handle design as well?',
      answer: 'Yes, we offer complete design services along with execution. Our team includes experienced designers who work with you to bring your vision to life.'
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentReview((prev) => (prev + 1) % reviews.length);
    }, 6000);
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

      {/* HERO SLIDER */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden" aria-label="Hero section">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.image} alt={slide.service} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/20 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-3xl">
                  <div className="inline-block px-4 py-2 bg-[#E8B92C]/20 backdrop-blur-sm rounded-full border border-[#E8B92C] mb-4 animate-pulse">
                    <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.2em]">{slide.service}</span>
                  </div>
                  {index === 0 && <h1 className="font-display text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 font-bold">{slide.title}</h1>}
                  {index !== 0 && <h2 className="font-display text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 font-bold">{slide.title}</h2>}
                  <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-6 max-w-2xl">{slide.description}</p>
                  <div className="flex flex-wrap items-center gap-4">
                    <Link href="/services" className="px-6 py-3 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-xl hover:scale-105 active:scale-95">EXPLORE SERVICES →</Link>
                    <a href="#contact" className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-stone-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full hover:scale-105 active:scale-95">GET IN TOUCH</a>
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
              <img src={IMG.kitchen_marble} alt="Royal Track premium interior craftsmanship" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="p-8">
              <p className="text-stone-700 text-lg leading-relaxed mb-6">
                At <strong>Royal Track Building & Contracting L.L.C</strong>, a proud subsidiary of <a href="https://royal-techgroup.com/" target="_blank" rel="noopener noreferrer" className="text-[#E8B92C] font-bold hover:text-[#C9831A]">Royal Tech Group</a>, we don't just build structures. We create spaces that define modern living and luxury.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-6">
                With 15+ years of expertise, we've successfully completed premium projects across Dubai, Abu Dhabi, Sharjah, and Ras Al Khaimah. Our team specializes in interior fit-out, pool design, landscaping, and comprehensive turnkey solutions.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-8">
                We're committed to excellence, quality materials, on-time delivery, and 100% customer satisfaction on every project.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white text-sm font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 active:scale-95">LEARN MORE →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ANIMATED SERVICES SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">WHAT WE OFFER</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">Our <span className="gold-gradient">Services</span></h2>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {services.map((service, idx) => (
              <button
                key={idx}
                onClick={() => setActiveServiceTab(idx)}
                className={`p-6 rounded-xl border-2 transition-all duration-300 text-center transform hover:scale-105 ${
                  activeServiceTab === idx
                    ? 'border-[#E8B92C] bg-[#E8B92C]/10 shadow-lg'
                    : 'border-stone-200 hover:border-[#E8B92C]'
                }`}
              >
                <div className="text-4xl mb-2">{service.icon}</div>
                <h3 className="font-bold text-sm">{service.title}</h3>
              </button>
            ))}
          </div>

          <div className="rounded-2xl bg-gradient-to-r from-stone-50 to-white p-8 md:p-12 border border-stone-200 animate-in fade-in duration-500">
            <div className="flex items-start gap-6">
              <div className="text-6xl">{services[activeServiceTab].icon}</div>
              <div>
                <h3 className="font-display text-3xl md:text-4xl mb-4">{services[activeServiceTab].title}</h3>
                <p className="text-stone-600 text-lg leading-relaxed">{services[activeServiceTab].desc}</p>
                <Link href="#contact" className="inline-block mt-6 px-8 py-3 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 font-bold rounded-full transition-all hover:scale-105 active:scale-95">
                  Get Quote →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO / LOCATIONS SECTION */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR REACH</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">Portfolio by <span className="gold-gradient">Location</span></h2>
            <p className="text-stone-600 text-lg mt-4">Completed projects across the UAE's most prestigious communities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {portfolioLocations.map((location, idx) => (
              <div key={idx} className="group relative overflow-hidden rounded-2xl aspect-[4/5] cursor-pointer">
                <img src={location.image} alt={location.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent group-hover:from-stone-900/80 transition-all duration-300" />
                <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
                  <h3 className="font-display text-4xl mb-2 group-hover:text-[#E8B92C] transition-colors">{location.name}</h3>
                  <p className="text-sm font-bold">{location.projects} Projects</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 hover:bg-[#E8B92C] hover:text-stone-900 text-white text-sm font-bold uppercase tracking-wider rounded-full transition-all hover:scale-105 active:scale-95">VIEW FULL PORTFOLIO →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS / REVIEWS CAROUSEL */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">CLIENT FEEDBACK</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">What Our <span className="gold-gradient">Clients Say</span></h2>
          </div>

          <div className="relative bg-gradient-to-r from-stone-50 to-white rounded-2xl p-8 md:p-12 border border-stone-200 min-h-[400px] flex items-center">
            <div className="w-full animate-in fade-in duration-500">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(reviews[currentReview].rating)].map((_, i) => (
                  <span key={i} className="text-2xl text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-xl text-stone-600 leading-relaxed mb-8">"{reviews[currentReview].text}"</p>
              <div>
                <p className="font-bold text-lg text-stone-900">{reviews[currentReview].author}</p>
                <p className="text-sm text-stone-500">{reviews[currentReview].project}</p>
              </div>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={() => setCurrentReview((prev) => (prev - 1 + reviews.length) % reviews.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 rounded-full flex items-center justify-center font-bold transition-all hover:scale-110 active:scale-95"
            >
              ←
            </button>
            <button
              onClick={() => setCurrentReview((prev) => (prev + 1) % reviews.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 rounded-full flex items-center justify-center font-bold transition-all hover:scale-110 active:scale-95"
            >
              →
            </button>

            {/* Dots */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentReview(idx)}
                  className={`w-2 h-2 rounded-full transition-all ${idx === currentReview ? 'bg-[#E8B92C] w-8' : 'bg-stone-300'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS SECTION */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">TRUSTED BY</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">Our <span className="gold-gradient">Partners</span></h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((partner, idx) => (
              <div key={idx} className={`bg-gradient-to-br ${partner.color} rounded-xl p-8 text-white flex items-center justify-center min-h-[150px] hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer`}>
                <div className="text-center">
                  <div className="font-bold text-2xl mb-2">{partner.initials}</div>
                  <p className="text-sm font-semibold">{partner.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">COMMON QUESTIONS</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">Frequently Asked <span className="gold-gradient">Questions</span></h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {faqItems.map((item, idx) => (
              <div key={idx} className="border border-stone-200 rounded-xl overflow-hidden hover:border-[#E8B92C] transition-all">
                <button
                  onClick={() => setExpandedFAQ(expandedFAQ === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-center justify-between bg-stone-50 hover:bg-stone-100 transition-colors"
                >
                  <h3 className="font-bold text-lg text-left">{item.question}</h3>
                  <span className={`text-2xl font-bold text-[#E8B92C] transition-transform ${expandedFAQ === idx ? 'rotate-180' : ''}`}>
                    +
                  </span>
                </button>
                {expandedFAQ === idx && (
                  <div className="px-6 py-4 bg-white border-t border-stone-200 animate-in fade-in duration-300">
                    <p className="text-stone-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
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
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-all">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">Email</h3>
              <a href="mailto:Info@royaltrack.ae" className="text-white text-lg hover:text-[#E8B92C] transition-colors">Info@royaltrack.ae</a>
            </div>
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-all">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">Phone</h3>
              <a href="tel:+97143934374" className="text-white text-lg hover:text-[#E8B92C] transition-colors block">+971 4 393 4374</a>
              <a href="tel:+971552824492" className="text-white text-lg hover:text-[#E8B92C] transition-colors block mt-2">+971 5 5282 4492</a>
            </div>
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center hover:bg-white/10 transition-all">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">Location</h3>
              <p className="text-white text-sm">21st Century Building, Office 303, Al Muraqqabat, Dubai, UAE</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
