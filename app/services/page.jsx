'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import InquiryForm from '../components/InquiryForm';
import SocialIcons from '../components/SocialIcons';

const C = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8B92C" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>;

const services = [
  { id:'electrical-works', title:'Electrical Works Dubai', tag:'Complete Electrical Solutions', img:'/images/feature_1.png', desc:'Royal Track provides comprehensive electrical works Dubai services for residential, commercial, and industrial properties. Our licensed electricians handle complete electrical installation, wiring, DB panel upgrades, circuit breaker installation, lighting design, smart home automation, ELV systems, CCTV, access control, intercom systems, and emergency repairs. Every electrical works Dubai project complies with DEWA regulations and UAE electrical codes.', pts:['Complete Wiring & Rewiring','DB Panel Installation','Smart Home Automation','CCTV & Security Systems','Indoor & Outdoor Lighting','DEWA Compliance','Emergency Repairs','ELV & Data Cabling'] },
  { id:'ac-ducting', title:'AC & Ducting Dubai', tag:'HVAC & Climate Control', img:'/images/feature_3.png', desc:'Professional AC and ducting Dubai services — split AC installation, central AC systems, VRF/VRV systems, duct fabrication, duct cleaning, AC maintenance, chiller systems, and complete HVAC design. Our AC ducting Dubai experts ensure optimal cooling, energy efficiency, and indoor air quality. We work with Daikin, Carrier, Trane, Mitsubishi, and all major brands across Dubai villas, apartments, and commercial spaces.', pts:['Split & Central AC','VRF/VRV Systems','Duct Fabrication','AC Maintenance & Repair','Duct Cleaning','Chiller Systems','Energy-Efficient Solutions','All Major Brands'] },
  { id:'fencing-gates', title:'Fencing & Gates Dubai', tag:'Security & Privacy Solutions', img:'/images/exterior_1.png', desc:'Custom fencing and gates Dubai — boundary fencing, privacy screens, decorative fencing, pool fencing, automated sliding gates, swing gates, barrier gates, bollards, and access control. Premium aluminum, steel, wrought iron, WPC, and glass panel materials. All fencing gates Dubai installations meet Dubai Municipality safety codes and community guidelines with 10-year warranty.', pts:['Aluminum & Steel Fencing','Automated Sliding Gates','Swing & Barrier Gates','Pool Safety Fencing','Privacy Screens & WPC','Access Control Systems','Decorative Wrought Iron','Remote & App Control'] },
  { id:'waterproofing', title:'Waterproofing Dubai', tag:'Complete Water Protection', img:'/images/exterior_2.png', desc:'Expert waterproofing Dubai — roof waterproofing, basement waterproofing, bathroom waterproofing, pool waterproofing, terrace waterproofing, wall damp treatment, foundation protection, and water tank lining. Premium systems including crystalline (Xypex, Penetron), bituminous membranes, PVC/TPO membranes, polyurethane coatings, and cementitious waterproofing. Every waterproofing Dubai project comes with certified warranty up to 10 years.', pts:['Roof & Terrace','Basement & Foundation','Bathroom & Wet Areas','Pool Waterproofing','Crystalline Systems','Membrane Systems','Injection Grouting','10-Year Warranty'] },
  { id:'flooring-tiling', title:'Flooring & Tiling Dubai', tag:'Premium Floor Solutions', img:'/images/feature_1.png', desc:'Premium flooring and tiling Dubai — marble, porcelain tiles, ceramic tiles, natural stone, hardwood, engineered wood, vinyl LVT/SPC, epoxy flooring, terrazzo, and outdoor paving. Our flooring tiling Dubai specialists handle leveling, waterproof underlayment, underfloor heating, grout sealing, and precision cutting. Materials sourced from Italy, Spain, India, and Turkey for the finest selection.', pts:['Marble & Natural Stone','Porcelain & Ceramic','Hardwood & Engineered Wood','Vinyl LVT/SPC','Epoxy & Terrazzo','Underfloor Heating','Outdoor Paving','Complex Patterns'] },
  { id:'painting-finishing', title:'Painting & Finishing Dubai', tag:'Interior & Exterior Finishes', img:'/images/feature_3.png', desc:'Professional painting and finishing Dubai — interior painting, exterior painting, decorative finishes, wallpaper, gypsum work, false ceiling design, wall paneling, wainscoting, crown molding, and specialty coatings. Premium paints (Jotun, Dulux, Benjamin Moore) with anti-fungal, anti-bacterial, and low-VOC formulations. Free color consultation included with every painting finishing Dubai project.', pts:['Interior & Exterior Painting','Decorative Finishes','Wallpaper Installation','Gypsum & False Ceiling','Wall Paneling','Crown Molding','Anti-Fungal Coatings','Color Consultation'] },
  { id:'mep-works', title:'MEP Works Dubai', tag:'Mechanical, Electrical & Plumbing', img:'/images/exterior_3.jpeg', desc:'Complete MEP works Dubai — mechanical (HVAC, ventilation, fire suppression), electrical (power distribution, lighting, smart systems), and plumbing (water supply, drainage, gas piping). Our MEP works Dubai division handles system design, procurement, installation, testing, commissioning, and maintenance for residential, commercial, and industrial properties across the UAE.', pts:['HVAC & Ventilation','Electrical Distribution','Plumbing & Drainage','Fire Suppression','Gas Piping','System Design','Testing & Commissioning','Maintenance Contracts'] },
  { id:'plants-supply', title:'Plants Sale & Supply Dubai', tag:'Premium Nursery & Supply', img:'/images/feature_2.webp', desc:'Premium plants sale and supply Dubai — mature trees, palm trees (washingtonia, date, royal, coconut), ornamental shrubs, flowering plants (bougainvillea, frangipani, jasmine, desert rose), indoor plants, succulents, ground cover, artificial plants, and seasonal flowers. All plants nursery-acclimatized for Dubai climate. Delivery, planting, and care instructions included with every plants supply Dubai order.', pts:['Mature Trees & Palms','Flowering Plants','Indoor & Office Plants','Succulents & Cacti','Artificial Plants','Seasonal Flowers','Delivery & Planting','Climate-Acclimatized'] },
  { id:'irrigation-systems', title:'Irrigation Systems Dubai', tag:'Smart Water Management', img:'/images/exterior_2.png', desc:'Professional irrigation systems Dubai — drip irrigation, sprinkler systems, pop-up sprinklers, smart controllers (Hunter, Rain Bird, Toro), rain sensors, soil moisture sensors, weather-based scheduling, and water-efficient zoning. Our irrigation systems Dubai expertise saves up to 50% water compared to manual watering while keeping landscapes perfectly hydrated year-round across Dubai villas and commercial properties.', pts:['Drip & Micro Irrigation','Pop-Up Sprinklers','Smart Controllers','Rain & Moisture Sensors','Weather Scheduling','Sub-Surface Systems','Water-Efficient Zoning','50% Water Savings'] },
  { id:'outdoor-lighting', title:'Outdoor Lighting Dubai', tag:'Landscape & Facade Illumination', img:'/images/exterior_3.jpeg', desc:'Professional outdoor lighting Dubai — landscape lighting, garden pathway lights, tree uplighting, facade illumination, pool and underwater lighting, deck and step lights, bollard lights, wall washers, spike lights, and smart lighting control. Our outdoor lighting Dubai designers create dramatic nightscapes enhancing safety, security, and ambiance with energy-efficient LED technology throughout.', pts:['Garden & Pathway Lights','Tree Uplighting','Facade Illumination','Pool & Underwater','Deck & Step Lights','Smart Controls','Energy-Efficient LED','Nightscape Design'] },
  { id:'civil-works', title:'Civil Works Dubai', tag:'Structural & Construction', img:'/images/exterior_1.png', desc:'Complete civil works Dubai — structural construction, foundation works, concrete works, block work, retaining walls, demolition, site preparation, excavation, backfilling, grade beams, columns, slabs, staircases, and structural modifications. Our civil works Dubai team handles villa construction, extensions, room additions, mezzanine floors, boundary walls, and structural reinforcement. All work engineer-certified and Dubai Municipality compliant.', pts:['Foundation & Structural','Concrete & Block Work','Demolition & Site Prep','Villa Extensions','Mezzanine Floors','Retaining Walls','Staircase Construction','Engineer-Certified'] },
];

