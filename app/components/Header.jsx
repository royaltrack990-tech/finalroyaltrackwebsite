'use client';

import React, { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50" style={{ background: 'rgba(0,0,0,0.95)' }}>
      <div className="max-w-[1600px] mx-auto px-6 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/images/roya_track_final_logo.png"
              alt="Royal Track"
              className="h-28 w-auto"
            />
            <div className="hidden md:flex flex-col">
              <span className="text-white text-base font-bold">
                Building & Contracting L.L.C
              </span>
              <span className="text-[#E8B92C] text-base font-bold" dir="rtl">
                رويال تراك للمقاولات البناء ش.ذ.م.م
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            <Link href="/" className="text-white hover:text-[#E8B92C] text-sm font-medium uppercase tracking-wider transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#E8B92C] text-sm font-medium uppercase tracking-wider transition-colors">
              About
            </Link>
            <Link href="/services" className="text-white hover:text-[#E8B92C] text-sm font-medium uppercase tracking-wider transition-colors">
              Services
            </Link>
            <Link href="/projects" className="text-white hover:text-[#E8B92C] text-sm font-medium uppercase tracking-wider transition-colors">
              Projects
            </Link>
            <Link href="/#contact" className="px-6 py-2.5 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full">
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white p-2"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-white/10 pt-4">
            <div className="flex flex-col gap-4">
              <Link href="/" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#E8B92C] text-sm font-medium uppercase tracking-wider">
                Home
              </Link>
              <Link href="/about" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#E8B92C] text-sm font-medium uppercase tracking-wider">
                About
              </Link>
              <Link href="/services" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#E8B92C] text-sm font-medium uppercase tracking-wider">
                Services
              </Link>
              <Link href="/projects" onClick={() => setMobileMenuOpen(false)} className="text-white hover:text-[#E8B92C] text-sm font-medium uppercase tracking-wider">
                Projects
              </Link>
              <Link href="/#contact" onClick={() => setMobileMenuOpen(false)} className="inline-block px-6 py-2.5 bg-[#E8B92C] text-stone-900 text-sm font-bold uppercase tracking-wider rounded-full text-center">
                Get Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
