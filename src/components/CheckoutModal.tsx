import React, { useState } from 'react';
import { X, CheckCircle, ShieldCheck, Truck, CreditCard, Banknote, Copy, ArrowRight, Sparkles } from 'lucide-react';
import { CartItem, CustomerOrderInfo, OrderConfirmation } from '../types/ecommerce';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  discountPercent: number;
  onOrderCompleted: () => void;
}

export const CheckoutModal: React.FC<CheckoutModalProps> = ({
  isOpen,
  onClose,
  items,
  discountPercent,
  onOrderCompleted,
}) => {
  const [step, setStep] = useState<'form' | 'confirmation'>('form');
  const [formData, setFormData] = useState<CustomerOrderInfo>({
    fullName: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    paymentMethod: 'cod',
    notes: '',
  });

  const [confirmedOrder, setConfirmedOrder] = useState<OrderConfirmation | null>(null);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const subtotal = items.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
  const discountAmount = Math.round((subtotal * discountPercent) / 100);
  const shipping = subtotal >= 999 || subtotal === 0 ? 0 : 99;
  const total = subtotal - discountAmount + shipping;

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const orderId = `SV-${Math.floor(1000 + Math.random() * 9000)}`;
    const newConfirmation: OrderConfirmation = {
      orderId,
      date: new Date().toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'short',
        year: 'numeric',
      }),
      items: [...items],
      subtotal,
      discount: discountAmount,
      shipping,
      total,
      customerInfo: formData,
    };

    setConfirmedOrder(newConfirmation);
    setStep('confirmation');
    onOrderCompleted();
  };

  const handleCopyOrderId = () => {
    if (confirmedOrder) {
      navigator.clipboard.writeText(confirmedOrder.orderId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-[#18392D]/60 backdrop-blur-xs animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#F7F5ED] rounded-2xl shadow-2xl overflow-hidden border border-[#18392D]/15 max-h-[92vh] flex flex-col text-left">
        
        {/* Header */}
        <div className="p-6 bg-[#EFEEE5] border-b border-[#18392D]/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#B89A60]" />
            <h2 className="font-serif-brand text-xl font-bold text-[#18392D]">
              {step === 'form' ? 'Checkout & Delivery Details' : 'Order Confirmed'}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#18392D]/70 hover:text-[#18392D] rounded-full hover:bg-[#DCE5D7]/50 transition-colors"
            aria-label="Close checkout"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form View */}
        {step === 'form' ? (
          <form onSubmit={handleFormSubmit} className="p-6 overflow-y-auto space-y-6">
            
            {/* Delivery Address Section */}
            <div className="space-y-4">
              <h3 className="text-xs font-bold text-[#15583F] uppercase tracking-wider border-b border-[#18392D]/10 pb-1">
                1. Shipping Address (India)
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#18392D] mb-1">Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Priya Sharma"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-[#EFEEE5] border border-[#18392D]/20 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#15583F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18392D] mb-1">WhatsApp / Phone Number *</label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-[#EFEEE5] border border-[#18392D]/20 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#15583F]"
                  />
                </div>

                <div className="sm:col-span-2">
                  <label className="block text-xs font-semibold text-[#18392D] mb-1">Street Address / House No. *</label>
                  <input
                    type="text"
                    required
                    placeholder="Flat, Building, Street, Area"
                    value={formData.address}
                    onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                    className="w-full bg-[#EFEEE5] border border-[#18392D]/20 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#15583F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18392D] mb-1">City / Town *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Jaipur"
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full bg-[#EFEEE5] border border-[#18392D]/20 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#15583F]"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#18392D] mb-1">Pincode *</label>
                  <input
                    type="text"
                    required
                    placeholder="6-digit pincode"
                    value={formData.postalCode}
                    onChange={(e) => setFormData({ ...formData, postalCode: e.target.value })}
                    className="w-full bg-[#EFEEE5] border border-[#18392D]/20 rounded-lg px-3 py-2 text-xs focus:outline-none focus:ring-1 focus:ring-[#15583F]"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method Selection */}
            <div className="space-y-3">
              <h3 className="text-xs font-bold text-[#15583F] uppercase tracking-wider border-b border-[#18392D]/10 pb-1">
                2. Select Payment Method
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <label
                  className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                    formData.paymentMethod === 'cod'
                      ? 'bg-[#DCE5D7]/60 border-[#15583F] text-[#15583F] font-bold'
                      : 'bg-[#EFEEE5] border-[#18392D]/15 text-[#18392D]'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={formData.paymentMethod === 'cod'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'cod' })}
                    className="accent-[#15583F]"
                  />
                  <Banknote className="w-5 h-5 text-[#15583F]" />
                  <div>
                    <span className="text-xs font-bold">Cash on Delivery (COD)</span>
                    <p className="text-[10px] opacity-80">Pay upon package arrival</p>
                  </div>
                </label>

                <label
                  className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition-all ${
                    formData.paymentMethod === 'online'
                      ? 'bg-[#DCE5D7]/60 border-[#15583F] text-[#15583F] font-bold'
                      : 'bg-[#EFEEE5] border-[#18392D]/15 text-[#18392D]'
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="online"
                    checked={formData.paymentMethod === 'online'}
                    onChange={() => setFormData({ ...formData, paymentMethod: 'online' })}
                    className="accent-[#15583F]"
                  />
                  <CreditCard className="w-5 h-5 text-[#15583F]" />
                  <div>
                    <span className="text-xs font-bold">UPI / Cards / NetBanking</span>
                    <p className="text-[10px] opacity-80">Instant pre-paid checkout</p>
                  </div>
                </label>
              </div>
            </div>

            {/* Order Summary Box */}
            <div className="p-4 bg-[#EFEEE5] rounded-xl border border-[#18392D]/10 space-y-2 text-xs">
              <div className="flex justify-between text-[#18392D]/80">
                <span>Items Subtotal</span>
                <span className="font-semibold tabular-nums">₹{subtotal.toLocaleString('en-IN')}</span>
              </div>
              {discountAmount > 0 && (
                <div className="flex justify-between text-[#15583F]">
                  <span>Discount</span>
                  <span className="font-semibold tabular-nums">-₹{discountAmount.toLocaleString('en-IN')}</span>
                </div>
              )}
              <div className="flex justify-between text-[#18392D]/80">
                <span>Express Shipping</span>
                <span className="font-semibold tabular-nums">{shipping === 0 ? 'FREE' : `₹${shipping}`}</span>
              </div>
              <div className="flex justify-between text-sm font-bold text-[#18392D] pt-2 border-t border-[#18392D]/10">
                <span>Total Amount Payable</span>
                <span className="font-serif-brand text-[#15583F] tabular-nums">
                  ₹{total.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            {/* Submit CTA */}
            <button
              type="submit"
              className="w-full py-4 bg-[#15583F] hover:bg-[#18392D] text-[#F7F5ED] text-sm font-semibold rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Place Order — ₹{total.toLocaleString('en-IN')}</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <p className="text-[10px] text-center text-[#18392D]/60">
              * Demo Order: No actual payment will be charged.
            </p>
          </form>
        ) : (
          /* Confirmation Receipt View */
          <div className="p-8 overflow-y-auto space-y-6 text-center">
            
            <div className="w-16 h-16 rounded-full bg-[#DCE5D7] text-[#15583F] flex items-center justify-center mx-auto">
              <CheckCircle className="w-10 h-10" />
            </div>

            <div className="space-y-1">
              <span className="text-xs font-bold text-[#B89A60] uppercase tracking-widest">
                Thank You for Ordering
              </span>
              <h3 className="font-serif-brand text-2xl font-bold text-[#18392D]">
                Order Confirmed #{confirmedOrder?.orderId}
              </h3>
              <p className="text-xs text-[#18392D]/75">
                We have received your order and are preparing your fresh Ayurvedic formulations for dispatch.
              </p>
            </div>

            {/* Order Copy Box */}
            <div className="p-4 bg-[#EFEEE5] rounded-xl border border-[#18392D]/10 text-left max-w-md mx-auto space-y-3">
              <div className="flex items-center justify-between border-b border-[#18392D]/10 pb-2">
                <span className="text-xs font-bold text-[#18392D]">Order Reference:</span>
                <button
                  onClick={handleCopyOrderId}
                  className="text-xs font-semibold text-[#15583F] hover:underline flex items-center gap-1"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>{copied ? 'Copied!' : confirmedOrder?.orderId}</span>
                </button>
              </div>

              <div className="text-xs space-y-1 text-[#18392D]/80">
                <p><strong>Deliver To:</strong> {confirmedOrder?.customerInfo.fullName}</p>
                <p><strong>Address:</strong> {confirmedOrder?.customerInfo.address}, {confirmedOrder?.customerInfo.city} - {confirmedOrder?.customerInfo.postalCode}</p>
                <p><strong>Payment:</strong> {confirmedOrder?.customerInfo.paymentMethod === 'cod' ? 'Cash on Delivery (COD)' : 'Prepaid Online'}</p>
                <p><strong>Total Paid:</strong> ₹{confirmedOrder?.total.toLocaleString('en-IN')}</p>
              </div>
            </div>

            <button
              onClick={onClose}
              className="px-8 py-3 bg-[#15583F] text-[#F7F5ED] text-xs font-bold rounded-xl hover:bg-[#18392D] transition-colors"
            >
              Continue Exploring Collection
            </button>

          </div>
        )}

      </div>
    </div>
  );
};
