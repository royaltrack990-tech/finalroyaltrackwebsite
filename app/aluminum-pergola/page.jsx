'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import InquiryForm from '../components/InquiryForm';
import SocialIcons from '../components/SocialIcons';

const C = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8B92C" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>;

export default function AluminumPergolaPage() {
  const [slide, setSlide] = useState(0);
  const [faq, setFaq] = useState(0);
  const [activeTab, setActiveTab] = useState('aluminum');
  const imgs = ['/images/exterior_1.png','/images/feature_3.png','/images/exterior_3.jpeg','/images/feature_1.png'];
  useEffect(() => { const t=setInterval(()=>setSlide(p=>(p+1)%imgs.length),5000); return ()=>clearInterval(t); }, []);

  const aluminumServices = [
    { t:'Aluminum Doors Dubai', d:'Premium aluminum door systems Dubai — pivot doors, sliding doors, folding doors, French doors, entrance doors, and automatic doors. Royal Track supplies and installs high-performance aluminum doors Dubai using top European profiles (Schuco, Reynaers, Technal) with thermal break technology, double/triple glazing, and custom RAL color powder coating. Our aluminum work Dubai ensures superior weather resistance, security, and energy efficiency for villas, apartments, and commercial buildings across the UAE.', f:['Pivot & Sliding Doors','Folding & French Doors','Thermal Break Profiles','Custom RAL Colors'] },
    { t:'Aluminum Windows Dubai', d:'High-performance aluminum windows Dubai — casement windows, tilt-and-turn windows, fixed windows, louvre windows, and curtain wall glazing. Royal Track\'s aluminum work Dubai delivers superior acoustic insulation, thermal efficiency, and weather sealing using premium European aluminum profiles. Double and triple glazing options with low-E coatings for maximum energy savings in Dubai\'s climate.', f:['Casement & Tilt-Turn','Double/Triple Glazing','Low-E Coatings','Acoustic Insulation'] },
    { t:'Curtain Wall Systems Dubai', d:'Professional curtain wall installation Dubai — unitized curtain walls, stick curtain walls, structural glazing, spider glazing, and frameless glass facades. Royal Track\'s aluminum work Dubai team delivers stunning glass facades for commercial towers, office buildings, retail showrooms, and luxury villas. Engineered for Dubai\'s wind loads, thermal expansion, and seismic requirements.', f:['Unitized Systems','Structural Glazing','Spider Glass','Frameless Facades'] },
    { t:'Aluminum Cladding Dubai', d:'Premium aluminum cladding Dubai — ACP (aluminum composite panels), solid aluminum panels, perforated panels, and decorative aluminum screens. Lightweight, fire-rated, and weather-resistant aluminum cladding solutions for exterior renovation Dubai projects. Our aluminum work Dubai includes custom perforation patterns, CNC-cut designs, and premium PVDF coatings with 20-year color warranty.', f:['ACP Panels','Solid Aluminum','Perforated Screens','PVDF Coatings'] },
    { t:'Aluminum Railings & Balustrades Dubai', d:'Custom aluminum railings and glass balustrades Dubai — balcony railings, staircase railings, terrace balustrades, pool fencing, and decorative screens. Royal Track\'s aluminum work Dubai combines premium aluminum framing with tempered/laminated glass panels for elegant, safe, and low-maintenance railing systems across Dubai properties.', f:['Glass Balustrades','Balcony Railings','Pool Fencing','Decorative Screens'] },
    { t:'Aluminum Fabrication Dubai', d:'Custom aluminum fabrication Dubai — CNC cutting, welding, bending, powder coating, and assembly for bespoke aluminum products. Royal Track\'s aluminum work Dubai workshop produces custom louvers, sunshades, signage frames, furniture, display units, and architectural metalwork. In-house fabrication means faster turnaround and tighter quality control.', f:['CNC Cutting','Custom Welding','Powder Coating','Bespoke Products'] },
  ];

  const pergolaServices = [
    { t:'Aluminum Pergola Dubai', d:'Premium aluminum pergola installation Dubai — fixed roof pergolas, flat top pergolas, gable pergolas, and attached/freestanding designs. Royal Track builds durable, rust-free, maintenance-free aluminum pergolas Dubai that withstand extreme heat and sandstorms. Powder-coated in any RAL color to match your villa exterior. Integrated with lighting, fans, curtains, and speaker systems for the ultimate outdoor living experience.', f:['Fixed & Gable Designs','Rust-Free Aluminum','Custom RAL Colors','Integrated Lighting'] },
    { t:'Bioclimatic Louvered Pergola Dubai', d:'Smart bioclimatic louvered pergola Dubai — motorized adjustable louvers that rotate 0-180 degrees to control sunlight, airflow, and rain protection. Royal Track installs premium bioclimatic pergolas Dubai with rain sensors (auto-close), wind sensors, integrated LED lighting, and smartphone app control. Create the perfect outdoor climate year-round in Dubai.', f:['Motorized Louvers','Rain & Wind Sensors','App Control','Year-Round Comfort'] },
    { t:'Retractable Awning & Canopy Dubai', d:'Professional retractable awning installation Dubai — folding arm awnings, cassette awnings, vertical awnings, and retractable roof canopies. Motorized operation with remote control and smart home integration. Premium Sunbrella and Dickson fabrics with UV protection and 10-year fade warranty. Perfect shade structures Dubai for terraces, balconies, restaurants, and pool areas.', f:['Motorized Operation','Sunbrella Fabrics','UV Protection','Smart Integration'] },
    { t:'Shade Sails Dubai', d:'Custom shade sail design and installation Dubai — tension membrane structures, HDPE shade sails, waterproof PVC sails, and architectural fabric structures. Royal Track designs shade structures Dubai that combine functional sun protection with stunning architectural aesthetics. UV-blocking, waterproof, and wind-rated shade sails for villas, schools, parks, parking areas, and commercial spaces.', f:['Custom Design','UV-Blocking','Waterproof Options','Architectural Shapes'] },
    { t:'Carport & Parking Shade Dubai', d:'Premium carport and parking shade structures Dubai — aluminum frame carports, tensile fabric parking shades, cantilever carports, and multi-car parking structures. Protect vehicles from Dubai\'s extreme sun and heat with Royal Track\'s durable, elegant shade structures Dubai. Custom sizes for single car, double car, and commercial parking facilities.', f:['Aluminum Carports','Tensile Fabric','Cantilever Design','Multi-Car Options'] },
    { t:'Outdoor Kitchen Shade Dubai', d:'Integrated outdoor kitchen shade structures Dubai — pergola-covered BBQ areas, louvered roof outdoor dining, and weather-protected entertainment spaces. Royal Track combines pergola Dubai expertise with outdoor kitchen construction to create complete covered cooking and dining areas for Dubai villas. Fire-rated materials, ventilation systems, and waterproof roofing options.', f:['BBQ Area Cover','Dining Pergolas','Fire-Rated Materials','Ventilation Systems'] },
  ];

  const currentServices = activeTab === 'aluminum' ? aluminumServices : pergolaServices;
  const tabLabel = activeTab === 'aluminum' ? 'Aluminum Work Dubai' : 'Pergola & Shade Structures Dubai';

  const faqs = [
    { q:'How much does aluminum work cost in Dubai?', a:'Aluminum work cost in Dubai varies by product: aluminum windows AED 300-800 per sqm, aluminum doors AED 500-1,500 per unit, curtain walls AED 400-1,200 per sqm, aluminum cladding AED 250-700 per sqm, aluminum railings AED 200-600 per running meter, aluminum shopfronts AED 400-1,000 per sqm. Royal Track provides free detailed aluminum work Dubai quotations after site measurement.' },
    { q:'How much does a pergola cost in Dubai?', a:'Pergola cost in Dubai: basic aluminum pergola AED 15,000-30,000, mid-range pergola with lighting AED 30,000-50,000, bioclimatic louvered pergola AED 40,000-80,000, motorized retractable pergola AED 50,000-120,000, large custom pergola with full features AED 80,000-200,000+. Price depends on size, material, roof type, and automation features. Free pergola Dubai consultation available.' },
    { q:'What aluminum brands does Royal Track use?', a:'Royal Track uses premium European aluminum profiles: Schuco (Germany), Reynaers (Belgium), Technal (France), Cortizo (Spain), and Alumil (Greece) for doors, windows, and curtain walls. For cladding, we use Alucobond, Reynobond, and Alpolic ACP panels. All aluminum work Dubai materials are UAE-approved with manufacturer warranties.' },
    { q:'How long does aluminum installation take?', a:'Aluminum work Dubai timelines: standard windows and doors 2-3 weeks (fabrication + installation), curtain wall 4-8 weeks, aluminum cladding 3-6 weeks. Pergola Dubai installation: standard pergola 1-2 weeks, bioclimatic louvered pergola 2-3 weeks, large custom pergola 3-4 weeks. Royal Track provides detailed project timelines with every quotation.' },
    { q:'Does Royal Track offer motorized pergolas?', a:'Yes, Royal Track installs premium motorized pergolas Dubai — bioclimatic louvers with adjustable blades (0-180 degrees), retractable roof canopies, motorized curtains, integrated LED lighting, rain sensors (auto-close in rain), wind sensors, heating elements, and smart home integration (app control, Alexa, Google Home compatible). Remote control included with every motorized pergola.' },
    { q:'What warranty does Royal Track offer on aluminum work?', a:'Royal Track offers comprehensive aluminum work Dubai warranties: 10-year warranty on aluminum profiles, 5-year warranty on powder coating finish, 2-year warranty on hardware and mechanisms, 10-year warranty on glass (IGU seal), manufacturer warranties on curtain wall systems, and 5-year warranty on pergola Dubai structures and motorized components.' },
    { q:'Can Royal Track do aluminum work for commercial projects?', a:'Yes, Royal Track handles both residential and commercial aluminum work Dubai — villa windows and doors, apartment building curtain walls, office glass partitions, retail shopfronts, restaurant facades, hotel lobby glazing, warehouse aluminum cladding, and industrial aluminum fabrication. Commercial pergola and shade structures also available for restaurants, hotels, schools, and public spaces.' },
    { q:'Does Royal Track handle aluminum permits in Dubai?', a:'Yes, for projects requiring permits (curtain wall modifications, facade cladding, structural glazing), Royal Track handles all Dubai Municipality approvals, community NOCs, and building regulation compliance. Our aluminum work Dubai team ensures all installations meet UAE fire safety codes, wind load requirements, and energy efficiency standards.' },
    { q:'What is a bioclimatic pergola?', a:'A bioclimatic pergola is an advanced shade structure with motorized louvers (blades) in the roof that rotate to control sunlight, ventilation, and rain protection. When open, louvers allow breeze and light. When closed, they form a waterproof roof. Royal Track\'s bioclimatic pergola Dubai installations include rain sensors for automatic closing, integrated guttering, LED lighting, and smartphone app control for year-round outdoor comfort.' },
    { q:'Which areas does Royal Track cover for aluminum and pergola work?', a:'Royal Track provides aluminum work and pergola Dubai services across all communities: Emirates Hills, Palm Jumeirah, Arabian Ranches, Dubai Hills, JVC, JVT, The Valley, Damac Hills, Tilal Al Ghaf, Business Bay, Downtown, Dubai Marina, Al Barsha, Mirdif, and across UAE including Abu Dhabi, Sharjah, Ajman, and Ras Al Khaimah.' },
  ];

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      <style jsx global>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');body{font-family:'Inter',sans-serif}.font-display{font-family:'Playfair Display',serif}.gold-gradient{background:linear-gradient(135deg,#F5D547,#E8B92C,#C9831A);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.curved-box{border-radius:20px;overflow:hidden}.hover-lift{transition:transform .4s ease}.hover-lift:hover{transform:translateY(-8px)}`}</style>
      <SocialIcons />

      {/* HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {imgs.map((img,i)=>(<img key={i} src={img} alt={`Aluminum Work Pergola Dubai ${i+1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${slide===i?'opacity-100':'opacity-0'}`}/>))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent"/>
        <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-12 w-full"><div className="max-w-2xl">
          <div className="inline-block px-3 py-1.5 bg-[#E8B92C]/20 backdrop-blur-sm rounded-full border border-[#E8B92C] mb-5"><span className="text-[#E8B92C] text-[10px] font-bold uppercase tracking-[0.3em]">Aluminum & Pergola</span></div>
          <h1 className="font-display text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 font-bold">Premium <span className="gold-gradient">Aluminum Work</span> & Pergola Dubai</h1>
          <p className="text-white/85 text-sm md:text-base font-light leading-relaxed mb-6 max-w-xl">Expert aluminum fabrication, doors, windows, curtain walls, cladding, railings, pergolas, bioclimatic louvers, shade sails, and carports across Dubai and UAE. 10-year warranty on all aluminum work and pergola installations.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="#inquiry" className="px-5 py-2.5 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-xl transition-all">Get Free Quote →</Link>
            <a href="tel:+97143934374" className="px-5 py-2.5 border-2 border-white text-white hover:bg-white hover:text-stone-900 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all">📞 +971 4 393 4374</a>
          </div>
        </div></div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">{imgs.map((_,i)=>(<button key={i} onClick={()=>setSlide(i)} className={`h-1 rounded-full transition-all ${slide===i?'w-10 bg-[#E8B92C]':'w-5 bg-white/40'}`}/>))}</div>
      </section>

      {/* ABOUT */}
      <section className="py-16 bg-white"><div className="max-w-[1300px] mx-auto px-6 lg:px-12"><div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="curved-box shadow-2xl aspect-[4/5]"><img src="/images/exterior_1.png" alt="Aluminum Work and Pergola Installation Dubai" className="w-full h-full object-cover"/></div>
          <div className="absolute top-6 -left-4 bg-stone-900 text-white px-4 py-3 rounded-xl shadow-2xl border-2 border-[#E8B92C]"><div className="font-display text-2xl font-bold text-[#E8B92C]">10+</div><div className="text-[9px] font-bold uppercase tracking-widest mt-1">Years</div></div>
          <div className="absolute -bottom-8 right-0 w-[50%] hidden md:block"><div className="curved-box shadow-2xl aspect-[4/3] border-4 border-white"><img src="/images/feature_3.png" alt="Pergola Dubai Installation" className="w-full h-full object-cover"/></div></div>
        </div>
        <div className="mt-10 lg:mt-0">
          <div className="inline-flex items-center gap-2 mb-3"><span className="w-2.5 h-2.5 rounded-full bg-[#E8B92C]"/><span className="text-[#C9831A] text-[10px] font-bold uppercase tracking-[0.3em]">Expert Aluminum & Shade Solutions</span></div>
          <h2 className="font-display text-xl md:text-3xl text-stone-900 mb-4 font-bold">Dubai's #1 <span className="gold-gradient">Aluminum Work</span> & Pergola Company</h2>
          <p className="text-stone-600 text-sm leading-relaxed mb-4">Royal Track Building & Contracting LLC is Dubai's leading <strong>aluminum work Dubai</strong> and <strong>pergola Dubai</strong> specialist. We design, fabricate, and install premium aluminum doors, windows, curtain walls, cladding, railings, pergolas, bioclimatic louvers, shade sails, and carports across the UAE.</p>
          <p className="text-stone-600 text-sm leading-relaxed mb-4">Our in-house <strong>aluminum work Dubai</strong> workshop produces precision-engineered products using top European profiles (Schuco, Reynaers, Technal). Combined with our <strong>pergola Dubai</strong> construction expertise, we deliver complete aluminum and shade solutions for villas, commercial buildings, restaurants, hotels, and public spaces.</p>
          <p className="text-stone-600 text-sm leading-relaxed mb-6">Whether you need a single aluminum door replacement or a full curtain wall installation with integrated <strong>pergola Dubai</strong> outdoor living area — Royal Track delivers as part of our <Link href="/turnkeysolutions" className="text-[#C9831A] font-semibold underline">turnkey solutions</Link> or as standalone <strong>aluminum work Dubai</strong> and shade structure projects.</p>
          <div className="grid grid-cols-2 gap-3 mb-6">{['European Profiles','In-House Fabrication','10-Year Warranty','Free Consultation','Motorized Systems','Custom Designs'].map((i,x)=>(<div key={x} className="flex items-center gap-2"><C/><span className="text-stone-700 text-xs font-medium">{i}</span></div>))}</div>
          <Link href="#inquiry" className="px-5 py-2 bg-stone-900 text-white text-sm font-bold uppercase tracking-wider rounded-full hover:bg-[#C9831A] transition-all">Book Free Consultation →</Link>
        </div>
      </div></div></section>

      {/* 2 SERVICE HIGHLIGHTS */}
      <section className="py-16 bg-stone-50"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Our <span className="gold-gradient">2 Core Specialties</span></h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { title:'Aluminum Work Dubai', desc:'Complete aluminum fabrication, doors, windows, curtain walls, cladding, railings, balustrades, shopfronts, and custom aluminum products. Premium European profiles with thermal break technology and 10-year warranty.', img:'/images/feature_1.png', id:'aluminum' },
            { title:'Pergola & Shade Structures Dubai', desc:'Aluminum pergolas, bioclimatic louvered pergolas, retractable awnings, shade sails, carports, and outdoor kitchen covers. Motorized options with rain sensors, smart controls, and integrated lighting.', img:'/images/feature_3.png', id:'pergola' },
          ].map((s)=>(
            <div key={s.id} className="curved-box bg-white border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all hover-lift">
              <div className="aspect-[16/9] overflow-hidden"><img src={s.img} alt={s.title} className="w-full h-full object-cover"/></div>
              <div className="p-6"><h3 className="font-display text-lg md:text-xl mb-3 text-stone-900 font-bold">{s.title}</h3><p className="text-stone-600 text-xs leading-relaxed mb-4">{s.desc}</p>
                <button onClick={()=>{setActiveTab(s.id);document.getElementById('all-services')?.scrollIntoView({behavior:'smooth'})}} className="text-[#C9831A] text-[11px] font-bold uppercase tracking-wider hover:text-stone-900 transition-colors">View {s.title.split(' ')[0]} Services →</button>
              </div>
            </div>
          ))}
        </div>
      </div></section>

      {/* STATS */}
      <section className="py-14 bg-[#E8B92C] text-stone-900"><div className="max-w-[1500px] mx-auto px-6 lg:px-12"><div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">{[{n:'500+',l:'Aluminum & Pergola Projects'},{n:'10+',l:'Years Experience'},{n:'50+',l:'Expert Fabricators'},{n:'4.9★',l:'Customer Rating'}].map((s,i)=>(<div key={i}><div className="font-display text-3xl md:text-5xl font-bold mb-2">{s.n}</div><div className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{s.l}</div></div>))}</div></div></section>

      {/* TABBED SERVICES */}
      <section id="all-services" className="py-16 bg-white"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-8"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Our <span className="gold-gradient">{tabLabel}</span> Services</h2></div>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[{id:'aluminum',label:'Aluminum Work'},{id:'pergola',label:'Pergola & Shade Structures'}].map(tab=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)} className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-display font-semibold transition-all ${activeTab===tab.id?'bg-[#C9831A] text-white shadow-lg':'text-stone-600 hover:text-[#C9831A] hover:bg-stone-100 border border-stone-200'}`}>{tab.label}</button>
          ))}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentServices.map((s,i)=>(
            <article key={`${activeTab}-${i}`} className="group curved-box bg-stone-50 border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all hover-lift">
              <div className="aspect-[4/3] overflow-hidden"><img src={imgs[i%4]} alt={`${s.t} - Royal Track`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/></div>
              <div className="p-6"><h3 className="font-display text-base md:text-lg mb-2 text-stone-900 group-hover:text-[#C9831A] font-bold">{s.t}</h3><p className="text-stone-600 text-xs leading-relaxed mb-4">{s.d}</p>
                <div className="space-y-1.5 mb-4">{s.f.map((f,j)=>(<div key={j} className="flex items-center gap-2 text-[11px] text-stone-600"><C/>{f}</div>))}</div>
                <Link href="#inquiry" className="text-[#C9831A] text-[11px] font-bold uppercase tracking-wider">Get Free Quote →</Link>
              </div>
            </article>
          ))}
        </div>
      </div></section>

      {/* WHY CHOOSE US */}
      <section className="py-16 bg-stone-50"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Why Choose Royal Track for <span className="gold-gradient">Aluminum & Pergola</span></h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{[
          {t:'European Profiles',d:'Schuco, Reynaers, Technal — only premium European aluminum profiles for doors, windows, and curtain walls. Superior thermal performance and longevity.'},
          {t:'In-House Fabrication',d:'Our own aluminum work Dubai workshop with CNC cutting, welding, and powder coating. Faster turnaround, tighter quality control, and custom fabrication capability.'},
          {t:'Motorized Systems',d:'Advanced motorized pergolas, bioclimatic louvers, and retractable awnings with rain sensors, wind sensors, app control, and smart home integration.'},
          {t:'10-Year Warranty',d:'Comprehensive warranty on aluminum profiles, powder coating, pergola structures, and motorized components. Licensed and insured aluminum work Dubai contractor.'},
          {t:'Free 3D Design',d:'Complimentary 3D visualization for pergola Dubai projects and curtain wall designs. See exactly what your installation will look like before production begins.'},
          {t:'Custom RAL Colors',d:'Any RAL color powder coating for aluminum work Dubai and pergola Dubai products. Match your villa exterior, brand colors, or architectural theme perfectly.'},
          {t:'Dubai Municipality Approved',d:'All aluminum work Dubai and pergola installations comply with UAE building codes, fire safety regulations, wind load requirements, and energy efficiency standards.'},
          {t:'Part of Turnkey Package',d:'Aluminum work and pergola available as standalone services or integrated into our complete turnkey solutions — interior, exterior, pool, and landscape.'},
        ].map((i,x)=>(<div key={x} className="curved-box bg-white border border-stone-200 p-6 hover:border-[#E8B92C] hover:shadow-lg transition-all"><h3 className="font-display text-base mb-2 text-stone-900 font-bold">{i.t}</h3><p className="text-stone-600 text-xs leading-relaxed">{i.d}</p></div>))}</div>
      </div></section>

      {/* INTERLINKS */}
      <section className="py-16 bg-white"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Explore <span className="gold-gradient">Related Services</span></h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title:'Interior Renovation Dubai', desc:'Premium interior fit-out, kitchen, bathroom, bedroom, and living room renovation services.', href:'/interior-renovation', img:'/images/feature_1.png' },
            { title:'Exterior, Pool & Landscape', desc:'Villa facade, swimming pool construction, garden design, hardscaping, and outdoor living.', href:'/outdoor-services', img:'/images/feature_2.webp' },
            { title:'Turnkey Solutions Dubai', desc:'Complete design-to-handover construction, renovation, and fit-out under one contract.', href:'/turnkeysolutions', img:'/images/feature_3.png' },
          ].map((s)=>(
            <Link key={s.title} href={s.href} className="group curved-box bg-stone-50 border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all hover-lift">
              <div className="aspect-[4/3] overflow-hidden"><img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/></div>
              <div className="p-6"><h3 className="font-display text-lg mb-2 text-stone-900 group-hover:text-[#C9831A] font-bold">{s.title}</h3><p className="text-stone-600 text-xs leading-relaxed">{s.desc}</p><span className="mt-3 inline-block text-[#C9831A] text-[11px] font-bold uppercase tracking-wider">Explore →</span></div>
            </Link>
          ))}
        </div>
      </div></section>

      {/* AREAS */}
      <section className="py-16 bg-stone-50"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-10"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold"><span className="gold-gradient">Aluminum & Pergola</span> Across Dubai & UAE</h2></div>
        <div className="flex flex-wrap justify-center gap-2">{['Downtown Dubai','Dubai Marina','Palm Jumeirah','Emirates Hills','Dubai Hills','Arabian Ranches','JVC','JVT','Business Bay','Al Barsha','Mirdif','The Springs','The Meadows','Damac Hills','Tilal Al Ghaf','Town Square','Mudon','The Valley','Jumeirah Golf Estates','Abu Dhabi','Sharjah','Ajman','Ras Al Khaimah'].map((a,i)=>(<span key={i} className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-[11px] font-medium text-stone-700 hover:border-[#E8B92C] hover:text-[#C9831A] transition-all cursor-pointer">{a}</span>))}</div>
      </div></section>

      {/* FAQ */}
      <section className="py-16 bg-white"><div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Aluminum & Pergola Dubai <span className="gold-gradient">FAQs</span></h2><p className="text-stone-600 text-sm mt-2">Everything about aluminum work and pergola installation in Dubai.</p></div>
        <div className="space-y-3">{faqs.map((f,i)=>(<div key={i} className="bg-stone-50 border border-stone-200 hover:border-[#E8B92C] curved-box transition-all"><button onClick={()=>setFaq(faq===i?-1:i)} className="w-full px-5 py-4 flex items-center justify-between text-left"><h3 className="font-display text-sm md:text-base text-stone-900 font-bold pr-3">{f.q}</h3><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9831A" strokeWidth="2.5" className={`flex-shrink-0 transition-transform ${faq===i?'rotate-180':''}`}><path d="M6 9l6 6 6-6"/></svg></button>{faq===i&&<div className="px-5 pb-5 text-stone-600 text-xs leading-relaxed border-t border-stone-100 pt-4">{f.a}</div>}</div>))}</div>
      </div></section>

      <div id="inquiry"><InquiryForm/></div>

      <a href="https://wa.me/971552824492" target="_blank" rel="noopener noreferrer" className="fixed left-5 bottom-5 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"><svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg></a>
      <a href="tel:+97143934374" className="fixed right-5 bottom-5 z-50 w-14 h-14 bg-[#E8B92C] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z"/></svg></a>
    </div>
  );
}
