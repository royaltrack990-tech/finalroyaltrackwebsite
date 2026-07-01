'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";

const EmailIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 6l-10 7L2 6" /></svg>);
const FacebookIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>);
const InstagramIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>);
const LinkedInIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>);
const TikTokIcon = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.18 8.18 0 004.79 1.52V6.76a4.85 4.85 0 01-1.02-.07z"/></svg>);

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
  const [scrolled, setScrolled] = useState(false);
  const IMG = { logo: '/images/roya_track_full_logo.png' };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Portfolio', href: '/projects' },
  ];

  return (
    <>
      {/* ── FLOATING PILL HEADER ── */}
      <nav className="fixed top-0 left-0 right-0 z-40 px-4 lg:px-8 pt-4">
        <div
          className={`max-w-[1500px] mx-auto flex items-center justify-between px-5 lg:px-8 py-2 rounded-full transition-all duration-500 ${
            scrolled
              ? 'bg-white/95 backdrop-blur-xl shadow-xl shadow-black/5 border border-stone-200/60'
              : 'bg-white/80 backdrop-blur-lg shadow-lg shadow-black/5 border border-stone-200/40'
          }`}
        >
          {/* LEFT — Logo + Company Name */}
          <Link href="/" className="flex items-center gap-2.5 group flex-shrink-0">
            <img
              src={IMG.logo}
              alt="Royal Track Logo"
              className="h-12 w-auto object-contain"
              width={603}
              height={556}
            />
            <div className="leading-tight hidden sm:block">
              <div className="font-display text-sm font-bold tracking-wide text-stone-900">ROYAL TRACK</div>
              <div className="text-[9px] font-semibold uppercase tracking-[0.08em] text-[#C9831A]">Building & Contracting L.L.C</div>
              <div className="text-[9px] font-semibold tracking-wide text-[#C9831A]" dir="rtl">رويال تراك للمقاولات</div>
            </div>
          </Link>

          {/* CENTER — Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.slice(0, 1).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium text-stone-700 hover:text-[#C9831A] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}

            {/* Services dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              <button className="text-[13px] font-medium text-stone-700 hover:text-[#C9831A] transition-colors duration-200 flex items-center gap-1">
                Services
                <svg
                  width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                  className={`transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M6 9l6 6 6-6" />
                </svg>
              </button>

              <div
                className={`absolute left-1/2 -translate-x-1/2 top-full mt-4 w-[660px] bg-white rounded-2xl shadow-2xl shadow-black/10 border border-stone-100 transition-all duration-300 origin-top ${
                  servicesOpen ? 'opacity-100 visible scale-100 translate-y-0' : 'opacity-0 invisible scale-95 -translate-y-2'
                }`}
              >
                <div className="grid grid-cols-3 gap-1 p-5">
                  {serviceItems.map((service) => (
                    <Link
                      key={service}
                      href={service === 'Interior Renovation' ? '/interior-renovation' : '/services'}
                      className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-stone-50 transition-colors group"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#E8B92C] flex-shrink-0" />
                      <span className="text-stone-600 text-[13px] group-hover:text-[#C9831A] transition-colors">{service}</span>
                    </Link>
                  ))}
                </div>
                <div className="border-t border-stone-100 px-5 py-3 text-center">
                  <Link href="/services" className="text-[#C9831A] text-xs font-bold uppercase tracking-wider hover:text-[#E8B92C]">View All Services →</Link>
                </div>
              </div>
            </div>

            {navItems.slice(1).map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-[13px] font-medium text-stone-700 hover:text-[#C9831A] transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* RIGHT — Social icons + Contact button */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              href="/#contact"
              className="px-5 py-2 bg-stone-900 hover:bg-[#C9831A] text-white text-[12px] font-semibold uppercase tracking-wider rounded-full transition-all duration-300 hover:shadow-lg"
            >
              Contact us
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-stone-700"
            aria-label="Toggle menu"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {mobileMenuOpen ? <path d="M6 6l12 12M6 18L18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
            </svg>
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden mx-4 mt-2 bg-white rounded-2xl shadow-2xl border border-stone-100 max-h-[80vh] overflow-y-auto">
            <div className="px-6 py-5 space-y-3">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="block text-stone-800 text-sm font-medium py-2 hover:text-[#C9831A]">Home</Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="block text-stone-800 text-sm font-medium py-2 hover:text-[#C9831A]">About</Link>

              <div className="py-2">
                <p className="text-stone-900 text-sm font-semibold mb-2">Services</p>
                <div className="grid grid-cols-1 gap-1 pl-2 max-h-[200px] overflow-y-auto">
                  {serviceItems.map((service) => (
                    <Link
                      key={service}
                      href={service === 'Interior Renovation' ? '/interior-renovation' : '/services'}
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex items-center gap-2 text-stone-500 text-[13px] py-1 hover:text-[#C9831A]"
                    >
                      <span className="w-1 h-1 rounded-full bg-[#E8B92C]" /> {service}
                    </Link>
                  ))}
                </div>
              </div>

              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="block text-stone-800 text-sm font-medium py-2 hover:text-[#C9831A]">Portfolio</Link>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="block text-stone-800 text-sm font-medium py-2 hover:text-[#C9831A]">Contact</Link>

              <div className="pt-3 border-t border-stone-100 flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.name} className="w-8 h-8 flex items-center justify-center rounded-full border border-stone-200 text-stone-400 hover:text-[#C9831A] hover:border-[#C9831A] transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Spacer */}
      <div className="h-[80px]" />
    </>
  );
}
