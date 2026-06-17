'use client';

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const IMG = { logo: '/images/roya_track_full_logo.png' };

  const serviceLinks = [
    'Interior Renovation', 'Exterior Renovation', 'Pool Construction',
    'Landscaping & Gardens', 'Turnkey Solutions', 'Aluminum Work',
    'Pergola & Shade Structures', 'Electrical Works', 'AC & Ducting',
    'Fencing & Gates', 'Waterproofing', 'Flooring & Tiling',
    'Painting & Finishing', 'MEP Works', 'Plants Sale & Supply',
    'Irrigation Systems', 'Outdoor Lighting', 'Civil Works',
  ];

  return (
    <>
      {/* ── MAIN NAV (no top yellow bar) ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-40"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(232, 185, 44, 0.3)',
        }}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-2 flex items-center justify-between">
          {/* Logo - height reduced from h-28 to h-14 */}
          <Link href="/" className="flex items-center gap-3 group">
            <img src={IMG.logo} alt="Royal Track Logo" className="h-14 w-auto object-contain" />
            <div className="leading-tight text-white hidden sm:block">
              <div className="font-display text-base font-bold tracking-wide">ROYAL TRACK</div>
              <div className="text-xs font-bold uppercase tracking-[0.1em] text-[#E8B92C] mt-0.5">Building & Contracting L.L.C</div>
            </div>
          </Link>

          {/* Desktop Nav + CTA */}
          <div className="hidden lg:flex items-center gap-7 text-white">
            <Link href="/" className="text-sm font-bold tracking-wide hover:text-[#E8B92C] transition-all duration-300">
              Home
            </Link>
            <Link href="/about" className="text-sm font-bold tracking-wide hover:text-[#E8B92C] transition-all duration-300">
              About
            </Link>

            {/* Services Dropdown with scroll */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <Link href="/services" className="text-sm font-bold tracking-wide hover:text-[#E8B92C] transition-all duration-300 flex items-center gap-1">
                Services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}>
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </Link>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-2 w-[520px] bg-white rounded-xl shadow-2xl transition-all duration-300 origin-top ${
                  servicesOpen ? 'opacity-100 visible scale-100' : 'opacity-0 invisible scale-95'
                }`}
              >
                <div className="max-h-[340px] overflow-y-auto p-5 grid grid-cols-3 gap-x-6 gap-y-3">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service}
                      href="/services"
                      className="flex items-center gap-2 text-stone-700 text-sm hover:text-[#C9831A] transition-colors py-1"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8B92C] flex-shrink-0" />
                      {service}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/projects" className="text-sm font-bold tracking-wide hover:text-[#E8B92C] transition-all duration-300">
              Portfolio
            </Link>
            <Link href="/#contact" className="text-sm font-bold tracking-wide hover:text-[#E8B92C] transition-all duration-300">
              Contact Us
            </Link>

            <Link
              href="/#contact"
              className="flex items-center gap-2 px-5 py-2.5 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 transition-all duration-300 text-xs font-extrabold uppercase tracking-wider rounded-full shadow-lg hover:shadow-xl hover:scale-105"
            >
              GET QUOTE →
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-black/95 border-t border-[#E8B92C]/30 max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-6 space-y-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-white text-lg font-bold hover:text-[#E8B92C] transition-colors">
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-white text-lg font-bold hover:text-[#E8B92C] transition-colors">
                About
              </Link>

              <div>
                <p className="text-white text-lg font-bold mb-2">Services</p>
                <div className="grid grid-cols-1 gap-2 pl-3 max-h-[200px] overflow-y-auto">
                  {serviceLinks.map((service) => (
                    <Link
                      key={service}
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="text-white/70 text-sm hover:text-[#E8B92C] transition-colors"
                    >
                      • {service}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block text-white text-lg font-bold hover:text-[#E8B92C] transition-colors">
                Portfolio
              </Link>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block text-white text-lg font-bold hover:text-[#E8B92C] transition-colors">
                Contact Us
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer so content isn't hidden behind fixed nav */}
      <div className="h-[72px]" />
    </>
  );
}
