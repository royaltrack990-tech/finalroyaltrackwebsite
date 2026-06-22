'use client';

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import InquiryForm from '../components/InquiryForm';

/**
 * INTERIOR RENOVATION DUBAI - Royal Track Building & Contracting LLC
 * Premium interior renovation Dubai landing page with full SEO and Royal Track gold theme.
 *
 * Section order:
 *  1) Breadcrumbs
 *  2) Hero Slider
 *  3) About Us (Leading Renovation Contractors In Dubai)
 *  4) Interior Renovation Services Grid
 *  5) Reasons To Choose Us (interactive tabs)
 *  6) Recent Projects (auto-scroll moveable slider)
 *  7) Benefits Of Our Renovation Services (vertical tabs)
 *  8) Hire Us For Interior Renovation All Over The UAE (before/after slider + stats)
 *  9) Stats Counter
 * 10) Areas We Serve (Dubai + UAE)
 * 11) Special Offer Banner (Up To 30% OFF)
 * 12) Inquiry Form
 * 13) FAQ Section
 * 14) Complete Guide to Interior Renovation in Dubai (SEO content - 2nd last)
 */

const IMG = {
  // Hero slider
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

  // Projects
  project_1: '/images/project_1.jpg',
  project_2: '/images/project_2.jpg',
  project_3: '/images/project_3.jpg',
  project_4: '/images/project_4.jpg',
  project_5: '/images/project_5.jpg',
  project_6: '/images/project_6.jpg',
  project_7: '/images/project_7.jpg',

  // Areas
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
  // ===== STATES =====
  const [heroSlide, setHeroSlide] = useState(0);
  const [reasonsTab, setReasonsTab] = useState(0);
  const [benefitsTab, setBenefitsTab] = useState(0);
  const [beforeAfter, setBeforeAfter] = useState(50);
  const [openFaq, setOpenFaq] = useState(0);
  const sliderRef = useRef(null);
  const draggingRef = useRef(false);

  // ===== HERO SLIDES =====
  const heroSlides = [
    {
      image: IMG.hero1,
      tag: 'Experience',
      titlePart1: 'Modern Lifestyles with',
      titleHighlight: 'Interior Renovation Dubai',
      titlePart2: '',
      description: 'Offering premium interior renovation Dubai services for residential, villa, apartment, hotel and commercial properties across the UAE.',
    },
    {
      image: IMG.hero2,
      tag: 'Creative',
      titlePart1: 'Creating the Art of',
      titleHighlight: 'Stylish Living',
      titlePart2: 'in Dubai',
      description: 'A well-designed interior renovation Dubai space can have a profound impact on your quality of life. Premium interior fit-out across Dubai & UAE.',
    },
    {
      image: IMG.hero3,
      tag: 'Innovation',
      titlePart1: 'Innovative',
      titleHighlight: 'Interior Design',
      titlePart2: 'Dubai',
      description: 'Our innovative interior renovation Dubai techniques combine modern design, premium materials, and expert craftsmanship for every space.',
    },
    {
      image: IMG.hero4,
      tag: 'Excellence',
      titlePart1: 'Premium',
      titleHighlight: 'Villa Renovation',
      titlePart2: 'Dubai',
      description: 'Transform your villa with Royal Track\'s premium interior renovation Dubai services — design, construction, finishing, and handover under one roof.',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setHeroSlide((p) => (p + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [heroSlides.length]);

  // ===== INTERIOR SERVICES =====
  const interiorServices = [
    { title: 'Villa Renovation Dubai', image: IMG.living_marble, description: 'Complete villa interior renovation Dubai services for luxury homes in Emirates Hills, Palm Jumeirah, Arabian Ranches, and Dubai Hills.', features: ['Full Villa Makeover', 'Luxury Finishes', 'Smart Home Integration', '3D Design Preview'] },
    { title: 'Home Renovation Dubai', image: IMG.living_modern, description: 'Premium home renovation Dubai services for townhouses and family homes — single-room makeovers to complete home interior renovation Dubai.', features: ['Full Home Renovation', 'Custom Joinery', 'Modern Finishes', 'Project Management'] },
    { title: 'Apartment Renovation Dubai', image: IMG.kitchen_marble, description: 'Apartment interior renovation Dubai — Downtown, Marina, JBR, Business Bay. Smart and stylish renovations that maximize space and add value.', features: ['Space Optimization', 'Modern Layouts', 'Premium Materials', 'Quick Turnaround'] },
    { title: 'Kitchen Renovation Dubai', image: IMG.kitchen_gold, description: 'Premium kitchen renovation Dubai — modular kitchens, custom cabinetry, quartz & marble countertops, and German-grade appliances installation.', features: ['Modular Kitchens', 'Quartz Countertops', 'Premium Appliances', 'Custom Cabinetry'] },
    { title: 'Bathroom Renovation Dubai', image: IMG.kitchen_marble, description: 'Bathroom renovation Dubai with premium tiling, sanitary ware, vanity units, and waterproofing. Luxury bathroom renovation Dubai across villas and apartments.', features: ['Luxury Tiling', 'Premium Sanitaryware', 'Waterproofing', 'Vanity Installation'] },
    { title: 'Bedroom Renovation Dubai', image: IMG.living_marble, description: 'Bedroom renovation Dubai — master, kids, and guest rooms. Custom wardrobes, premium flooring, and elegant interior renovation Dubai design.', features: ['Custom Wardrobes', 'Premium Flooring', 'Mood Lighting', 'Acoustic Solutions'] },
    { title: 'Living Room Renovation Dubai', image: IMG.living_modern, description: 'Transform your living room with Royal Track\'s premium interior renovation Dubai services — false ceilings, custom TV units, wall panels, and luxury furniture.', features: ['False Ceilings', 'Wall Cladding', 'Custom TV Units', 'Designer Lighting'] },
    { title: 'Office & Commercial Interior Dubai', image: IMG.turnkey, description: 'Commercial interior renovation Dubai for offices, retail showrooms, restaurants & clinics. Modern office fit-out and branded interior renovation Dubai design.', features: ['Glass Partitions', 'Office Fit-Out', 'Branded Interiors', 'MEP & HVAC'] },
    { title: 'Hotel & Restaurant Interior Dubai', image: IMG.kitchen_gold, description: 'Luxury hotel interior renovation Dubai — boutique hotels to fine-dining restaurants. Hospitality-grade interior renovation Dubai fit-out across UAE.', features: ['Hospitality Design', 'Luxury Finishes', 'Lighting Design', 'Custom Furniture'] },
  ];

  // ===== REASONS TO CHOOSE US (Image 3) =====
  const reasonsTabs = [
    {
      label: 'Premium Materials',
      title: 'Materials That Last Long',
      description: 'We only use the finest quality materials for our interior renovation Dubai services. Our team prioritizes the health and safety of our clients. That is why we make sure that you get non-toxic and premium materials for every interior renovation Dubai upgrade.',
      points: ['Improved lifespan of modifications', 'Better indoor air quality', 'Health-friendly and VOC-free', 'No compromise of style'],
      image: IMG.kitchen_marble,
    },
    {
      label: 'Quality Workmanship',
      title: 'Craftsmanship You Can Trust',
      description: 'Royal Track\'s interior renovation Dubai team consists of seasoned craftsmen and certified contractors. Every interior renovation Dubai project is executed with precision, attention to detail, and uncompromising quality control standards.',
      points: ['Certified expert craftsmen', 'Daily quality inspections', '10-year workmanship warranty', 'Snag-free final handover'],
      image: IMG.living_marble,
    },
    {
      label: 'Affordable Packages',
      title: 'Premium Quality at Fair Prices',
      description: 'Our interior renovation Dubai packages are designed to deliver premium results without breaking the bank. We offer transparent, itemized pricing for every interior renovation Dubai project — no hidden fees, no surprises, just honest value.',
      points: ['Transparent itemized quotes', 'Flexible payment plans', 'No hidden costs ever', 'Best price-quality ratio in Dubai'],
      image: IMG.turnkey,
    },
    {
      label: 'Custom Solutions',
      title: 'Tailored to Your Lifestyle',
      description: 'Every interior renovation Dubai project is unique. Our in-house design team creates fully customized interior renovation Dubai solutions tailored to your taste, lifestyle, and the architecture of your property.',
      points: ['Personalized 3D design previews', 'Custom-made joinery & furniture', 'Bespoke material selection', 'Lifestyle-based space planning'],
      image: IMG.kitchen_gold,
    },
    {
      label: 'Fast Delivery',
      title: 'On-Time, Every Time',
      description: 'Time is money. Royal Track\'s interior renovation Dubai team strictly adheres to project timelines. Most interior renovation Dubai projects are delivered on schedule, often ahead of deadline, without sacrificing quality.',
      points: ['Strict project milestones', 'Dedicated project manager', 'Daily progress updates', '95% on-time completion rate'],
      image: IMG.project_1,
    },
  ];

  // ===== BENEFITS OF OUR RENOVATION SERVICES (Image 5) =====
  const benefitsTabs = [
    {
      label: 'Improved Functionality',
      title: 'Improved Functionality',
      description: 'Royal Track believes in providing interior renovation Dubai design and renovation services that increase the practicality of any place. We make sure that every interior renovation Dubai modification offers more than just beauty.',
      bullets: ['Smart integrations for easy living', 'Hidden storage solutions', 'Maximum utilization of available space', 'Proper lighting, plumbing & electrical wiring'],
      image: IMG.kitchen_gold,
    },
    {
      label: 'Enhanced Comfort',
      title: 'Enhanced Comfort',
      description: 'A truly successful interior renovation Dubai project makes your home feel more comfortable every single day. Our interior renovation Dubai designs elevate comfort with premium materials, smart climate control, and ergonomic spatial planning.',
      bullets: ['Premium climate control & AC zoning', 'Ergonomic furniture placement', 'Acoustic insulation for peace & quiet', 'Soft, mood-based ambient lighting'],
      image: IMG.living_modern,
    },
    {
      label: 'Renewed Style',
      title: 'Renewed Style',
      description: 'Interior renovation Dubai is your chance to refresh your home aesthetic completely. Royal Track\'s interior renovation Dubai designers blend modern trends with timeless elegance, giving your space a renewed, sophisticated style.',
      bullets: ['Modern design trends for 2026', 'Timeless yet contemporary aesthetics', 'Premium finishes & textures', 'Personalized color palettes'],
      image: IMG.kitchen_marble,
    },
    {
      label: 'Energy Efficiency',
      title: 'Energy Efficiency',
      description: 'Our interior renovation Dubai upgrades go beyond aesthetics — they help reduce your monthly utility bills. From energy-efficient LED lighting to thermal insulation, every interior renovation Dubai detail is optimized for sustainability.',
      bullets: ['LED lighting throughout the space', 'Thermal-efficient windows & doors', 'Smart thermostats & home automation', 'Lower DEWA / electricity bills'],
      image: IMG.turnkey,
    },
    {
      label: 'Health Benefits',
      title: 'Health Benefits',
      description: 'Royal Track\'s interior renovation Dubai team uses only non-toxic, VOC-free materials. Our interior renovation Dubai approach prioritizes indoor air quality, natural light, and ventilation — for a healthier, happier home.',
      bullets: ['Non-toxic, VOC-free paints & adhesives', 'Improved indoor air quality (IAQ)', 'Maximized natural light & ventilation', 'Allergen-resistant flooring options'],
      image: IMG.living_marble,
    },
  ];

  // ===== PROJECTS (carousel) =====
  const projects = [
    { img: IMG.project_1, title: 'Luxury Villa Interior Renovation Dubai', area: 'Emirates Hills' },
    { img: IMG.project_2, title: 'Modern Apartment Renovation Dubai', area: 'Downtown Dubai' },
    { img: IMG.project_3, title: 'Premium Kitchen Renovation Dubai', area: 'Palm Jumeirah' },
    { img: IMG.project_4, title: 'Master Bedroom Renovation Dubai', area: 'Arabian Ranches' },
    { img: IMG.project_5, title: 'Luxury Bathroom Renovation Dubai', area: 'Dubai Marina' },
    { img: IMG.project_6, title: 'Living Room Interior Design Dubai', area: 'Business Bay' },
    { img: IMG.project_7, title: 'Office Interior Fit-Out Dubai', area: 'Business Bay' },
    { img: IMG.kitchen_marble, title: 'Marble Kitchen Renovation Dubai', area: 'Dubai Hills' },
    { img: IMG.living_marble, title: 'Designer Living Room Dubai', area: 'Jumeirah' },
  ];

  // ===== FAQ =====
  const faqs = [
    { q: 'How much does interior renovation cost in Dubai?', a: 'Interior renovation cost in Dubai depends on the property size, materials, and scope of work. A typical apartment interior renovation in Dubai ranges from AED 50,000 to AED 250,000, while villa interior renovation in Dubai can range from AED 200,000 to AED 1,500,000. Royal Track provides free, transparent quotations after a site visit and consultation.' },
    { q: 'How long does interior renovation in Dubai take?', a: 'Interior renovation timeline in Dubai varies by project scope. A single-room renovation typically takes 2–3 weeks, full apartment renovation 6–8 weeks, and complete villa renovation 3–6 months. Royal Track provides a detailed project timeline with every quote and adheres strictly to milestones.' },
    { q: 'Do I need approval for interior renovation in Dubai?', a: 'Yes, structural interior renovation work in Dubai requires NOC and approval from Dubai Municipality or the relevant free zone authority. As a licensed Dubai interior renovation contractor, Royal Track handles all permits, NOCs, and approvals on your behalf to ensure full compliance.' },
    { q: 'What interior renovation services does Royal Track offer in Dubai?', a: 'Royal Track offers complete interior renovation services in Dubai including villa renovation, home renovation, apartment renovation, kitchen renovation, bathroom renovation, bedroom renovation, living room renovation, office interior fit-out, hotel renovation, and commercial interior renovation across Dubai and the UAE.' },
    { q: 'Does Royal Track offer warranty on interior renovation in Dubai?', a: 'Yes, Royal Track offers a comprehensive warranty on all interior renovation projects in Dubai. Workmanship is warranted for up to 10 years, and material warranties follow manufacturer terms. We are a fully licensed and insured Dubai interior renovation company.' },
    { q: 'Which areas in Dubai does Royal Track service?', a: 'Royal Track provides interior renovation services across all Dubai areas including Downtown Dubai, Dubai Marina, Palm Jumeirah, Arabian Ranches, Emirates Hills, Jumeirah Village Circle (JVC), Dubai Hills, Business Bay, JBR, Al Barsha, Mirdif, and across the UAE including Abu Dhabi, Sharjah, Ajman and Ras Al Khaimah.' },
    { q: 'Can Royal Track design and renovate together (turnkey)?', a: 'Yes, Royal Track is a complete turnkey interior renovation company in Dubai. We handle design, 3D visualization, material sourcing, construction, MEP works, finishing, and final handover under one roof — saving you time, money, and coordination headaches.' },
    { q: 'How do I get a quote for interior renovation in Dubai?', a: 'Getting a free interior renovation quote in Dubai is easy. Call Royal Track at +971 4 393 4374, WhatsApp +971 55 282 4492, or fill the inquiry form on this page. We respond within 24 hours and arrange a free site visit and consultation.' },
  ];

  // ===== BEFORE/AFTER SLIDER handlers =====
  const handleSliderMove = (clientX) => {
    if (!sliderRef.current) return;
    const rect = sliderRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    let pct = (x / rect.width) * 100;
    pct = Math.max(0, Math.min(100, pct));
    setBeforeAfter(pct);
  };
  const onPointerDown = () => { draggingRef.current = true; };
  const onPointerUp = () => { draggingRef.current = false; };
  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    if (clientX) handleSliderMove(clientX);
  };

  const currentSlide = heroSlides[heroSlide];
  const currentReason = reasonsTabs[reasonsTab];
  const currentBenefit = benefitsTabs[benefitsTab];

  return (
    <div
      className="bg-stone-50 text-stone-900 overflow-x-hidden"
      onMouseMove={onPointerMove}
      onMouseUp={onPointerUp}
      onTouchMove={onPointerMove}
      onTouchEnd={onPointerUp}
    >
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,400&display=swap');

        * { -webkit-font-smoothing: antialiased; }
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }
        .font-elegant { font-family: 'Cormorant Garamond', serif; }

        @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
        @keyframes slideUp { from { opacity: 0; transform: translateY(40px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes scrollProjects {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .animate-fadeIn { animation: fadeIn 1.2s ease-out; }
        .animate-slideUp { animation: slideUp 1s cubic-bezier(0.16, 1, 0.3, 1); }

        .gold-gradient {
          background: linear-gradient(135deg, #F5D547 0%, #E8B92C 50%, #C9831A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .hover-lift { transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1); }
        .hover-lift:hover { transform: translateY(-10px); }

        .curved-box { border-radius: 20px; overflow: hidden; }
        .hero-slide-fade { transition: opacity 1.5s ease-in-out; }

        /* Continuous auto-scrolling projects marquee */
        .projects-track {
          animation: scrollProjects 40s linear infinite;
          will-change: transform;
        }
        .projects-track:hover { animation-play-state: paused; }

        /* Before/After slider */
        .ba-container { position: relative; user-select: none; touch-action: none; }
        .ba-handle {
          position: absolute; top: 50%; transform: translate(-50%, -50%);
          width: 44px; height: 44px; border-radius: 50%; background: white;
          border: 3px solid #E8B92C; box-shadow: 0 4px 12px rgba(0,0,0,0.3);
          display: flex; align-items: center; justify-content: center;
          cursor: ew-resize; z-index: 10;
        }
        .ba-line {
          position: absolute; top: 0; bottom: 0; width: 3px; background: #E8B92C;
          z-index: 9; pointer-events: none;
        }

        /* Floating buttons */
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

        /* Circular progress */
        .circ-progress { transform: rotate(-90deg); }
      `}</style>

      {/* ============================== 1. BREADCRUMBS ============================== */}
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

      {/* ============================== 2. HERO SLIDER ============================== */}
      <section className="relative h-screen min-h-[600px] max-h-[900px] flex items-center overflow-hidden">
        {heroSlides.map((slide, idx) => (
          <img
            key={idx}
            src={slide.image}
            alt={`${slide.titlePart1} ${slide.titleHighlight} ${slide.titlePart2} - Royal Track Interior Renovation Dubai`}
            className={`absolute inset-0 w-full h-full object-cover hero-slide-fade ${heroSlide === idx ? 'opacity-100' : 'opacity-0'}`}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/60 to-black/30" />

        <div className="relative max-w-[1600px] mx-auto px-6 lg:px-12 w-full z-10">
          <div className="max-w-3xl animate-slideUp" key={heroSlide}>
            <div className="inline-block px-4 py-2 bg-[#E8B92C]/20 backdrop-blur-sm rounded-full border border-[#E8B92C] mb-6">
              <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">{currentSlide.tag}</span>
            </div>
            <h1 className="font-display text-white text-4xl md:text-6xl lg:text-7xl leading-tight mb-6 font-bold">
              {currentSlide.titlePart1}{' '}
              <span className="gold-gradient">{currentSlide.titleHighlight}</span>
              {currentSlide.titlePart2 && <> {currentSlide.titlePart2}</>}
            </h1>
            <p className="text-white/90 text-base md:text-lg font-light leading-relaxed mb-8 max-w-2xl">
              {currentSlide.description}
            </p>

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

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
          {heroSlides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setHeroSlide(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-1.5 transition-all duration-500 rounded-full ${heroSlide === idx ? 'w-12 bg-[#E8B92C]' : 'w-6 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>
      </section>

      {/* ============================== 3. ABOUT US (Image 2 style) ============================== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* LEFT: Image collage with experience badge */}
            <div className="relative">
              {/* Main image - tall portrait */}
              <div className="relative">
                <div className="curved-box overflow-hidden shadow-2xl aspect-[4/5]">
                  <img
                    src={IMG.living_modern}
                    alt="Leading Interior Renovation Contractors In Dubai - Royal Track luxury interior"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* 5+ Years badge - top left over image */}
                <div className="absolute top-8 -left-6 md:left-8 bg-stone-900 text-white px-6 py-5 rounded-xl shadow-2xl border-2 border-[#E8B92C]">
                  <div className="font-display text-4xl md:text-5xl font-bold leading-none text-[#E8B92C]">10+</div>
                  <div className="text-[10px] font-bold uppercase tracking-widest mt-2 leading-tight">Years Of<br/>Experience</div>
                </div>
              </div>

              {/* Secondary smaller image overlapping bottom-right */}
              <div className="absolute -bottom-12 right-0 w-[55%] hidden md:block">
                <div className="curved-box overflow-hidden shadow-2xl aspect-[5/4] border-8 border-white">
                  <img
                    src={IMG.kitchen_gold}
                    alt="Royal Track interior renovation Dubai team meeting with clients"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* RIGHT: Content */}
            <div className="mt-12 lg:mt-0">
              <div className="inline-flex items-center gap-2 mb-5">
                <span className="w-3 h-3 rounded-full bg-[#E8B92C]" />
                <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">What We Do</span>
              </div>

              <h2 className="font-display text-3xl md:text-5xl leading-tight text-stone-900 mb-6 font-bold">
                Leading <span className="gold-gradient">Renovation Contractors</span> In Dubai
              </h2>

              <p className="text-stone-600 text-base leading-relaxed mb-8">
                We are one of the most reliable and fast service providers for smart <strong>interior renovation Dubai</strong> services. Royal Track Building & Contracting LLC offers luxurious upgrades at affordable prices, delivering premium interior renovation Dubai solutions for villas, apartments, hotels, and commercial spaces across the UAE.
              </p>

              {/* Numbered points */}
              <div className="space-y-5 mb-10">
                <div className="flex items-start gap-4 pb-5 border-b border-stone-200">
                  <span className="font-display text-2xl font-bold text-[#C9831A] flex-shrink-0">01.</span>
                  <p className="text-stone-900 text-base md:text-lg font-medium leading-relaxed">
                    Fast, functional, and fashionable interior renovation Dubai modifications
                  </p>
                </div>
                <div className="flex items-start gap-4 pb-5 border-b border-stone-200">
                  <span className="font-display text-2xl font-bold text-[#C9831A] flex-shrink-0">02.</span>
                  <p className="text-stone-900 text-base md:text-lg font-medium leading-relaxed">
                    On-time project completion & 100% interior renovation Dubai success rate
                  </p>
                </div>
              </div>

              {/* Clients + Top Agency row */}
              <div className="flex flex-wrap items-center gap-8 mb-8">
                {/* Client avatars (initial-based to avoid third-party images) */}
                <div className="flex items-center gap-3">
                  <div className="flex -space-x-3">
                    {[
                      { bg: '#E8B92C', initial: 'A' },
                      { bg: '#C9831A', initial: 'M' },
                      { bg: '#8B5A2B', initial: 'S' },
                      { bg: '#5C3A1F', initial: 'R' },
                      { bg: '#292524', initial: 'F' },
                    ].map((c, i) => (
                      <div
                        key={i}
                        className="w-11 h-11 rounded-full border-2 border-white flex items-center justify-center font-display font-bold text-white text-sm shadow-md"
                        style={{ background: c.bg }}
                      >
                        {c.initial}
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-[#C9831A] font-display font-bold text-base">Join our 5000+</div>
                    <div className="text-stone-600 text-xs">satisfied interior renovation Dubai clients</div>
                  </div>
                </div>

                {/* Top 10 Agency badge */}
                <div className="flex items-center gap-3">
                  <div className="w-14 h-14 flex items-center justify-center">
                    {/* Laurel wreath SVG */}
                    <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
                      <path d="M20 12 Q10 26 14 42 Q18 52 28 56" stroke="#292524" strokeWidth="2" fill="none" strokeLinecap="round" />
                      <path d="M44 12 Q54 26 50 42 Q46 52 36 56" stroke="#292524" strokeWidth="2" fill="none" strokeLinecap="round" />
                      <ellipse cx="16" cy="22" rx="4" ry="2" fill="#292524" transform="rotate(-30 16 22)" />
                      <ellipse cx="14" cy="32" rx="4" ry="2" fill="#292524" transform="rotate(-10 14 32)" />
                      <ellipse cx="18" cy="42" rx="4" ry="2" fill="#292524" transform="rotate(20 18 42)" />
                      <ellipse cx="48" cy="22" rx="4" ry="2" fill="#292524" transform="rotate(30 48 22)" />
                      <ellipse cx="50" cy="32" rx="4" ry="2" fill="#292524" transform="rotate(10 50 32)" />
                      <ellipse cx="46" cy="42" rx="4" ry="2" fill="#292524" transform="rotate(-20 46 42)" />
                      <path d="M28 22 L32 26 L38 18" stroke="#E8B92C" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div>
                    <div className="text-[#C9831A] font-display font-bold text-base">Top 10 Agency Use</div>
                    <div className="text-stone-600 text-xs">Sustainable Material</div>
                  </div>
                </div>
              </div>

              {/* About Us button */}
              <Link
                href="/about"
                className="inline-flex items-center gap-3 group"
              >
                <span className="px-7 py-3 bg-white border-2 border-stone-300 group-hover:border-[#E8B92C] text-stone-900 font-display font-semibold rounded-full transition-all">
                  About Us
                </span>
                <span className="w-12 h-12 rounded-full bg-[#E8B92C] group-hover:bg-[#C9831A] flex items-center justify-center transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 4. INTERIOR SERVICES GRID ============================== */}
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
              Complete interior renovation Dubai solutions for residential, commercial, and hospitality properties. From villa renovation Dubai to apartment fit-out Dubai — we cover every room and every interior renovation Dubai detail.
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
                    alt={`${service.title} - Royal Track Premium Interior Renovation Dubai Services`}
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
                  <Link href="#inquiry" className="inline-flex items-center gap-2 text-[#C9831A] text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                    Get Free Quote →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ============================== 5. REASONS TO CHOOSE US (Image 3 - TABS) ============================== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-stone-900 font-bold">
              Reasons To <span className="gold-gradient">Choose Us</span>
            </h2>
            <p className="text-stone-600 mt-4 max-w-2xl mx-auto leading-relaxed">
              Discover why Royal Track is Dubai's most trusted interior renovation Dubai partner.
            </p>
          </div>

          {/* Tab buttons */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-8 mb-12">
            {reasonsTabs.map((tab, idx) => (
              <button
                key={idx}
                onClick={() => setReasonsTab(idx)}
                className={`px-5 md:px-7 py-3 rounded-full text-sm md:text-base font-display font-semibold transition-all ${
                  reasonsTab === idx
                    ? 'bg-[#C9831A] text-white shadow-lg'
                    : 'text-stone-600 hover:text-[#C9831A] hover:bg-stone-100'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="bg-stone-50 curved-box p-6 md:p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* LEFT: Text */}
              <div>
                <h3 className="font-display text-2xl md:text-4xl text-stone-900 font-bold mb-5 leading-tight">
                  {currentReason.title}
                </h3>
                <p className="text-stone-600 text-base leading-relaxed mb-8">
                  {currentReason.description}
                </p>

                <div className="space-y-3 mb-10">
                  {currentReason.points.map((p, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9831A" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span className="text-stone-900 text-base font-medium">{p}</span>
                    </div>
                  ))}
                </div>

                <Link href="#interior-services" className="inline-flex items-center gap-3 group">
                  <span className="px-7 py-3 bg-white border-2 border-stone-300 group-hover:border-[#E8B92C] text-stone-900 font-display font-semibold rounded-full transition-all">
                    Our Services
                  </span>
                  <span className="w-12 h-12 rounded-full bg-[#E8B92C] group-hover:bg-[#C9831A] flex items-center justify-center transition-all">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </Link>
              </div>

              {/* RIGHT: Image with circular badge */}
              <div className="relative">
                <div className="curved-box overflow-hidden shadow-2xl aspect-[4/3]">
                  <img
                    key={reasonsTab}
                    src={currentReason.image}
                    alt={`${currentReason.title} - Royal Track Interior Renovation Dubai`}
                    className="w-full h-full object-cover animate-fadeIn"
                  />
                </div>
                {/* 5+ Year circular badge - top left */}
                <div className="absolute -top-6 -left-6 md:top-6 md:-left-10 w-28 h-28 md:w-32 md:h-32 rounded-full bg-stone-900 flex flex-col items-center justify-center shadow-2xl border-4 border-white">
                  <div className="font-display text-3xl md:text-4xl font-bold text-[#E8B92C] leading-none">5+</div>
                  <div className="text-[9px] md:text-[10px] font-bold text-white uppercase tracking-widest mt-1 text-center leading-tight">Year Of<br/>Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 6. RECENT PROJECTS AUTO-SCROLLING SLIDER (Image 4) ============================== */}
      <section className="py-24 bg-stone-100 overflow-hidden">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 mb-12">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <div className="inline-flex items-center gap-2 mb-3">
                <span className="w-3 h-3 rounded-full bg-[#E8B92C]" />
                <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">Portfolio</span>
              </div>
              <h2 className="font-display text-3xl md:text-5xl text-stone-900 font-bold leading-tight">
                Recent <span className="gold-gradient">Interior Renovation</span> Projects
              </h2>
              <p className="text-stone-600 mt-3 max-w-2xl">Auto-rotating gallery of our latest interior renovation Dubai projects — hover to pause.</p>
            </div>
            <Link href="/projects" className="hidden md:inline-flex items-center gap-3 group">
              <span className="px-6 py-3 bg-white border-2 border-stone-300 group-hover:border-[#E8B92C] text-stone-900 font-display font-semibold rounded-full transition-all">
                View All
              </span>
              <span className="w-11 h-11 rounded-full bg-[#E8B92C] group-hover:bg-[#C9831A] flex items-center justify-center transition-all">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          </div>
        </div>

        {/* Auto-scrolling track - duplicated for infinite loop effect */}
        <div className="relative w-full overflow-hidden">
          <div className="projects-track flex gap-6" style={{ width: 'fit-content' }}>
            {[...projects, ...projects].map((p, idx) => (
              <div
                key={idx}
                className="relative w-[340px] md:w-[420px] aspect-[4/5] curved-box overflow-hidden flex-shrink-0 group cursor-pointer shadow-xl"
              >
                <img
                  src={p.img}
                  alt={`${p.title} in ${p.area} - Royal Track Interior Renovation Dubai Portfolio`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="text-[#E8B92C] text-[10px] font-bold uppercase tracking-widest mb-2">{p.area}</div>
                  <h3 className="font-display text-lg text-white font-bold leading-tight">{p.title}</h3>
                </div>
              </div>
            ))}

            {/* Dark "Explore Our Recent Projects" CTA card embedded in the track */}
            <Link
              href="/projects"
              className="relative w-[340px] md:w-[420px] aspect-[4/5] curved-box overflow-hidden flex-shrink-0 group shadow-xl"
              style={{ background: 'linear-gradient(135deg, #292524 0%, #1c1917 100%)' }}
            >
              {/* Decorative gold lines */}
              <svg className="absolute right-0 bottom-0 opacity-30" width="280" height="280" viewBox="0 0 280 280">
                {[...Array(12)].map((_, i) => (
                  <path
                    key={i}
                    d={`M ${280 - i * 22} 280 Q 280 ${280 - i * 22} 280 ${280 - i * 44}`}
                    stroke="#E8B92C"
                    strokeWidth="1.5"
                    fill="none"
                  />
                ))}
              </svg>

              <div className="relative p-8 md:p-10 h-full flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center gap-2 mb-6">
                    <span className="w-3 h-3 rounded-full bg-[#E8B92C]" />
                    <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">Project</span>
                  </div>
                  <h3 className="font-display text-3xl md:text-4xl text-white font-bold leading-tight">
                    Explore Our<br/>Recent<br/>Projects
                  </h3>
                </div>

                <div className="inline-flex items-center gap-3">
                  <span className="px-5 py-2.5 bg-white text-stone-900 font-display font-semibold text-sm rounded-full group-hover:bg-[#E8B92C] transition-all">
                    Read More
                  </span>
                  <span className="w-11 h-11 rounded-full bg-[#E8B92C] flex items-center justify-center group-hover:scale-110 transition-all">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* ============================== 7. BENEFITS OF OUR RENOVATION SERVICES (Image 5 - vertical tabs) ============================== */}
      <section className="py-24 bg-white">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl md:text-5xl leading-tight text-stone-900 font-bold">
              Benefits Of Our <span className="gold-gradient">Renovation Services</span>
            </h2>
            <p className="text-stone-600 mt-4 max-w-2xl mx-auto leading-relaxed">
              The real value of our interior renovation Dubai services goes far beyond aesthetics.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* LEFT: Vertical pill tabs */}
            <div className="lg:col-span-3 space-y-3">
              {benefitsTabs.map((tab, idx) => (
                <button
                  key={idx}
                  onClick={() => setBenefitsTab(idx)}
                  className={`w-full flex items-center justify-between px-5 py-3.5 rounded-full font-display font-semibold text-sm md:text-base transition-all border-2 ${
                    benefitsTab === idx
                      ? 'bg-[#C9831A] text-white border-[#C9831A] shadow-lg'
                      : 'bg-white text-stone-700 border-stone-200 hover:border-[#E8B92C]'
                  }`}
                >
                  <span>{tab.label}</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M7 17L17 7M17 7H8M17 7V16" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </button>
              ))}
            </div>

            {/* MIDDLE: Image */}
            <div className="lg:col-span-5">
              <div className="curved-box overflow-hidden shadow-2xl aspect-[4/5]">
                <img
                  key={benefitsTab}
                  src={currentBenefit.image}
                  alt={`${currentBenefit.title} - Interior Renovation Dubai Benefits by Royal Track`}
                  className="w-full h-full object-cover animate-fadeIn"
                />
              </div>
            </div>

            {/* RIGHT: Content */}
            <div className="lg:col-span-4">
              <h3 className="font-display text-2xl md:text-4xl text-stone-900 font-bold mb-5 leading-tight">
                {currentBenefit.title}
              </h3>
              <p className="text-stone-600 text-base leading-relaxed mb-8">
                {currentBenefit.description}
              </p>

              <div className="space-y-4">
                {currentBenefit.bullets.map((b, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E8B92C]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#C9831A" strokeWidth="3">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-stone-800 text-base font-medium leading-relaxed">{b}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 8. HIRE US ALL OVER UAE (Image 6 - before/after) ============================== */}
      <section className="py-24 bg-stone-50">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-stretch">
            {/* LEFT: Dark stats card */}
            <div className="bg-stone-900 curved-box p-10 md:p-12 flex flex-col justify-center relative overflow-hidden">
              {/* Decorative corner */}
              <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-[#E8B92C]/10" />

              <div className="relative">
                <div className="inline-flex items-center gap-2 mb-5">
                  <span className="w-3 h-3 rounded-full bg-[#E8B92C]" />
                  <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">Since 2020</span>
                </div>

                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-white font-bold mb-6 leading-tight">
                  Hire Us For <span className="gold-gradient">Interior Renovation</span> All Over The UAE
                </h2>

                <p className="text-white/80 text-base leading-relaxed mb-10">
                  Royal Track aims to bring complete customer satisfaction through our premium interior renovation Dubai services. For this reason, we provide market-competitive prices for every interior renovation Dubai project — across Dubai, Abu Dhabi, Sharjah, and the entire UAE.
                </p>

                {/* Circular progress stats */}
                <div className="flex flex-wrap gap-10">
                  {[
                    { pct: 89, label: 'Quality\nAssurance' },
                    { pct: 87, label: 'Customer\nSatisfaction' },
                  ].map((s, i) => {
                    const circ = 2 * Math.PI * 38;
                    const offset = circ - (s.pct / 100) * circ;
                    return (
                      <div key={i} className="flex items-center gap-4">
                        <svg width="100" height="100" viewBox="0 0 100 100" className="circ-progress">
                          <circle cx="50" cy="50" r="38" stroke="rgba(255,255,255,0.15)" strokeWidth="4" fill="none" />
                          <circle
                            cx="50" cy="50" r="38"
                            stroke="#E8B92C" strokeWidth="4" fill="none"
                            strokeDasharray={circ}
                            strokeDashoffset={offset}
                            strokeLinecap="round"
                          />
                          <text x="50" y="55" textAnchor="middle" transform="rotate(90 50 50)" fill="#E8B92C" fontSize="20" fontWeight="bold" fontFamily="Playfair Display">
                            {s.pct}%
                          </text>
                        </svg>
                        <div className="text-white font-display text-lg font-semibold leading-tight whitespace-pre-line">
                          {s.label}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* RIGHT: Before/After draggable slider */}
            <div className="relative">
              <div
                ref={sliderRef}
                className="ba-container curved-box overflow-hidden aspect-[5/4] shadow-2xl"
                onMouseDown={(e) => { onPointerDown(); handleSliderMove(e.clientX); }}
                onTouchStart={(e) => { onPointerDown(); if (e.touches[0]) handleSliderMove(e.touches[0].clientX); }}
              >
                {/* AFTER image (full) */}
                <img
                  src={IMG.living_marble}
                  alt="After Interior Renovation Dubai - Royal Track premium luxury finish"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* BEFORE image (clipped) */}
                <img
                  src={IMG.project_2}
                  alt="Before Interior Renovation Dubai - original property state"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ clipPath: `inset(0 ${100 - beforeAfter}% 0 0)` }}
                />

                {/* Divider line */}
                <div className="ba-line" style={{ left: `${beforeAfter}%` }} />

                {/* Drag handle */}
                <div
                  className="ba-handle"
                  style={{ left: `${beforeAfter}%`, top: '50%' }}
                  onMouseDown={onPointerDown}
                  onTouchStart={onPointerDown}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9831A" strokeWidth="2.5">
                    <path d="M8 7L4 12L8 17M16 7L20 12L16 17" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>

                {/* Labels */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-black/60 backdrop-blur-sm rounded-full text-[10px] font-bold text-white uppercase tracking-widest">
                  Before
                </div>
                <div className="absolute top-4 right-4 px-3 py-1 bg-[#E8B92C] rounded-full text-[10px] font-bold text-stone-900 uppercase tracking-widest">
                  After
                </div>
              </div>

              <div className="text-center mt-4 text-stone-500 text-xs uppercase tracking-widest">
                ← Drag the slider to compare ↔
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 9. STATS COUNTER ============================== */}
      <section className="py-20 bg-[#E8B92C] text-stone-900">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { num: '500+', label: 'Interior Renovation Dubai Projects' },
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

      {/* ============================== 10. AREAS WE SERVE ============================== */}
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
              Royal Track delivers premium interior renovation Dubai services across all major Dubai communities and the wider UAE.
            </p>
          </div>

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

          <div className="bg-stone-50 curved-box p-8">
            <h3 className="font-display text-xl text-stone-900 font-bold mb-5 text-center">All Dubai Communities & UAE Covered</h3>
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

      {/* ============================== 11. OFFER BANNER (Image 7) ============================== */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="relative curved-box overflow-hidden shadow-2xl" style={{ minHeight: '320px' }}>
            {/* Background image with overlay */}
            <img
              src={IMG.living_modern}
              alt="Special Interior Renovation Dubai Offer - 30% Off by Royal Track"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/95 via-stone-900/85 to-stone-900/50" />

            <div className="relative grid grid-cols-1 md:grid-cols-12 gap-6 p-8 md:p-14 items-center">
              {/* LEFT: Headline */}
              <div className="md:col-span-9">
                <div className="inline-flex items-center gap-2 mb-4">
                  <span className="w-3 h-3 rounded-full bg-[#E8B92C]" />
                  <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">Up To 30% OFF</span>
                </div>
                <h2 className="font-display text-2xl md:text-4xl lg:text-5xl text-white font-bold leading-tight mb-6 max-w-3xl">
                  Create Your Dream Living Space With Our <span className="gold-gradient">Interior Renovation Dubai</span> Services
                </h2>
                <div className="flex flex-wrap items-center gap-4">
                  <Link href="#inquiry" className="px-7 py-3.5 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-xs font-bold uppercase tracking-wider transition-all rounded-full shadow-xl hover:scale-105">
                    Claim Offer →
                  </Link>
                  <a href="tel:+97143934374" className="px-7 py-3.5 border-2 border-white text-white hover:bg-white hover:text-stone-900 text-xs font-bold uppercase tracking-wider transition-all rounded-full">
                    📞 +971 4 393 4374
                  </a>
                </div>
              </div>

              {/* RIGHT: NEW OFFER badge */}
              <div className="md:col-span-3 flex justify-center md:justify-end items-center">
                <div className="relative">
                  {/* Scalloped circle badge */}
                  <svg width="140" height="140" viewBox="0 0 140 140" className="drop-shadow-2xl">
                    <defs>
                      <clipPath id="scallop">
                        <path d={(() => {
                          const cx = 70, cy = 70, points = 20, outer = 65, inner = 56;
                          let d = '';
                          for (let i = 0; i < points * 2; i++) {
                            const r = i % 2 === 0 ? outer : inner;
                            const angle = (Math.PI * i) / points;
                            const x = cx + r * Math.cos(angle);
                            const y = cy + r * Math.sin(angle);
                            d += (i === 0 ? 'M' : 'L') + x + ',' + y + ' ';
                          }
                          return d + 'Z';
                        })()} />
                      </clipPath>
                    </defs>
                    <rect width="140" height="140" fill="#DC2626" clipPath="url(#scallop)" />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white font-display font-bold">
                    <div className="text-xl leading-none">NEW</div>
                    <div className="text-xl leading-none mt-1">OFFER</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ============================== 12. INQUIRY FORM ============================== */}
      <div id="inquiry">
        <InquiryForm />
      </div>

      {/* ============================== 13. FAQ SECTION ============================== */}
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
              <div key={idx} className="bg-white border border-stone-200 hover:border-[#E8B92C] curved-box overflow-hidden transition-all">
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

      {/* ============================== 14. COMPLETE GUIDE - SEO CONTENT (2nd last - above footer) ============================== */}
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
              A complete <strong>interior renovation in Dubai</strong> typically covers structural changes, electrical and plumbing (MEP) upgrades, flooring, wall finishes, ceiling design, kitchen and bathroom remodeling, custom joinery and built-in furniture, lighting design, painting, and final styling. Royal Track handles all of these under one turnkey interior renovation Dubai contract — saving you time, coordination headaches, and money.
            </p>

            <h3 className="font-display text-2xl text-stone-900 mt-10 mb-4 font-bold">Choosing the Right Interior Renovation Dubai Company</h3>
            <p className="text-stone-700 leading-relaxed mb-5">
              The right <strong>interior renovation Dubai company</strong> should be fully licensed by Dubai Municipality, have a portfolio of completed interior renovation Dubai projects, offer transparent pricing, provide written warranties, and have an in-house design team. Royal Track ticks every box — we are a licensed Dubai interior renovation contractor with 10+ years of experience, a portfolio of 500+ interior renovation Dubai projects, transparent itemized quotes, and a 10-year workmanship warranty.
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
