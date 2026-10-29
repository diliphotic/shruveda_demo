import React, { useState } from 'react';
import { ShoppingBag, Search, Menu, X, PhoneCall } from 'lucide-react';
import { BRAND_ASSETS } from '../data/products';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
}) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F7F5ED]/95 backdrop-blur-md border-b border-[#18392D]/10 transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-8">
          
          {/* Zone 1: Brand Logo */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="#" className="flex items-center gap-3 group focus:outline-none">
              <img
                src={BRAND_ASSETS.logo}
                alt="Shruveda Ayurvedic Wellness Logo"
                className="h-12 w-auto object-contain rounded-md transition-transform duration-300 group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  // Fallback if logo fails
                  (e.target as HTMLElement).style.display = 'none';
                }}
              />
              <span className="font-serif-brand text-2xl font-bold tracking-tight text-[#15583F] group-hover:text-[#18392D] transition-colors whitespace-nowrap">
                SHRUVEDA
              </span>
            </a>
          </div>

          {/* Zone 2: Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#18392D]/80">
            <button
              onClick={() => scrollToSection('collection')}
              className="hover:text-[#15583F] transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
            >
              Shop Collection
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="hover:text-[#15583F] transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('ritual')}
              className="hover:text-[#15583F] transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
            >
              The Ritual
            </button>
            <button
              onClick={() => scrollToSection('support')}
              className="hover:text-[#15583F] transition-colors hover:underline underline-offset-8 whitespace-nowrap shrink-0"
            >
              Support
            </button>
          </nav>

          {/* Zone 3: Actions (Search & Cart) */}
          <div className="flex items-center gap-3 shrink-0">
            
            {/* Search Control */}
            <div className="relative">
              {isSearchOpen ? (
                <div className="flex items-center bg-[#EFEEE5] border border-[#18392D]/20 rounded-full px-3 py-1.5 transition-all w-48 sm:w-64">
                  <Search className="w-4 h-4 text-[#18392D]/60 shrink-0 mr-2" />
                  <input
                    type="text"
                    placeholder="Search products..."
                    value={searchQuery}
                    onChange={(e) => onSearchChange(e.target.value)}
                    autoFocus
                    className="w-full bg-transparent text-xs text-[#18392D] focus:outline-none"
                  />
                  <button
                    onClick={() => {
                      setIsSearchOpen(false);
                      onSearchChange('');
                    }}
                    className="text-[#18392D]/60 hover:text-[#18392D] ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>
              ) : (
                <button
                  onClick={() => setIsSearchOpen(true)}
                  className="p-2 text-[#18392D]/80 hover:text-[#15583F] hover:bg-[#DCE5D7]/50 rounded-full transition-colors"
                  aria-label="Search collection"
                >
                  <Search className="w-5 h-5" />
                </button>
              )}
            </div>

            {/* Cart Drawer Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2 text-[#18392D]/80 hover:text-[#15583F] hover:bg-[#DCE5D7]/50 rounded-full transition-colors flex items-center gap-2 group"
              aria-label={`Shopping Cart with ${cartCount} items`}
            >
              <ShoppingBag className="w-5 h-5 transition-transform group-hover:scale-110 text-[#15583F]" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[#15583F] text-[#F7F5ED] text-[10px] font-bold rounded-full w-5 h-5 flex items-center justify-center border-2 border-[#F7F5ED] shadow-xs animate-pulse">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Trigger */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-[#18392D] hover:bg-[#DCE5D7]/50 rounded-lg transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#F7F5ED] border-b border-[#18392D]/10 px-6 py-6 space-y-4 shadow-xl">
          <div className="space-y-3">
            <button
              onClick={() => scrollToSection('collection')}
              className="block w-full text-left py-2 text-base font-medium text-[#18392D] hover:text-[#15583F]"
            >
              Shop Collection
            </button>
            <button
              onClick={() => scrollToSection('story')}
              className="block w-full text-left py-2 text-base font-medium text-[#18392D] hover:text-[#15583F]"
            >
              Our Story
            </button>
            <button
              onClick={() => scrollToSection('ritual')}
              className="block w-full text-left py-2 text-base font-medium text-[#18392D] hover:text-[#15583F]"
            >
              The Ritual
            </button>
            <button
              onClick={() => scrollToSection('support')}
              className="block w-full text-left py-2 text-base font-medium text-[#18392D] hover:text-[#15583F]"
            >
              Customer Support
            </button>
          </div>

          <div className="pt-4 border-t border-[#18392D]/10 flex items-center justify-between">
            <a
              href="https://wa.me/919876543210"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-xs font-semibold text-[#15583F] bg-[#DCE5D7] px-4 py-2 rounded-full"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              WhatsApp Support
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
