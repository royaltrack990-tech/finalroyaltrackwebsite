'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";

const IMG = {
  // Hero & Service Images
  pool_landscape: '/images/pool_landscape_hero_section.jpg',
  kitchen_marble: '/images/kitchen_marble.jpg',
  kitchen_gold: '/images/kitchen_gold.jpg',
  living_marble: '/images/living_marble.jpg',
  living_modern: '/images/living_modern.jpg',
  turnkey: '/images/turnkey.png',
  
  // Project Images (UPDATED)
  dubai_hills: '/images/dubai_hills.png',
  arabian_ranches: '/images/arabian_ranches1.jpg',
  jumeirah_village: '/images/Jumeirah_Village_triangle.jpg',
  the_valley: '/images/the_valley.jpg',
  tilal_al_ghaf: '/images/talal_al_ghaf.jpg',
  al_jurf: '/images/al_jurf.jpeg',
  yas_island: '/images/yas_island.webp',
  project_2: '/images/project_2.jpg',
  
  // Royal Tech Group Logos
  royal_tech_group: '/images/R_tech_group_LLC_oman.png',
  royal_tech_ofs: '/images/Royal_Tech_1.png',
  royal_tech_ogt: '/images/Royal_Track_02.png',
  royal_tech_igt: '/images/Royal_Track_3.png',
};

