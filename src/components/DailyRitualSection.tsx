import React, { useState } from 'react';
import { Sun, CloudSun, Moon, Sparkles, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/ecommerce';

interface DailyRitualSectionProps {
  onOpenModal: (product: Product) => void;
}

export const DailyRitualSection: React.FC<DailyRitualSectionProps> = ({ onOpenModal }) => {
  const [activeTab, setActiveTab] = useState<'morning' | 'afternoon' | 'evening'>('morning');

  const rituals = {
    morning: {
      time: 'Pratah Samaya · Morning Awakening',
      title: 'Clarify, Refresh & Nourish',
      description: 'Begin your morning by awakening dull skin and feeding root density for the day ahead.',
      steps: [
        {
          step: 'Step 1: Cleanse & Exfoliate',
          product: PRODUCTS.find((p) => p.id === 'shruveda-teja-ubtan-powder')!,
          instruction: 'Mix Teja Ubtan with raw milk or rose water. Gently polish skin for a warm natural morning glow.',
        },
        {
          step: 'Step 2: Hydrate Body',
          product: PRODUCTS.find((p) => p.id === 'shruveda-suvarna-body-lotion')!,
          instruction: 'Apply Suvarna Glow Body Lotion over damp skin after bath to lock in 24-hour botanical moisture.',
        },
      ],
    },
    afternoon: {
      time: 'Madhyanha · Midday Vitality',
      title: 'Sustain Energy & Balance',
      description: 'Recharge adaptogenic energy and maintain calm mental focus during demanding afternoon hours.',
      steps: [
        {
          step: 'Midday Stamina Tonic',
          product: PRODUCTS.find((p) => p.id === 'shruveda-ashwagandha-rasayana')!,
          instruction: 'Take 1 teaspoon of Ashwagandha Golden Rasayana with warm milk or herbal tea to sustain stamina and reduce cortisol.',
        },
      ],
    },
    evening: {
      time: 'Nisha Samaya · Evening Restoration',
      title: 'Deep Repair & Restful Sleep',
      description: 'Indulge in a tranquil night ritual to repair skin cells and soothe hair follicles while you sleep.',
      steps: [
        {
          step: 'Step 1: Scalp & Hair Bath',
          product: PRODUCTS.find((p) => p.id === 'shruveda-kesha-sanjivani-oil')!,
          instruction: 'Warm Kesha Sanjivani Bhringraj Oil between palms and massage gently into crown and roots.',
        },
        {
          step: 'Step 2: Radiant Overnight Serum',
          product: PRODUCTS.find((p) => p.id === 'shruveda-nadi-kanti-serum')!,
          instruction: 'Press 3 drops of Nadi Kanti Saffron Serum onto cleansed face and neck for nocturnal cell renewal.',
        },
      ],
    },
  };

  const current = rituals[activeTab];

  return (
    <section id="ritual" className="py-20 bg-[#F7F5ED] scroll-mt-16 border-b border-[#18392D]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89A60]">
            <Sparkles className="w-4 h-4 text-[#B89A60]" />
            <span>Harmonious Daily Flow</span>
          </div>
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18392D] tracking-tight">
            The Shruveda Daily Rituals
          </h2>
          <p className="text-sm text-[#18392D]/75 font-normal">
            Ayurveda teaches that daily timing determines how herbs interact with your body doshas. Discover how our 5 products complement every phase of your day.
          </p>
        </div>

        {/* Ritual Phase Buttons */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1.5 bg-[#EFEEE5] rounded-xl border border-[#18392D]/10 space-x-1">
            <button
              onClick={() => setActiveTab('morning')}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 focus:outline-none ${
                activeTab === 'morning'
                  ? 'bg-[#15583F] text-[#F7F5ED] shadow-xs'
                  : 'text-[#18392D]/70 hover:text-[#18392D]'
              }`}
            >
              <Sun className="w-4 h-4 text-[#B89A60]" />
              <span>Morning Awakening</span>
            </button>

            <button
              onClick={() => setActiveTab('afternoon')}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 focus:outline-none ${
                activeTab === 'afternoon'
                  ? 'bg-[#15583F] text-[#F7F5ED] shadow-xs'
                  : 'text-[#18392D]/70 hover:text-[#18392D]'
              }`}
            >
              <CloudSun className="w-4 h-4 text-[#B89A60]" />
              <span>Midday Vitality</span>
            </button>

            <button
              onClick={() => setActiveTab('evening')}
              className={`px-5 py-2.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-2 focus:outline-none ${
                activeTab === 'evening'
                  ? 'bg-[#15583F] text-[#F7F5ED] shadow-xs'
                  : 'text-[#18392D]/70 hover:text-[#18392D]'
              }`}
            >
              <Moon className="w-4 h-4 text-[#B89A60]" />
              <span>Night Restoration</span>
            </button>
          </div>
        </div>

        {/* Ritual Content Card */}
        <div className="mt-10 bg-[#EFEEE5] rounded-2xl p-6 sm:p-10 border border-[#18392D]/10 shadow-sm max-w-4xl mx-auto space-y-8">
          <div>
            <span className="text-xs font-bold text-[#B89A60] uppercase tracking-wider">
              {current.time}
            </span>
            <h3 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#18392D] mt-1">
              {current.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#18392D]/75 mt-1">
              {current.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {current.steps.map((item, idx) => (
              <div
                key={idx}
                onClick={() => item.product && onOpenModal(item.product)}
                className="bg-[#F7F5ED] p-5 rounded-xl border border-[#18392D]/10 shadow-xs hover:shadow-md transition-all cursor-pointer flex gap-4 group"
              >
                {item.product && (
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-20 h-20 object-cover rounded-lg bg-[#EFEEE5] shrink-0 group-hover:scale-105 transition-transform"
                    referrerPolicy="no-referrer"
                  />
                )}
                <div className="space-y-1 text-left">
                  <span className="text-[10px] font-bold text-[#15583F] uppercase tracking-wider">
                    {item.step}
                  </span>
                  <h4 className="font-serif-brand text-base font-bold text-[#18392D] group-hover:text-[#15583F] transition-colors">
                    {item.product?.name}
                  </h4>
                  <p className="text-xs text-[#18392D]/70 italic leading-snug">
                    "{item.instruction}"
                  </p>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold text-[#B89A60] mt-1">
                    View Details <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
