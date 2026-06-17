'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-stone-900 text-white shadow-lg">
      {/* Top Bar */}
      <div className="bg-[#E8B92C] text-stone-900 text-xs font-bold uppercase tracking-widest py-2 px-6">
        Building Excellence Across the UAE
      </div>

      {/* Main Header */}
      <nav className="max-w-[1600px] mx-auto px-6 lg:px-12 py-3 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 flex-shrink-0">
          <div className="w-10 h-10 bg-[#E8B92C] rounded-full flex items-center justify-center font-bold text-stone-900 text-lg">
            RT
          </div>
          <div className="hidden sm:block">
            <div className="font-bold text-sm leading-tight">ROYAL TRACK</div>
            <div className="text-xs text-[#E8B92C]">Building & Contracting</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-8">
          <Link href="/" className="text-white hover:text-[#E8B92C] transition-colors text-sm font-medium">
            Home
          </Link>
          <div className="group relative">
            <button className="text-white hover:text-[#E8B92C] transition-colors text-sm font-medium flex items-center gap-1">
              Services
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </button>
            {/* Dropdown Menu */}
            <div className="absolute left-0 mt-0 w-48 bg-stone-800 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 py-2">
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#E8B92C] hover:text-stone-900 transition-colors">
                Interior Fit-Out
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#E8B92C] hover:text-stone-900 transition-colors">
                Pools & Landscaping
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#E8B92C] hover:text-stone-900 transition-colors">
                Turnkey Solutions
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#E8B92C] hover:text-stone-900 transition-colors">
                Waterproofing
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#E8B92C] hover:text-stone-900 transition-colors">
                Electrical Works
              </a>
              <a href="#" className="block px-4 py-2 text-sm text-white hover:bg-[#E8B92C] hover:text-stone-900 transition-colors">
                MEP Works
              </a>
            </div>
          </div>
          <Link href="/about" className="text-white hover:text-[#E8B92C] transition-colors text-sm font-medium">
            About
          </Link>
          <Link href="/projects" className="text-white hover:text-[#E8B92C] transition-colors text-sm font-medium">
            Portfolio
          </Link>
          <a href="#contact" className="text-white hover:text-[#E8B92C] transition-colors text-sm font-medium">
            Contact
          </a>
        </div>

        {/* CTA Button + Mobile Menu */}
        <div className="flex items-center gap-4">
          <Link href="#contact" className="hidden md:inline-block px-6 py-2 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-xs font-bold uppercase tracking-wider rounded-full transition-all">
            GET QUOTE
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-white hover:text-[#E8B92C] transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-stone-800 border-t border-stone-700 py-4 px-6 space-y-4 animate-in fade-in duration-300">
          <Link href="/" className="block text-white hover:text-[#E8B92C] transition-colors py-2">
            Home
          </Link>
          <div>
            <p className="text-white font-bold text-sm mb-2">Services</p>
            <div className="space-y-2 pl-4">
              <a href="#" className="block text-white/80 hover:text-[#E8B92C] text-sm transition-colors">
                Interior Fit-Out
              </a>
              <a href="#" className="block text-white/80 hover:text-[#E8B92C] text-sm transition-colors">
                Pools & Landscaping
              </a>
              <a href="#" className="block text-white/80 hover:text-[#E8B92C] text-sm transition-colors">
                Turnkey Solutions
              </a>
              <a href="#" className="block text-white/80 hover:text-[#E8B92C] text-sm transition-colors">
                Waterproofing
              </a>
              <a href="#" className="block text-white/80 hover:text-[#E8B92C] text-sm transition-colors">
                Electrical Works
              </a>
              <a href="#" className="block text-white/80 hover:text-[#E8B92C] text-sm transition-colors">
                MEP Works
              </a>
            </div>
          </div>
          <Link href="/about" className="block text-white hover:text-[#E8B92C] transition-colors py-2">
            About
          </Link>
          <Link href="/projects" className="block text-white hover:text-[#E8B92C] transition-colors py-2">
            Portfolio
          </Link>
          <a href="#contact" className="block text-white hover:text-[#E8B92C] transition-colors py-2">
            Contact
          </a>
          <Link href="#contact" className="block text-center px-6 py-2 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-xs font-bold uppercase tracking-wider rounded-full transition-all mt-4">
            GET QUOTE
          </Link>
        </div>
      )}
    </header>
  );
}
