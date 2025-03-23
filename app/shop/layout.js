'use client';

import { useEffect } from 'react';

import Header from './components/Header';
import CartContextProvider from '../context/CartContext';
import { ToastContainer } from 'react-toastify';
import Toast from './components/Toast';
import ShopContextProvider from '../context/ShopContext';

export default function ShopLayout({ children }) {
    useEffect(() => {
        const container = document.getElementById('webamp');
        if (container) {
            container.remove();
        }
    }, []);

    return (
        <ShopContextProvider>
            <CartContextProvider>
                <div className='min-h-screen bg-black text-white font-inconsolata'>
                    <div className='max-w-7xl mx-auto py-2 px-6'>
                        <Header />
                        <div className='my-12'>{children}</div>
                        <Toast ToastContainer={ToastContainer} />
                    </div>
                </div>
            </CartContextProvider>
        </ShopContextProvider>
    );
}
