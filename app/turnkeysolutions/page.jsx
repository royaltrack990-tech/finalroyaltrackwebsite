'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import InquiryForm from '../components/InquiryForm';
import SocialIcons from '../components/SocialIcons';

const C = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8B92C" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>;

export default function TurnkeySolutionsPage() {
  const [slide, setSlide] = useState(0);
  const [faq, setFaq] = useState(0);
  const [processStep, setProcessStep] = useState(0);
  const imgs = ['/images/feature_3.png','/images/feature_1.png','/images/exterior_1.png','/images/feature_2.webp'];
  useEffect(() => { const t=setInterval(()=>setSlide(p=>(p+1)%imgs.length),5000); return ()=>clearInterval(t); }, []);

  const services = [
    { t:'Turnkey Villa Construction Dubai', d:'Complete turnkey villa construction Dubai — from architectural design and 3D visualization to civil works, MEP installation, interior fit-out, exterior finishing, pool construction, and landscaping. Royal Track delivers fully finished, move-in-ready villas across Emirates Hills, Palm Jumeirah, Arabian Ranches, Dubai Hills, and every premium Dubai community. Our turnkey solutions Dubai eliminate the hassle of coordinating multiple contractors.', f:['Architectural Design','Civil & Structural Works','MEP Installation','Complete Finishing'] },
    { t:'Turnkey Interior Fit-Out Dubai', d:'Premium turnkey interior fit-out Dubai — design consultation, space planning, 3D rendering, demolition, construction, flooring, wall finishes, ceiling design, custom joinery, kitchen and bathroom renovation, lighting, painting, and furniture procurement. One contract covers your entire interior renovation Dubai project from first sketch to final walkthrough.', f:['Design & 3D Rendering','Custom Joinery','Kitchen & Bathroom','Furniture Procurement'], link:'/interior-renovation' },
    { t:'Turnkey Exterior Renovation Dubai', d:'Complete turnkey exterior renovation Dubai — facade design, cladding installation, exterior painting, waterproofing, pergola construction, boundary walls, fencing, gate automation, outdoor kitchen, driveway paving, and exterior lighting. Royal Track\'s turnkey solutions Dubai cover every exterior element under one managed project.', f:['Facade & Cladding','Waterproofing','Pergola & Shade','Driveways & Gates'], link:'/outdoor-services' },
    { t:'Turnkey Pool & Landscape Dubai', d:'Complete turnkey pool and landscape Dubai — swimming pool design and construction, pool equipment, waterproofing, tiling, garden design, hardscaping, softscaping, irrigation systems, outdoor lighting, water features, and ongoing maintenance. Integrated turnkey solutions Dubai for your complete outdoor paradise.', f:['Pool Design & Build','Garden & Hardscape','Irrigation Systems','Outdoor Lighting'], link:'/outdoor-services' },
    { t:'Turnkey Commercial Fit-Out Dubai', d:'Professional turnkey commercial fit-out Dubai — office design, retail showroom fit-out, restaurant interior, clinic and medical center construction, warehouse conversion, and hospitality renovation. Royal Track\'s turnkey solutions Dubai deliver fully operational commercial spaces ready for business from day one.', f:['Office Fit-Out','Retail & Showroom','Restaurant & F&B','Medical & Clinic'] },
    { t:'Turnkey Apartment Renovation Dubai', d:'Complete turnkey apartment renovation Dubai — space optimization, modern layouts, premium materials, kitchen upgrade, bathroom renovation, flooring, painting, lighting, smart home integration, and furniture. Turnkey solutions Dubai designed for apartments in Downtown, Marina, JBR, Business Bay, and beyond.', f:['Space Optimization','Modern Layouts','Smart Home','Premium Materials'], link:'/interior-renovation' },
    { t:'MEP Works Dubai', d:'Complete MEP (Mechanical, Electrical, Plumbing) works Dubai — HVAC installation, electrical wiring, plumbing systems, fire safety, low-voltage systems, smart home automation, and energy-efficient solutions. Essential turnkey solutions Dubai infrastructure for every residential and commercial project.', f:['HVAC & Air Conditioning','Electrical Systems','Plumbing & Drainage','Fire Safety'] },
    { t:'Project Management Dubai', d:'Professional construction project management Dubai — planning, scheduling, budgeting, procurement, quality control, safety management, contractor coordination, and progress reporting. Royal Track\'s turnkey solutions Dubai include dedicated project managers who keep your build on time and on budget.', f:['Planning & Scheduling','Budget Management','Quality Control','Progress Reports'] },
    { t:'Design & 3D Visualization Dubai', d:'Professional architectural and interior design Dubai — concept development, mood boards, material selection, 3D photorealistic rendering, virtual walkthroughs, and detailed construction drawings. See your turnkey solutions Dubai project before a single brick is laid. Iterate and perfect your vision with our in-house design team.', f:['3D Photorealistic Renders','Virtual Walkthroughs','Material Selection','Construction Drawings'] },
  ];

  const processSteps = [
    { num:'01', title:'Free Consultation', desc:'We meet at your property to understand your vision, requirements, timeline, and budget. Our turnkey solutions Dubai team conducts a thorough site assessment, takes measurements, and discusses design preferences. You walk away with a clear understanding of what\'s possible and a preliminary scope of work.', duration:'1-2 Days' },
    { num:'02', title:'Design & 3D Visualization', desc:'Our in-house architects and designers create detailed concepts, 3D photorealistic renders, and virtual walkthroughs of your turnkey project. You see exactly what your finished space will look like before construction begins — and can request unlimited revisions until you\'re 100% satisfied with the design.', duration:'1-3 Weeks' },
    { num:'03', title:'Detailed Quotation', desc:'We provide a comprehensive, itemized quotation covering every element of your turnkey solutions Dubai project — materials, labor, equipment, permits, and timeline. No hidden costs, no surprises. Every line item is transparent and explained. Payment milestones are tied to project progress.', duration:'3-5 Days' },
    { num:'04', title:'Permits & Approvals', desc:'Royal Track handles all permits, NOCs, and regulatory approvals — Dubai Municipality, DEWA connections, community management (Emaar, Nakheel, Meraas), civil defense, and any special approvals. You don\'t have to visit a single government office. Our turnkey solutions Dubai include full permit management.', duration:'1-3 Weeks' },
    { num:'05', title:'Expert Construction', desc:'Our 50+ in-house craftsmen execute your turnkey project with precision — civil works, MEP, finishing, fit-out, and installation. Daily quality inspections, weekly progress reports, and a dedicated project manager keep everything on track. Premium materials only, zero subcontracting on critical work.', duration:'6-20 Weeks' },
    { num:'06', title:'Quality Check & Handover', desc:'Comprehensive snag inspection, final walkthrough with you, and deficiency-free handover. You receive complete documentation — warranties, maintenance guides, equipment manuals, as-built drawings, and our 10-year workmanship warranty card. Your turnkey solutions Dubai project is complete and ready to enjoy.', duration:'3-5 Days' },
  ];

  const faqs = [
    { q:'What is turnkey construction in Dubai?', a:'Turnkey construction in Dubai means a single contractor handles absolutely everything — initial design, 3D visualization, permits and approvals, demolition, civil works, MEP (mechanical, electrical, plumbing), interior fit-out, exterior renovation, pool construction, landscaping, furniture procurement, and final handover. Royal Track\'s turnkey solutions Dubai give you one contract, one team, one project manager, and one point of accountability from concept to keys.' },
    { q:'How much do turnkey solutions cost in Dubai?', a:'Turnkey solutions cost in Dubai depends on scope and property type: studio/1BR apartment turnkey AED 80,000-150,000, 2-3BR apartment AED 150,000-400,000, villa interior-only turnkey AED 200,000-800,000, complete villa turnkey (interior + exterior + pool + landscape) AED 500,000-1,500,000+, commercial turnkey AED 300,000-2,000,000+. Royal Track provides free, transparent, itemized turnkey quotations after site assessment.' },
    { q:'How long does a turnkey project take in Dubai?', a:'Turnkey project timelines in Dubai: apartment renovation 6-10 weeks, villa interior fit-out 8-14 weeks, villa interior + exterior 12-18 weeks, complete villa with pool and landscape 16-24 weeks, commercial fit-out 10-20 weeks. Royal Track provides detailed milestone-tracked schedules and maintains a 95% on-time completion rate.' },
    { q:'Does Royal Track handle permits for turnkey projects?', a:'Yes, Royal Track handles all permits and approvals for turnkey projects — Dubai Municipality building permits, DEWA connections, community NOC (Emaar, Nakheel, Meraas, Dubai Properties, etc.), civil defense approvals, drainage permits, and any special regulatory requirements. Full compliance with Dubai building codes guaranteed.' },
    { q:'What is included in Royal Track turnkey solutions?', a:'Royal Track turnkey solutions Dubai include: free consultation, design & 3D visualization, permits & approvals, demolition & site preparation, civil & structural works, MEP installation, interior fit-out (flooring, walls, ceilings, joinery, kitchen, bathroom), exterior renovation (facade, cladding, painting, waterproofing), pool construction, landscaping, furniture procurement, and deficiency-free handover with 10-year warranty.' },
    { q:'Why choose turnkey over hiring separate contractors?', a:'Turnkey advantages: one single point of accountability, no coordination headaches between multiple contractors, consistent quality control, integrated design and construction, faster completion (no gaps between trades), transparent single-contract pricing, one warranty covering everything. Royal Track\'s turnkey solutions Dubai typically save clients 15-25% compared to managing separate contractors.' },
    { q:'Does Royal Track offer turnkey solutions for commercial projects?', a:'Yes, Royal Track provides turnkey commercial fit-out Dubai for offices, retail showrooms, restaurants, cafes, clinics, medical centers, salons, gyms, warehouses, and hospitality projects. Complete design-to-handover commercial turnkey solutions including branding, signage, and specialized equipment installation.' },
    { q:'What warranty does Royal Track offer on turnkey projects?', a:'Royal Track offers comprehensive turnkey warranties: 10-year workmanship warranty on all construction and fit-out, 10-year structural warranty on pool construction, 5-year waterproofing warranty, 2-year MEP equipment warranty, manufacturer warranties on all materials and finishes. We are fully licensed and insured in Dubai.' },
    { q:'Can I customize my turnkey project?', a:'Absolutely. Every Royal Track turnkey project is fully customized — design, materials, finishes, layouts, fixtures, and furniture are selected based on your preferences and budget. Unlimited design revisions during the planning phase. We also offer value engineering options to optimize cost without compromising quality.' },
    { q:'Which areas does Royal Track cover for turnkey projects?', a:'Royal Track provides turnkey solutions across all Dubai communities: Downtown, Marina, Palm Jumeirah, Emirates Hills, Dubai Hills, Arabian Ranches, JVC, JVT, Business Bay, Al Barsha, Mirdif, The Springs, Meadows, Damac Hills, Tilal Al Ghaf, The Valley, and across UAE including Abu Dhabi, Sharjah, Ajman, and Ras Al Khaimah.' },
  ];

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      <style jsx global>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');body{font-family:'Inter',sans-serif}.font-display{font-family:'Playfair Display',serif}.gold-gradient{background:linear-gradient(135deg,#F5D547,#E8B92C,#C9831A);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.curved-box{border-radius:20px;overflow:hidden}.hover-lift{transition:transform .4s ease}.hover-lift:hover{transform:translateY(-8px)}`}</style>
      <SocialIcons />

      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {imgs.map((img,i)=>(<img key={i} src={img} alt={`Turnkey Solutions Dubai - Royal Track Construction ${i+1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${slide===i?'opacity-100':'opacity-0'}`}/>))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent"/>
        <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-12 w-full"><div className="max-w-2xl">
          <div className="inline-block px-3 py-1.5 bg-[#E8B92C]/20 backdrop-blur-sm rounded-full border border-[#E8B92C] mb-5"><span className="text-[#E8B92C] text-[10px] font-bold uppercase tracking-[0.3em]">Turnkey Solutions</span></div>
          <h1 className="font-display text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 font-bold">Complete <span className="gold-gradient">Turnkey Solutions</span> Dubai</h1>
          <p className="text-white/85 text-sm md:text-base font-light leading-relaxed mb-6 max-w-xl">One contract. One team. Complete construction — from design and permits to fit-out, finishing, and handover. Royal Track delivers end-to-end turnkey construction, renovation, and fit-out solutions across Dubai and the UAE.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="#inquiry" className="px-5 py-2.5 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-xl transition-all">Get Free Quote →</Link>
            <a href="tel:+97143934374" className="px-5 py-2.5 border-2 border-white text-white hover:bg-white hover:text-stone-900 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all">📞 +971 4 393 4374</a>
          </div>
        </div></div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">{imgs.map((_,i)=>(<button key={i} onClick={()=>setSlide(i)} className={`h-1 rounded-full transition-all ${slide===i?'w-10 bg-[#E8B92C]':'w-5 bg-white/40'}`}/>))}</div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-16 bg-white"><div className="max-w-[1300px] mx-auto px-6 lg:px-12"><div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative">
          <div className="curved-box shadow-2xl aspect-[4/5]"><img src="/images/feature_3.png" alt="Turnkey Solutions Dubai - Royal Track Complete Construction" className="w-full h-full object-cover"/></div>
          <div className="absolute top-6 -left-4 bg-stone-900 text-white px-4 py-3 rounded-xl shadow-2xl border-2 border-[#E8B92C]"><div className="font-display text-2xl font-bold text-[#E8B92C]">10+</div><div className="text-[9px] font-bold uppercase tracking-widest mt-1">Years</div></div>
          <div className="absolute -bottom-8 right-0 w-[50%] hidden md:block"><div className="curved-box shadow-2xl aspect-[4/3] border-4 border-white"><img src="/images/feature_1.png" alt="Turnkey Interior Fit-Out Dubai" className="w-full h-full object-cover"/></div></div>
        </div>
        <div className="mt-10 lg:mt-0">
          <div className="inline-flex items-center gap-2 mb-3"><span className="w-2.5 h-2.5 rounded-full bg-[#E8B92C]"/><span className="text-[#C9831A] text-[10px] font-bold uppercase tracking-[0.3em]">Why Turnkey</span></div>
          <h2 className="font-display text-xl md:text-3xl text-stone-900 mb-4 font-bold">Dubai's #1 <span className="gold-gradient">Turnkey Construction</span> Company</h2>
          <p className="text-stone-600 text-sm leading-relaxed mb-4">Royal Track Building & Contracting LLC is Dubai's most trusted <strong>turnkey solutions Dubai</strong> provider. We handle every aspect of your construction, renovation, or fit-out project under one contract — <Link href="/interior-renovation" className="text-[#C9831A] font-semibold underline">interior fit-out</Link>, <Link href="/outdoor-services" className="text-[#C9831A] font-semibold underline">exterior renovation, pool construction, and landscaping</Link> — so you deal with one team, one timeline, and one point of accountability.</p>
          <p className="text-stone-600 text-sm leading-relaxed mb-4">Why choose <strong>turnkey solutions Dubai</strong> over managing separate contractors? Simple: you save 15-25% on costs, avoid coordination nightmares between trades, get consistent quality control, and receive one warranty covering everything. Royal Track's turnkey approach means your project finishes faster with fewer surprises.</p>
          <p className="text-stone-600 text-sm leading-relaxed mb-6">From a single-room apartment renovation to a complete luxury villa build — including design, permits, construction, MEP, fit-out, pool, landscape, and furniture — Royal Track's <strong>turnkey solutions Dubai</strong> deliver move-in-ready spaces on time and on budget.</p>
          <div className="grid grid-cols-2 gap-3 mb-6">{['One Contract, One Team','Design-to-Handover','10-Year Warranty','Free Consultation','Zero Hidden Costs','95% On-Time Rate'].map((i,x)=>(<div key={x} className="flex items-center gap-2"><C/><span className="text-stone-700 text-xs font-medium">{i}</span></div>))}</div>
          <Link href="#inquiry" className="px-5 py-2 bg-stone-900 text-white text-sm font-bold uppercase tracking-wider rounded-full hover:bg-[#C9831A] transition-all">Book Free Consultation →</Link>
        </div>
      </div></div></section>

      {/* ===== WHAT'S INCLUDED ===== */}
      <section className="py-16 bg-stone-900 text-white"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12"><h2 className="font-display text-xl md:text-3xl font-bold">What's Included in <span className="gold-gradient">Turnkey Solutions Dubai</span></h2><p className="text-white/60 text-sm mt-2 max-w-2xl mx-auto">Everything from first sketch to final key — under one contract.</p></div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {[
            {icon:'🎨',t:'Design & 3D'},
            {icon:'📋',t:'Permits & NOC'},
            {icon:'🏗️',t:'Construction'},
            {icon:'⚡',t:'MEP Works'},
            {icon:'🏠',t:'Interior Fit-Out'},
            {icon:'🏊',t:'Pool & Landscape'},
          ].map((i,x)=>(
            <div key={x} className="bg-white/5 border border-white/10 rounded-xl p-5 text-center hover:border-[#E8B92C] transition-all">
              <div className="text-3xl mb-3">{i.icon}</div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#E8B92C]">{i.t}</div>
            </div>
          ))}
        </div>
      </div></section>

      {/* ===== SERVICES GRID ===== */}
      <section id="services" className="py-16 bg-stone-50"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Our <span className="gold-gradient">Turnkey Solutions Dubai</span> Services</h2><p className="text-stone-600 text-sm mt-2 max-w-2xl mx-auto">Complete turnkey construction, fit-out, and renovation services for residential and commercial properties across Dubai.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">{services.map((s,i)=>(
          <article key={i} className="group curved-box bg-white border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all hover-lift">
            <div className="aspect-[4/3] overflow-hidden"><img src={imgs[i%4]} alt={`${s.t} - Royal Track Turnkey Solutions Dubai`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/></div>
            <div className="p-6">
              <h3 className="font-display text-base md:text-lg mb-2 text-stone-900 group-hover:text-[#C9831A] font-bold">{s.t}</h3>
              <p className="text-stone-600 text-xs leading-relaxed mb-4">{s.d}</p>
              <div className="space-y-1.5 mb-4">{s.f.map((f,j)=>(<div key={j} className="flex items-center gap-2 text-[11px] text-stone-600"><C/>{f}</div>))}</div>
              <div className="flex items-center gap-3">
                <Link href="#inquiry" className="text-[#C9831A] text-[11px] font-bold uppercase tracking-wider">Get Quote →</Link>
                {s.link && <Link href={s.link} className="text-stone-400 text-[11px] font-bold uppercase tracking-wider hover:text-[#C9831A]">Learn More →</Link>}
              </div>
            </div>
          </article>
        ))}</div>
      </div></section>

      {/* ===== OUR PROCESS ===== */}
      <section className="py-16 bg-white"><div className="max-w-[1300px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Our 6-Step <span className="gold-gradient">Turnkey Process</span></h2><p className="text-stone-600 text-sm mt-2 max-w-2xl mx-auto">From first meeting to final handover — here's exactly how your turnkey solutions Dubai project unfolds.</p></div>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Step selector */}
          <div className="lg:col-span-4 space-y-2">
            {processSteps.map((step,i)=>(
              <button key={i} onClick={()=>setProcessStep(i)} className={`w-full text-left px-5 py-4 rounded-xl transition-all flex items-center gap-4 ${processStep===i?'bg-[#E8B92C] text-stone-900 shadow-lg':'bg-stone-50 text-stone-700 hover:bg-stone-100 border border-stone-200'}`}>
                <span className={`font-display text-2xl font-bold ${processStep===i?'text-stone-900':'text-[#E8B92C]'}`}>{step.num}</span>
                <div><div className="font-display font-bold text-sm">{step.title}</div><div className={`text-[10px] mt-0.5 ${processStep===i?'text-stone-700':'text-stone-400'}`}>{step.duration}</div></div>
              </button>
            ))}
          </div>
          {/* Step detail */}
          <div className="lg:col-span-8">
            <div className="curved-box bg-stone-50 border border-stone-200 p-8 md:p-10">
              <div className="flex items-center gap-4 mb-5">
                <span className="font-display text-5xl font-bold text-[#E8B92C]">{processSteps[processStep].num}</span>
                <div>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-stone-900">{processSteps[processStep].title}</h3>
                  <span className="text-[10px] text-[#C9831A] font-bold uppercase tracking-wider">Duration: {processSteps[processStep].duration}</span>
                </div>
              </div>
              <p className="text-stone-600 text-sm leading-relaxed">{processSteps[processStep].desc}</p>
            </div>
            <div className="curved-box overflow-hidden shadow-xl mt-6 aspect-[16/9]">
              <img src={imgs[processStep % 4]} alt={`${processSteps[processStep].title} - Turnkey Solutions Dubai Process`} className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div></section>

      {/* ===== STATS ===== */}
      <section className="py-14 bg-[#E8B92C] text-stone-900"><div className="max-w-[1500px] mx-auto px-6 lg:px-12"><div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">{[{n:'500+',l:'Turnkey Projects'},{n:'10+',l:'Years Experience'},{n:'50+',l:'Expert Team'},{n:'95%',l:'On-Time Delivery'}].map((s,i)=>(<div key={i}><div className="font-display text-3xl md:text-5xl font-bold mb-2">{s.n}</div><div className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{s.l}</div></div>))}</div></div></section>

      {/* ===== WHY TURNKEY ===== */}
      <section className="py-16 bg-stone-50"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Why Choose <span className="gold-gradient">Turnkey Solutions Dubai</span></h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">{[
          {t:'Save 15-25% on Costs',d:'Turnkey solutions Dubai eliminate markup between multiple contractors. One contract means better material procurement, no coordination waste, and volume pricing. Royal Track passes these savings directly to you.'},
          {t:'Single Point of Accountability',d:'No more chasing separate contractors for interior, exterior, MEP, and landscaping. One project manager, one WhatsApp group, one weekly report. Royal Track\'s turnkey solutions Dubai mean one call solves everything.'},
          {t:'Faster Completion',d:'Integrated planning means trades work in parallel, not sequence. Your interior fit-out starts while exterior work continues. Turnkey solutions Dubai from Royal Track typically finish 20-30% faster than multi-contractor projects.'},
          {t:'Consistent Quality',d:'One quality standard across all trades — same Royal Track team doing your interior, exterior, pool, and landscape. No quality gaps between different contractors. Every element meets the same premium standard.'},
          {t:'One Comprehensive Warranty',d:'A single 10-year warranty covering everything — interior, exterior, pool, landscape, and MEP. No finger-pointing between contractors. One warranty, one company, one guarantee.'},
          {t:'Zero Coordination Headaches',d:'Royal Track handles all scheduling, material procurement, permits, inspections, and trade coordination. You make design decisions and approve milestones. We handle everything else. That\'s the turnkey solutions Dubai promise.'},
        ].map((i,x)=>(<div key={x} className="curved-box bg-white border border-stone-200 p-8 hover:border-[#E8B92C] hover:shadow-lg transition-all"><h3 className="font-display text-lg mb-3 text-stone-900 font-bold">{i.t}</h3><p className="text-stone-600 text-sm leading-relaxed">{i.d}</p></div>))}</div>
      </div></section>

      {/* ===== INTERLINK TO OTHER SERVICES ===== */}
      <section className="py-16 bg-white"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Explore Our <span className="gold-gradient">Specialized Services</span></h2><p className="text-stone-600 text-sm mt-2">Each of these is included in our turnkey solutions — or available as standalone services.</p></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title:'Interior Renovation Dubai', desc:'Premium interior fit-out, kitchen renovation, bathroom renovation, bedroom design, living room makeover, and custom joinery.', href:'/interior-renovation', img:'/images/feature_1.png' },
            { title:'Exterior, Pool & Landscape Dubai', desc:'Villa facade, cladding, swimming pools, garden design, hardscaping, irrigation, and outdoor living solutions.', href:'/outdoor-services', img:'/images/feature_2.webp' },
            { title:'All Services', desc:'View our complete range of 18+ construction, renovation, and maintenance services across Dubai.', href:'/services', img:'/images/feature_3.png' },
          ].map((s)=>(
            <Link key={s.title} href={s.href} className="group curved-box bg-stone-50 border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all hover-lift">
              <div className="aspect-[4/3] overflow-hidden"><img src={s.img} alt={s.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/></div>
              <div className="p-6"><h3 className="font-display text-lg mb-2 text-stone-900 group-hover:text-[#C9831A] font-bold">{s.title}</h3><p className="text-stone-600 text-xs leading-relaxed">{s.desc}</p><span className="mt-3 inline-block text-[#C9831A] text-[11px] font-bold uppercase tracking-wider">Explore →</span></div>
            </Link>
          ))}
        </div>
      </div></section>

      {/* ===== AREAS ===== */}
      <section className="py-16 bg-stone-50"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-10"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold"><span className="gold-gradient">Turnkey Solutions</span> Across Dubai & UAE</h2></div>
        <div className="flex flex-wrap justify-center gap-2">{['Downtown Dubai','Dubai Marina','Palm Jumeirah','Emirates Hills','Dubai Hills','Arabian Ranches','JVC','JVT','Business Bay','Al Barsha','Mirdif','The Springs','The Meadows','Damac Hills','Tilal Al Ghaf','Town Square','Mudon','The Valley','Jumeirah Golf Estates','The Lakes','Discovery Gardens','Dubai Silicon Oasis','Abu Dhabi','Sharjah','Ajman','Ras Al Khaimah'].map((a,i)=>(<span key={i} className="px-3 py-1.5 bg-white border border-stone-200 rounded-full text-[11px] font-medium text-stone-700 hover:border-[#E8B92C] hover:text-[#C9831A] transition-all cursor-pointer">{a}</span>))}</div>
      </div></section>

      {/* ===== FAQ ===== */}
      <section className="py-16 bg-white"><div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Turnkey Solutions Dubai <span className="gold-gradient">FAQs</span></h2><p className="text-stone-600 text-sm mt-2">Everything about turnkey construction, fit-out, and renovation in Dubai.</p></div>
        <div className="space-y-3">{faqs.map((f,i)=>(<div key={i} className="bg-stone-50 border border-stone-200 hover:border-[#E8B92C] curved-box transition-all"><button onClick={()=>setFaq(faq===i?-1:i)} className="w-full px-5 py-4 flex items-center justify-between text-left"><h3 className="font-display text-sm md:text-base text-stone-900 font-bold pr-3">{f.q}</h3><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9831A" strokeWidth="2.5" className={`flex-shrink-0 transition-transform ${faq===i?'rotate-180':''}`}><path d="M6 9l6 6 6-6"/></svg></button>{faq===i&&<div className="px-5 pb-5 text-stone-600 text-xs leading-relaxed border-t border-stone-100 pt-4">{f.a}</div>}</div>))}</div>
      </div></section>

      {/* FORM */}
      <div id="inquiry"><InquiryForm/></div>

      {/* FLOATING */}
      <a href="https://wa.me/971552824492" target="_blank" rel="noopener noreferrer" className="fixed left-5 bottom-5 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"><svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg></a>
      <a href="tel:+97143934374" className="fixed right-5 bottom-5 z-50 w-14 h-14 bg-[#E8B92C] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z"/></svg></a>
    </div>
  );
}
