export interface Product {
  id: string;
  name: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  category: 'Skincare' | 'Hair Care' | 'Body Care' | 'Wellness';
  rating: number;
  reviewCount: number;
  volume: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  keyIngredients: string[];
  benefits: string[];
  howToUse: string;
  badge?: string;
  inStock: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface CustomerOrderInfo {
  fullName: string;
  phone: string;
  address: string;
  city: string;
  postalCode: string;
  paymentMethod: 'cod' | 'online' | 'upi';
  notes?: string;
}

export interface OrderConfirmation {
  orderId: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  customerInfo: CustomerOrderInfo;
}
