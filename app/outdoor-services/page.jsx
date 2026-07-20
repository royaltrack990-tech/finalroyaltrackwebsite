'use client';
import React, { useState, useEffect } from "react";
import Link from "next/link";
import InquiryForm from '../components/InquiryForm';
import SocialIcons from '../components/SocialIcons';

const C = () => <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#E8B92C" strokeWidth="3"><path d="M20 6L9 17l-5-5"/></svg>;

export default function OutdoorServicesPage() {
  const [slide, setSlide] = useState(0);
  const [faq, setFaq] = useState(0);
  const [activeTab, setActiveTab] = useState('exterior');
  const imgs = ['/images/exterior_1.png','/images/feature_2.webp','/images/exterior_3.jpeg','/images/pool_landscape_hero_section.jpg'];
  useEffect(() => { const t=setInterval(()=>setSlide(p=>(p+1)%imgs.length),5000); return ()=>clearInterval(t); }, []);

  const extServices = [
    { t:'Villa Facade Renovation', d:'Complete villa exterior renovation Dubai — modern facades, stone and glass cladding upgrades, architectural features, and structural enhancements for luxury villas across Emirates Hills, Palm Jumeirah, Arabian Ranches, Dubai Hills, and every Dubai community. Our exterior renovation Dubai experts deliver stunning facade transformations that increase property value and curb appeal.', f:['Modern Facade Design','Stone & Glass Cladding','Structural Upgrades','Architectural Detailing'] },
    { t:'Exterior Painting & Coatings', d:'Professional exterior painting Dubai services for villas, apartments, and commercial buildings. Weather-resistant coatings, expert color consultation, premium anti-fungal finishes, and elastomeric waterproof paint systems that withstand Dubai\'s extreme heat, humidity, and UV exposure. 10-year coating warranty on all exterior renovation Dubai painting projects.', f:['Weather-Resistant Coatings','Color Consultation','Anti-Fungal Treatment','10-Year Warranty'] },
    { t:'Exterior Cladding & Facades', d:'Premium exterior cladding Dubai — natural stone, composite panels, HPL cladding, aluminum facades, terracotta tiles, and fiber cement boards. Energy-efficient, durable, and visually stunning cladding solutions for modern exterior renovation Dubai projects. We source premium Italian and German materials for every facade.', f:['Natural Stone','Composite Panels','HPL Facades','Aluminum Cladding'] },
    { t:'Waterproofing Solutions', d:'Expert exterior waterproofing Dubai — roof waterproofing, wall treatment, basement protection, terrace sealing, and foundation waterproofing using crystalline, membrane, and coating systems. Protect your Dubai property from water damage with our certified exterior renovation Dubai waterproofing specialists.', f:['Roof Waterproofing','Wall Treatment','Basement Protection','Terrace Sealing'] },
    { t:'Pergola & Shade Structures', d:'Premium pergola installation Dubai — aluminum pergolas, bioclimatic louvers, retractable awnings, shade sails, and motorized roof systems. Create comfortable exterior living spaces perfect for Dubai\'s outdoor lifestyle with our exterior renovation Dubai shade specialists.', f:['Aluminum Pergolas','Bioclimatic Louvers','Retractable Awnings','Motorized Systems'] },
    { t:'Boundary Walls & Gates', d:'Custom boundary walls, privacy fencing, and automated gate installation across Dubai. Premium precast walls, decorative fencing, sliding gates, swing gates, and smart access systems for villas and compounds. Complete exterior renovation Dubai boundary solutions with 10-year warranty.', f:['Custom Walls','Privacy Screens','Automated Gates','Smart Access'] },
  ];

  const poolServices = [
    { t:'Infinity Pool Construction', d:'Stunning infinity edge pool construction Dubai — vanishing edge pools, negative edge designs, rooftop infinity pools, and overflow pools. Royal Track designs and builds breathtaking infinity pools for luxury villas, penthouses, and hotels across Dubai. Reinforced concrete construction, premium waterproofing, and Italian glass mosaic tiling for every pool construction Dubai project.', f:['Vanishing Edge Design','Reinforced Concrete','Glass Mosaic Tiling','Rooftop Pools'] },
    { t:'Villa Swimming Pool', d:'Custom villa swimming pool construction Dubai — all shapes, sizes, and depths. Family pools with shallow children\'s areas, jacuzzi zones, swim-up bars, and heated lap pools. Complete pool construction Dubai solutions for villas in Emirates Hills, Palm Jumeirah, Arabian Ranches, Dubai Hills, and every Dubai community.', f:['Custom Shapes','Children\'s Areas','Jacuzzi Integration','Heated Options'] },
    { t:'Plunge & Lap Pools', d:'Compact plunge pool and lap pool construction Dubai for smaller spaces. Space-efficient pool construction Dubai designs perfect for townhouses, courtyards, and urban villas. Cold plunge pools, heated lap pools, and exercise pools with counter-current jet systems for fitness-focused homeowners.', f:['Space-Efficient Design','Counter-Current Jets','Heated Options','Townhouse Pools'] },
    { t:'Pool Equipment & Systems', d:'Complete pool equipment installation Dubai — sand and cartridge filtration, salt chlorination, UV sanitization, automated chemical dosing, pool heating (heat pump and solar), underwater LED lighting, and smart pool control systems. Crystal-clear, low-maintenance pool construction Dubai technology.', f:['Filtration Systems','Salt Chlorination','Pool Heating','Smart Controls'] },
    { t:'Pool Renovation & Repair', d:'Swimming pool renovation Dubai — re-tiling, resurfacing, structural repair, leak detection, equipment upgrade, coping replacement, and complete pool makeover. Breathe new life into your existing pool with Royal Track\'s expert pool construction Dubai renovation and repair services.', f:['Re-Tiling','Structural Repair','Leak Detection','Complete Makeover'] },
    { t:'Pool Maintenance', d:'Professional pool maintenance Dubai — weekly cleaning, chemical balancing, equipment servicing, filter backwash, seasonal care, and emergency repairs. Keep your pool crystal clear year-round with Royal Track\'s reliable pool maintenance service across all Dubai communities.', f:['Weekly Cleaning','Chemical Balancing','Equipment Service','Emergency Repairs'] },
  ];

  const landServices = [
    { t:'Garden Design & Planning', d:'Professional garden design Dubai — concept design, 3D visualization, master planning, and bespoke garden layouts for villas, compounds, and commercial properties. Our landscaping Dubai designers create stunning, functional outdoor spaces perfectly adapted to Dubai\'s climate and your lifestyle preferences.', f:['3D Visualization','Master Planning','Climate-Adapted','Bespoke Layouts'] },
    { t:'Hardscaping', d:'Premium hardscaping Dubai — natural stone pathways, paved patios, retaining walls, garden steps, decorative borders, seating walls, and outdoor flooring. Royal Track\'s landscaping Dubai hardscape team uses premium imported and local materials to create durable, beautiful structural garden elements.', f:['Stone Pathways','Paved Patios','Retaining Walls','Outdoor Flooring'] },
    { t:'Softscaping & Planting', d:'Expert softscaping Dubai — tree planting, shrub installation, flower beds, lawn installation (natural and artificial turf), ground cover, tropical planting, and desert-adapted species. Our landscaping Dubai horticulturists select plants that thrive in Dubai\'s climate with minimal water.', f:['Tree Planting','Natural & Artificial Turf','Tropical Gardens','Desert Species'] },
    { t:'Irrigation Systems', d:'Smart irrigation system design and installation Dubai — drip irrigation, sprinkler systems, sub-surface irrigation, smart controllers with rain sensors, and water-efficient solutions. Essential landscaping Dubai infrastructure that keeps gardens healthy while minimizing water usage and DEWA costs.', f:['Drip Irrigation','Smart Controllers','Rain Sensors','Water-Efficient'] },
    { t:'Plants Sale & Supply', d:'Premium plants supply Dubai — mature trees, palm trees (washingtonia, date, royal), ornamental shrubs, flowering plants, indoor plants, succulents, and ground cover. Royal Track\'s landscaping Dubai nursery sources healthy, acclimatized plants perfect for every garden project.', f:['Mature Trees','Palm Trees','Flowering Plants','Indoor Plants'] },
    { t:'Garden Maintenance', d:'Professional garden maintenance Dubai — regular mowing, pruning, fertilization, pest control, irrigation maintenance, seasonal planting, and complete garden care. Keep your landscaping Dubai investment looking perfect year-round with Royal Track\'s dedicated maintenance teams and annual contracts.', f:['Regular Mowing','Pruning & Shaping','Pest Control','Seasonal Planting'] },
  ];

  const currentServices = activeTab === 'exterior' ? extServices : activeTab === 'pool' ? poolServices : landServices;
  const tabLabel = activeTab === 'exterior' ? 'Exterior Renovation Dubai' : activeTab === 'pool' ? 'Pool Construction Dubai' : 'Landscaping Dubai';

  const faqs = [
    { q:'How much does exterior renovation cost in Dubai?', a:'Exterior renovation cost in Dubai: basic facade painting from AED 30,000, exterior cladding from AED 80,000, pergola from AED 25,000, complete villa exterior renovation AED 150,000-500,000+. Royal Track provides free, detailed quotations after a site visit for all exterior renovation Dubai projects.' },
    { q:'How much does pool construction cost in Dubai?', a:'Pool construction cost in Dubai: plunge pool from AED 80,000, standard villa pool AED 120,000-250,000, infinity pool AED 200,000-500,000+, commercial pool AED 300,000+. Includes excavation, construction, waterproofing, tiling, equipment, and landscaping. Free pool construction Dubai quotes available.' },
    { q:'How much does landscaping cost in Dubai?', a:'Landscaping cost in Dubai: basic garden from AED 50,000, villa landscaping AED 100,000-200,000, premium complete landscaping with hardscaping, irrigation, lighting AED 200,000-500,000+. Royal Track provides free landscaping Dubai consultations and detailed quotations for every project.' },
    { q:'Does Royal Track handle all permits and approvals?', a:'Yes, Royal Track handles all permits for exterior renovation, pool construction, and landscaping — Dubai Municipality building permits, community NOCs (Emaar, Nakheel, Meraas, etc.), drainage connections, safety certificates, and all regulatory approvals. Our team manages the entire process on your behalf.' },
    { q:'What warranty does Royal Track offer?', a:'Royal Track offers comprehensive warranties: 10-year structural warranty on pools and exterior work, 5-year waterproofing warranty, 2-year equipment warranty, 10-year coating warranty on painting, manufacturer warranties on all materials. We are fully licensed and insured in Dubai.' },
    { q:'How long do these projects take?', a:'Typical timelines: exterior painting 1-2 weeks, cladding 3-4 weeks, plunge pool 4-6 weeks, villa pool 6-10 weeks, infinity pool 10-14 weeks, garden landscaping 4-8 weeks, complete outdoor renovation 12-20 weeks. Royal Track provides detailed timelines with milestone tracking.' },
    { q:'Can Royal Track do exterior, pool, and landscaping together?', a:'Yes — that\'s our specialty. Royal Track provides turnkey outdoor solutions combining exterior renovation, pool construction, and landscaping under one contract, one team, one timeline. This saves time, money, and coordination headaches compared to hiring separate contractors.' },
    { q:'Which areas in Dubai does Royal Track cover?', a:'Royal Track covers all Dubai communities: Emirates Hills, Palm Jumeirah, Arabian Ranches, Dubai Hills, JVC, The Valley, Damac Hills, Tilal Al Ghaf, Jumeirah Golf Estates, The Lakes, Springs, Meadows, Al Barsha, Mirdif, and across UAE including Abu Dhabi, Sharjah, Ajman, and Ras Al Khaimah.' },
    { q:'Does Royal Track offer maintenance services?', a:'Yes — pool maintenance (weekly cleaning, chemical balancing, equipment service), garden maintenance (mowing, pruning, pest control, irrigation), and exterior maintenance (painting touch-ups, cladding cleaning, waterproofing renewal). Annual contracts available with priority service and discounted rates.' },
    { q:'What makes Royal Track different from other contractors?', a:'Royal Track is one of the few Dubai contractors offering all three services — exterior renovation, pool construction, and landscaping — under one roof. 10+ years experience, 500+ completed projects, 50+ in-house craftsmen, Dubai Municipality licensed, fully insured, transparent pricing, and 10-year warranty.' },
  ];

  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      <style jsx global>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');body{font-family:'Inter',sans-serif}.font-display{font-family:'Playfair Display',serif}.gold-gradient{background:linear-gradient(135deg,#F5D547,#E8B92C,#C9831A);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}.curved-box{border-radius:20px;overflow:hidden}.hover-lift{transition:transform .4s ease}.hover-lift:hover{transform:translateY(-8px)}`}</style>
      <SocialIcons />

      {/* ===== HERO ===== */}
      <section className="relative h-screen min-h-[600px] flex items-center overflow-hidden">
        {imgs.map((img,i)=>(<img key={i} src={img} alt={`Exterior Renovation Pool Construction Landscaping Dubai ${i+1}`} className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-[1500ms] ${slide===i?'opacity-100':'opacity-0'}`}/>))}
        <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent"/>
        <div className="relative z-10 max-w-[1500px] mx-auto px-6 lg:px-12 w-full"><div className="max-w-2xl">
          <div className="inline-block px-3 py-1.5 bg-[#E8B92C]/20 backdrop-blur-sm rounded-full border border-[#E8B92C] mb-5"><span className="text-[#E8B92C] text-[10px] font-bold uppercase tracking-[0.3em]">Outdoor Construction</span></div>
          <h1 className="font-display text-white text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 font-bold">Exterior Renovation, <span className="gold-gradient">Pool Construction</span> & Landscaping Dubai</h1>
          <p className="text-white/85 text-sm md:text-base font-light leading-relaxed mb-6 max-w-xl">Transform your property's outdoor spaces with Royal Track — Dubai's premier contractor for exterior renovation, swimming pool construction, and professional landscaping. 10-year warranty. Free consultation.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="#inquiry" className="px-5 py-2.5 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-[11px] font-bold uppercase tracking-wider rounded-full shadow-xl transition-all">Get Free Quote →</Link>
            <a href="tel:+97143934374" className="px-5 py-2.5 border-2 border-white text-white hover:bg-white hover:text-stone-900 text-[11px] font-bold uppercase tracking-wider rounded-full transition-all">📞 +971 4 393 4374</a>
          </div>
        </div></div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">{imgs.map((_,i)=>(<button key={i} onClick={()=>setSlide(i)} className={`h-1 rounded-full transition-all ${slide===i?'w-10 bg-[#E8B92C]':'w-5 bg-white/40'}`}/>))}</div>
      </section>

      {/* ===== ABOUT ===== */}
      <section className="py-16 bg-white"><div className="max-w-[1300px] mx-auto px-6 lg:px-12"><div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <div className="relative"><div className="curved-box shadow-2xl aspect-[4/5]"><img src="/images/exterior_1.png" alt="Exterior Renovation Pool Construction Landscaping Dubai - Royal Track" className="w-full h-full object-cover"/></div><div className="absolute top-6 -left-4 bg-stone-900 text-white px-4 py-3 rounded-xl shadow-2xl border-2 border-[#E8B92C]"><div className="font-display text-2xl font-bold text-[#E8B92C]">10+</div><div className="text-[9px] font-bold uppercase tracking-widest mt-1">Years</div></div>
          <div className="absolute -bottom-8 right-0 w-[50%] hidden md:block"><div className="curved-box shadow-2xl aspect-[4/3] border-4 border-white"><img src="/images/feature_2.webp" alt="Pool Construction Dubai" className="w-full h-full object-cover"/></div></div>
        </div>
        <div className="mt-10 lg:mt-0">
          <div className="inline-flex items-center gap-2 mb-3"><span className="w-2.5 h-2.5 rounded-full bg-[#E8B92C]"/><span className="text-[#C9831A] text-[10px] font-bold uppercase tracking-[0.3em]">Complete Outdoor Solutions</span></div>
          <h2 className="font-display text-xl md:text-3xl text-stone-900 mb-4 font-bold">Dubai's #1 <span className="gold-gradient">Outdoor Construction</span> Company</h2>
          <p className="text-stone-600 text-sm leading-relaxed mb-4">Royal Track Building & Contracting LLC is Dubai's premier outdoor construction company, delivering premium <strong>exterior renovation Dubai</strong>, <strong>pool construction Dubai</strong>, and <strong>landscaping Dubai</strong> services under one roof. With 10+ years of experience and 500+ completed projects, we transform outdoor spaces across the UAE.</p>
          <p className="text-stone-600 text-sm leading-relaxed mb-4">Whether you need a complete villa exterior makeover, a stunning infinity pool, a resort-style garden, or all three — our expert team handles everything from design and permits to construction and maintenance. One contract, one team, one warranty.</p>
          <p className="text-stone-600 text-sm leading-relaxed mb-6">Our turnkey approach to <strong>exterior renovation Dubai</strong>, <strong>pool construction Dubai</strong>, and <strong>landscaping Dubai</strong> saves you time, money, and coordination headaches. We are fully licensed by Dubai Municipality, carry comprehensive insurance, and back every project with a 10-year workmanship warranty.</p>
          <div className="grid grid-cols-2 gap-3 mb-6">{['Licensed Contractor','10-Year Warranty','500+ Projects','Free Site Visit','Premium Materials','Turnkey Solutions'].map((i,x)=>(<div key={x} className="flex items-center gap-2"><C/><span className="text-stone-700 text-xs font-medium">{i}</span></div>))}</div>
          <Link href="#inquiry" className="px-5 py-2 bg-stone-900 text-white text-sm font-bold uppercase tracking-wider rounded-full hover:bg-[#C9831A] transition-all">Book Free Consultation →</Link>
        </div>
      </div></div></section>

      {/* ===== 3 SERVICE HIGHLIGHTS ===== */}
      <section className="py-16 bg-stone-50"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Our <span className="gold-gradient">3 Core Services</span></h2></div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title:'Exterior Renovation Dubai', desc:'Villa facade renovation, exterior cladding, painting, waterproofing, pergolas, boundary walls, outdoor kitchens, lighting, and driveway paving. Complete exterior renovation Dubai solutions for residential and commercial properties.', img:'/images/exterior_1.png', id:'exterior' },
            { title:'Pool Construction Dubai', desc:'Infinity pools, villa pools, plunge pools, lap pools, commercial pools, pool renovation, tiling, equipment, and maintenance. Premium pool construction Dubai from design to handover with 10-year warranty.', img:'/images/feature_2.webp', id:'pool' },
            { title:'Landscaping Dubai', desc:'Garden design, hardscaping, softscaping, irrigation systems, outdoor lighting, water features, plants supply, pergolas, and garden maintenance. Create stunning outdoor spaces with our landscaping Dubai experts.', img:'/images/exterior_3.jpeg', id:'landscape' },
          ].map((s)=>(
            <div key={s.id} className="curved-box bg-white border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all hover-lift">
              <div className="aspect-[4/3] overflow-hidden"><img src={s.img} alt={s.title} className="w-full h-full object-cover"/></div>
              <div className="p-6"><h3 className="font-display text-lg md:text-xl mb-3 text-stone-900 font-bold">{s.title}</h3><p className="text-stone-600 text-xs leading-relaxed mb-4">{s.desc}</p>
                <button onClick={()=>{setActiveTab(s.id);document.getElementById('all-services')?.scrollIntoView({behavior:'smooth'})}} className="text-[#C9831A] text-[11px] font-bold uppercase tracking-wider hover:text-stone-900 transition-colors">View {s.title.split(' ')[0]} Services →</button>
              </div>
            </div>
          ))}
        </div>
      </div></section>

      {/* ===== STATS ===== */}
      <section className="py-14 bg-[#E8B92C] text-stone-900"><div className="max-w-[1500px] mx-auto px-6 lg:px-12"><div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">{[{n:'500+',l:'Outdoor Projects'},{n:'10+',l:'Years Experience'},{n:'50+',l:'Expert Craftsmen'},{n:'4.9★',l:'Customer Rating'}].map((s,i)=>(<div key={i}><div className="font-display text-3xl md:text-5xl font-bold mb-2">{s.n}</div><div className="text-[10px] md:text-xs font-bold uppercase tracking-wider">{s.l}</div></div>))}</div></div></section>

      {/* ===== ALL SERVICES (TABBED) ===== */}
      <section id="all-services" className="py-16 bg-white"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-8">
          <h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Our <span className="gold-gradient">{tabLabel}</span> Services</h2>
          <p className="text-stone-600 text-sm mt-2">Click a tab to explore each service category.</p>
        </div>
        {/* Tab buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {[{id:'exterior',label:'Exterior Renovation'},{id:'pool',label:'Pool Construction'},{id:'landscape',label:'Landscaping & Gardens'}].map(tab=>(
            <button key={tab.id} onClick={()=>setActiveTab(tab.id)} className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-display font-semibold transition-all ${activeTab===tab.id?'bg-[#C9831A] text-white shadow-lg':'text-stone-600 hover:text-[#C9831A] hover:bg-stone-100 border border-stone-200'}`}>{tab.label}</button>
          ))}
        </div>
        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentServices.map((s,i)=>(
            <article key={`${activeTab}-${i}`} className="group curved-box bg-stone-50 border border-stone-200 hover:border-[#E8B92C] hover:shadow-2xl transition-all hover-lift">
              <div className="aspect-[4/3] overflow-hidden"><img src={imgs[i%4]} alt={`${s.t} - Royal Track Dubai`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"/></div>
              <div className="p-6"><h3 className="font-display text-base md:text-lg mb-2 text-stone-900 group-hover:text-[#C9831A] font-bold">{s.t}</h3><p className="text-stone-600 text-xs leading-relaxed mb-4">{s.d}</p>
                <div className="space-y-1.5 mb-4">{s.f.map((f,j)=>(<div key={j} className="flex items-center gap-2 text-[11px] text-stone-600"><C/>{f}</div>))}</div>
                <Link href="#inquiry" className="text-[#C9831A] text-[11px] font-bold uppercase tracking-wider">Get Free Quote →</Link>
              </div>
            </article>
          ))}
        </div>
      </div></section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-16 bg-stone-50"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Why Choose Royal Track for <span className="gold-gradient">Outdoor Construction</span></h2></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">{[
          {t:'All-In-One Contractor',d:'Exterior renovation, pool construction, and landscaping under one roof. One contract, one team, one point of accountability.'},
          {t:'10-Year Warranty',d:'Industry-leading warranty on all workmanship. Structural, waterproofing, and coating warranties for complete peace of mind.'},
          {t:'Premium Materials',d:'Italian stone, German cladding, premium pool tiles, and climate-adapted plants. Only the finest materials for Dubai\'s conditions.'},
          {t:'On-Time Delivery',d:'Strict project timelines with milestone tracking. 95% on-time completion rate across 500+ outdoor construction projects.'},
          {t:'Licensed & Insured',d:'Fully licensed Dubai Municipality contractor with comprehensive insurance. All permits and NOCs handled on your behalf.'},
          {t:'50+ Expert Craftsmen',d:'In-house team of engineers, architects, landscape designers, pool specialists, and skilled craftsmen — no subcontracting.'},
          {t:'Free Consultation',d:'Free site visit, 3D design visualization, and detailed quotation for every exterior renovation, pool, and landscaping inquiry.'},
          {t:'Transparent Pricing',d:'Detailed, itemized quotes with no hidden costs. Know exactly what your outdoor construction project costs from day one.'},
        ].map((i,x)=>(<div key={x} className="curved-box bg-white border border-stone-200 p-6 hover:border-[#E8B92C] hover:shadow-lg transition-all"><h3 className="font-display text-base mb-2 text-stone-900 font-bold">{i.t}</h3><p className="text-stone-600 text-xs leading-relaxed">{i.d}</p></div>))}</div>
      </div></section>

      {/* ===== AREAS ===== */}
      <section className="py-16 bg-white"><div className="max-w-[1500px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-10"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold"><span className="gold-gradient">Serving All Dubai</span> & UAE Communities</h2></div>
        <div className="flex flex-wrap justify-center gap-2">{['Downtown Dubai','Dubai Marina','Palm Jumeirah','Emirates Hills','Dubai Hills','Arabian Ranches','JVC','JVT','Business Bay','Al Barsha','Mirdif','The Springs','The Meadows','Damac Hills','Tilal Al Ghaf','Town Square','Mudon','The Valley','Jumeirah Golf Estates','The Lakes','Discovery Gardens','Dubai Silicon Oasis','Abu Dhabi','Sharjah','Ajman','Ras Al Khaimah'].map((a,i)=>(<span key={i} className="px-3 py-1.5 bg-stone-50 border border-stone-200 rounded-full text-[11px] font-medium text-stone-700 hover:border-[#E8B92C] hover:text-[#C9831A] transition-all cursor-pointer">{a}</span>))}</div>
      </div></section>

      {/* ===== FAQ ===== */}
      <section className="py-16 bg-stone-50"><div className="max-w-3xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12"><h2 className="font-display text-xl md:text-3xl text-stone-900 font-bold">Outdoor Services <span className="gold-gradient">FAQs</span></h2><p className="text-stone-600 text-sm mt-2">Everything about exterior renovation, pool construction, and landscaping in Dubai.</p></div>
        <div className="space-y-3">{faqs.map((f,i)=>(<div key={i} className="bg-white border border-stone-200 hover:border-[#E8B92C] curved-box transition-all"><button onClick={()=>setFaq(faq===i?-1:i)} className="w-full px-5 py-4 flex items-center justify-between text-left"><h3 className="font-display text-sm md:text-base text-stone-900 font-bold pr-3">{f.q}</h3><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C9831A" strokeWidth="2.5" className={`flex-shrink-0 transition-transform ${faq===i?'rotate-180':''}`}><path d="M6 9l6 6 6-6"/></svg></button>{faq===i&&<div className="px-5 pb-5 text-stone-600 text-xs leading-relaxed border-t border-stone-100 pt-4">{f.a}</div>}</div>))}</div>
      </div></section>

      {/* INQUIRY FORM */}
      <div id="inquiry"><InquiryForm/></div>

      {/* FLOATING BUTTONS */}
      <a href="https://wa.me/971552824492" target="_blank" rel="noopener noreferrer" className="fixed left-5 bottom-5 z-50 w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"><svg width="30" height="30" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/></svg></a>
      <a href="tel:+97143934374" className="fixed right-5 bottom-5 z-50 w-14 h-14 bg-[#E8B92C] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform"><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.12.96.36 1.9.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.91.34 1.85.58 2.81.7A2 2 0 0122 16.92z"/></svg></a>
    </div>
  );
}
