'use client';

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const IMG = {
    logo: '/images/roya_track_full_logo.png',
  };

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50"
      style={{
        backgroundColor: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(232, 185, 44, 0.3)',
      }}
    >
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <img 
            src={IMG.logo} 
            alt="Royal Track Logo" 
            className="h-28 w-auto object-contain" 
          />
          
          <div className="leading-tight text-white">
            <div className="font-display text-xl font-bold tracking-wide">ROYAL TRACK</div>
            <div className="text-base font-bold uppercase tracking-[0.1em] text-[#E8B92C] mt-1">Building & Contracting L.L.C</div>
            <div className="text-base font-bold tracking-wide text-[#E8B92C] mt-1" dir="rtl">رويال تراك للمقاولات البناء ش.ذ.م.م</div>
          </div>
        </Link>

        <div className="hidden lg:flex items-center gap-8 text-white">
          {[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
            { label: 'Services', href: '/services' },
            { label: 'Projects', href: '/#projects' },
            { label: 'Contact Us', href: '/#contact' },
          ].map((item) => (
            <Link 
              key={item.label}
              href={item.href}
              className="text-lg font-bold tracking-wide hover:text-[#E8B92C] transition-all duration-300 relative after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#E8B92C] hover:after:w-full after:transition-all after:duration-300"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link href="/#contact" className="hidden lg:flex items-center gap-2 px-6 py-3 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 transition-all duration-300 text-sm font-extrabold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:scale-105">
          GET QUOTE →
        </Link>

        <button 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {mobileMenuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button> 
      </div>
       
      {mobileMenuOpen && (
        <div className="lg:hidden bg-black/95 border-t border-[#E8B92C]/30">
          <div className="px-6 py-6 space-y-4">
            {['Home', 'About', 'Services', 'Projects', 'Contact Us'].map((item) => (
              <Link 
                key={item}
                href={item === 'Home' ? '/' : item === 'About' ? '/about' : item === 'Services' ? '/services' : `/#${item.toLowerCase().replace(' ', '-')}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block text-white text-xl font-bold hover:text-[#E8B92C] transition-colors"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}  
    </nav>
  );
}
