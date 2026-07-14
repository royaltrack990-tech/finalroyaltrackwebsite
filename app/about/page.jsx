import React from "react";
import Link from "next/link";
import InquiryForm from '../components/InquiryForm';

export const metadata = {
  title: 'About Royal Track | Construction & Contracting',
  description: 'Learn about Royal Track - Premium construction services in Dubai & UAE',
  alternates: {
    canonical: 'https://royaltrack.ae/about',
  },
};

const IMG = {
  royal_tech_group: '/images/royal_tech_group_logo.png',
  royal_tech_ofs: '/images/royal_tech_ofs_logo.png',
  royal_tech_ogt: '/images/royal_tech_ogt_logo.png',
  royal_tech_igt: '/images/royal_tech_igt_logo.png',
};

export default function About() {
  return (
    <div className="bg-stone-50 text-stone-900 overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-stone-900 to-stone-50 text-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12 text-center">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About <span className="gold-gradient">Royal Track</span>
          </h1>
          <p className="text-lg text-white/80 max-w-2xl mx-auto">
            Premium construction and contracting services built on excellence
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-stone-50">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">
              OUR STORY
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">
              Built on <span className="gold-gradient">Excellence</span>
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <p className="text-stone-700 text-lg leading-relaxed mb-6">
              At <strong>Royal Track Building & Contracting L.L.C</strong>, a proud subsidiary of{' '}
              <Link href="https://royal-techgroup.com/" target="_blank" rel="noopener noreferrer" className="text-[#E8B92C] font-bold hover:text-[#C9831A]">
                Royal Tech Group
              </Link>
              , we have established ourselves as a leader in premium construction and contracting services across the United Arab Emirates.
            </p>
            <p className="text-stone-700 text-lg leading-relaxed mb-6">
              With years of experience and a commitment to excellence, we deliver comprehensive solutions in interior fit-out, pools & landscaping, and turnkey projects that exceed expectations.
            </p>
            <p className="text-stone-700 text-lg leading-relaxed">
              Our team combines innovative design, superior craftsmanship, and meticulous attention to detail to transform visions into reality.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E8B92C] to-[#C9831A] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Excellence</h3>
              <p className="text-stone-600">
                We maintain the highest standards in every project, ensuring superior quality and attention to detail.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E8B92C] to-[#C9831A] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🤝</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Integrity</h3>
              <p className="text-stone-600">
                We build long-term relationships through transparency, honesty, and reliable service.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#E8B92C] to-[#C9831A] flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💡</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3">Innovation</h3>
              <p className="text-stone-600">
                We embrace modern techniques and creative solutions to deliver exceptional results.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Slider */}
      <section className="py-16 bg-stone-100">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <span className="text-[#C9831A] text-xs font-bold uppercase tracking-[0.3em]">
              OUR PARTNERS
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-stone-900 mt-4">
              Part of <span className="gold-gradient">Royal Tech Group</span>
            </h2>
          </div>
          <div className="relative overflow-hidden py-8">
            <div className="flex animate-scroll-continuous">
              {[...Array(3)].map((_, setIndex) => (
                <div key={setIndex} className="flex gap-12 px-6">
                  {[IMG.royal_tech_group, IMG.royal_tech_ofs, IMG.royal_tech_ogt, IMG.royal_tech_igt].map((logo, idx) => (
                    <div
                      key={idx}
                      className="flex-shrink-0 w-56 h-36 flex items-center justify-center bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow"
                    >
                      <img src={logo} alt="Partner Logo" className="max-w-[85%] max-h-[85%] object-contain" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <InquiryForm />
    </div>
  );
}
