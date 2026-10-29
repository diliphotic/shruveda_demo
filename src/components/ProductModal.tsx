import React, { useState } from 'react';
import { X, Star, ShoppingBag, Check, ShieldCheck, Sparkles, Heart } from 'lucide-react';
import { Product } from '../types/ecommerce';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductModal: React.FC<ProductModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAdd = () => {
    onAddToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#18392D]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-4xl bg-[#F7F5ED] rounded-2xl shadow-2xl overflow-hidden border border-[#18392D]/15 max-h-[90vh] flex flex-col md:flex-row"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#18392D]/70 hover:text-[#18392D] bg-[#F7F5ED]/80 hover:bg-[#EFEEE5] rounded-full transition-colors"
          aria-label="Close product details"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Product Image Column */}
        <div className="md:w-1/2 bg-[#EFEEE5] relative aspect-square md:aspect-auto">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          {product.badge && (
            <span className="absolute top-4 left-4 bg-[#15583F] text-[#F7F5ED] text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-sm shadow-xs">
              {product.badge}
            </span>
          )}
        </div>

        {/* Product Information Column */}
        <div className="md:w-1/2 p-6 sm:p-8 overflow-y-auto space-y-6 text-left">
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-[#B89A60] uppercase tracking-wider">
              <span>{product.category}</span>
              <span aria-hidden="true">·</span>
              <span>{product.volume}</span>
            </div>

            <h2 className="font-serif-brand text-2xl sm:text-3xl font-bold text-[#18392D] mt-1">
              {product.name}
            </h2>

            <p className="text-xs text-[#15583F] font-medium mt-0.5">{product.tagline}</p>

            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center text-[#B89A60]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#B89A60]" />
                ))}
              </div>
              <span className="text-xs font-bold text-[#18392D]">{product.rating}</span>
              <span className="text-xs text-[#18392D]/60">({product.reviewCount} reviews)</span>
            </div>
          </div>

          {/* Pricing */}
          <div className="flex items-baseline gap-3 pt-2 border-t border-[#18392D]/10">
            <span className="font-serif-brand text-2xl font-bold text-[#15583F] tabular-nums">
              ₹{product.price.toLocaleString('en-IN')}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-[#18392D]/40 line-through tabular-nums">
                ₹{product.originalPrice.toLocaleString('en-IN')}
              </span>
            )}
            <span className="text-xs font-semibold text-[#15583F] bg-[#DCE5D7] px-2 py-0.5 rounded-sm ml-auto">
              In Stock
            </span>
          </div>

          {/* Full Description */}
          <p className="text-xs sm:text-sm text-[#18392D]/80 leading-relaxed font-normal">
            {product.fullDescription}
          </p>

          {/* Key Ingredients */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#18392D] uppercase tracking-wider flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#B89A60]" />
              Key Ingredients
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {product.keyIngredients.map((ing, i) => (
                <span
                  key={i}
                  className="text-xs bg-[#DCE5D7]/60 text-[#18392D] px-2.5 py-1 rounded-md font-medium"
                >
                  {ing}
                </span>
              ))}
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-2">
            <h4 className="text-xs font-bold text-[#18392D] uppercase tracking-wider">Key Benefits</h4>
            <ul className="space-y-1 text-xs text-[#18392D]/80 list-disc list-inside">
              {product.benefits.map((b, i) => (
                <li key={i}>{b}</li>
              ))}
            </ul>
          </div>

          {/* How To Use Ritual */}
          <div className="p-3 bg-[#EFEEE5] rounded-lg border border-[#18392D]/10">
            <h4 className="text-xs font-bold text-[#15583F] uppercase tracking-wider">The Ritual Direction</h4>
            <p className="text-xs text-[#18392D]/80 mt-1 italic">{product.howToUse}</p>
          </div>

          {/* Quantity and Add to Cart Action */}
          <div className="pt-4 border-t border-[#18392D]/10 space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-xs font-bold text-[#18392D] uppercase tracking-wider">Quantity</span>
              <div className="flex items-center bg-[#EFEEE5] border border-[#18392D]/20 rounded-lg">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-3 py-1 text-sm font-bold text-[#18392D] hover:bg-[#DCE5D7] rounded-l-lg"
                >
                  -
                </button>
                <span className="px-4 py-1 text-xs font-semibold text-[#18392D] tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-3 py-1 text-sm font-bold text-[#18392D] hover:bg-[#DCE5D7] rounded-r-lg"
                >
                  +
                </button>
              </div>
            </div>

            <button
              onClick={handleAdd}
              className={`w-full py-3.5 rounded-lg text-sm font-semibold transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-[#15583F] ${
                added
                  ? 'bg-[#15583F] text-[#F7F5ED]'
                  : 'bg-[#15583F] hover:bg-[#18392D] text-[#F7F5ED] shadow-md'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Added {quantity} to Cart</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Add to Bag — ₹{(product.price * quantity).toLocaleString('en-IN')}</span>
                </>
              )}
            </button>
          </div>

          <div className="flex items-center justify-center gap-2 text-[11px] text-[#18392D]/60 pt-2">
            <ShieldCheck className="w-3.5 h-3.5 text-[#15583F]" />
            <span>Authentic Ayurvedic Quality · 100% Satisfaction Guaranteed</span>
          </div>
        </div>
      </div>
    </div>
  );
};
