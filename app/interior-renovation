'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import InquiryForm from '../components/InquiryForm';

/**
 * INTERIOR RENOVATION DUBAI - Royal Track Building & Contracting LLC
 * Following design pattern of interiorrenovation.ae template
 * Color scheme: Royal Track gold (#E8B92C) + dark stone
 * SEO: Heavy keyword density (natural), all H tags, FAQ, schema in layout.js
 */

const IMG = {
  // Hero slider images
  hero1: '/images/kitchen_gold.jpg',
  hero2: '/images/living_marble.jpg',
  hero3: '/images/kitchen_marble.jpg',
  hero4: '/images/living_modern.jpg',

  // Service cards
  kitchen_gold: '/images/kitchen_gold.jpg',
  kitchen_marble: '/images/kitchen_marble.jpg',
  living_marble: '/images/living_marble.jpg',
  living_modern: '/images/living_modern.jpg',
  turnkey: '/images/turnkey.png',

  // Project showcase
  project_1: '/images/project_1.jpg',
  project_2: '/images/project_2.jpg',
  project_3: '/images/project_3.jpg',
  project_4: '/images/project_4.jpg',
  project_5: '/images/project_5.jpg',
  project_6: '/images/project_6.jpg',
  project_7: '/images/project_7.jpg',

  // Area images
  dubai_hills: '/images/dubai_hills.png',
  arabian_ranches: '/images/arabian_ranches1.jpg',
  jvc: '/images/jvc.jpg',
  the_valley: '/images/the_valley.jpg',
  yas_island: '/images/yas_island.webp',
  jumeirah_village: '/images/Jumeirah_Village_triangle.jpg',
  al_jurf: '/images/al_jurf.jpeg',
  talal_al_ghaf: '/images/talal_al_ghaf.jpg',
};

