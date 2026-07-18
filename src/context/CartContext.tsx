import { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  variant: {
    color: string;
    material: string;
    size: string;
  };
  quantity: number;
}

interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => void;
  removeFromCart: (id: string | number, variant: CartItem['variant']) => void;
  updateQuantity: (id: string | number, variant: CartItem['variant'], qty: number) => void;
  cartTotal: number;
  cartCount: number;
  isCartOpen: boolean;
  toggleCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('ruprays_cart');
    if (savedCart) {
      try {
        setCartItems(JSON.parse(savedCart));
      } catch (e) {
        console.error("Failed to parse cart", e);
      }
    }
  }, []);

  // Save to localStorage whenever cart changes
  useEffect(() => {
    localStorage.setItem('ruprays_cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (item: Omit<CartItem, 'quantity'> & { quantity?: number }) => {
    setCartItems(prev => {
      const existingItemIndex = prev.findIndex(i => 
        i.id === item.id && 
        i.variant.color === item.variant.color && 
        i.variant.material === item.variant.material && 
        i.variant.size === item.variant.size
      );

      if (existingItemIndex > -1) {
        const newItems = [...prev];
        newItems[existingItemIndex].quantity += (item.quantity || 1);
        return newItems;
      }
      return [...prev, { ...item, quantity: item.quantity || 1 }];
    });
    setIsCartOpen(true); // Auto open mini cart or similar if implemented, or just feedback
  };

  const removeFromCart = (id: string | number, variant: CartItem['variant']) => {
    setCartItems(prev => prev.filter(i => 
      !(i.id === id && 
        i.variant.color === variant.color && 
        i.variant.material === variant.material && 
        i.variant.size === variant.size)
    ));
  };

  const updateQuantity = (id: string | number, variant: CartItem['variant'], qty: number) => {
    if (qty < 1) return;
    setCartItems(prev => prev.map(i => {
      if (i.id === id && 
          i.variant.color === variant.color && 
          i.variant.material === variant.material && 
          i.variant.size === variant.size) {
        return { ...i, quantity: qty };
      }
      return i;
    }));
  };

  const cartTotal = cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  const cartCount = cartItems.reduce((count, item) => count + item.quantity, 0);

  const toggleCart = () => setIsCartOpen(prev => !prev);

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      updateQuantity,
      cartTotal,
      cartCount,
      isCartOpen,
      toggleCart
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
