'use client';

import { useState } from 'react';

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
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', message: '' });
        setTimeout(() => setStatus(''), 4000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section className="py-20 bg-stone-900">
      <div className="max-w-4xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-12">
          <span className="text-[#E8B92C] text-xs font-bold uppercase tracking-[0.3em]">
            GET IN TOUCH
          </span>
          <h2 className="font-display text-4xl md:text-5xl text-white mt-4 mb-4">
            Send Us An <span style={{background: 'linear-gradient(135deg, #F5D547 0%, #E8B92C 50%, #C9831A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Inquiry</span>
          </h2>
          <p className="text-white/70 text-base">
            Have a project in mind? Fill out the form below and we'll get back to you shortly.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-white/80 text-sm mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#E8B92C] transition-colors"
                placeholder="Your full name"
              />
            </div>

            <div>
              <label className="block text-white/80 text-sm mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#E8B92C] transition-colors"
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div>
            <label className="block text-white/80 text-sm mb-2">Phone *</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#E8B92C] transition-colors"
              placeholder="+971 XX XXX XXXX"
            />
          </div>

          <div>
            <label className="block text-white/80 text-sm mb-2">Message *</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/40 focus:outline-none focus:border-[#E8B92C] transition-colors resize-none"
              placeholder="Tell us about your project..."
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              disabled={status === 'sending'}
              className="px-10 py-4 bg-[#E8B92C] hover:bg-[#C9831A] text-stone-900 text-sm font-bold uppercase tracking-wider transition-all duration-300 rounded-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'sending' ? 'SENDING...' : 'SUBMIT INQUIRY'}
            </button>
          </div>

          {status === 'success' && (
            <div className="text-center p-4 bg-green-500/20 border border-green-500/50 rounded-lg text-green-400">
              ✓ Thank you! Your inquiry has been sent successfully.
            </div>
          )}

          {status === 'error' && (
            <div className="text-center p-4 bg-red-500/20 border border-red-500/50 rounded-lg text-red-400">
              ✗ Sorry, something went wrong. Please email us directly at Info@royaltrack.ae
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
