import React from 'react';
import { ArrowRight, ShieldCheck, Sparkles, Feather } from 'lucide-react';
import { BRAND_ASSETS } from '../data/products';

export const Hero: React.FC = () => {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F5ED] via-[#EFEEE5] to-[#F7F5ED] py-12 lg:py-20 border-b border-[#18392D]/10">
      
      {/* Decorative botanical ambient overlay */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#DCE5D7]/40 rounded-full filter blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#B89A60]/10 rounded-full filter blur-3xl -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column — Editorial Copy */}
          <div className="lg:col-span-6 space-y-6 text-left">
            
            {/* Subtle Brand Kicker (No pill box) */}
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89A60]">
              <Sparkles className="w-4 h-4 text-[#B89A60]" />
              <span>Classical Ayurvedic Wisdom · Modern Formulations</span>
            </div>

            {/* Main Headline with text-wrap: balance */}
            <h1 className="font-serif-brand text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#18392D] leading-[1.15] text-balance">
              Rooted in Nature.<br />
              <span className="italic font-normal text-[#15583F]">Made for Your Rituals.</span>
            </h1>

            {/* Supporting Copy */}
            <p className="text-base sm:text-lg text-[#18392D]/80 max-w-xl leading-relaxed font-normal">
              Pure botanical elixirs, slow-steeped hair oils, and sun-dried clarifying ubtans—crafted with sacred herbs, raw extracts, and classical Ayurvedic Vidhi to restore natural harmony to body and mind.
            </p>

            {/* CTAs */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => scrollTo('collection')}
                className="px-8 py-4 bg-[#15583F] hover:bg-[#18392D] text-[#F7F5ED] font-semibold text-sm rounded-lg shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#B89A60]"
              >
                <span>Explore Our Collection</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => scrollTo('story')}
                className="px-8 py-4 bg-transparent hover:bg-[#DCE5D7]/50 text-[#18392D] border border-[#18392D]/30 font-semibold text-sm rounded-lg transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#15583F]"
              >
                <span>Discover Shruveda</span>
              </button>
            </div>

            {/* Key Unboxed Trust Markers */}
            <div className="pt-6 border-t border-[#18392D]/10 grid grid-cols-3 gap-4 text-xs text-[#18392D]/80">
              <div className="flex items-center gap-2">
                <Feather className="w-4 h-4 text-[#15583F] shrink-0" />
                <span className="font-medium">5 Signature Formulations</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#15583F] shrink-0" />
                <span className="font-medium">100% Pure Botanical</span>
              </div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#B89A60] shrink-0" />
                <span className="font-medium">Slow Extraction Vidhi</span>
              </div>
            </div>

          </div>

          {/* Right Column — Art-Directed Botanical Hero Visual */}
          <div className="lg:col-span-6 relative">
            
            {/* Subtle frame border with organic warm backdrop */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-[#18392D]/15 bg-[#EFEEE5] aspect-[16/10] sm:aspect-[16/9] lg:aspect-[4/3] group">
              <img
                src={BRAND_ASSETS.hero}
                alt="Shruveda Ayurvedic Amber Glass Bottles and Fresh Herbs"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />

              {/* Gentle Scrim overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#18392D]/40 via-transparent to-transparent pointer-events-none" />

              {/* Floating Floating Editorial Badge Overlay */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#F7F5ED]/95 backdrop-blur-md p-4 rounded-xl border border-[#18392D]/10 shadow-lg flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#15583F] text-[#F7F5ED] flex items-center justify-center font-serif-brand font-bold text-lg shrink-0">
                    SV
                  </div>
                  <div>
                    <h3 className="text-xs font-bold text-[#18392D] uppercase tracking-wider">The Ayurvedic Standard</h3>
                    <p className="text-xs text-[#18392D]/70 font-normal">Authentic botanicals crafted for daily wellbeing</p>
                  </div>
                </div>
                <div className="text-right shrink-0 border-l border-[#18392D]/10 pl-4">
                  <span className="font-serif-brand text-sm font-bold text-[#15583F]">100%</span>
                  <p className="text-[10px] text-[#18392D]/60 uppercase tracking-wider">Natural Heritage</p>
                </div>
              </div>

            </div>

            {/* Secondary Accent Geometry */}
            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#B89A60]/20 rounded-2xl -z-10 hidden sm:block" />
            <div className="absolute -top-4 -left-4 w-20 h-20 bg-[#15583F]/10 rounded-2xl -z-10 hidden sm:block" />

          </div>

        </div>
      </div>
    </section>
  );
};
