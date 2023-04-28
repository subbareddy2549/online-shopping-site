import { PRODUCTS } from '../Products';
import React, { createContext, useState } from 'react';
import { Product } from '../pages/shop/Product';
export const Shopcontext = createContext(null);
const getDefaultCart = () => {
  let cart = {}
  for (let i = 1; i < PRODUCTS.length + 1; i++) {
    cart[i] = 0
  }
  return cart;
}


export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  console.log(cartItems)

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    console.log(setCartItems)
  };
  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };
  const updateCartItem = (newAmount, itemId) => {
    setCartItems((prev) => ({ ...prev, [itemId]: newAmount }));

  };
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = PRODUCTS.find((product) => product.id === Number(item));
        totalAmount += cartItems[item] * itemInfo.price;
      }
    }
    return totalAmount;
  }
  const contextValue = { cartItems, addToCart, removeFromCart, updateCartItem, getTotalCartAmount };
  return (
    <Shopcontext.Provider value={contextValue}>{props.children}</Shopcontext.Provider>
  )
}
