'use client';

import React from "react";
import Link from "next/link";
import InquiryForm from '../components/InquiryForm';

const IMG = {
  kitchen_marble: '/images/kitchen_marble.jpg',
  kitchen_gold: '/images/kitchen_gold.jpg',
  living_marble: '/images/living_marble.jpg',
  living_modern: '/images/living_modern.jpg',
  pool_landscape: '/images/pool_landscape.jpg',
  project_1: '/images/project_1.jpg',
  project_2: '/images/project_2.jpg',
  project_3: '/images/project_3.jpg',
  project_4: '/images/project_4.jpg',
  turnkey: '/images/turnkey.png',
  dubai_hills: '/images/dubai_hills.png',
  royal_tech_group: '/images/R_tech_group_LLC_oman.png',
  royal_tech_ofs: '/images/Royal_Tech_1.png',
  royal_tech_ogt: '/images/Royal_Track_02.png',
  royal_tech_igt: '/images/Royal_Track_3.png',
};

export default function AboutPage() {
  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700;800&display=swap');
        
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }
        
        .gold-gradient {
          background: linear-gradient(135deg, #F5D547 0%, #E8B92C 50%, #C9831A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hover-lift {
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .hover-lift:hover {
          transform: translateY(-10px);
        }

        .logo-transparent {
          mix-blend-mode: multiply;
        }

        @keyframes scroll-continuous {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.333%); }
        }

        .animate-scroll-continuous {
          animation: scroll-continuous 15s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll-continuous {
            animation: scroll-continuous 12s linear infinite;
          }
        }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative h-[70vh] min-h-[500px] max-h-[700px] flex items-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900 mt-20">
        <div className="absolute inset-0 opacity-20">
          <img src={IMG.kitchen_gold} alt="Background" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 relative z-10 text-white">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-[#E8B92C]" />
            <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">WHO WE ARE</span>
            <span className="w-12 h-px bg-[#E8B92C]" />
          </div>
          <h1 className="font-display text-3xl md:text-5xl lg:text-6xl mb-4 leading-tight font-bold">
            Building <span className="gold-gradient">Excellence</span> Since Day One
          </h1>
          <p className="text-base md:text-lg text-white/80 max-w-2xl leading-relaxed">
            A trusted name in construction and contracting across the UAE, powered by Royal Tech Group.
          </p>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-12 h-px bg-[#E8B92C]" />
                <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">OUR STORY</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl text-stone-900 mb-4 leading-tight font-bold">
                Where Vision Meets <span className="gold-gradient">Precision</span>
              </h2>
              <p className="text-stone-700 text-base leading-relaxed mb-4">
                At <strong className="font-bold text-stone-900">Royal Track Building & Contracting L.L.C</strong>, we don't just build structures — we create spaces that define modern living and luxury. As a proud subsidiary of <a href="https://royal-techgroup.com/" target="_blank" rel="noopener noreferrer" className="font-bold text-[#E8B92C] hover:text-[#C9831A] underline transition-colors">Royal Tech Group</a>, we bring together decades of expertise, innovation, and an unwavering commitment to excellence.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed mb-4">
                From refined interiors to striking exteriors and complete outdoor transformations, every project is delivered with meticulous attention to detail, superior craftsmanship, and lasting performance.
              </p>
              <p className="text-stone-600 text-sm leading-relaxed">
                Across the UAE — from Dubai to Abu Dhabi and beyond — we turn ambitious visions into stunning reality with unmatched reliability and precision.
              </p>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src={IMG.living_marble} alt="Royal Track Excellence" className="w-full aspect-[4/3] object-cover" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-stone-900 to-stone-800 text-white p-10 rounded-2xl hover-lift">
              <div className="text-[#E8B92C] text-4xl mb-4">🎯</div>
              <h3 className="font-display text-2xl font-bold mb-3">Our Mission</h3>
              <p className="text-white/80 text-sm leading-relaxed">
                To deliver world-class construction and contracting services that exceed client expectations through innovation, quality craftsmanship, and unwavering commitment to excellence in every project we undertake.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#E8B92C] to-[#C9831A] text-stone-900 p-10 rounded-2xl hover-lift">
              <div className="text-stone-900 text-4xl mb-4">👁️</div>
              <h3 className="font-display text-2xl font-bold mb-3">Our Vision</h3>
              <p className="text-stone-900/80 text-sm leading-relaxed">
                To become the most trusted and sought-after construction partner in the UAE, recognized for transforming spaces, enriching lives, and setting new standards of excellence in the building industry.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">CORE VALUES</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-stone-900 font-bold">
              What Drives Our <span className="gold-gradient">Success</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: '⭐', title: 'Excellence', desc: 'Pursuing perfection in every detail of our work' },
              { icon: '🤝', title: 'Integrity', desc: 'Transparency and honesty in all our dealings' },
              { icon: '💡', title: 'Innovation', desc: 'Embracing modern techniques and solutions' },
              { icon: '❤️', title: 'Client Focus', desc: 'Your vision is our mission, always' },
            ].map((value, idx) => (
              <div key={idx} className="bg-white border border-stone-200 rounded-xl p-6 hover:border-[#E8B92C] hover:shadow-lg transition-all hover-lift text-center">
                <div className="text-4xl mb-3">{value.icon}</div>
                <h3 className="font-display text-lg font-bold text-stone-900 mb-2">{value.title}</h3>
                <p className="text-stone-600 text-xs leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">THE ROYAL TRACK DIFFERENCE</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Why Clients <span className="gold-gradient">Choose Us</span>
            </h2>
            <p className="text-white/70 text-sm max-w-2xl mx-auto">
              Experience the advantage of working with UAE's trusted construction partner
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { num: '01', title: 'Proven Track Record', desc: 'Successfully delivered 100+ projects across residential, commercial, and industrial sectors' },
              { num: '02', title: 'Expert Craftsmen', desc: 'Highly skilled team with deep expertise in construction, design, and project management' },
              { num: '03', title: 'Premium Quality', desc: 'Only the finest materials from trusted international suppliers for lasting results' },
              { num: '04', title: 'On-Time Delivery', desc: 'Rigorous planning ensures we meet deadlines without compromising quality' },
              { num: '05', title: 'Competitive Pricing', desc: 'Transparent pricing with no hidden costs — maximum value for your investment' },
              { num: '06', title: 'Complete Support', desc: 'From consultation to post-completion, we are with you every step' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#E8B92C] transition-all hover-lift">
                <div className="text-4xl font-display text-[#E8B92C]/30 mb-2">{item.num}</div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-white/70 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ACHIEVEMENTS & STATS */}
      <section className="py-20 bg-gradient-to-br from-[#E8B92C] to-[#C9831A]">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: '150+', label: 'Projects Completed', icon: '🏗️' },
              { num: '95%', label: 'Client Satisfaction', icon: '⭐' },
              { num: '15+', label: 'Years Experience', icon: '📅' },
              { num: '24/7', label: 'Support Available', icon: '🤝' },
            ].map((stat, idx) => (
              <div key={idx} className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover-lift">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <div className="font-display text-3xl md:text-4xl text-stone-900 mb-1 font-bold">{stat.num}</div>
                <div className="text-xs text-stone-900/80 uppercase tracking-wider font-semibold">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROYAL TECH GROUP */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">PART OF THE FAMILY</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl text-stone-900 mb-3 font-bold">
              Powered by <span className="gold-gradient">Royal Tech Group</span>
            </h2>
            <p className="text-stone-600 text-sm max-w-2xl mx-auto leading-relaxed">
              A proud subsidiary of Royal Tech Group — delivering excellence across oil & gas, trading, and construction sectors throughout UAE, Oman, and Nine other countries world wide.
            </p>
          </div>

          {/* Logo Slider - Continuous + Color */}
          <div className="relative overflow-hidden py-8">
            <div className="flex animate-scroll-continuous">
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-12 px-6">
                  {[IMG.royal_tech_group, IMG.royal_tech_ofs, IMG.royal_tech_ogt, IMG.royal_tech_igt].map((logo, idx) => (
                    <div key={idx} className="flex-shrink-0 w-56 h-36 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow">
                      <img src={logo} alt="Royal Tech Group" className="max-w-[85%] max-h-[85%] object-contain" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SISTER COMPANIES */}
      <section className="py-20 bg-stone-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">GROUP COMPANIES</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-3">
              Our <span className="gold-gradient">Sister Companies</span>
            </h2>
            <p className="text-white/70 text-sm max-w-2xl mx-auto">
              United under Royal Tech Group, delivering excellence across multiple sectors
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Royal Oil & Gas Field Services', short: 'ROFS LLC', desc: 'Comprehensive oil and gas field services including drilling, completion, and production operations.', icon: '⚡' },
              { name: 'Royal Oil & Gas Trading', short: 'ROGT FZC', desc: 'International trading of petroleum products, refined fuels, and energy commodities.', icon: '🛢️' },
              { name: 'Royal Integrated General Trading', short: 'RIGT', desc: 'Diversified trading operations covering construction materials and industrial equipment.', icon: '📦' },
            ].map((company, idx) => (
              <div key={idx} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:border-[#E8B92C] transition-all hover-lift">
                <div className="text-4xl mb-3">{company.icon}</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-[#E8B92C] mb-1">{company.short}</div>
                <h3 className="font-display text-lg font-bold text-white mb-2">{company.name}</h3>
                <p className="text-white/70 text-xs leading-relaxed">{company.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-stone-50 text-center">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <h2 className="font-display text-2xl md:text-4xl text-stone-900 mb-4 font-bold">
            Let's Build Something <span className="gold-gradient">Amazing</span> Together
          </h2>
          <p className="text-sm md:text-base text-stone-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your vision into reality? Get in touch with our expert team today.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/#contact" className="inline-flex items-center gap-2 px-8 py-3 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-xs font-bold uppercase tracking-wider transition-all rounded-full shadow-lg hover:scale-105">
              GET IN TOUCH →
            </Link>
            <Link href="/services" className="inline-flex items-center gap-2 px-8 py-3 border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white text-xs font-bold uppercase tracking-wider transition-all rounded-full">
              VIEW SERVICES
            </Link>
          </div>
        </div>
      </section>

      {/* INQUIRY FORM */}
      <InquiryForm />
    </div>
  );
}
