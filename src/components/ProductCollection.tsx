import React, { useState } from 'react';
import { ProductCard } from './ProductCard';
import { PRODUCTS } from '../data/products';
import { Product } from '../types/ecommerce';
import { Sparkles, Filter, Search } from 'lucide-react';

interface ProductCollectionProps {
  onAddToCart: (product: Product) => void;
  onOpenModal: (product: Product) => void;
  searchQuery: string;
}

export const ProductCollection: React.FC<ProductCollectionProps> = ({
  onAddToCart,
  onOpenModal,
  searchQuery,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Skincare', 'Hair Care', 'Body Care', 'Wellness'];

  const filteredProducts = PRODUCTS.filter((p) => {
    const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.keyIngredients.some((ing) => ing.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <section id="collection" className="py-16 sm:py-24 bg-[#F7F5ED] scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#B89A60]">
            <Sparkles className="w-4 h-4 text-[#B89A60]" />
            <span>Pure Botanical Formulations</span>
          </div>
          
          <h2 className="font-serif-brand text-3xl sm:text-4xl lg:text-5xl font-bold text-[#18392D] tracking-tight">
            Discover the Shruveda Collection
          </h2>
          
          <p className="text-sm sm:text-base text-[#18392D]/75 font-normal">
            Five signature Ayurvedic rituals crafted with wild-harvested herbs, cold-pressed botanical oils, and classical Vedic extraction methods.
          </p>
        </div>

        {/* Filter Bar / Segmented Controls */}
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-b border-[#18392D]/10 pb-6">
          
          {/* Functional Category Filter Buttons */}
          <div className="flex items-center gap-1.5 p-1 bg-[#EFEEE5] rounded-xl border border-[#18392D]/10 overflow-x-auto max-w-full no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 focus:outline-none focus:ring-1 focus:ring-[#15583F] ${
                  selectedCategory === cat
                    ? 'bg-[#15583F] text-[#F7F5ED] shadow-xs'
                    : 'text-[#18392D]/70 hover:text-[#18392D] hover:bg-[#DCE5D7]/50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product Count Indicator */}
          <div className="text-xs font-medium text-[#18392D]/60 flex items-center gap-2">
            <Filter className="w-3.5 h-3.5 text-[#15583F]" />
            <span>Showing {filteredProducts.length} of {PRODUCTS.length} Products</span>
          </div>
        </div>

        {/* Product Grid */}
        {filteredProducts.length > 0 ? (
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onOpenModal={onOpenModal}
              />
            ))}
          </div>
        ) : (
          /* Empty Search / Filter State */
          <div className="mt-12 p-12 text-center bg-[#EFEEE5] rounded-2xl border border-[#18392D]/10 max-w-md mx-auto space-y-3">
            <Search className="w-8 h-8 text-[#18392D]/40 mx-auto" />
            <h3 className="font-serif-brand text-lg font-bold text-[#18392D]">No Products Found</h3>
            <p className="text-xs text-[#18392D]/70">
              No products matched your filter query "{searchQuery}". Try selecting "All" categories or searching for ingredients like "Saffron", "Bhringraj", or "Sandalwood".
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
              }}
              className="mt-2 px-4 py-2 bg-[#15583F] text-[#F7F5ED] text-xs font-semibold rounded-lg hover:bg-[#18392D] transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
};
