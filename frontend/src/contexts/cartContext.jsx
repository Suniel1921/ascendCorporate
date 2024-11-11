// import React, { createContext, useContext, useEffect, useState } from "react";

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//   const [cart, setCart] = useState([]);

//   useEffect(() => {
//     const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
//     setCart(storedCart);
//   }, []);

//   const updateCartAndLocalStorage = (updatedCart) => {
//     setCart(updatedCart);
//     localStorage.setItem('cart', JSON.stringify(updatedCart));
//   };

// //   const addToCart = (product) => {
// //     const existingItem = cart.find(item => item._id === product._id);
// //     if (existingItem) {
// //       const updatedCart = cart.map(item =>
// //         item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
// //       );
// //       updateCartAndLocalStorage(updatedCart);
// //     } else {
// //       const updatedCart = [...cart, { ...product, quantity: 1 }];
// //       updateCartAndLocalStorage(updatedCart);
// //     }
// //   };

// const addToCart = (variant) => {
//     // Check if the item is already in the cart
//     const existingItem = cart.find(item => item._id === variant._id && item.cartHeading === variant.cartHeading);
  
//     if (existingItem) {
//       // If item exists, update the quantity
//       const updatedCart = cart.map(item =>
//         item._id === variant._id && item.cartHeading === variant.cartHeading
//           ? { ...item, quantity: item.quantity + 1 }
//           : item
//       );
//       updateCartAndLocalStorage(updatedCart);
//     } else {
//       // If item doesn't exist, add a new item
//       const updatedCart = [...cart, { ...variant, quantity: 1 }];
//       updateCartAndLocalStorage(updatedCart);
//     }
//   };
  
  
  

//   const removeFromCart = (productId) => {
//     const updatedCart = cart.filter(item => item._id !== productId);
//     updateCartAndLocalStorage(updatedCart);
//   };

//   const incrementQuantity = (productId) => {
//     const updatedCart = cart.map(item =>
//       item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
//     );
//     updateCartAndLocalStorage(updatedCart);
//   };

//   const decrementQuantity = (productId) => {
//     const updatedCart = cart.map(item =>
//       item._id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
//     );
//     updateCartAndLocalStorage(updatedCart);
//   };

//   return (
//     <CartContext.Provider value={{ cart, addToCart, removeFromCart, incrementQuantity, decrementQuantity }}>
//       {children}
//     </CartContext.Provider>
//   );
// };

// export const useCartGlobally = () => useContext(CartContext);






import React, { createContext, useContext, useEffect, useState } from "react";

// Create the CartContext
const CartContext = createContext();

// CartProvider component that wraps your application
export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // Initialize the cart state from localStorage when the component mounts
  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCart(storedCart);
  }, []);

  // Update cart and localStorage whenever cart changes
  const updateCartAndLocalStorage = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

  // Add item to cart or update quantity if already present
  const addToCart = (variant) => {
    const existingItem = cart.find(item => item._id === variant._id && item.cartHeading === variant.cartHeading);
  
    if (existingItem) {
      // If the item exists, increment quantity
      const updatedCart = cart.map(item =>
        item._id === variant._id && item.cartHeading === variant.cartHeading
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      updateCartAndLocalStorage(updatedCart);
    } else {
      // If item doesn't exist, add to cart with quantity 1
      const updatedCart = [...cart, { ...variant, quantity: 1 }];
      updateCartAndLocalStorage(updatedCart);
    }
  };

  // Remove item from the cart
  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item._id !== productId);
    updateCartAndLocalStorage(updatedCart);
  };

  // Increment item quantity
  const incrementQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateCartAndLocalStorage(updatedCart);
  };

  // Decrement item quantity, ensuring it never goes below 1
  const decrementQuantity = (productId) => {
    const updatedCart = cart.map(item =>
      item._id === productId ? { ...item, quantity: Math.max(item.quantity - 1, 1) } : item
    );
    updateCartAndLocalStorage(updatedCart);
  };

  // Clear the cart (useful for after successful checkout/payment)
  const clearCart = () => {
    setCart([]);
    localStorage.removeItem('cart');
  };

  return (
    <CartContext.Provider value={{
      cart,
      addToCart,
      removeFromCart,
      incrementQuantity,
      decrementQuantity,
      clearCart, 
    }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to access the CartContext
export const useCartGlobally = () => useContext(CartContext);