export default function RoyalTrackHome() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "", consent: false });
  const [submitted, setSubmitted] = useState(false);

  const slides = [
    { image: IMG.pool_landscape, service: "Pools & Landscaping", title: "Transform Your Outdoor Paradise", description: "Luxury pool design and premium landscaping solutions that redefine outdoor living across Dubai and UAE." },
    { image: IMG.kitchen_gold, service: "Interior Fit-Out", title: "Exquisite Interior Craftsmanship", description: "Premium interior design and fit-out services delivering unmatched elegance and functionality for your spaces." },
    { image: IMG.turnkey, service: "Turnkey Solutions", title: "Complete Project Excellence", description: "End-to-end construction management from concept to completion, ensuring seamless delivery and superior quality." }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.consent) return alert("Please agree to the consent");
    if (!formData.name || !formData.email || !formData.phone) return alert("Please fill required fields");
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
    setFormData({ name: "", email: "", phone: "", message: "", consent: false });
  };

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }
        @keyframes float { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-20px); } }
        @keyframes scroll-left { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
        @keyframes slideInLeft { from { opacity: 0; transform: translateX(-50px); } to { opacity: 1; transform: translateX(0); } }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-slideInLeft { animation: slideInLeft 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .gold-gradient { background: linear-gradient(135deg, #F5D547 0%, #E8B92C 50%, #C9831A 100%); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
        .hover-lift { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .hover-lift:hover { transform: translateY(-10px); }
        .curved-box { border-radius: 20px; overflow: hidden; }
        .logo-transparent { mix-blend-mode: multiply; }
        .scroll-container { display: flex; animation: scroll-left 60s linear infinite; }
        .scroll-container:hover { animation-play-state: paused; }
        .logo-item { flex-shrink: 0; margin: 0 2rem; }
      `}</style>

      {/* HERO SLIDER */}
      <section id="home" className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
        {slides.map((slide, index) => (
          <div key={index} className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}>
            <img src={slide.image} alt={slide.service} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-[1600px] mx-auto px-6 lg:px-12 w-full">
                <div className="max-w-3xl">
                  <div className={`transition-all duration-700 ${index === currentSlide ? 'animate-slideInLeft' : ''}`}>
                    <div className="inline-block px-4 py-2 bg-[#E8B92C]/20 backdrop-blur-sm rounded-full border border-[#E8B92C] mb-4">
                      <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.2em]">{slide.service}</span>
                    </div>
                    <h1 className="font-display text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 font-bold">{slide.title}</h1>
                    <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-6 max-w-2xl">{slide.description}</p>
                    <div className="flex flex-wrap items-center gap-4">
                      <a href="/services" className="px-6 py-3 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-xl hover:shadow-2xl hover:scale-105">EXPLORE SERVICES →</a>
                      <a href="#contact" className="px-6 py-3 border-2 border-white text-white hover:bg-white hover:text-stone-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full">GET IN TOUCH</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-3 z-10">
          {slides.map((_, index) => (
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#E8B92C] w-6' : 'bg-white/50 hover:bg-white/80'}`} />
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="py-0 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12 pt-20">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">BUILDING BEYOND EXPECTATIONS</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-stone-900 mb-4">Where Vision Meets <span className="gold-gradient">Precision</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center">
            <div className="relative p-8">
              <div className="relative curved-box overflow-hidden shadow-2xl">
                <img src={IMG.kitchen_marble} alt="Royal Track" className="w-full aspect-[4/5] object-cover" />
                <div className="absolute bottom-8 right-8 bg-gradient-to-br from-[#E8B92C] to-[#C9831A] text-stone-900 p-8 curved-box shadow-xl max-w-[200px]">
                  <div className="font-display text-5xl leading-none mb-2 font-bold">UAE</div>
                  <div className="text-xs font-bold uppercase tracking-wider">Dubai-Based Excellence</div>
                </div>
              </div>
            </div>
            <div className="p-8 lg:p-12">
              <p className="text-stone-700 text-lg leading-relaxed mb-6">
                At <strong className="font-bold text-stone-900">Royal Track Building & Contracting L.L.C</strong>, a proud subsidiary of <strong className="font-bold text-[#E8B92C]">Royal Tech Group</strong>, we don't just build structures. We create spaces that define modern living and luxury.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-8">
                Driven by deep expertise and a passionate commitment to excellence, we seamlessly bring together innovative design, superior craftsmanship, and flawless execution to deliver projects that truly stand out across the UAE.
              </p>
              <div className="grid grid-cols-3 gap-6 mb-10">
                {[
                  { num: 'Premium', label: 'Quality Standards' },
                  { num: 'Expert', label: 'Craftsmanship' },
                  { num: 'Trusted', label: 'Across UAE' },
                ].map((stat) => (
                  <div key={stat.label} className="border-l-4 border-[#E8B92C] pl-4 hover-lift">
                    <div className="font-display text-3xl text-stone-900 mb-1 font-bold">{stat.num}</div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-stone-500">{stat.label}</div>
                  </div>
                ))}
              </div>
              <a href="#contact" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:scale-105">GET IN TOUCH →</a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-0 bg-stone-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">OUR ADVANTAGE</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">Why <span className="gold-gradient">Choose Us</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'Award-Winning', desc: 'Recognized excellence in construction and design across UAE' },
              { icon: '⚡', title: 'Fast Delivery', desc: 'On-time project completion with zero compromise on quality' },
              { icon: '💎', title: 'Premium Materials', desc: 'Only the finest materials sourced from trusted suppliers' },
              { icon: '🤝', title: 'Client-Focused', desc: 'Your vision, our mission—complete satisfaction guaranteed' },
            ].map((item, idx) => (
              <div key={idx} className="curved-box bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover-lift text-center">
                <div className="text-5xl mb-4 animate-float" style={{animationDelay: `${idx * 0.2}s`}}>{item.icon}</div>
                <h3 className="font-display text-2xl mb-3 text-[#E8B92C]">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-0 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR SERVICES</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-stone-900 mb-6">Comprehensive <span className="gold-gradient">Construction</span> Solutions</h2>
            <p className="text-stone-600 text-xl font-light max-w-3xl mx-auto">Elevating Spaces, Redefining Luxury</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Interior Fit-Out', desc: 'Complete interior solutions including design execution, finishing, and high-quality detailing.', image: IMG.kitchen_gold },
              { title: 'Pools & Landscaping', desc: 'Professional design and construction of swimming pools and landscape environments.', image: IMG.pool_landscape },
              { title: 'Turnkey Solutions', desc: 'End-to-end project execution covering planning, design, construction, and final delivery.', image: IMG.turnkey },
            ].map((service) => (
              <div key={service.title} className="group curved-box bg-white border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                <div className="p-8">
                  <h3 className="font-display text-3xl mb-4 group-hover:text-[#E8B92C] transition-colors">{service.title}</h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">{service.desc}</p>
                  <a href="#contact" className="inline-flex items-center gap-2 text-[#E8B92C] text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">Learn More →</a>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-lg hover:shadow-xl hover:scale-105">VIEW ALL SERVICES →</Link>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-0 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR CRAFTSMANSHIP</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-stone-900">Showcasing <span className="gold-gradient">Exceptional</span> Projects</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {[
              { name: 'Dubai Hills', image: IMG.dubai_hills },
              { name: 'Arabian Ranches', image: IMG.arabian_ranches },
              { name: 'Emirates Hills', image: IMG.living_marble },
              { name: 'Palm Jumeirah', image: IMG.project_2 },
              { name: 'Jumeirah Village Triangle', image: IMG.jumeirah_village },
              { name: 'The Valley', image: IMG.the_valley },
              { name: 'Tilal Al Ghaf', image: IMG.tilal_al_ghaf },
              { name: 'Al Jurf, Abu Dhabi', image: IMG.al_jurf },
              { name: 'Yas Island', image: IMG.yas_island },
            ].map((project) => (
              <div key={project.name} className="group cursor-pointer relative overflow-hidden curved-box aspect-[4/3] hover-lift">
                <img src={project.image} alt={project.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/50 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-2">Location</div>
                  <div className="font-display text-2xl text-white">{project.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROYAL TECH GROUP */}
      <section className="py-24 bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 text-white overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">PART OF THE FAMILY</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">Powered by <span className="gold-gradient">Royal Tech Group</span></h2>
            <p className="text-white/70 text-base font-light max-w-2xl mx-auto mb-6">A proud subsidiary of Royal Tech Group — delivering excellence across oil & gas, trading, and construction sectors.</p>
            <a href="https://royal-techgroup.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-[#E8B92C] hover:text-[#FFD700] text-sm font-bold uppercase tracking-wider transition-all hover:gap-3">Visit Royal Tech Group →</a>
          </div>
          <div className="relative mt-16">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-stone-900 to-transparent z-10" />
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-stone-900 to-transparent z-10" />
            <div className="overflow-hidden py-8">
              <div className="scroll-container">
                {[...Array(2)].map((_, setIdx) => (
                  <React.Fragment key={setIdx}>
                    {[
                      { name: 'Royal Tech Group', image: IMG.royal_tech_group, subtitle: 'Parent Company' },
                      { name: 'Oil & Gas Field Services', image: IMG.royal_tech_ofs, subtitle: 'ROFS LLC' },
                      { name: 'Oil & Gas Trading', image: IMG.royal_tech_ogt, subtitle: 'ROGT FZC' },
                      { name: 'Integrated General Trading', image: IMG.royal_tech_igt, subtitle: 'RIGT' },
                    ].map((partner, idx) => (
                      <div key={`${setIdx}-${idx}`} className="logo-item">
                        <div className="group bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#E8B92C] transition-all duration-500 hover:bg-white/10 w-64">
                          <div className="bg-white rounded-lg p-4 mb-4 h-32 flex items-center justify-center">
                            <img src={partner.image} alt={partner.name} className="max-w-full max-h-full object-contain logo-transparent group-hover:scale-110 transition-transform duration-500" />
                          </div>
                          <div className="text-center">
                            <div className="text-xs font-bold uppercase tracking-wider text-[#E8B92C] mb-1">{partner.subtitle}</div>
                            <div className="text-sm text-white/80 font-medium">{partner.name}</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="py-0 bg-stone-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-24">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-6">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">GET IN TOUCH</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight mb-4">We're Here to <span className="gold-gradient">Assist</span> You</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2 space-y-8">
              <div className="curved-box bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">Email</div>
                <a href="mailto:Info@royaltrack.ae" className="text-white text-lg font-medium hover:text-[#E8B92C] transition-colors break-all">Info@royaltrack.ae</a>
              </div>
              <div className="curved-box bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-4">Phone</div>
                <div className="space-y-3">
                  <a href="tel:+97143934374" className="flex items-center gap-3 text-white hover:text-[#E8B92C] transition-colors">
                    <div>
                      <div className="text-xs text-white/60">Landline</div>
                      <div className="font-medium">+971 4 393 4374</div>
                    </div>
                  </a>
                  <a href="tel:+971552824492" className="flex items-center gap-3 text-white hover:text-[#E8B92C] transition-colors">
                    <div>
                      <div className="text-xs text-white/60">Mobile / WhatsApp</div>
                      <div className="font-medium">+971 5 5282 4492</div>
                    </div>
                  </a>
                </div>
              </div>
              <div className="curved-box bg-white/5 backdrop-blur-sm border border-white/10 p-8">
                <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">Location</div>
                <div className="text-white text-sm">13 45A St - Al Muraqqabat, Abu Baker Al Siddique St, 21st Century Building, 3rd Floor, Office No 303, Dubai, UAE</div>
              </div>
            </div>

            <div className="lg:col-span-3">
              <div className="curved-box bg-white/5 backdrop-blur-sm border border-white/10 p-10">
                {submitted ? (
                  <div className="py-20 text-center">
                    <h3 className="font-display text-4xl mb-3 text-white">Thank You!</h3>
                    <p className="text-white/70">We've received your message.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-white/80 mb-3 block">Name *</label>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} placeholder="Your full name" className="w-full bg-white/10 border-2 border-white/20 focus:border-[#E8B92C] text-white px-4 py-3 outline-none rounded-lg" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-white/80 mb-3 block">Email *</label>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} placeholder="you@example.com" className="w-full bg-white/10 border-2 border-white/20 focus:border-[#E8B92C] text-white px-4 py-3 outline-none rounded-lg" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-white/80 mb-3 block">Phone *</label>
                      <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} placeholder="+971 XX XXX XXXX" className="w-full bg-white/10 border-2 border-white/20 focus:border-[#E8B92C] text-white px-4 py-3 outline-none rounded-lg" />
                    </div>
                    <div>
                      <label className="text-xs font-bold uppercase tracking-widest text-white/80 mb-3 block">Message</label>
                      <textarea rows="4" value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} placeholder="Tell us about your project..." className="w-full bg-white/10 border-2 border-white/20 focus:border-[#E8B92C] text-white px-4 py-3 outline-none resize-none rounded-lg" />
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" checked={formData.consent} onChange={(e) => setFormData({...formData, consent: e.target.checked})} className="mt-1 w-5 h-5 accent-[#E8B92C]" />
                      <span className="text-sm text-white/70">I allow this website to store my submission. *</span>
                    </label>
                    <button type="submit" className="w-full mt-4 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-bold uppercase tracking-widest rounded-full">SUBMIT MESSAGE →</button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}