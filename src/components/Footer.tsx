import React from 'react';
import { BRAND_ASSETS } from '../data/products';
import { PhoneCall, ArrowUp, Instagram, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#18392D] text-[#F7F5ED] pt-16 pb-8 border-t border-[#15583F]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 text-left">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12">
          
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <img
                src={BRAND_ASSETS.logo}
                alt="Shruveda Logo"
                className="h-10 w-auto object-contain rounded-md bg-[#F7F5ED] p-1"
                referrerPolicy="no-referrer"
              />
              <span className="font-serif-brand text-2xl font-bold tracking-tight text-[#F7F5ED]">
                SHRUVEDA
              </span>
            </div>

            <p className="text-xs text-[#DCE5D7]/80 leading-relaxed max-w-sm font-normal">
              Founded by <strong>{BRAND_ASSETS.founder}</strong>. Dedicated to providing organic, vegan, and chemical-free Ayurvedic skincare and hair care products that deliver genuine results.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href={BRAND_ASSETS.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#18392D] bg-[#B89A60] hover:bg-[#DCE5D7] px-4 py-2 rounded-full transition-colors"
              >
                <PhoneCall className="w-3.5 h-3.5" />
                <span>WhatsApp: {BRAND_ASSETS.phone}</span>
              </a>

              <a
                href={BRAND_ASSETS.instagramUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#F7F5ED] bg-[#15583F] hover:bg-[#DCE5D7] hover:text-[#18392D] px-4 py-2 rounded-full transition-colors border border-[#DCE5D7]/20"
              >
                <Instagram className="w-3.5 h-3.5" />
                <span>{BRAND_ASSETS.instagram}</span>
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B89A60]">
              Our Products
            </h4>
            <ul className="space-y-2 text-xs text-[#DCE5D7]/80">
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Flawless Face Pack (₹100)
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Rice Detan Body Scrub (₹150)
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Rich Tone Henna (₹50)
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Anti-Dandruff Hair Oil (₹250)
                </a>
              </li>
              <li>
                <a href="#collection" className="hover:text-white transition-colors">
                  Hair Shampoo (₹200)
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: The Brand */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B89A60]">
              The Brand
            </h4>
            <ul className="space-y-2 text-xs text-[#DCE5D7]/80">
              <li>
                <a href="#story" className="hover:text-white transition-colors">
                  About Dr. Shruti Vhatkar
                </a>
              </li>
              <li>
                <a href="#ritual" className="hover:text-white transition-colors">
                  Sneha Kalpana Wisdom
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white transition-colors">
                  Chemical & Paraben-Free
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white transition-colors">
                  100% Organic & Vegan
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Customer Care */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#B89A60]">
              Customer Care
            </h4>
            <ul className="space-y-2 text-xs text-[#DCE5D7]/80">
              <li>
                <a href="#support" className="hover:text-white transition-colors">
                  Track Your Package
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white transition-colors">
                  Order via Phone / WhatsApp
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white transition-colors">
                  Shipping Across India
                </a>
              </li>
              <li>
                <a href="#support" className="hover:text-white transition-colors">
                  Cash on Delivery (COD)
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#15583F] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DCE5D7]/60">
          <p>© {currentYear} SHRUVEDA · Founded by Dr. Shruti Vhatkar. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <span className="hover:underline cursor-pointer">Privacy Policy</span>
            <span className="hover:underline cursor-pointer">Terms of Service</span>
            <span className="hover:underline cursor-pointer">Sitemap</span>
          </div>

          <button
            onClick={scrollToTop}
            className="p-2 bg-[#15583F] hover:bg-[#B89A60] text-[#F7F5ED] hover:text-[#18392D] rounded-full transition-colors flex items-center justify-center"
            title="Scroll to top"
            aria-label="Scroll to top of page"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>

      </div>
    </footer>
  );
};
