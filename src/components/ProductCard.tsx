import React, { useState } from 'react';
import { Star, ShoppingBag, Eye, Check } from 'lucide-react';
import { Product } from '../types/ecommerce';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onOpenModal: (product: Product) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onAddToCart,
  onOpenModal,
}) => {
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  return (
    <div
      onClick={() => onOpenModal(product)}
      className="group bg-[#F7F5ED] rounded-xl border border-[#18392D]/10 overflow-hidden shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer transform hover:-translate-y-1"
    >
      {/* Product Image Container */}
      <div className="relative aspect-[4/3] bg-[#EFEEE5] overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
          referrerPolicy="no-referrer"
          onError={(e) => {
            // Fallback styling if image breaks
            (e.target as HTMLElement).style.display = 'none';
          }}
        />

        {/* Badge (Subtle text tag, no pill sandwich) */}
        {product.badge && (
          <div className="absolute top-3 left-3 bg-[#15583F] text-[#F7F5ED] text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-sm shadow-xs">
            {product.badge}
          </div>
        )}

        {/* Quick View Overlay Trigger */}
        <div className="absolute inset-0 bg-[#18392D]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 p-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onOpenModal(product);
            }}
            className="bg-[#F7F5ED] text-[#18392D] p-2.5 rounded-full shadow-md hover:bg-[#15583F] hover:text-[#F7F5ED] transition-colors"
            title="Quick View Details"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Product Content Body */}
      <div className="p-5 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Unboxed Metadata: Category & Volume */}
          <div className="flex items-center gap-2 text-xs text-[#18392D]/60 font-medium">
            <span>{product.category}</span>
            <span aria-hidden="true">·</span>
            <span>{product.volume}</span>
          </div>

          {/* Product Title */}
          <h3 className="font-serif-brand text-lg font-bold text-[#18392D] group-hover:text-[#15583F] transition-colors line-clamp-1 mt-1">
            {product.name}
          </h3>

          {/* Tagline / Kicker */}
          <p className="text-xs text-[#18392D]/70 line-clamp-1 mt-0.5">
            {product.tagline}
          </p>
        </div>

        {/* Rating and Price Row */}
        <div className="pt-2 border-t border-[#18392D]/10 flex items-center justify-between">
          <div>
            <div className="flex items-center gap-1 text-xs">
              <Star className="w-3.5 h-3.5 fill-[#B89A60] text-[#B89A60]" />
              <span className="font-semibold text-[#18392D]">{product.rating}</span>
              <span className="text-[#18392D]/50 text-[11px]">({product.reviewCount})</span>
            </div>

            {/* Price with tabular numerals */}
            <div className="flex items-baseline gap-2 mt-1">
              <span className="font-serif-brand text-lg font-bold text-[#15583F] tabular-nums">
                ₹{product.price.toLocaleString('en-IN')}
              </span>
              {product.originalPrice && (
                <span className="text-xs text-[#18392D]/40 line-through tabular-nums">
                  ₹{product.originalPrice.toLocaleString('en-IN')}
                </span>
              )}
            </div>
          </div>

          {/* Add To Cart CTA Button */}
          <button
            onClick={handleAdd}
            className={`px-3.5 py-2 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 focus:outline-none focus:ring-2 focus:ring-[#15583F] ${
              added
                ? 'bg-[#15583F] text-[#F7F5ED]'
                : 'bg-[#DCE5D7] hover:bg-[#15583F] text-[#18392D] hover:text-[#F7F5ED]'
            }`}
            aria-label={`Add ${product.name} to cart`}
          >
            {added ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Added</span>
              </>
            ) : (
              <>
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Add</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
