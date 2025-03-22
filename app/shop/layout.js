'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { HiOutlineShoppingCart } from 'react-icons/hi';

export default function Layout({ children }) {
    const [amountInCart, setAmountInCart] = useState(0);

    useEffect(() => {
        const container = document.getElementById('webamp');
        if (container) {
            container.remove();
        }
    }, []);

    return (
        <div className='min-h-screen bg-black text-white font-poppins'>
            <div className='max-w-7xl mx-auto py-2 px-6'>
                <header className='flex justify-between items-center py-6'>
                    <Link href='/shop'>
                        <div className='uppercase text-3xl'>Tekr</div>
                    </Link>
                    <Link href='/shop/cart'>
                        <div className='relative'>
                            <HiOutlineShoppingCart size={26} className='cursor-pointer' />
                            <div className='bg-white text-black text-xs w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-2'>
                                {amountInCart}
                            </div>
                        </div>
                    </Link>
                </header>
                <div className='my-12'>{children}</div>
            </div>
        </div>
    );
}
