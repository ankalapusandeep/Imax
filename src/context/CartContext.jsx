import {
  createContext,
  useState,
  useEffect
} from "react";

export const CartContext =
  createContext();

function CartProvider({ children }) {

  const [cart, setCart] =
    useState(() => {

      const savedCart =
        localStorage.getItem("cart");

      return savedCart
        ? JSON.parse(savedCart)
        : [];
    });

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    );

  }, [cart]);

  const addToCart = (product) => {

    setCart(prev =>
      [...prev, product]
    );

  };

  const removeFromCart = (id) => {

    setCart(prev =>
      prev.filter(
        item => item.id !== id
      )
    );

  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;