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

      {/* HERO SLIDER */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden" aria-label="Hero section with featured services">
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
                  {index === 0 && <h1 className="font-display text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 font-bold">{slide.title}</h1>}
                  {index !== 0 && <h2 className="font-display text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 font-bold">{slide.title}</h2>}
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
            <button key={index} onClick={() => setCurrentSlide(index)} className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentSlide ? 'bg-[#E8B92C] w-6' : 'bg-white/50'}`} aria-label={`Go to slide ${index + 1}`} />
          ))}
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-20 bg-stone-50" aria-labelledby="about-heading">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">BUILDING BEYOND EXPECTATIONS</span>
            <h2 id="about-heading" className="font-display text-4xl md:text-5xl text-stone-900 mt-4">Where Vision Meets <span className="gold-gradient">Precision</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="curved-box overflow-hidden shadow-2xl">
              <img src={IMG.kitchen_marble} alt="Royal Track premium interior fit-out craftsmanship" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="p-8">
              <p className="text-stone-700 text-lg leading-relaxed mb-6">
                At <strong className="text-stone-900">Royal Track Building & Contracting L.L.C</strong>, a proud subsidiary of <a href="https://royal-techgroup.com/" target="_blank" rel="noopener noreferrer" className="text-[#E8B92C] font-bold hover:text-[#C9831A] underline transition-colors">Royal Tech Group</a>, we don't just build structures. We create spaces that define modern living and luxury in Dubai and across the UAE.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-6">
                Driven by deep expertise and passionate commitment to excellence, we bring together innovative design, superior craftsmanship, and flawless execution. Our team of experienced construction professionals specializes in interior fit-out, pool design, landscaping, and comprehensive turnkey solutions for residential and commercial projects.
              </p>
              <p className="text-stone-600 text-base leading-relaxed mb-8">
                With projects completed across Dubai's most prestigious communities including Arabian Ranches, Dubai Hills, The Valley, and Tilal Al Ghaf, we've established ourselves as a trusted partner for premium construction and contracting services in the UAE.
              </p>
              <Link href="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white text-sm font-bold uppercase tracking-wider rounded-full">LEARN MORE →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE ROYAL TRACK SECTION */}
      <section className="py-20 bg-white" aria-labelledby="why-choose-heading">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR EXPERTISE</span>
            <h2 id="why-choose-heading" className="font-display text-4xl md:text-5xl text-stone-900 mt-4">Why Choose <span className="gold-gradient">Royal Track</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { 
                title: '15+ Years Experience', 
                desc: 'Over 15 years of proven excellence in construction, contracting, and building solutions across Dubai and the UAE.' 
              },
              { 
                title: 'Award-Winning Projects', 
                desc: 'Completed premium projects in prestigious communities including Arabian Ranches, Dubai Hills, The Valley, and Tilal Al Ghaf.' 
              },
              { 
                title: 'Professional Team', 
                desc: 'Expert engineers, architects, and craftsmen dedicated to delivering exceptional quality in every project.' 
              },
              { 
                title: 'Premium Materials', 
                desc: 'We use only high-quality, durable materials for all our interior fit-out, landscaping, and construction projects.' 
              },
              { 
                title: 'On-Time Delivery', 
                desc: 'Professional project management ensures timely completion without compromising on quality or attention to detail.' 
              },
              { 
                title: 'Customer Satisfaction', 
                desc: 'Your satisfaction is our priority. We provide comprehensive support throughout the project lifecycle.' 
              },
            ].map((item, idx) => (
              <div key={idx} className="curved-box bg-stone-50 border border-stone-200 p-8 hover:shadow-lg transition-all duration-300">
                <h3 className="font-display text-2xl mb-4 text-stone-900">{item.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="py-20 bg-stone-50" aria-labelledby="services-heading">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR SERVICES</span>
            <h2 id="services-heading" className="font-display text-4xl md:text-5xl text-stone-900 mt-4 mb-6">Comprehensive <span className="gold-gradient">Construction</span> Solutions</h2>
            <p className="text-stone-600 text-lg max-w-3xl mx-auto">From premium interior fit-out to innovative pool design and complete turnkey construction solutions, we deliver excellence across all project types in Dubai and the UAE.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Interior Fit-Out', desc: 'Complete interior design and fit-out solutions for residential and commercial spaces with premium finishing and expert installation.', image: IMG.kitchen_gold },
              { title: 'Pools & Landscaping', desc: 'Professional pool design and landscaping services creating stunning outdoor spaces and luxury environments for your property.', image: IMG.pool_landscape },
              { title: 'Turnkey Solutions', desc: 'End-to-end project execution from planning to delivery, managing all aspects of your construction project with precision.', image: IMG.turnkey },
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

      {/* OUR PROCESS SECTION */}
      <section className="py-20 bg-white" aria-labelledby="process-heading">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">HOW WE WORK</span>
            <h2 id="process-heading" className="font-display text-4xl md:text-5xl text-stone-900 mt-4">Our <span className="gold-gradient">Process</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { 
                num: '01', 
                title: 'Consultation & Planning', 
                desc: 'We meet with you to understand your vision, requirements, and budget. Our team creates a detailed project plan.' 
              },
              { 
                num: '02', 
                title: 'Design & Approval', 
                desc: 'Our designers develop comprehensive designs and 3D visualizations for your approval before construction begins.' 
              },
              { 
                num: '03', 
                title: 'Expert Execution', 
                desc: 'Our skilled team executes the project with precision, using premium materials and maintaining strict quality standards.' 
              },
              { 
                num: '04', 
                title: 'Quality Check & Handover', 
                desc: 'Final inspections ensure every detail meets our high standards before handover and ongoing customer support.' 
              },
            ].map((step, idx) => (
              <div key={idx} className="curved-box bg-stone-50 border border-stone-200 p-8 hover:shadow-lg transition-all duration-300">
                <div className="text-5xl font-bold text-[#E8B92C] mb-4">{step.num}</div>
                <h3 className="font-display text-2xl mb-3 text-stone-900">{step.title}</h3>
                <p className="text-stone-600 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS PREVIEW */}
      <section className="py-20 bg-stone-50" aria-labelledby="projects-heading">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR CRAFTSMANSHIP</span>
            <h2 id="projects-heading" className="font-display text-4xl md:text-5xl text-stone-900 mt-4">Featured <span className="gold-gradient">Projects</span></h2>
            <p className="text-stone-600 text-lg max-w-3xl mx-auto mt-4">Explore our portfolio of completed projects across Dubai's most prestigious developments and communities.</p>
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
                <img src={project.image} alt={`Royal Track project in ${project.name}`} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-900 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl text-white">{project.name}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 hover:bg-[#E8B92C] hover:text-stone-900 text-white text-sm font-bold uppercase tracking-wider rounded-full">VIEW ALL PROJECTS →</Link>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS SECTION */}
      <section className="py-20 bg-white" aria-labelledby="testimonials-heading">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">CLIENT FEEDBACK</span>
            <h2 id="testimonials-heading" className="font-display text-4xl md:text-5xl text-stone-900 mt-4">What Our <span className="gold-gradient">Clients Say</span></h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "Royal Track transformed our villa with exceptional interior fit-out. The team's professionalism and attention to detail were outstanding. Highly recommended!",
                author: "Ahmed Hassan",
                project: "Villa Renovation - Arabian Ranches"
              },
              {
                text: "The landscaping and pool design exceeded our expectations. The entire project was completed on time and within budget. Excellent service!",
                author: "Fatima Al Mansouri",
                project: "Pool & Landscaping - Dubai Hills"
              },
              {
                text: "We engaged Royal Track for our commercial interior fit-out. Their turnkey solution made the entire process seamless and stress-free.",
                author: "Mohammed Al Maktoum",
                project: "Commercial Fit-Out - Downtown Dubai"
              },
            ].map((testimonial, idx) => (
              <div key={idx} className="curved-box bg-stone-50 border border-stone-200 p-8 hover:shadow-lg transition-all duration-300">
                <p className="text-stone-600 text-sm leading-relaxed mb-6 italic">"{testimonial.text}"</p>
                <div className="border-t border-stone-200 pt-6">
                  <p className="font-bold text-stone-900">{testimonial.author}</p>
                  <p className="text-stone-500 text-xs">{testimonial.project}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <InquiryForm />

      {/* CONTACT */}
      <section id="contact" className="py-20 bg-stone-900 text-white" aria-labelledby="contact-heading">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">GET IN TOUCH</span>
            <h2 id="contact-heading" className="font-display text-4xl md:text-5xl mt-4">We're Here to <span className="gold-gradient">Assist</span> You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">Email</h3>
              <a href="mailto:Info@royaltrack.ae" className="text-white text-lg hover:text-[#E8B92C] transition-colors">Info@royaltrack.ae</a>
            </div>
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">Phone</h3>
              <a href="tel:+97143934374" className="text-white text-lg hover:text-[#E8B92C] transition-colors block">+971 4 393 4374</a>
              <a href="tel:+971552824492" className="text-white text-lg hover:text-[#E8B92C] transition-colors block mt-2">+971 5 5282 4492</a>
            </div>
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center">
              <h3 className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">Location</h3>
              <p className="text-white text-sm">21st Century Building, Office 303, Al Muraqqabat, Dubai, UAE</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
