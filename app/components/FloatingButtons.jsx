'use client';

import React, { useState } from 'react';

export default function FloatingButtons() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <>
      {/* Desktop Floating CTA */}
      <div className="hidden md:fixed bottom-8 right-8 z-40 flex flex-col gap-3 items-end animate-in fade-in slide-in-from-bottom-5 duration-500">
        
        {/* Main CTA Button - Animated Pulse */}
        <div className="relative">
          <div className="absolute inset-0 bg-[#E8B92C] rounded-full animate-pulse opacity-30"></div>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="relative w-16 h-16 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 rounded-full flex items-center justify-center shadow-2xl font-bold text-2xl transition-all duration-300 transform hover:scale-110 active:scale-95"
            aria-label="Contact us"
          >
            <span className={`transition-all duration-300 ${isExpanded ? 'opacity-0 scale-0' : 'opacity-100 scale-100'}`}>
              +
            </span>
            <span className={`absolute transition-all duration-300 ${isExpanded ? 'opacity-100 scale-100' : 'opacity-0 scale-0'}`}>
              ×
            </span>
          </button>
        </div>

        {/* Expanded Options */}
        <div className={`flex flex-col gap-3 transition-all duration-300 ${isExpanded ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
          
          {/* WhatsApp Button */}
          <a
            href="https://wa.me/971552824492"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
            aria-label="Chat on WhatsApp"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.718.738 5.33 2.141 7.57l-2.27 6.59c-.289.848.098 1.778.955 1.778.18 0 .356-.027.529-.08l6.619-2.195c2.222 1.275 4.745 1.948 7.338 1.948 5.537 0 10.037-4.466 10.037-9.98 0-2.667-.738-5.165-2.141-7.312-1.403-2.147-3.4-3.945-5.823-5.041-2.424-1.097-5.124-1.686-7.975-1.686l-.005-.003z" />
            </svg>
            <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-stone-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              WhatsApp
            </span>
          </a>

          {/* Phone Call Button */}
          <a
            href="tel:+97143934374"
            className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
            aria-label="Call us"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
            </svg>
            <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-stone-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Call Now
            </span>
          </a>

          {/* Email Button */}
          <a
            href="mailto:Info@royaltrack.ae"
            className="w-14 h-14 bg-orange-600 hover:bg-orange-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
            aria-label="Email us"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
            </svg>
            <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-stone-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Email
            </span>
          </a>

          {/* Instagram Button */}
          <a
            href="https://instagram.com/royal.track.ae"
            target="_blank"
            rel="noopener noreferrer"
            className="w-14 h-14 bg-pink-600 hover:bg-pink-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95 group relative"
            aria-label="Follow on Instagram"
          >
            <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.057-1.645.069-4.849.069-3.204 0-3.584-.012-4.849-.069-3.259-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-stone-900 text-white text-xs rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity">
              Instagram
            </span>
          </a>
        </div>
      </div>

      {/* Mobile Floating Button (simpler version) */}
      <div className="md:hidden fixed bottom-6 right-6 z-40 flex flex-col gap-3 items-end">
        <a
          href="https://wa.me/971552824492"
          className="w-14 h-14 bg-green-500 hover:bg-green-600 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Chat on WhatsApp"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.67-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.076 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421-7.403h-.004a9.87 9.87 0 00-9.746 9.798c0 2.718.738 5.33 2.141 7.57l-2.27 6.59c-.289.848.098 1.778.955 1.778.18 0 .356-.027.529-.08l6.619-2.195c2.222 1.275 4.745 1.948 7.338 1.948 5.537 0 10.037-4.466 10.037-9.98 0-2.667-.738-5.165-2.141-7.312-1.403-2.147-3.4-3.945-5.823-5.041-2.424-1.097-5.124-1.686-7.975-1.686l-.005-.003z" />
          </svg>
        </a>
        <a
          href="tel:+97143934374"
          className="w-14 h-14 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center shadow-lg transition-all duration-300 transform hover:scale-110 active:scale-95"
          aria-label="Call us"
        >
          <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
          </svg>
        </a>
      </div>
    </>
  );
}
