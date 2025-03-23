'use client';

import { useCart } from '@/app/context/CartContext';
import { toast } from 'react-toastify';
import { useParams, useRouter } from 'next/navigation';
import { useShop } from '@/app/context/ShopContext';
import { CircleLoader } from 'react-spinners';

export default function ProductPage() {
    const { getOneProduct, loading } = useShop();
    const { cart, addToCart } = useCart();
    const { productId } = useParams();
    const product = getOneProduct(parseInt(productId));
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
        toast.success(`${product.name} added to cart!`);
    };

    if (loading) {
        return (
            <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-4'>
                <CircleLoader color='white' />
                Loading
            </div>
        );
    }

    return (
        <div className='lg:flex justify-center relative'>
            {/* Product Image */}
            <div className='h-[500px] flex-1 pointer-events-none'>
                <img src={product.image} alt={product.name} className='h-full w-full object-contain pointer-events-none' />
            </div>

            {/* Product Details */}
            <div className='text-xs lg:text-sm font-thin mt-12 lg:mt-0 lg:w-[300px] uppercase'>
                <div className='text-2xl font-thin mb-1'>{product.name}</div>
                <div className='text-sm font-semibold mb-4'>${product.price.toFixed(2)}</div>

                {/* Description */}
                <div className='mb-1 font-semibold'>Description:</div>
                <div className='mb-4'>{product.description}</div>

                {/* Measurements */}
                <div className='font-semibold mb-1'>Measurements:</div>
                <div className='mb-4'>{product.measurements}</div>

                {/* Fabric */}
                <div className='font-semibold mb-1'>Fabric:</div>
                <div className='mb-4'>{product.fabric}</div>

                {/* Designer */}
                <div className='font-semibold mb-1'>Design by:</div>
                <div className='mb-4'>{product.designer}</div>

                {/* Add to Cart Button */}

                {product.stock > 0 ? (
                    <button
                        onClick={handleAddToCart}
                        className='px-6 py-2 mb-4 bg-white text-black rounded-md cursor-pointer hover:bg-gray-200 font-semibold block'>
                        Add to Cart
                    </button>
                ) : (
                    <button disabled className='px-6 py-2 mb-4 bg-gray-400 text-black rounded-md line-through font-semibold block '>
                        Out of Stock
                    </button>
                )}
            </div>
        </div>
    );
}
