'use client';

import Link from 'next/link';
import { useCart } from '@/app/context/CartContext';

export default function CartPage() {
    const { cart, deleteFromCart } = useCart();

    const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className='max-w-3xl mx-auto p-4'>
            {cart.length === 0 ? (
                <div className='text-center'>
                    <p>Your cart is empty.</p>
                    <Link href='/shop'>
                        <span className='text-blue-600 hover:underline cursor-pointer mt-4 inline-block'>Back to Shop</span>
                    </Link>
                </div>
            ) : (
                <>
                    <div className='space-y-6'>
                        {cart.map((item) => (
                            <div key={item.id} className='flex items-center gap-4 border-b pb-4'>
                                {/* Product Image */}
                                <img src={item.image} alt={item.name} className='w-20 h-20 object-contain' />

                                {/* Product details */}
                                <div className='flex-1'>
                                    <h2 className='font-semibold'>{item.name}</h2>
                                    <p className='text-sm text-gray-600'>${item.price.toFixed(2)}</p>

                                    {/* Quantity input */}

                                    <p className='text-sm text-gray-600'>Quantity: {item.quantity}</p>

                                    <button
                                        onClick={() => deleteFromCart(item.id)}
                                        className='text-red-600 hover:underline text-sm cursor-pointer'>
                                        Remove
                                    </button>
                                </div>

                                <p className='font-semibold'>${(item.price * item.quantity).toFixed(2)}</p>
                            </div>
                        ))}
                    </div>

                    <div className='mt-6 text-right'>
                        <p className='text-lg font-semibold'>Total: ${totalPrice}</p>
                        <button className='px-6 py-2 mt-4 bg-white text-black rounded-md cursor-pointer hover:bg-gray-200 font-semibold'>
                            Proceed to Checkout
                        </button>
                    </div>
                </>
            )}
        </div>
    );
}
