import { createContext, useState } from "react";

const CartContext = createContext();

export default function CartProvider({ children }) {
  const [items, setItems] = useState([]);
  const addToCart = (title, teacher, cost, capacity) => {
    setItems((prevState) => [...prevState, { title, teacher, cost, capacity }]);

    return (
      <CartContext.Provider value={{ items, addToCart }}>
        {children}
      </CartContext.Provider>
    );
  };
}
