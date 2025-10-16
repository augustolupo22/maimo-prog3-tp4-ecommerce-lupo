"use client";
import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const total = cart.reduce((acc, item) => acc + item.precio * item.quantity, 0);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existing = prevCart.find((p) => p._id === product._id);
      if (existing) {
        return prevCart.map((p) =>
          p._id === product._id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== id));
  };

  const updateQuantity = (id, newQty) => {
    if (newQty < 1) return;
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === id ? { ...item, quantity: newQty } : item
      )
    );
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, removeFromCart, updateQuantity, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
