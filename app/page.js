'use client';

import React, { useState, useEffect, useCallback } from "react";
import Link from "next/link";
import InquiryForm from './components/InquiryForm';

const EmailIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></svg>);
const FacebookIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>);
const InstagramIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>);
const LinkedInIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>);
const TikTokIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z"/></svg>);

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
  hero_abu_dhabi: '/images/abu_dhabi.png',
  hero_damac: '/images/damac_hills.png',
  hero_dubai: '/images/dubai_hills.png',
  hero_jumeirah: '/images/jumeirah_island.png',
  hero_palm: '/images/palm_jumeirah.png',
  hero_warqa: '/images/warqa_1.png',
  about_uss: '/images/about_uss.png',
  feature_1: '/images/feature_1.png',
  feature_2: '/images/feature_2.webp',
  feature_3: '/images/feature_3.png',
  interior_1: '/images/interior_1.png',
  interior_2: '/images/interior_2.webp',
  interior_3: '/images/interior_3.jpg',
  exterior_1: '/images/exterior_1.png',
  exterior_2: '/images/exterior_2.png',
  exterior_3: '/images/exterior_3.jpeg',
};

export default function RoyalTrackHome() {
  const [slide, setSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const DURATION = 6000;

  const slides = [
    { imgL: IMG.hero_abu_dhabi, imgR: IMG.hero_jumeirah, num: '01', title: 'Interior', accent: 'Fit-Out', sub: 'Premium Interior Design', desc: 'Bespoke interior design and luxury fit-out across Dubai and UAE.' },
    { imgL: IMG.hero_damac, imgR: IMG.hero_dubai, num: '02', title: 'Pools &', accent: 'Landscape', sub: 'Outdoor Living Design', desc: 'Luxury pool construction and landscaping for premium villas.' },
    { imgL: IMG.hero_palm, imgR: IMG.hero_warqa, num: '03', title: 'Turnkey', accent: 'Solutions', sub: 'Complete Construction', desc: 'End-to-end project delivery from concept to handover.' },
  ];

  const goTo = useCallback((idx) => { setSlide(idx); setProgress(0); setAnimKey(k => k + 1); }, []);

  useEffect(() => {
    const start = Date.now();
    const timer = setInterval(() => {
      const elapsed = Date.now() - start;
      setProgress(Math.min((elapsed / DURATION) * 100, 100));
      if (elapsed >= DURATION) { clearInterval(timer); goTo((slide + 1) % slides.length); }
    }, 30);
    return () => clearInterval(timer);
  }, [slide, slides.length, goTo]);

  const s = slides[slide];

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

        @keyframes aImgL { 0%{opacity:0;transform:translateX(-40px) scale(1.05)} 100%{opacity:1;transform:translateX(0) scale(1)} }
        @keyframes aImgR { 0%{opacity:0;transform:translateX(40px) scale(1.05)} 100%{opacity:1;transform:translateX(0) scale(1)} }
        @keyframes aUp { 0%{opacity:0;transform:translateY(50px)} 100%{opacity:1;transform:translateY(0)} }
        @keyframes aNum { 0%{opacity:0;transform:scale(0.85)} 100%{opacity:0.05;transform:scale(1)} }
        @keyframes aLine { 0%{transform:scaleX(0)} 100%{transform:scaleX(1)} }
        @keyframes aFade { 0%{opacity:0} 100%{opacity:1} }

        .a-imgL{animation:aImgL 1.1s cubic-bezier(.16,1,.3,1) forwards}
        .a-imgR{opacity:0;animation:aImgR 1.1s cubic-bezier(.16,1,.3,1) .2s forwards}
        .a-num{opacity:0;animation:aNum 1s cubic-bezier(.16,1,.3,1) .1s forwards}
        .a-sub{opacity:0;animation:aUp .7s cubic-bezier(.16,1,.3,1) .4s forwards}
        .a-t1{opacity:0;animation:aUp .8s cubic-bezier(.16,1,.3,1) .55s forwards}
        .a-t2{opacity:0;animation:aUp .8s cubic-bezier(.16,1,.3,1) .7s forwards}
        .a-desc{opacity:0;animation:aUp .7s cubic-bezier(.16,1,.3,1) .9s forwards}
        .a-btn{opacity:0;animation:aFade .6s cubic-bezier(.16,1,.3,1) 1.1s forwards}
        .a-line{transform-origin:left;transform:scaleX(0);animation:aLine .7s cubic-bezier(.16,1,.3,1) .85s forwards}
      `}</style>

      {/* STICKY SOCIAL ICONS */}
      <div className="fixed top-1/2 -translate-y-1/2 right-4 lg:right-8 z-30 flex flex-col items-center gap-2.5">
        {socialLinks.map((social) => (
          <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="w-9 h-9 rounded-full bg-stone-900/80 border border-stone-700 flex items-center justify-center text-white hover:text-[#E8B92C] hover:border-[#E8B92C] transition-all duration-200">{social.icon}</a>
        ))}
      </div>

      {/* ====== HERO — ARCHITECTURE SLIDER (2 images + text split) ====== */}
      <section className="relative h-screen min-h-[650px] bg-stone-100 overflow-hidden">

        {/* Giant background number */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none" key={`n${animKey}`}>
          <span className="a-num font-display text-stone-300 text-[22rem] md:text-[34rem] lg:text-[42rem] font-bold leading-none select-none">{s.num}</span>
        </div>

        {/* Main grid */}
        <div className="relative z-10 h-full max-w-[1500px] mx-auto px-6 lg:px-12 flex items-center pt-16 lg:pt-0" key={`s${animKey}`}>
          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">

            {/* LEFT: Images */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              {/* Large image */}
              <div className="a-imgL rounded-2xl overflow-hidden shadow-2xl aspect-[3/4]">
                <img src={s.imgL} alt={`${s.title} ${s.accent} - Royal Track`} className="w-full h-full object-cover" />
              </div>
              {/* Small overlapping image */}
              <div className="a-imgR absolute -bottom-8 -right-4 md:-bottom-10 md:-right-8 w-[48%] rounded-xl overflow-hidden shadow-2xl border-4 border-stone-100 aspect-[4/3]">
                <img src={s.imgR} alt={`${s.sub} - Royal Track`} className="w-full h-full object-cover" />
              </div>
            </div>

            {/* RIGHT: Text */}
            <div className="lg:col-span-7 lg:pl-8 order-1 lg:order-2">
              <div className="a-sub flex items-center gap-3 mb-3">
                <div className="a-line w-10 h-px bg-[#E8B92C]" />
                <span className="text-[#C9831A] text-[11px] font-bold uppercase tracking-[0.3em]">{s.sub}</span>
              </div>

              <h1 className="font-display text-stone-900 font-bold leading-[1.05] mb-3">
                <span className="a-t1 block text-3xl md:text-5xl lg:text-6xl">{s.title}</span>
                <span className="a-t2 block text-3xl md:text-5xl lg:text-6xl gold-gradient">{s.accent}</span>
              </h1>

              <div className="a-line w-16 h-[3px] bg-[#E8B92C] mb-5" />

              <p className="a-desc text-stone-600 text-sm md:text-base max-w-md leading-relaxed mb-8">{s.desc}</p>

              <div className="a-btn flex flex-wrap items-center gap-4">
                <Link href="/services" className="px-7 py-3 bg-stone-900 hover:bg-[#C9831A] text-white text-[11px] font-bold uppercase tracking-wider rounded-full shadow-lg transition-all duration-300">Discover More →</Link>
                <a href="#contact" className="px-7 py-3 border-2 border-stone-300 text-stone-700 hover:border-[#E8B92C] hover:text-[#C9831A] text-[11px] font-bold uppercase tracking-wider rounded-full transition-all duration-300">Get In Touch</a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom nav */}
        <div className="absolute bottom-0 left-0 right-0 z-20">
          <div className="h-[2px] bg-stone-200 w-full"><div className="h-full bg-[#E8B92C]" style={{width:`${progress}%`,transition:'width 0.1s linear'}}/></div>
          <div className="max-w-[1500px] mx-auto px-6 lg:px-12 py-3.5 flex items-center justify-between bg-white/70 backdrop-blur-sm">
            <div className="font-display"><span className="text-xl font-bold text-[#C9831A]">{s.num}</span><span className="text-stone-400 mx-2 text-xs">/</span><span className="text-stone-400 text-xs">{String(slides.length).padStart(2,'0')}</span></div>
            <div className="flex items-center gap-2">{slides.map((_,i)=>(<button key={i} onClick={()=>goTo(i)} aria-label={`Slide ${i+1}`} className={`h-1 rounded-full transition-all duration-500 ${i===slide?'w-12 bg-[#E8B92C]':'w-5 bg-stone-300 hover:bg-stone-400'}`}/>))}</div>
            <div className="flex items-center gap-2">
              <button onClick={()=>goTo((slide-1+slides.length)%slides.length)} className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 hover:border-[#E8B92C] hover:text-[#C9831A] transition-all" aria-label="Previous"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg></button>
              <button onClick={()=>goTo((slide+1)%slides.length)} className="w-9 h-9 rounded-full border border-stone-300 flex items-center justify-center text-stone-500 hover:border-[#E8B92C] hover:text-[#C9831A] transition-all" aria-label="Next"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg></button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">BUILDING BEYOND EXPECTATIONS</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">Where Vision Meets <span className="gold-gradient">Precision</span></h2>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="curved-box overflow-hidden shadow-2xl">
              <img src={IMG.about_uss} alt="Royal Track premium interior fit-out craftsmanship in Dubai" className="w-full aspect-[4/5] object-cover" />
            </div>
            <div className="p-8">
              <p className="text-stone-700 text-lg leading-relaxed mb-6">At <strong className="text-stone-900">Royal Track Building & Contracting L.L.C</strong>, a proud subsidiary of <a href="https://royal-techgroup.com/" target="_blank" rel="noopener noreferrer" className="text-[#E8B92C] font-bold hover:text-[#C9831A] underline transition-colors">Royal Tech Group</a>, we don't just build structures. We create spaces that define modern living and luxury across Dubai and the UAE.</p>
              <p className="text-stone-600 text-base leading-relaxed mb-8">Driven by deep expertise and passionate commitment to excellence, we bring together innovative design, superior craftsmanship, and flawless execution in every interior fit-out, pool and landscaping, and turnkey construction project we deliver.</p>
              <Link href="/about" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 hover:bg-stone-800 text-white text-sm font-bold uppercase tracking-wider rounded-full">LEARN MORE →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR SERVICES</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4 mb-6">Comprehensive <span className="gold-gradient">Construction</span> Solutions</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Interior Fit-Out', desc: 'Complete interior solutions with high-quality detailing.', image: IMG.feature_1 },
              { title: 'Pools & Landscaping', desc: 'Professional design and construction of pools and landscapes.', image: IMG.feature_2 },
              { title: 'Turnkey Solutions', desc: 'End-to-end project execution from planning to delivery.', image: IMG.feature_3 },
            ].map((service) => (
              <div key={service.title} className="curved-box bg-white border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all duration-500 hover-lift">
                <div className="aspect-[4/3] overflow-hidden"><img src={service.image} alt={service.title} className="w-full h-full object-cover" /></div>
                <div className="p-8"><h3 className="font-display text-3xl mb-4">{service.title}</h3><p className="text-stone-600 text-sm">{service.desc}</p></div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12"><Link href="/services" className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-bold uppercase tracking-wider rounded-full">VIEW ALL SERVICES →</Link></div>
        </div>
      </section>

      {/* ===== WHY CHOOSE ===== */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR EXPERTISE</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">Why Choose <span className="gold-gradient">Royal Track</span></h2>
            <p className="text-stone-600 text-base lg:text-lg mt-6 max-w-3xl mx-auto leading-relaxed">When it comes to construction and contracting services in Dubai and the UAE, Royal Track stands apart through a relentless focus on quality, transparency, and on-time delivery.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: '15+ Years of Experience', desc: 'Over a decade of proven excellence in interior fit-out, pool design, landscaping, and turnkey construction across the UAE.' },
              { title: 'Award-Winning Projects', desc: 'Completed premium projects in Arabian Ranches, Dubai Hills, The Valley, Tilal Al Ghaf, Al Jurf, and Yas Island communities.' },
              { title: 'Expert In-House Team', desc: 'Qualified engineers, architects, designers, and skilled craftsmen working under one roof for seamless project execution.' },
              { title: 'Premium Quality Materials', desc: 'We source only high-grade, durable materials from trusted suppliers, ensuring long-lasting finishes on every project.' },
              { title: 'On-Time Delivery', desc: 'Structured project management and milestone tracking ensure your project is completed within the agreed timeline.' },
              { title: 'Transparent Pricing', desc: 'Detailed, itemized quotes with no hidden costs. Know exactly what you are paying for from day one.' },
            ].map((item, idx) => (
              <div key={idx} className="curved-box bg-white border border-stone-200 p-8 hover:border-[#E8B92C] hover:shadow-lg transition-all duration-300"><h3 className="font-display text-2xl mb-3 text-stone-900">{item.title}</h3><p className="text-stone-600 text-sm leading-relaxed">{item.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROCESS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">HOW WE WORK</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">Our <span className="gold-gradient">Process</span></h2>
            <p className="text-stone-600 text-base lg:text-lg mt-6 max-w-3xl mx-auto leading-relaxed">From the first conversation to project handover, our streamlined process keeps you informed and in control at every stage.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: '01', title: 'Consultation & Planning', desc: 'We meet to understand your vision, requirements, and budget, then create a tailored project roadmap.' },
              { num: '02', title: 'Design & Approval', desc: 'Our designers prepare detailed concepts and 3D visualizations for your review and approval before any work begins.' },
              { num: '03', title: 'Expert Execution', desc: 'Our skilled team executes with precision using premium materials and strict quality standards throughout.' },
              { num: '04', title: 'Quality Check & Handover', desc: 'Final inspection, walkthrough, and handover with full documentation and ongoing customer support.' },
            ].map((step) => (
              <div key={step.num} className="curved-box bg-stone-50 border border-stone-200 p-8 hover:shadow-lg transition-all duration-300"><div className="text-5xl font-bold text-[#E8B92C] mb-4">{step.num}</div><h3 className="font-display text-xl mb-3 text-stone-900">{step.title}</h3><p className="text-stone-600 text-sm leading-relaxed">{step.desc}</p></div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PROJECTS ===== */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR CRAFTSMANSHIP</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">Featured <span className="gold-gradient">Projects</span></h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-12">
            {[
              { name: 'Modern Living', image: IMG.interior_1 },
              { name: 'Elegant Dining', image: IMG.interior_2 },
              { name: 'Luxury Suite', image: IMG.interior_3 },
              { name: 'Villa Paradise', image: IMG.exterior_1 },
              { name: 'Pool Haven', image: IMG.exterior_2 },
              { name: 'Sunset Estate', image: IMG.exterior_3 },
            ].map((project) => (
              <div key={project.name} className="relative overflow-hidden curved-box aspect-[4/3] hover-lift"><img src={project.image} alt={`Royal Track - ${project.name}`} className="w-full h-full object-cover" /><div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/40 to-transparent"><div className="font-display text-xl text-white">{project.name}</div></div></div>
            ))}
          </div>
          <div className="text-center"><Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-stone-900 hover:bg-[#E8B92C] hover:text-stone-900 text-white text-sm font-bold uppercase tracking-wider rounded-full">VIEW ALL PROJECTS →</Link></div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">CLIENT FEEDBACK</span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">What Our <span className="gold-gradient">Clients Say</span></h2>
            <p className="text-stone-600 text-base lg:text-lg mt-6 max-w-3xl mx-auto leading-relaxed">We're proud of the relationships we've built with homeowners and businesses across Dubai.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { text: "Royal Track transformed our villa with an exceptional interior fit-out. The team's professionalism, attention to detail, and quality of finish were outstanding. Highly recommended for anyone looking for premium contracting services in Dubai.", author: "Ahmed Hassan", project: "Villa Interior Fit-Out — Arabian Ranches" },
              { text: "The landscaping and pool design exceeded our expectations. The entire project was completed on time and within the agreed budget. Our outdoor space is now the favourite part of our home.", author: "Fatima Al Mansouri", project: "Pool & Landscaping — Dubai Hills" },
              { text: "We engaged Royal Track for a complete commercial fit-out. Their turnkey solution made the entire process seamless and stress-free. Excellent communication from start to finish.", author: "Mohammed Al Rashid", project: "Commercial Fit-Out — Downtown Dubai" },
            ].map((review, idx) => (
              <div key={idx} className="curved-box bg-stone-50 border border-stone-200 p-8 hover:shadow-lg transition-all duration-300">
                <div className="flex gap-1 mb-4">{[...Array(5)].map((_, i) => (<span key={i} className="text-xl text-[#E8B92C]">★</span>))}</div>
                <p className="text-stone-600 text-sm leading-relaxed mb-6 italic">"{review.text}"</p>
                <div className="border-t border-stone-200 pt-4"><p className="font-bold text-stone-900">{review.author}</p><p className="text-stone-500 text-xs mt-1">{review.project}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <InquiryForm />

      <section id="contact" className="py-20 bg-stone-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">GET IN TOUCH</span>
            <h2 className="font-display text-4xl md:text-5xl mt-4">We're Here to <span className="gold-gradient">Assist</span> You</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center"><div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">Email</div><a href="mailto:Info@royaltrack.ae" className="text-white text-lg hover:text-[#E8B92C]">Info@royaltrack.ae</a></div>
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center"><div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">Phone</div><a href="tel:+97143934374" className="text-white text-lg hover:text-[#E8B92C] block">+971 4 393 4374</a><a href="tel:+971552824492" className="text-white text-lg hover:text-[#E8B92C] block mt-2">+971 5 5282 4492</a></div>
            <div className="curved-box bg-white/5 border border-white/10 p-8 text-center"><div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-3">Location</div><div className="text-white text-sm">21st Century Building, Office 303, Al Muraqqabat, Dubai, UAE</div></div>
          </div>
        </div>
      </section>
    </div>
  );
}
