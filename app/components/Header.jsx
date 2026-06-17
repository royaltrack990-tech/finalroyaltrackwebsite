'use client';

import React, { useState } from "react";
import Link from "next/link";

const EmailIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M22 6l-10 7L2 6" />
  </svg>
);
const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
  </svg>
);
const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
  </svg>
);
const LinkedInIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);
const XIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);
const TikTokIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z"/>
  </svg>
);

const socialLinks = [
  { name: 'Email', href: 'mailto:Info@royaltrack.ae', icon: <EmailIcon /> },
  { name: 'Facebook', href: 'https://www.facebook.com/royaltrackcontractingllc', icon: <FacebookIcon /> },
  { name: 'Instagram', href: 'https://www.instagram.com/royal.track.ae/', icon: <InstagramIcon /> },
  { name: 'LinkedIn', href: 'https://www.linkedin.com/company/royal-track-building-contracting-llc/', icon: <LinkedInIcon /> },
  { name: 'TikTok', href: 'https://www.tiktok.com/@royaltrack.ae?_r=1&_t=ZS-96BMgvj2qCw', icon: <TikTokIcon /> },
];

const serviceItems = [
  'Interior Renovation', 'Exterior Renovation', 'Pool Construction',
  'Landscaping & Gardens', 'Turnkey Solutions', 'Aluminum Work',
  'Pergola & Shade Structures', 'Electrical Works', 'AC & Ducting',
  'Fencing & Gates', 'Waterproofing', 'Flooring & Tiling',
  'Painting & Finishing', 'MEP Works', 'Plants Sale & Supply',
  'Irrigation Systems', 'Outdoor Lighting', 'Civil Works',
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const IMG = { logo: '/images/roya_track_full_logo.png' };

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/projects' },
    { label: 'Contact', href: '/#contact' },
  ];

  return (
    <>
      {/* ── MAIN NAV ── */}
      <nav
        className="fixed top-0 left-0 right-0 z-40"
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(232, 185, 44, 0.3)',
        }}
      >
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-2 flex items-center justify-between">
          {/* Logo - light background patch behind it so it's visible on dark header */}
          <Link href="/" className="flex items-center gap-3 group flex-shrink-0">
            <div className="bg-white rounded-xl px-3 py-1.5 shadow-md">
              <img
                src={IMG.logo}
                alt="Royal Track Logo"
                className="h-12 w-auto object-contain"
                style={{ imageRendering: 'auto' }}
                width={603}
                height={556}
              />
            </div>
          </Link>

          {/* Desktop Nav - elegant spaced serif style */}
          <div className="hidden lg:flex items-center gap-10">
            {navItems.slice(0, 1).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-display text-[13px] font-medium uppercase tracking-[0.22em] text-stone-300 hover:text-[#E8B92C] transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}

            {/* Services Mega Menu */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="font-display text-[13px] font-medium uppercase tracking-[0.22em] text-stone-300 hover:text-[#E8B92C] transition-all duration-300 flex items-center gap-1.5">
                Services
                <svg
                  width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  className={`transition-transform duration-300 ${servicesOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-3 w-[680px] bg-white rounded-2xl shadow-2xl transition-all duration-300 origin-top ${
                  servicesOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-2'
                }`}
              >
                <div className="grid grid-cols-3 gap-1 p-6">
                  {serviceItems.map((service) => (
                    <Link
                      key={service}
                      href="/services"
                      className="flex items-center gap-2 px-3 py-2.5 rounded-lg hover:bg-stone-50 transition-colors group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8B92C] flex-shrink-0" />
                      <span className="text-stone-700 text-sm font-medium group-hover:text-[#C9831A] transition-colors leading-tight">
                        {service}
                      </span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-stone-100 px-6 py-4 text-center">
                  <Link href="/services" className="text-[#C9831A] text-sm font-bold uppercase tracking-wider hover:text-[#E8B92C]">
                    View All Services →
                  </Link>
                </div>
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="font-display text-[13px] font-medium uppercase tracking-[0.22em] text-stone-300 hover:text-[#E8B92C] transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}

            <Link
              href="/#contact"
              className="flex items-center gap-2 px-6 py-2.5 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 transition-all duration-300 text-[11px] font-bold uppercase tracking-[0.18em] rounded-full shadow-lg hover:shadow-xl hover:scale-105"
            >
              Get Quote →
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
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-white text-base font-medium uppercase tracking-widest hover:text-[#E8B92C] transition-colors">
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-white text-base font-medium uppercase tracking-widest hover:text-[#E8B92C] transition-colors">
                About
              </Link>

              <div>
                <p className="text-white text-base font-medium uppercase tracking-widest mb-3">Services</p>
                <div className="grid grid-cols-1 gap-2 pl-2 max-h-[220px] overflow-y-auto">
                  {serviceItems.map((service) => (
                    <Link
                      key={service}
                      href="/services"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 text-white/70 text-sm hover:text-[#E8B92C] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8B92C]" /> {service}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block text-white text-base font-medium uppercase tracking-widest hover:text-[#E8B92C] transition-colors">
                Portfolio
              </Link>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block text-white text-base font-medium uppercase tracking-widest hover:text-[#E8B92C] transition-colors">
                Contact
              </Link>

              <div className="pt-4 border-t border-[#E8B92C]/20">
                <p className="text-[#E8B92C]/60 text-xs font-bold uppercase tracking-widest mb-3">Follow Us</p>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.name}
                      className="w-8 h-8 flex items-center justify-center rounded-md border border-white/20 text-white/70 hover:text-[#E8B92C] hover:border-[#E8B92C] transition-all"
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer so page content isn't hidden behind fixed header */}
      <div className="h-[72px]" />
    </>
  );
}
