'use client';

import { useCart } from '@/app/context/CartContext';
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation';

export default function AddToCartBtn({ product }) {
    const { cart, addToCart } = useCart();
    const router = useRouter();

    const handleAddToCart = () => {
        const productInCart = cart.find((item) => item.id === product.id);

        if (productInCart) {
            if (productInCart.quantity >= productInCart.stock) {
                toast.error(`No more ${product.name} in stock!`);
                return;
            }
        }
        router.push('/shop');
        addToCart(product);
        toast.dark(`${product.name} added to cart!`);
    };

    return (
        <button
            onClick={handleAddToCart}
            className='px-6 py-2 mb-4 bg-white text-black rounded-md cursor-pointer hover:bg-gray-200 font-semibold block'>
            Add to Cart
        </button>
    );
}
