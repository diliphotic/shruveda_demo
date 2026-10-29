import React from 'react';
import { Leaf, Sun, Droplets, Award } from 'lucide-react';

export const TrustStrip: React.FC = () => {
  const pillars = [
    {
      icon: Sun,
      title: 'Ayurvedic Wisdom',
      desc: 'Inspired by classical Vedic Vidhi texts',
    },
    {
      icon: Leaf,
      title: 'Pure Botanicals',
      desc: 'Wild-harvested herbs & natural extracts',
    },
    {
      icon: Droplets,
      title: 'Slow Extraction',
      desc: 'Infused over 72 hours for high potency',
    },
    {
      icon: Award,
      title: 'Small Batch Care',
      desc: 'Mindfully formulated & quality checked',
    },
  ];

  return (
    <section className="bg-[#15583F] text-[#F7F5ED] py-8 border-y border-[#18392D]/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 divide-y sm:divide-y-0 lg:divide-x divide-[#DCE5D7]/20">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className={`flex items-center gap-4 ${idx > 0 ? 'pt-4 lg:pt-0 lg:pl-6' : ''}`}
              >
                <div className="w-10 h-10 rounded-full bg-[#F7F5ED]/10 border border-[#B89A60]/40 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-[#B89A60]" />
                </div>
                <div>
                  <h4 className="font-serif-brand text-sm font-semibold text-[#F7F5ED]">
                    {item.title}
                  </h4>
                  <p className="text-xs text-[#DCE5D7]/80 mt-0.5 font-normal">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
