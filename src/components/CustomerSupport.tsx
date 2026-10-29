import React, { useState } from 'react';
import { PhoneCall, Truck, ShieldCheck, Instagram, Search, PackageCheck, UserCheck, CheckCircle2 } from 'lucide-react';
import { BRAND_ASSETS } from '../data/products';

export const CustomerSupport: React.FC = () => {
  const [orderQuery, setOrderQuery] = useState('');
  const [trackingResult, setTrackingResult] = useState<null | {
    id: string;
    status: string;
    carrier: string;
    eta: string;
  }>(null);

  const handleTrackOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!orderQuery.trim()) return;

    setTrackingResult({
      id: orderQuery.toUpperCase(),
      status: 'Dispatched — In Transit via Express Courier',
      carrier: 'Bluedart Express',
      eta: 'Delivery Expected in 2–3 Days',
    });
  };

  return (
    <section id="support" className="py-16 bg-[#EFEEE5] scroll-mt-16 border-b border-[#18392D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto space-y-2 mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#B89A60]">
            Trusted Quality & Direct Consultation
          </span>
          <h2 className="font-serif-brand text-3xl sm:text-4xl font-bold text-[#18392D]">
            Founded by {BRAND_ASSETS.founder}
          </h2>
          <p className="text-xs sm:text-sm text-[#18392D]/75">
            Shruveda is dedicated to providing organic, vegan, and chemical-free Ayurvedic products that actually work!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 text-left">
          
          {/* Card 1: Direct Founder & WhatsApp Orders */}
          <div className="bg-[#F7F5ED] p-6 rounded-2xl border border-[#18392D]/10 shadow-xs flex flex-col justify-between space-y-4">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-full bg-[#15583F] text-[#F7F5ED] flex items-center justify-center">
                <UserCheck className="w-5 h-5 text-[#B89A60]" />
              </div>
              <h3 className="font-serif-brand text-lg font-bold text-[#18392D]">
                Order via WhatsApp or Call
              </h3>
              <p className="text-xs text-[#18392D]/75 leading-relaxed">
                Connect directly with <strong>{BRAND_ASSETS.founder}</strong> for custom hair or skin consultation and fast order placement.
              </p>
              
              <div className="space-y-1 text-xs">
                <p className="font-bold text-[#15583F] flex items-center gap-1.5">
                  <PhoneCall className="w-3.5 h-3.5 text-[#B89A60]" />
                  <span>Call / WhatsApp: +91 {BRAND_ASSETS.phone}</span>
                </p>
                <p className="text-[#18392D]/70 flex items-center gap-1.5">
                  <Instagram className="w-3.5 h-3.5 text-[#B89A60]" />
                  <a
                    href={BRAND_ASSETS.instagramUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="hover:underline font-medium text-[#15583F]"
                  >
                    Instagram: {BRAND_ASSETS.instagram}
                  </a>
                </p>
              </div>
            </div>

            <a
              href={BRAND_ASSETS.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full py-3 bg-[#15583F] hover:bg-[#18392D] text-[#F7F5ED] text-xs font-bold rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" />
              <span>Chat on WhatsApp (+91 {BRAND_ASSETS.phone})</span>
            </a>
          </div>

          {/* Card 2: Order Tracking */}
          <div className="bg-[#F7F5ED] p-6 rounded-2xl border border-[#18392D]/10 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#15583F] text-[#F7F5ED] flex items-center justify-center">
              <Truck className="w-5 h-5 text-[#B89A60]" />
            </div>
            <h3 className="font-serif-brand text-lg font-bold text-[#18392D]">
              Track Your Package
            </h3>
            <p className="text-xs text-[#18392D]/75">
              Enter your Shruveda Order ID (e.g., <code className="bg-[#EFEEE5] px-1 py-0.5 rounded font-mono text-[#15583F]">SV-1082</code>) to view live dispatch status.
            </p>

            <form onSubmit={handleTrackOrder} className="flex gap-2">
              <input
                type="text"
                placeholder="Order ID (e.g. SV-1082)"
                value={orderQuery}
                onChange={(e) => setOrderQuery(e.target.value)}
                className="flex-1 bg-[#EFEEE5] border border-[#18392D]/20 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#15583F]"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-[#15583F] text-[#F7F5ED] text-xs font-semibold rounded-lg hover:bg-[#18392D] transition-colors flex items-center gap-1"
              >
                <Search className="w-3.5 h-3.5" />
                <span>Track</span>
              </button>
            </form>

            {trackingResult && (
              <div className="p-3 bg-[#DCE5D7]/50 rounded-lg border border-[#15583F]/20 text-xs space-y-1 animate-in fade-in">
                <div className="flex items-center gap-1.5 font-bold text-[#15583F]">
                  <PackageCheck className="w-4 h-4" />
                  <span>Order #{trackingResult.id} Status:</span>
                </div>
                <p className="text-[#18392D] font-medium">{trackingResult.status}</p>
                <p className="text-[11px] text-[#18392D]/70">{trackingResult.carrier} · {trackingResult.eta}</p>
              </div>
            )}
          </div>

          {/* Card 3: Quality Guarantees */}
          <div className="bg-[#F7F5ED] p-6 rounded-2xl border border-[#18392D]/10 shadow-xs space-y-4">
            <div className="w-10 h-10 rounded-full bg-[#15583F] text-[#F7F5ED] flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-[#B89A60]" />
            </div>
            <h3 className="font-serif-brand text-lg font-bold text-[#18392D]">
              Guaranteed Purity & Standards
            </h3>
            
            <ul className="space-y-2.5 text-xs text-[#18392D]/80">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#15583F] shrink-0 mt-0.5" />
                <span><strong>100% Organic, Vegan & Cruelty-Free</strong> formulas without harsh parabens or sulfates.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#15583F] shrink-0 mt-0.5" />
                <span><strong>Sneha Kalpana & Traditional Extraction</strong> for max potency.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#15583F] shrink-0 mt-0.5" />
                <span><strong>Pan-India Express Shipping & Cash on Delivery (COD)</strong> available.</span>
              </li>
            </ul>
          </div>

        </div>

      </div>
    </section>
  );
};
