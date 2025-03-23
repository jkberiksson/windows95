import { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export default function CartContextProvider({ children }) {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => {
            const existingItem = prevCart.find((item) => item.id === product.id);

            if (existingItem) {
                return prevCart.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
            } else {
                return [...prevCart, { ...product, quantity: 1 }];
            }
        });
    };

    const deleteFromCart = (productId) => {
        setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
    };

    return <CartContext.Provider value={{ cart, addToCart, deleteFromCart }}>{children}</CartContext.Provider>;
}

export const useCart = () => useContext(CartContext);