export default function ServicesPage() {
  const [slide, setSlide] = useState(0);
  const imgs = ['/images/feature_1.png','/images/feature_2.webp','/images/feature_3.png','/images/exterior_1.png'];
  useEffect(() => { const t=setInterval(()=>setSlide(p=>(p+1)%imgs.length),5000); return ()=>clearInterval(t); }, []);
  useEffect(() => { if(typeof window!=='undefined'&&window.location.hash){const el=document.getElementById(window.location.hash.slice(1));if(el)setTimeout(()=>el.scrollIntoView({behavior:'smooth',block:'start'}),300);} }, []);

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      <style jsx global>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');body{font-family:'Inter',sans-serif}.font-display{font-family:'Playfair Display',serif}.gold-gradient{background:linear-gradient(135deg,#F5D547,#E8B92C,#C9831A);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.curved-box{border-radius:20px;overflow:hidden}.hover-lift{transition:transform .4s ease}.hover-lift:hover{transform:translateY(-8px)}`}</style>
      <SocialIcons/>

      <section className="relative h-[70vh] min-h-[500px] flex items-center overflow-hidden">
        {imgs.map((img,i)=>(<img key={i} src={img} alt={`Construction Services Dubai ${i+1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${slide===i?'opacity-100':'opacity-0'}`}/>))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent"/>
        <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-12 w-full"><div className="max-w-2xl">
          <div className="inline-block px-3 py-1.5 bg-[#E8B92C]/20 backdrop-blur-sm rounded-full border border-[#E8B92C] mb-5"><span className="text-[#E8B92C] text-[10px] font-bold uppercase tracking-[0.3em]">Our Services</span></div>
          <h1 className="font-display text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 font-bold">Complete <span className="gold-gradient">Construction Services</span> Dubai</h1>
          <p className="text-white/85 text-sm md:text-base font-light leading-relaxed mb-6 max-w-xl">Expert electrical, AC, waterproofing, flooring, painting, MEP, fencing, irrigation, lighting, plants supply, and civil works across Dubai and UAE.</p>
          <a href="#services-nav" className="px-5 py-2.5 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-xl transition-all">Browse Services ↓</a>
        </div></div>
      </section>

      <section id="services-nav" className="py-8 bg-white sticky top-0 z-20 border-b border-stone-200 shadow-sm"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="flex flex-wrap justify-center gap-2">{services.map(s=>(<a key={s.id} href={`#${s.id}`} className="px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-full text-[11px] font-medium text-stone-700 hover:border-[#E8B92C] hover:text-[#C9831A] hover:bg-[#E8B92C]/5 transition-all">{s.title.replace(' Dubai','')}</a>))}</div>
      </div></section>

      {services.map((s,idx)=>(
        <section key={s.id} id={s.id} className={`py-16 ${idx%2===0?'bg-stone-50':'bg-white'} scroll-mt-20`}><div className="max-w-[1300px] mx-auto px-6 lg:px-12">
          <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 items-center`}>
            <div className={idx%2===1?'lg:order-2':''}><div className="curved-box shadow-2xl aspect-[4/3] overflow-hidden"><img src={s.img} alt={`${s.title} - Royal Track`} className="w-full h-full object-cover"/></div></div>
            <div className={idx%2===1?'lg:order-1':''}>
              <div className="inline-flex items-center gap-2 mb-3"><span className="w-2.5 h-2.5 rounded-full bg-[#E8B92C]"/><span className="text-[#C9831A] text-[10px] font-bold uppercase tracking-[0.3em]">{s.tag}</span></div>
              <h2 className="font-display text-xl md:text-3xl text-stone-900 mb-4 font-bold">{s.title.split(' ')[0]} <span className="gold-gradient">{s.title.split(' ').slice(1).join(' ')}</span></h2>
              <p className="text-stone-600 text-sm leading-relaxed mb-6">{s.desc}</p>
              <div className="grid grid-cols-2 gap-2 mb-6">{s.pts.map((p,i)=>(<div key={i} className="flex items-center gap-2"><C/><span className="text-stone-700 text-xs font-medium">{p}</span></div>))}</div>
              <div className="flex flex-wrap gap-3">
                <Link href="#inquiry" className="px-5 py-2 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all">Get Free Quote →</Link>
                <a href="tel:+97143934374" className="px-5 py-2 border-2 border-stone-300 text-stone-700 hover:border-[#E8B92C] hover:text-[#C9831A] text-[11px] font-bold uppercase tracking-wider rounded-full transition-all">📞 Call Now</a>
              </div>
            </div>
          </div>
        </div></section>
      ))}

      <section className="py-14 bg-[#E8B92C] text-stone-900"><div className="max-w-[1500px] mx-auto px-6 lg:px-12"><div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">{[{n:'500+',l:'Projects Completed'},{n:'10+',l:'Years Experience'},{n:'50+',l:'Expert Team'},{n:'4.9★',l:'Customer Rating'}].map((s,i)=>(<div key={i}><div className="font-display text-3xl md:text-5xl font-bold mb-2">{s.n}</div><div className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{s.l}</div></div>))}</div></div></section>

      <section className="py-16 bg-white"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Explore <span className="gold-gradient">Specialized Pages</span></h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{[
          {t:'Interior Renovation',h:'/interior-renovation',i:'/images/feature_1.png'},
          {t:'Exterior, Pool & Landscape',h:'/outdoor-services',i:'/images/feature_2.webp'},
          {t:'Aluminum & Pergola',h:'/aluminum-pergola',i:'/images/exterior_1.png'},
          {t:'Turnkey Solutions',h:'/turnkeysolutions',i:'/images/feature_3.png'},
        ].map(s=>(<Link key={s.t} href={s.h} className="group curved-box bg-stone-50 border border-stone-200 hover:border-[#E8B92C] hover:shadow-xl transition-all hover-lift"><div className="aspect-[4/3] overflow-hidden"><img src={s.i} alt={s.t} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/></div><div className="p-5"><h3 className="font-display text-base text-stone-900 group-hover:text-[#C9831A] font-bold">{s.t}</h3><span className="text-[#C9831A] text-[10px] font-bold uppercase tracking-wider mt-2 inline-block">Explore →</span></div></Link>))}</div>
      </div></section>

      <div id="inquiry"><InquiryForm/></div>

      <a href="https://wa.me/971552824492" target="_blank" rel="noopener noreferrer" className="fixed left-5 bottom-5 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"><svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg></a>
      <a href="tel:+97143934374" className="fixed right-5 bottom-5 z-50 w-14 h-14 bg-[#E8B92C] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z"/></svg></a>
    </div>
  );
}
