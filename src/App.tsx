import React, { useState, useEffect } from 'react';
import { AnnouncementBar } from './components/AnnouncementBar';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { TrustStrip } from './components/TrustStrip';
import { ProductCollection } from './components/ProductCollection';
import { ProductModal } from './components/ProductModal';
import { BrandStory } from './components/BrandStory';
import { DailyRitualSection } from './components/DailyRitualSection';
import { CustomerSupport } from './components/CustomerSupport';
import { WhatsAppOptin } from './components/WhatsAppOptin';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';
import { Footer } from './components/Footer';
import { CartItem, Product } from './types/ecommerce';
import { PRODUCTS } from './data/products';

export default function App() {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('shruveda_cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [selectedProductForModal, setSelectedProductForModal] = useState<Product | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [discountPercent, setDiscountPercent] = useState(0);

  // Sync cart to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('shruveda_cart', JSON.stringify(cartItems));
    } catch {
      // Ignore write errors in restricted environments
    }
  }, [cartItems]);

  // Cart total count
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Add product to cart handler
  const handleAddToCart = (product: Product, quantity = 1) => {
    setCartItems((prevItems) => {
      const existing = prevItems.find((item) => item.product.id === product.id);
      if (existing) {
        return prevItems.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      } else {
        return [...prevItems, { product, quantity }];
      }
    });
  };

  // Update item quantity handler
  const handleUpdateQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Remove item handler
  const handleRemoveItem = (productId: string) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.product.id !== productId)
    );
  };

  // Open checkout from cart drawer
  const handleProceedToCheckout = (discount: number) => {
    setDiscountPercent(discount);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Complete order handler
  const handleOrderCompleted = () => {
    setCartItems([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F5ED] text-[#18392D] font-sans antialiased selection:bg-[#DCE5D7] selection:text-[#15583F]">
      {/* SECTION A — Announcement Bar */}
      <AnnouncementBar />

      {/* SECTION B — Navigation Header */}
      <Navbar
        cartCount={cartCount}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      <main className="flex-1">
        {/* SECTION C — Hero Section */}
        <Hero />

        {/* SECTION D — Trust Strip */}
        <TrustStrip />

        {/* SECTION E — Product Collection */}
        <ProductCollection
          onAddToCart={(p) => handleAddToCart(p, 1)}
          onOpenModal={(p) => setSelectedProductForModal(p)}
          searchQuery={searchQuery}
        />

        {/* SECTION F — Brand Story */}
        <BrandStory />

        {/* SECTION G — The Ritual Experience */}
        <DailyRitualSection
          onOpenModal={(p) => setSelectedProductForModal(p)}
        />

        {/* SECTION H — Customer Support & Confidence */}
        <CustomerSupport />

        {/* SECTION I — WhatsApp / Newsletter Opt-in */}
        <WhatsAppOptin />
      </main>

      {/* SECTION J — Footer */}
      <Footer />

      {/* Interactive Modals and Drawers */}
      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        items={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        items={cartItems}
        discountPercent={discountPercent}
        onOrderCompleted={handleOrderCompleted}
      />

      <ProductModal
        product={selectedProductForModal}
        onClose={() => setSelectedProductForModal(null)}
        onAddToCart={(p, qty) => {
          handleAddToCart(p, qty);
        }}
      />
    </div>
  );
}
