import React, { useState } from 'react';
import { Send, CheckCircle, Sparkles } from 'lucide-react';

export const WhatsAppOptin: React.FC = () => {
  const [contact, setContact] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contact.trim()) return;
    setSubmitted(true);
  };

  return (
    <section className="py-16 bg-[#F7F5ED] border-b border-[#18392D]/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#15583F] text-[#F7F5ED] rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden text-center space-y-6">
          
          {/* Subtle background ambient graphic */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#B89A60]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89A60] bg-[#F7F5ED]/10 px-3 py-1 rounded-full">
            <Sparkles className="w-3.5 h-3.5 text-[#B89A60]" />
            <span>Join The Shruveda Circle</span>
          </div>

          <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold tracking-tight text-[#F7F5ED]">
            Receive Seasonal Herbal Guides & Ritual Tips
          </h2>

          <p className="text-xs sm:text-sm text-[#DCE5D7] max-w-xl mx-auto leading-relaxed font-normal">
            Subscribe to our monthly botanical newsletter or WhatsApp updates for seasonal Ayurvedic dinacharya advice, exclusive small-batch release previews, and wellness guides.
          </p>

          {submitted ? (
            <div className="bg-[#F7F5ED] text-[#15583F] p-4 rounded-xl max-w-md mx-auto flex items-center justify-center gap-2 text-xs font-bold animate-in fade-in">
              <CheckCircle className="w-5 h-5 text-[#15583F]" />
              <span>Welcome to the Shruveda Circle! We've saved your subscription preference.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
              <input
                type="text"
                placeholder="Enter Email or WhatsApp Number"
                value={contact}
                onChange={(e) => setContact(e.target.value)}
                required
                className="flex-1 bg-[#F7F5ED] text-[#18392D] placeholder-[#18392D]/50 px-4 py-3 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-[#B89A60]"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-[#B89A60] hover:bg-[#a38650] text-[#18392D] text-xs font-bold rounded-xl transition-colors flex items-center justify-center gap-2 shrink-0"
              >
                <span>Subscribe</span>
                <Send className="w-3.5 h-3.5" />
              </button>
            </form>
          )}

          <p className="text-[11px] text-[#DCE5D7]/70">
            We value your privacy. No spam, only mindful herbal wisdom. Unsubscribe anytime.
          </p>

        </div>
      </div>
    </section>
  );
};
