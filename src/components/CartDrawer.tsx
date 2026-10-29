import React, { useState } from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Tag, Sparkles } from 'lucide-react';
import { CartItem } from '../types/ecommerce';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemoveItem: (productId: string) => void;
  onProceedToCheckout: (discountPercent: number) => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onProceedToCheckout,
}) => {
  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [promoError, setPromoError] = useState('');

  if (!isOpen) return null;

  const subtotal = items.reduce(
    (acc, item) => acc + item.product.price * item.quantity,
    0
  );

  const discountPercent = promoApplied ? 10 : 0;
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const freeShippingThreshold = 999;
  const amountNeededForFreeShipping = Math.max(0, freeShippingThreshold - subtotal);
  const shippingCost = subtotal >= freeShippingThreshold || subtotal === 0 ? 0 : 99;
  const grandTotal = subtotal - discountAmount + shippingCost;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'SHRUVEDA10') {
      setPromoApplied(true);
      setPromoError('');
    } else {
      setPromoError('Invalid promo code. Try "SHRUVEDA10" for 10% off.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-[#18392D]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F7F5ED] shadow-2xl flex flex-col border-l border-[#18392D]/15 text-left">
          
          {/* Header */}
          <div className="p-6 bg-[#EFEEE5] border-b border-[#18392D]/10 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#15583F]" />
              <h2 className="font-serif-brand text-xl font-bold text-[#18392D]">Your Shopping Bag</h2>
              <span className="text-xs bg-[#15583F] text-[#F7F5ED] px-2 py-0.5 rounded-full font-bold">
                {items.reduce((sum, item) => sum + item.quantity, 0)}
              </span>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-[#18392D]/70 hover:text-[#18392D] rounded-full hover:bg-[#DCE5D7]/50 transition-colors"
              aria-label="Close cart drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Free Shipping Progress Bar */}
          {subtotal > 0 && (
            <div className="px-6 py-3 bg-[#DCE5D7]/40 border-b border-[#18392D]/10 text-xs">
              {amountNeededForFreeShipping > 0 ? (
                <p className="text-[#18392D] font-medium">
                  Add <span className="font-bold text-[#15583F]">₹{amountNeededForFreeShipping}</span> more for Free Express Shipping!
                </p>
              ) : (
                <p className="text-[#15583F] font-bold flex items-center gap-1">
                  <Sparkles className="w-3.5 h-3.5" />
                  Congratulations! You've unlocked Free Express Shipping.
                </p>
              )}
              <div className="w-full bg-[#EFEEE5] h-1.5 rounded-full mt-2 overflow-hidden">
                <div
                  className="bg-[#15583F] h-full transition-all duration-300"
                  style={{
                    width: `${Math.min(100, (subtotal / freeShippingThreshold) * 100)}%`,
                  }}
                />
              </div>
            </div>
          )}

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="h-full flex flex-col items-center justify-center text-center space-y-4 py-12">
                <div className="w-16 h-16 rounded-full bg-[#EFEEE5] flex items-center justify-center">
                  <ShoppingBag className="w-8 h-8 text-[#18392D]/40" />
                </div>
                <h3 className="font-serif-brand text-lg font-bold text-[#18392D]">Your Bag is Empty</h3>
                <p className="text-xs text-[#18392D]/70 max-w-xs">
                  Discover our five pure Ayurvedic formulations and begin your daily self-care ritual.
                </p>
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 bg-[#15583F] text-[#F7F5ED] text-xs font-semibold rounded-lg hover:bg-[#18392D] transition-colors"
                >
                  Explore Collection
                </button>
              </div>
            ) : (
              items.map((item) => (
                <div
                  key={item.product.id}
                  className="p-4 bg-[#EFEEE5] rounded-xl border border-[#18392D]/10 flex gap-4 items-center shadow-2xs"
                >
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded-lg bg-[#F7F5ED] shrink-0"
                    referrerPolicy="no-referrer"
                  />

                  <div className="flex-1 min-w-0 space-y-1">
                    <h4 className="font-serif-brand text-sm font-bold text-[#18392D] truncate">
                      {item.product.name}
                    </h4>
                    <p className="text-[11px] text-[#18392D]/60">{item.product.volume}</p>

                    <div className="flex items-center justify-between pt-1">
                      {/* Quantity Selector */}
                      <div className="flex items-center bg-[#F7F5ED] border border-[#18392D]/20 rounded-md">
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#18392D] hover:bg-[#DCE5D7]"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-semibold tabular-nums text-[#18392D]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#18392D] hover:bg-[#DCE5D7]"
                        >
                          +
                        </button>
                      </div>

                      {/* Item Total */}
                      <span className="font-serif-brand text-sm font-bold text-[#15583F] tabular-nums">
                        ₹{(item.product.price * item.quantity).toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <button
                    onClick={() => onRemoveItem(item.product.id)}
                    className="p-1.5 text-[#18392D]/40 hover:text-red-700 transition-colors"
                    title="Remove item"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>

          {/* Cart Footer */}
          {items.length > 0 && (
            <div className="p-6 bg-[#EFEEE5] border-t border-[#18392D]/10 space-y-4">
              
              {/* Promo Code Entry */}
              {!promoApplied ? (
                <form onSubmit={handleApplyPromo} className="space-y-1">
                  <div className="flex gap-2">
                    <div className="relative flex-1">
                      <Tag className="w-3.5 h-3.5 absolute left-3 top-3 text-[#18392D]/40" />
                      <input
                        type="text"
                        placeholder="Promo code (e.g. SHRUVEDA10)"
                        value={promoCode}
                        onChange={(e) => setPromoCode(e.target.value)}
                        className="w-full bg-[#F7F5ED] border border-[#18392D]/20 rounded-lg pl-8 pr-3 py-2 text-xs uppercase focus:outline-none focus:ring-1 focus:ring-[#15583F]"
                      />
                    </div>
                    <button
                      type="submit"
                      className="px-3 py-2 bg-[#18392D] text-[#F7F5ED] text-xs font-semibold rounded-lg hover:bg-[#15583F] transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoError && <p className="text-[10px] text-red-600 font-medium">{promoError}</p>}
                </form>
              ) : (
                <div className="p-2.5 bg-[#DCE5D7] text-[#15583F] rounded-lg text-xs font-bold flex items-center justify-between">
                  <span>Code "SHRUVEDA10" Applied (-10%)</span>
                  <button
                    onClick={() => {
                      setPromoApplied(false);
                      setPromoCode('');
                    }}
                    className="text-[10px] underline hover:text-[#18392D]"
                  >
                    Remove
                  </button>
                </div>
              )}

              {/* Order Calculations */}
              <div className="space-y-1.5 text-xs text-[#18392D]/80 pt-2 border-t border-[#18392D]/10">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold tabular-nums">₹{subtotal.toLocaleString('en-IN')}</span>
                </div>

                {promoApplied && (
                  <div className="flex justify-between text-[#15583F]">
                    <span>Discount (10%)</span>
                    <span className="font-semibold tabular-nums">-₹{discountAmount.toLocaleString('en-IN')}</span>
                  </div>
                )}

                <div className="flex justify-between">
                  <span>Estimated Shipping</span>
                  <span className="font-semibold tabular-nums">
                    {shippingCost === 0 ? (
                      <span className="text-[#15583F] font-bold">FREE</span>
                    ) : (
                      `₹${shippingCost}`
                    )}
                  </span>
                </div>

                <div className="flex justify-between text-base font-bold text-[#18392D] pt-2 border-t border-[#18392D]/10">
                  <span className="font-serif-brand">Grand Total</span>
                  <span className="font-serif-brand text-[#15583F] tabular-nums">
                    ₹{grandTotal.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>

              {/* Checkout CTA */}
              <button
                onClick={() => onProceedToCheckout(discountPercent)}
                className="w-full py-3.5 bg-[#15583F] hover:bg-[#18392D] text-[#F7F5ED] text-sm font-semibold rounded-lg shadow-md transition-all flex items-center justify-center gap-2 group"
              >
                <span>Proceed to Checkout</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-[#18392D]/60 pt-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#15583F]" />
                <span>Cash on Delivery & Secure Online Payment Available</span>
              </div>

            </div>
          )}

        </div>
      </div>
    </div>
  );
};
