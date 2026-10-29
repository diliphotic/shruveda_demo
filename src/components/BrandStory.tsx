import React from 'react';
import { BRAND_ASSETS } from '../data/products';
import { Sparkles, Leaf, Compass, Feather } from 'lucide-react';

export const BrandStory: React.FC = () => {
  return (
    <section id="story" className="py-20 bg-[#EFEEE5] border-y border-[#18392D]/10 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column — Editorial Photograph */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-xl border border-[#18392D]/15 aspect-[4/3] group">
              <img
                src={BRAND_ASSETS.story}
                alt="Ayurvedic Ritual with Herbs and Natural Oils"
                className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#18392D]/50 via-transparent to-transparent pointer-events-none" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 bg-[#F7F5ED]/95 backdrop-blur-md rounded-xl border border-[#18392D]/10 text-left">
                <span className="text-[10px] uppercase font-bold text-[#B89A60] tracking-widest">Founder Philosophy</span>
                <p className="font-serif-brand text-sm font-semibold text-[#18392D] mt-0.5">
                  "Ayurveda turns your daily beauty routine into a ritual of self-love."
                </p>
                <p className="text-[11px] text-[#15583F] font-bold mt-1">— {BRAND_ASSETS.founder}</p>
              </div>
            </div>

            {/* Accent Geometry */}
            <div className="absolute -bottom-4 -left-4 w-28 h-28 bg-[#15583F]/10 rounded-2xl -z-10 hidden sm:block" />
          </div>

          {/* Right Column — Editorial Text */}
          <div className="lg:col-span-6 space-y-6 text-left">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89A60]">
              <Sparkles className="w-4 h-4 text-[#B89A60]" />
              <span>Trusted Ayurvedic Quality</span>
            </div>

            <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18392D] tracking-tight leading-tight">
              Organic, Vegan & Chemical-Free Skincare.
            </h2>

            <p className="text-base text-[#18392D]/80 leading-relaxed font-normal">
              Founded by <strong>{BRAND_ASSETS.founder}</strong>, Shruveda was created with a clear mission: to replace synthetic chemicals, sulfates, and artificial dyes with classical Ayurvedic formulations that deliver real, noticeable skin and hair transformations.
            </p>

            {/* Three Pillars */}
            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#15583F] text-[#F7F5ED] flex items-center justify-center shrink-0 mt-0.5">
                  <Leaf className="w-4 h-4 text-[#B89A60]" />
                </div>
                <div>
                  <h3 className="font-serif-brand text-base font-bold text-[#18392D]">100% Organic & Vegan Ingredients</h3>
                  <p className="text-xs text-[#18392D]/70 mt-0.5 leading-relaxed">
                    Chickpea flour, Kasturi turmeric, wild Bhringraj, Reetha, and Shikakai sourced directly from ethically grown farms.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#15583F] text-[#F7F5ED] flex items-center justify-center shrink-0 mt-0.5">
                  <Compass className="w-4 h-4 text-[#B89A60]" />
                </div>
                <div>
                  <h3 className="font-serif-brand text-base font-bold text-[#18392D]">Sneha Kalpana Extraction Wisdom</h3>
                  <p className="text-xs text-[#18392D]/70 mt-0.5 leading-relaxed">
                    Our hair oils are slow-steeped with herbs over several days to extract active phytonutrients for maximum hair volume and flake control.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-9 h-9 rounded-full bg-[#15583F] text-[#F7F5ED] flex items-center justify-center shrink-0 mt-0.5">
                  <Feather className="w-4 h-4 text-[#B89A60]" />
                </div>
                <div>
                  <h3 className="font-serif-brand text-base font-bold text-[#18392D]">Zero Chemical Guarantees</h3>
                  <p className="text-xs text-[#18392D]/70 mt-0.5 leading-relaxed">
                    0% Ammonia, 0% PPD, 0% Parabens, 0% Sulfates. Safe and gentle for all skin and hair types.
                  </p>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <a
                href="#collection"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#15583F] uppercase tracking-wider hover:text-[#18392D] transition-colors border-b border-[#15583F] pb-1"
              >
                <span>Explore The 5 Shruveda Products</span>
                <span>→</span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
