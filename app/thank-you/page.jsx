'use client';

import React from "react";
import Link from "next/link";

export default function ThankYouPage() {
  return (
    <div className="bg-stone-50 text-stone-900 min-h-screen flex items-center justify-center py-20 px-6">
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
        body { font-family: 'Inter', sans-serif; }
        .font-display { font-family: 'Playfair Display', serif; }
        .gold-gradient {
          background: linear-gradient(135deg, #F5D547 0%, #E8B92C 50%, #C9831A 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes scaleIn {
          0% { transform: scale(0); opacity: 0; }
          50% { transform: scale(1.1); }
          100% { transform: scale(1); opacity: 1; }
        }

        @keyframes fadeInUp {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        .animate-scaleIn {
          animation: scaleIn 0.6s ease-out;
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.8s ease-out 0.3s both;
        }
      `}</style>

      <div className="max-w-3xl mx-auto text-center mt-20">
        {/* Success Icon */}
        <div className="animate-scaleIn inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-[#E8B92C] to-[#C9831A] mb-8 shadow-2xl">
          <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12"></polyline>
          </svg>
        </div>

        {/* Thank You Message */}
        <div className="animate-fadeInUp">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-[#E8B92C]" />
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">INQUIRY RECEIVED</span>
            <span className="w-12 h-px bg-[#E8B92C]" />
          </div>

          <h1 className="font-display text-4xl md:text-6xl font-bold text-stone-900 mb-4">
            Thank <span className="gold-gradient">You!</span>
          </h1>

          <p className="text-stone-700 text-lg md:text-xl leading-relaxed mb-3">
            Your inquiry has been successfully submitted.
          </p>

          <p className="text-stone-600 text-base leading-relaxed mb-10 max-w-2xl mx-auto">
            Our team will review your request and get back to you within <strong className="text-[#E8B92C]">24 hours</strong>. 
            We appreciate your interest in <strong>Royal Track Building & Contracting L.L.C</strong>.
          </p>

          {/* Contact Info */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-10 border border-stone-200">
            <h3 className="font-display text-xl font-bold text-stone-900 mb-6">
              Need Immediate Assistance?
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <a href="tel:+97143934374" className="flex items-center gap-3 p-4 rounded-xl bg-stone-50 hover:bg-[#E8B92C]/10 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-[#E8B92C] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-stone-500 uppercase tracking-wider font-bold">Call Us</div>
                  <div className="text-stone-900 font-semibold">+971 4 393 4374</div>
                </div>
              </a>

              <a href="https://wa.me/971552824492" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 p-4 rounded-xl bg-stone-50 hover:bg-green-50 transition-colors group">
                <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div className="text-left">
                  <div className="text-xs text-stone-500 uppercase tracking-wider font-bold">WhatsApp</div>
                  <div className="text-stone-900 font-semibold">+971 5 5282 4492</div>
                </div>
              </a>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/" className="inline-flex items-center gap-2 px-8 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-bold uppercase tracking-wider transition-all rounded-full shadow-lg hover:scale-105">
              ← BACK TO HOME
            </Link>
            <Link href="/projects" className="inline-flex items-center gap-2 px-8 py-4 border-2 border-stone-900 text-stone-900 hover:bg-stone-900 hover:text-white text-sm font-bold uppercase tracking-wider transition-all rounded-full">
              VIEW OUR PROJECTS
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
