'use client';

import CartContextProvider from '@/app/context/CartContext';

export default function ShopProvider({ children }) {
    return <CartContextProvider>{children}</CartContextProvider>;
}
