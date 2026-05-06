import Link from "next/link";

export default function Footer() {
  const IMG = {
    logo: '/images/roya_track_full_logo.png',
  };

  return (
    <footer className="bg-black text-white pt-16 pb-8 border-t border-[#E8B92C]/30">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-4 mb-6">
              <img src={IMG.logo} alt="Royal Track Logo" className="h-20 w-auto" style={{filter: 'brightness(0) saturate(100%) invert(73%) sepia(94%) saturate(489%) hue-rotate(1deg) brightness(101%) contrast(93%)'}} />
              <div>
                <div className="font-display text-2xl text-[#E8B92C] font-bold">ROYAL TRACK</div>
                <div className="text-xs uppercase tracking-wider text-white/60 mt-1">Building & Contracting L.L.C</div>
              </div>
            </div>
            <p className="text-white/70 leading-relaxed text-sm mb-6 max-w-md">
              Premium construction and contracting services across the United Arab Emirates. A proud subsidiary of Royal Tech Group.
            </p>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-5">Navigation</div>
            <div className="space-y-3">
              {['Home', 'About', 'Services', 'Projects', 'Contact Us'].map((link) => (
                <Link key={link} href={link === 'Home' ? '/' : link === 'About' ? '/about' : link === 'Services' ? '/services' : link === 'Projects' ? '/projects' : '/#contact'} className="block text-white/70 hover:text-[#E8B92C] text-sm transition-colors">
                  {link}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <div className="text-xs font-bold uppercase tracking-widest text-[#E8B92C] mb-5">Contact</div>
            <div className="space-y-3 text-sm">
              <a 
                href="mailto:Info@royaltrack.ae" 
                className="block text-white/70 hover:text-[#E8B92C] transition-colors underline decoration-white/30 hover:decoration-[#E8B92C]"
              >
                Info@royaltrack.ae
              </a>
              <a 
                href="tel:+97143934374" 
                className="block text-white/70 hover:text-[#E8B92C] transition-colors underline decoration-white/30 hover:decoration-[#E8B92C]"
              >
                +971 4 393 4374
              </a>
              <a 
                href="tel:+971552824492" 
                className="block text-white/70 hover:text-[#E8B92C] transition-colors underline decoration-white/30 hover:decoration-[#E8B92C]"
              >
                +971 5 5282 4492
              </a>
              <a 
                href="https://maps.google.com/?q=13+45A+St+Al+Muraqqabat+Dubai+UAE" 
                target="_blank"
                rel="noopener noreferrer"
                className="block text-white/70 hover:text-[#E8B92C] transition-colors underline decoration-white/30 hover:decoration-[#E8B92C]"
              >
                13 45A St - Al Muraqqabat, Dubai, UAE
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs uppercase tracking-wider text-white/40">
          <div>© 2026 Royal Track Building & Contracting L.L.C. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-[#E8B92C] transition-colors">Privacy</a>
            <a href="#" className="hover:text-[#E8B92C] transition-colors">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
