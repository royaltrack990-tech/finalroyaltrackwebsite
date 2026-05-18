'use client';

import React, { useState } from "react";

export default function InquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('/api/inquiry', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Redirect to thank you page
        window.location.href = '/thank-you';
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-stone-900 text-white">
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
      `}</style>

      <div className="max-w-[1600px] mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-[#E8B92C]" />
            <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">SEND INQUIRY</span>
            <span className="w-12 h-px bg-[#E8B92C]" />
          </div>
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            Let's Discuss Your <span className="gold-gradient">Project</span>
          </h2>
          <p className="text-white/70 text-sm max-w-2xl mx-auto leading-relaxed">
            Fill out the form below and our team will get back to you within 24 hours
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 md:p-10 space-y-6">
            
            {/* Name Field */}
            <div>
              <label className="block text-[#E8B92C] text-xs font-bold uppercase tracking-wider mb-2">
                Your Name *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your full name"
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#E8B92C] transition-colors"
              />
            </div>

            {/* Email & Phone Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#E8B92C] text-xs font-bold uppercase tracking-wider mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#E8B92C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-[#E8B92C] text-xs font-bold uppercase tracking-wider mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+971 5X XXX XXXX"
                  className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#E8B92C] transition-colors"
                />
              </div>
            </div>

            {/* Message Field */}
            <div>
              <label className="block text-[#E8B92C] text-xs font-bold uppercase tracking-wider mb-2">
                Your Message *
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Tell us about your project requirements..."
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#E8B92C] transition-colors resize-none"
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full px-8 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-bold uppercase tracking-wider transition-all rounded-full shadow-lg hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {status === 'sending' ? 'SENDING...' : 'SEND INQUIRY →'}
              </button>
            </div>

            {/* Error Message */}
            {status === 'error' && (
              <div className="p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-center">
                <p className="text-red-200 text-sm">
                  ❌ Something went wrong. Please try again or contact us directly.
                </p>
              </div>
            )}

          </form>
        </div>
      </div>
    </section>
  );
}