export default function InteriorRenovationPage() {
  const [heroSlide, setHeroSlide] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  // ---------- HERO SLIDER auto-rotate ----------
  const heroSlides = [
    {
      image: IMG.hero1,
      tag: 'Experience',
      titlePart1: 'Modern Lifestyles with',
      titleHighlight: 'Interior Renovation Dubai',
      titlePart2: '',
      description: 'Offering premium interior renovation Dubai services for residential, villa, apartment, hotel and commercial properties across the UAE.',
      warranty: '10 Years\nWarranty',
    },
    {
      image: IMG.hero2,
      tag: 'Creative',
      titlePart1: 'Creating the Art of',
      titleHighlight: 'Stylish Living',
      titlePart2: 'in Dubai',
      description: 'We believe a well-designed interior space can have a profound impact on the quality of your life. Premium interior fit-out across Dubai & UAE.',
      warranty: '10 Years\nWarranty',
    },
    {
      image: IMG.hero3,
      tag: 'Innovation',
      titlePart1: 'Innovative',
      titleHighlight: 'Interior Design',
      titlePart2: 'in Dubai',
      description: 'Our innovative interior renovation Dubai techniques revolve around modern design, premium materials, and expert craftsmanship for every space.',
      warranty: '10 Years\nWarranty',
    },
    {
      image: IMG.hero4,
      tag: 'Excellence',
      titlePart1: 'Premium',
      titleHighlight: 'Villa Renovation',
      titlePart2: 'Dubai',
      description: 'Transform your villa with Royal Track\'s premium interior renovation Dubai services — design, construction, finishing, and handover all under one roof.',
      warranty: '10 Years\nWarranty',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // ---------- INTERIOR RENOVATION SERVICES (matching interiorrenovation.ae menu) ----------
  const interiorServices = [
    {
      title: 'Villa Renovation Dubai',
      slug: 'villa-renovation',
      image: IMG.living_marble,
      description: 'Complete villa interior renovation Dubai services. We transform luxury villas across Emirates Hills, Palm Jumeirah, Arabian Ranches, and Dubai Hills with premium design and craftsmanship.',
      features: ['Full Villa Makeover', 'Luxury Finishes', 'Smart Home Integration', '3D Design Preview'],
    },
    {
      title: 'Home Renovation Dubai',
      slug: 'home-renovation',
      image: IMG.living_modern,
      description: 'Premium home renovation Dubai services for townhouses and family homes. From single-room makeovers to complete home interior renovation across Dubai and UAE.',
      features: ['Full Home Renovation', 'Custom Joinery', 'Modern Finishes', 'Project Management'],
    },
    {
      title: 'Apartment Renovation Dubai',
      slug: 'apartment-renovation',
      image: IMG.kitchen_marble,
      description: 'Apartment interior renovation Dubai — Downtown, Marina, JBR, Business Bay. Compact, smart, and stylish renovations that maximize space and add value.',
      features: ['Space Optimization', 'Modern Layouts', 'Premium Materials', 'Quick Turnaround'],
    },
    {
      title: 'Kitchen Renovation Dubai',
      slug: 'kitchen-renovation',
      image: IMG.kitchen_gold,
      description: 'Premium kitchen renovation Dubai. Modular kitchens, custom cabinetry, quartz & marble countertops, and German-grade appliances installation across Dubai homes.',
      features: ['Modular Kitchens', 'Quartz Countertops', 'Premium Appliances', 'Custom Cabinetry'],
    },
    {
      title: 'Bathroom Renovation Dubai',
      slug: 'bathroom-renovation',
      image: IMG.kitchen_marble,
      description: 'Bathroom renovation Dubai with premium tiling, sanitary ware, vanity units, and waterproofing. Luxury bathroom designs across villas and apartments in UAE.',
      features: ['Luxury Tiling', 'Premium Sanitaryware', 'Waterproofing', 'Vanity Installation'],
    },
    {
      title: 'Bedroom Renovation Dubai',
      slug: 'bedroom-renovation',
      image: IMG.living_marble,
      description: 'Bedroom renovation Dubai — master bedrooms, kids rooms, guest rooms. Custom wardrobes, premium flooring, and elegant interior design across Dubai.',
      features: ['Custom Wardrobes', 'Premium Flooring', 'Mood Lighting', 'Acoustic Solutions'],
    },
    {
      title: 'Living Room Renovation Dubai',
      slug: 'living-room-renovation',
      image: IMG.living_modern,
      description: 'Transform your living room with Royal Track\'s premium interior renovation Dubai services. False ceilings, custom TV units, wall panels, and luxury furniture.',
      features: ['False Ceilings', 'Wall Cladding', 'Custom TV Units', 'Designer Lighting'],
    },
    {
      title: 'Office & Commercial Interior Dubai',
      slug: 'office-interior',
      image: IMG.turnkey,
      description: 'Commercial interior renovation Dubai for offices, retail showrooms, restaurants & clinics. Modern office fit-out with glass partitions, branded interiors, and ergonomic design.',
      features: ['Glass Partitions', 'Office Fit-Out', 'Branded Interiors', 'MEP & HVAC'],
    },
    {
      title: 'Hotel & Restaurant Interior Dubai',
      slug: 'hotel-interior',
      image: IMG.kitchen_gold,
      description: 'Luxury hotel interior renovation Dubai. From boutique hotels to fine-dining restaurants, we deliver hospitality-grade interior fit-out across Dubai and UAE.',
      features: ['Hospitality Design', 'Luxury Finishes', 'Lighting Design', 'Custom Furniture'],
    },
  ];

  // ---------- FAQ data (must match schema in layout.js for consistency) ----------
  const faqs = [
    {
      q: 'How much does interior renovation cost in Dubai?',
      a: 'Interior renovation cost in Dubai depends on the property size, materials, and scope of work. A typical apartment interior renovation in Dubai ranges from AED 50,000 to AED 250,000, while villa interior renovation in Dubai can range from AED 200,000 to AED 1,500,000. Royal Track provides free, transparent quotations after a site visit and consultation.',
    },
    {
      q: 'How long does interior renovation in Dubai take?',
      a: 'Interior renovation timeline in Dubai varies by project scope. A single-room renovation typically takes 2–3 weeks, full apartment renovation 6–8 weeks, and complete villa renovation 3–6 months. Royal Track provides a detailed project timeline with every quote and adheres strictly to milestones.',
    },
    {
      q: 'Do I need approval for interior renovation in Dubai?',
      a: 'Yes, structural interior renovation work in Dubai requires NOC and approval from Dubai Municipality or the relevant free zone authority. As a licensed Dubai interior renovation contractor, Royal Track handles all permits, NOCs, and approvals on your behalf to ensure full compliance.',
    },
    {
      q: 'What interior renovation services does Royal Track offer in Dubai?',
      a: 'Royal Track offers complete interior renovation services in Dubai including villa renovation, home renovation, apartment renovation, kitchen renovation, bathroom renovation, bedroom renovation, living room renovation, office interior fit-out, hotel renovation, and commercial interior renovation across Dubai and the UAE.',
    },
    {
      q: 'Does Royal Track offer warranty on interior renovation in Dubai?',
      a: 'Yes, Royal Track offers a comprehensive warranty on all interior renovation projects in Dubai. Workmanship is warranted for up to 10 years, and material warranties follow manufacturer terms. We are a fully licensed and insured Dubai interior renovation company.',
    },
    {
      q: 'Which areas in Dubai does Royal Track service?',
      a: 'Royal Track provides interior renovation services across all Dubai areas including Downtown Dubai, Dubai Marina, Palm Jumeirah, Arabian Ranches, Emirates Hills, Jumeirah Village Circle (JVC), Dubai Hills, Business Bay, JBR, Al Barsha, Mirdif, and across the UAE including Abu Dhabi, Sharjah, Ajman and Ras Al Khaimah.',
    },
    {
      q: 'Can Royal Track design and renovate together (turnkey)?',
      a: 'Yes, Royal Track is a complete turnkey interior renovation company in Dubai. We handle design, 3D visualization, material sourcing, construction, MEP works, finishing, and final handover under one roof — saving you time, money, and coordination headaches.',
    },
    {
      q: 'How do I get a quote for interior renovation in Dubai?',
      a: 'Getting a free interior renovation quote in Dubai is easy. Call Royal Track at +971 4 393 4374, WhatsApp +971 55 282 4492, or fill the inquiry form on this page. We respond within 24 hours and arrange a free site visit and consultation.',
    },
  ];

  const currentSlide = heroSlides[heroSlide];

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');

        * { -webkit-font-smoothing: antialiased; }
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }
        .font-elegant { font-family: 'Cormorant Garamond', serif; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes slideRight { from { opacity: 0; transform: translateX(-40px); } to { opacity: 1; transform: translateX(0); } }

        .animate-fadeIn { animation: fadeIn 1.2s ease-out; }
        .animate-slideUp { animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1); }
        .animate-slideRight { animation: slideRight 1s cubic-bezier(0.16, 1, 0.3, 1); }

        .gold-gradient {
          background: linear-gradient(135deg, #F5D547 0%, #E8B92C 50%, #C9831A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hover-lift { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .hover-lift:hover { transform: translateY(-10px); }

        .curved-box { border-radius: 20px; overflow: hidden; }

        .whatsapp-float {
          position: fixed; left: 20px; bottom: 20px; z-index: 100;
          width: 60px; height: 60px; background: #25D366; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3); transition: transform 0.3s;
        }
        .whatsapp-float:hover { transform: scale(1.1); }

        .call-float {
          position: fixed; right: 20px; bottom: 20px; z-index: 100;
          width: 60px; height: 60px; background: #E8B92C; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          box-shadow: 0 4px 12px rgba(0,0,0,0.3); transition: transform 0.3s;
        }
        .call-float:hover { transform: scale(1.1); }

        .hero-slide-fade {
          transition: opacity 1.5s ease-in-out;
        }
      `}</style>

      {/* ============================== BREADCRUMBS (SEO) ============================== */}
      <nav aria-label="Breadcrumb" className="bg-stone-100 border-b border-stone-200">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-3">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-stone-600">
            <li><Link href="/" className="hover:text-[#C9831A] transition-colors">Home</Link></li>
            <li className="text-stone-400">/</li>
            <li><Link href="/services" className="hover:text-[#C9831A] transition-colors">Services</Link></li>
            <li className="text-stone-400">/</li>
            <li className="text-[#C9831A] font-semibold" aria-current="page">Interior Renovation Dubai</li>
          </ol>
        </div>
      </nav>

      {/* ============================== HERO SLIDER ============================== */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
        {/* Slider images - layered with fade */}
        {heroSlides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={`${slide.titlePart1} ${slide.titleHighlight} ${slide.titlePart2} - Royal Track Interior Renovation Dubai`}
            className={`absolute inset-0 w-full h-full object-cover hero-slide-fade ${heroSlide === idx ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}

        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

        {/* Hero content */}
        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 w-full z-10">
          <div className="max-w-3xl animate-slideUp" key={heroSlide}>
            <div className="inline-block px-4 py-2 bg-[#E8B92C]/20 backdrop-blur-sm rounded-full border border-[#E8B92C] mb-6">
              <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">{currentSlide.tag}</span>
            </div>

            {/* H1 - critical SEO tag */}
            <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 font-bold">
              {currentSlide.titlePart1}{' '}
              <span className="gold-gradient">{currentSlide.titleHighlight}</span>
              {currentSlide.titlePart2 && <> {currentSlide.titlePart2}</>}
            </h1>

            <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl">
              {currentSlide.description}
            </p>

            {/* Warranty badge */}
            <div className="flex items-center gap-4 mb-8">
              <div className="bg-[#E8B92C] text-stone-900 px-5 py-3 rounded-lg shadow-xl">
                <div className="font-display text-2xl font-bold leading-none">10 YEARS</div>
                <div className="text-[10px] font-bold uppercase tracking-widest mt-1">Warranty</div>
              </div>
              <div className="text-white/80 text-sm font-light max-w-[200px] leading-relaxed">
                On all interior renovation Dubai projects
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <Link href="#interior-services" className="px-7 py-3.5 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full shadow-xl hover:shadow-2xl hover:scale-105">
                Our Services →
              </Link>
              <Link href="#inquiry" className="px-7 py-3.5 border-2 border-white text-white hover:bg-white hover:text-stone-900 text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full">
                Get Free Quote
              </Link>
            </div>
          </div>
        </div>

        {/* Slider dots */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-500 rounded-full ${
                heroSlide === idx ? 'w-12 bg-[#E8B92C]' : 'w-6 bg-white/40 hover:bg-white/70'
              }`}
            />
          ))}
        </div>
      </section>

      {/* ============================== INTRO / ABOUT INTERIOR ============================== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="relative">
              <div className="curved-box overflow-hidden shadow-2xl">
                <img
                  src={IMG.kitchen_gold}
                  alt="Premium Interior Renovation Dubai by Royal Track - Modern kitchen with gold accents"
                  className="w-full h-[500px] object-cover"
                />
              </div>
              {/* Floating stats card */}
              <div className="absolute -bottom-8 -right-8 bg-[#E8B92C] text-stone-900 p-6 rounded-2xl shadow-2xl hidden md:block">
                <div className="font-display text-4xl font-bold leading-none">10+</div>
                <div className="text-xs font-bold uppercase tracking-widest mt-2">Years Experience</div>
                <div className="text-xs mt-1 opacity-80">Interior Renovation Dubai</div>
              </div>
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center gap-3 mb-4">
                <span className="w-12 h-px bg-[#E8B92C]" />
                <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">About Us</span>
              </div>

              <h2 className="font-display text-3xl md:text-5xl leading-tight text-stone-900 mb-6 font-bold">
                #1 <span className="gold-gradient">Interior Renovation Dubai</span> Company
              </h2>

              <p className="text-stone-600 text-base leading-relaxed mb-5">
                Royal Track Building & Contracting LLC is a leading <strong>interior renovation Dubai</strong> company, delivering premium interior design, fit-out, and renovation services across Dubai and the UAE for over a decade. From luxury villa renovation to modern apartment interior renovation, we transform spaces with craftsmanship and creativity.
              </p>

              <p className="text-stone-600 text-base leading-relaxed mb-8">
                Our team of expert interior designers, architects, and contractors handles every aspect of <strong>interior renovation in Dubai</strong> — kitchen renovation, bathroom renovation, living room makeovers, office fit-out, and complete home renovation Dubai projects — under one professional roof.
              </p>

              {/* Feature checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  'Licensed Interior Contractor',
                  '10-Year Workmanship Warranty',
                  '500+ Projects Completed',
                  'Free Site Visit & Quote',
                  'In-House 3D Design Team',
                  'Turnkey Solutions',
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-[#E8B92C]/20 flex items-center justify-center flex-shrink-0">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#C9831A" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                    <span className="text-stone-700 text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <Link href="#inquiry" className="px-7 py-3.5 bg-stone-900 hover:bg-[#E8B92C] hover:text-stone-900 text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full">
                  Book Free Consultation →
                </Link>
                <a href="tel:+97143934374" className="px-7 py-3.5 border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white text-xs font-bold uppercase tracking-wider transition-all duration-300 rounded-full">
                  Call +971 4 393 4374
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== INTERIOR SERVICES GRID ============================== */}
      <section id="interior-services" className="py-24 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">Renovation Services</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-stone-900 mb-4 font-bold">
              Premium <span className="gold-gradient">Interior Renovation Dubai</span> Services
            </h2>
            <p className="text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Complete interior renovation Dubai solutions for residential, commercial, and hospitality properties. From villa renovation to apartment fit-out — we cover every room and every detail.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {interiorServices.map((service, idx) => (
              <article
                key={idx}
                className="group curved-box bg-white border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all duration-500 overflow-hidden hover-lift"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={service.image}
                    alt={`${service.title} - Royal Track Premium Interior Renovation Services`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <span className="inline-block px-3 py-1 bg-[#E8B92C] text-stone-900 text-[10px] font-bold uppercase tracking-widest rounded-full">
                      Dubai & UAE
                    </span>
                  </div>
                </div>
                <div className="p-8">
                  {/* H3 with keyword */}
                  <h3 className="font-display text-xl mb-3 text-stone-900 group-hover:text-[#C9831A] transition-colors font-bold">
                    {service.title}
                  </h3>
                  <p className="text-stone-600 text-sm leading-relaxed mb-6">{service.description}</p>

                  <div className="space-y-2 mb-6">
                    {service.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2 text-xs text-stone-600">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8B92C" strokeWidth="3">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Link
                    href="#inquiry"
                    className="inline-flex items-center gap-2 text-[#C9831A] text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all"
                  >
                    Get Free Quote →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== WHY CHOOSE ROYAL TRACK ============================== */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">Why Choose Us</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-4 font-bold">
              Why Royal Track is the <span className="gold-gradient">#1 Interior Renovation</span> Company in Dubai
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
              Trusted by 500+ homeowners and businesses across Dubai for premium interior renovation, design, and fit-out services.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: '🏆', title: 'Award-Winning Designs', desc: 'Recognized for excellence in interior renovation Dubai with award-winning villa and apartment projects.' },
              { icon: '🛡️', title: '10-Year Warranty', desc: 'Industry-leading 10-year workmanship warranty on all interior renovation Dubai projects — peace of mind guaranteed.' },
              { icon: '⚡', title: 'On-Time Delivery', desc: 'We strictly meet renovation timelines so you can enjoy your transformed interior space when promised.' },
              { icon: '💎', title: 'Premium Materials', desc: 'Only the finest materials — Italian marble, German fittings, Spanish tiles — for every interior renovation Dubai project.' },
              { icon: '🎨', title: 'In-House 3D Design', desc: 'Visualize your interior renovation before work begins with our in-house 3D design team.' },
              { icon: '🤝', title: 'Turnkey Solutions', desc: 'One contract, one team, one accountability — from design to final handover of your interior renovation Dubai.' },
              { icon: '💰', title: 'Transparent Pricing', desc: 'No hidden costs. Detailed, itemized quotes for every interior renovation Dubai project, big or small.' },
              { icon: '📞', title: '24/7 Support', desc: 'Dedicated project manager and 24/7 support throughout your interior renovation Dubai journey.' },
            ].map((item, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 hover:border-[#E8B92C] curved-box p-7 transition-all hover-lift">
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="font-display text-lg mb-3 text-[#E8B92C] font-bold">{item.title}</h3>
                <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== STATS COUNTER ============================== */}
      <section className="py-20 bg-[#E8B92C] text-stone-900">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '500+', label: 'Interior Projects Completed' },
              { num: '10+', label: 'Years of Experience' },
              { num: '50+', label: 'Expert Craftsmen' },
              { num: '4.9★', label: 'Customer Rating' },
            ].map((stat, idx) => (
              <div key={idx}>
                <div className="font-display text-5xl md:text-6xl font-bold leading-none mb-3">{stat.num}</div>
                <div className="text-xs md:text-sm font-bold uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== OUR PROCESS ============================== */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">How We Work</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-stone-900 mb-4 font-bold">
              Our <span className="gold-gradient">Interior Renovation</span> Process
            </h2>
            <p className="text-stone-600 max-w-3xl mx-auto leading-relaxed">
              A proven 5-step process for every interior renovation Dubai project — from first consultation to final handover.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Free Consultation', desc: 'Discuss your interior renovation vision, requirements, and budget with our experts.' },
              { step: '02', title: '3D Design & Planning', desc: 'Detailed 3D designs, material selection, timelines, and transparent cost estimates.' },
              { step: '03', title: 'Approval & NOC', desc: 'We handle all Dubai Municipality NOCs, permits, and approvals on your behalf.' },
              { step: '04', title: 'Expert Execution', desc: 'Professional interior renovation Dubai work with daily quality control and project updates.' },
              { step: '05', title: 'Final Handover', desc: 'Snag-free handover, walkthrough, and 10-year workmanship warranty activation.' },
            ].map((item, idx) => (
              <div key={idx} className="relative bg-white curved-box p-7 border-2 border-stone-200 hover:border-[#E8B92C] transition-all hover-lift">
                <div className="text-5xl font-display font-bold text-[#E8B92C]/20 mb-4">{item.step}</div>
                <h3 className="font-display text-lg mb-3 text-stone-900 font-bold">{item.title}</h3>
                <p className="text-stone-600 text-xs leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== AREAS WE SERVE ============================== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">Service Areas</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-stone-900 mb-4 font-bold">
              <span className="gold-gradient">Interior Renovation</span> Across Dubai & UAE
            </h2>
            <p className="text-stone-600 max-w-3xl mx-auto leading-relaxed">
              Royal Track delivers premium interior renovation services across all major Dubai communities and the wider UAE.
            </p>
          </div>

          {/* Featured area images */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
            {[
              { img: IMG.dubai_hills, name: 'Dubai Hills' },
              { img: IMG.arabian_ranches, name: 'Arabian Ranches' },
              { img: IMG.jvc, name: 'JVC' },
              { img: IMG.the_valley, name: 'The Valley' },
              { img: IMG.jumeirah_village, name: 'Jumeirah Village' },
              { img: IMG.yas_island, name: 'Yas Island' },
              { img: IMG.al_jurf, name: 'Al Jurf' },
              { img: IMG.talal_al_ghaf, name: 'Tilal Al Ghaf' },
            ].map((area, idx) => (
              <div key={idx} className="relative aspect-[4/3] curved-box overflow-hidden group cursor-pointer">
                <img
                  src={area.img}
                  alt={`Interior Renovation ${area.name} Dubai - Royal Track Services`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-white font-display text-lg font-bold">{area.name}</div>
                  <div className="text-[#E8B92C] text-[10px] uppercase tracking-widest">Interior Renovation</div>
                </div>
              </div>
            ))}
          </div>

          {/* Service area pill list */}
          <div className="bg-stone-50 curved-box p-8">
            <h3 className="font-display text-xl text-stone-900 font-bold mb-5 text-center">All Dubai Communities Covered</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                'Downtown Dubai', 'Dubai Marina', 'Palm Jumeirah', 'Emirates Hills', 'Dubai Hills',
                'Arabian Ranches', 'Jumeirah Village Circle', 'Jumeirah Village Triangle', 'Business Bay',
                'JBR', 'Al Barsha', 'Mirdif', 'The Springs', 'The Meadows', 'The Villa',
                'Dubai Investment Park', 'Dubai Silicon Oasis', 'International City', 'Discovery Gardens',
                'Damac Hills', 'Tilal Al Ghaf', 'Town Square', 'Mudon', 'The Valley',
                'Abu Dhabi', 'Sharjah', 'Ajman', 'Ras Al Khaimah',
              ].map((area, idx) => (
                <span
                  key={idx}
                  className="px-4 py-2 bg-white border border-stone-200 rounded-full text-xs font-medium text-stone-700 hover:border-[#E8B92C] hover:text-[#C9831A] hover:shadow-md transition-all cursor-pointer"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================== FEATURED PROJECTS ============================== */}
      <section className="py-24 bg-stone-900 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">Portfolio</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight mb-4 font-bold">
              Featured <span className="gold-gradient">Interior Renovation</span> Projects
            </h2>
            <p className="text-white/70 max-w-3xl mx-auto leading-relaxed">
              Browse our recent interior renovation Dubai projects — villas, apartments, kitchens, and bathrooms across the UAE.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { img: IMG.project_1, title: 'Luxury Villa Interior Renovation Dubai', area: 'Emirates Hills' },
              { img: IMG.project_2, title: 'Modern Apartment Renovation Dubai', area: 'Downtown Dubai' },
              { img: IMG.project_3, title: 'Premium Kitchen Renovation Dubai', area: 'Palm Jumeirah' },
              { img: IMG.project_4, title: 'Master Bedroom Renovation Dubai', area: 'Arabian Ranches' },
              { img: IMG.project_5, title: 'Luxury Bathroom Renovation Dubai', area: 'Dubai Marina' },
              { img: IMG.project_6, title: 'Living Room Interior Design Dubai', area: 'Business Bay' },
            ].map((p, idx) => (
              <div key={idx} className="relative aspect-[4/3] curved-box overflow-hidden group cursor-pointer">
                <img
                  src={p.img}
                  alt={`${p.title} in ${p.area} - Royal Track`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[#E8B92C] text-[10px] font-bold uppercase tracking-widest mb-2">{p.area}</div>
                  <h3 className="font-display text-lg text-white font-bold leading-tight">{p.title}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link href="/projects" className="inline-flex items-center gap-3 px-8 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-xs font-bold uppercase tracking-wider transition-all rounded-full shadow-xl hover:scale-105">
              View All Projects →
            </Link>
          </div>
        </div>
      </section>

      {/* ============================== INQUIRY FORM ============================== */}
      <div id="inquiry">
        <InquiryForm />
      </div>

      {/* ============================== FAQ SECTION (SEO RICH) ============================== */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-[#E8B92C]" />
              <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">FAQs</span>
              <span className="w-12 h-px bg-[#E8B92C]" />
            </div>
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-stone-900 mb-4 font-bold">
              Interior Renovation Dubai <span className="gold-gradient">FAQs</span>
            </h2>
            <p className="text-stone-600 leading-relaxed">
              Everything you need to know about interior renovation in Dubai — costs, timelines, approvals, and more.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white border border-stone-200 hover:border-[#E8B92C] curved-box overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-stone-50 transition-colors"
                  aria-expanded={openFaq === idx}
                >
                  <h3 className="font-display text-base md:text-lg text-stone-900 font-bold pr-4">{faq.q}</h3>
                  <svg
                    width="20" height="20" viewBox="0 0 24 24" fill="none"
                    stroke="#C9831A" strokeWidth="2.5"
                    className={`flex-shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-stone-600 text-sm leading-relaxed border-t border-stone-100 pt-5">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== SEO RICH CONTENT ============================== */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <div className="prose prose-lg max-w-none">
            <h2 className="font-display text-3xl md:text-4xl text-stone-900 mb-6 font-bold">
              Complete Guide to <span className="gold-gradient">Interior Renovation in Dubai</span>
            </h2>

            <p className="text-stone-700 leading-relaxed mb-5">
              <strong>Interior renovation Dubai</strong> has become an essential service for homeowners, landlords, and businesses looking to refresh, modernize, or completely transform their properties. Whether you own a luxury villa in Emirates Hills, an apartment in Dubai Marina, or run a commercial space in Business Bay — a professional interior renovation Dubai company makes all the difference.
            </p>

            <p className="text-stone-700 leading-relaxed mb-5">
              At <strong>Royal Track Building & Contracting LLC</strong>, we specialize in premium <strong>interior renovation Dubai services</strong> across every property type. Our team has completed over 500 interior renovation Dubai projects, ranging from compact apartment refreshes to full luxury villa makeovers across all major Dubai communities — Palm Jumeirah, Downtown Dubai, Arabian Ranches, Dubai Hills, JVC, and beyond.
            </p>

            <h3 className="font-display text-2xl text-stone-900 mt-10 mb-4 font-bold">What Does Interior Renovation Dubai Include?</h3>
            <p className="text-stone-700 leading-relaxed mb-5">
              A complete <strong>interior renovation in Dubai</strong> typically covers structural changes, electrical and plumbing (MEP) upgrades, flooring, wall finishes, ceiling design, kitchen and bathroom remodeling, custom joinery and built-in furniture, lighting design, painting, and final styling. Royal Track handles all of these under one turnkey contract — saving you time, coordination headaches, and money.
            </p>

            <h3 className="font-display text-2xl text-stone-900 mt-10 mb-4 font-bold">Choosing the Right Interior Renovation Dubai Company</h3>
            <p className="text-stone-700 leading-relaxed mb-5">
              The right <strong>interior renovation Dubai company</strong> should be fully licensed by Dubai Municipality, have a portfolio of completed projects, offer transparent pricing, provide written warranties, and have an in-house design team. Royal Track ticks every box — we are a licensed Dubai contractor with 10+ years of experience, a portfolio of 500+ interior renovation Dubai projects, transparent itemized quotes, and a 10-year workmanship warranty.
            </p>

            <h3 className="font-display text-2xl text-stone-900 mt-10 mb-4 font-bold">Interior Renovation Dubai Trends 2026</h3>
            <p className="text-stone-700 leading-relaxed mb-5">
              The latest interior renovation Dubai trends include warm neutral palettes, marble accents, smart home integration, biophilic design (indoor plants and natural materials), curved furniture and architecture, custom joinery, statement lighting, and Japanese-Mediterranean fusion aesthetics. Royal Track stays ahead of every interior renovation Dubai trend, helping clients create timeless, future-proof interiors.
            </p>

            <h3 className="font-display text-2xl text-stone-900 mt-10 mb-4 font-bold">Why Royal Track for Interior Renovation Dubai?</h3>
            <p className="text-stone-700 leading-relaxed mb-5">
              When you choose Royal Track for your <strong>interior renovation Dubai</strong> project, you get a single accountable partner from concept to handover. Our turnkey interior renovation Dubai service includes free consultation, 3D design, material sourcing, Dubai Municipality NOC processing, expert execution, daily project updates, snag-free handover, and a 10-year warranty. Contact us today at <a href="tel:+97143934374" className="text-[#C9831A] font-semibold underline">+971 4 393 4374</a> or <a href="mailto:Info@royaltrack.ae" className="text-[#C9831A] font-semibold underline">Info@royaltrack.ae</a> for your free interior renovation Dubai quote.
            </p>
          </div>
        </div>
      </section>

      {/* ============================== FINAL CTA ============================== */}
      <section className="py-24 bg-stone-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <img src={IMG.kitchen_gold} alt="" className="w-full h-full object-cover" />
        </div>
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center relative z-10">
          <h2 className="font-display text-3xl md:text-5xl mb-6 font-bold leading-tight">
            Start Your <span className="gold-gradient">Interior Renovation Dubai</span> Today
          </h2>
          <p className="text-white/80 text-base md:text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
            Free consultation • Free 3D design preview • 10-year warranty • Transparent pricing. Royal Track — Dubai's most trusted interior renovation company.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#inquiry" className="px-8 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-bold uppercase tracking-wider transition-all rounded-full shadow-xl hover:scale-105">
              Get Free Quote →
            </Link>
            <a href="tel:+97143934374" className="px-8 py-4 border-2 border-white text-white hover:bg-white hover:text-stone-900 text-sm font-bold uppercase tracking-wider transition-all rounded-full">
              📞 Call +971 4 393 4374
            </a>
            <a href="https://wa.me/971552824492" target="_blank" rel="noopener noreferrer" className="px-8 py-4 border-2 border-[#25D366] bg-[#25D366]/10 text-white hover:bg-[#25D366] text-sm font-bold uppercase tracking-wider transition-all rounded-full">
              💬 WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* FLOATING WHATSAPP & CALL */}
      <a href="https://wa.me/971552824492" target="_blank" rel="noopener noreferrer" className="whatsapp-float" title="Chat on WhatsApp" aria-label="WhatsApp">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      <a href="tel:+97143934374" className="call-float" title="Call Us" aria-label="Call">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2">
          <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
        </svg>
      </a>
    </div>
  );
}
