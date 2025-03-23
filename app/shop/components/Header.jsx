import Link from 'next/link';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { useCart } from '@/app/context/CartContext';
import { CircleLoader } from 'react-spinners';

export default function Header() {
    const { cart } = useCart();
    let totalItemsInCart = 0;

    cart.map((product) => {
        return (totalItemsInCart += product.quantity);
    });

    return (
        <header>
            <div className='flex justify-between items-center py-6'>
                <Link href='/shop'>
                    <div className='uppercase text-3xl'>
                        <CircleLoader color='white' />
                    </div>
                </Link>
                <Link href='/shop/cart'>
                    <div className='relative'>
                        <HiOutlineShoppingCart size={26} className='cursor-pointer' />
                        <div className='bg-white text-black w-5 h-5 flex items-center justify-center rounded-full absolute -top-2 -right-2'>
                            {totalItemsInCart}
                        </div>
                    </div>
                </Link>
            </div>
            <section className='mb-18 flex items-center justify-center gap-4 flex-wrap'>
                <Link href='/shop' className='cursor-pointer hover:underline'>
                    [All products]
                </Link>
                <Link href='/shop/terms' className='cursor-pointer hover:underline'>
                    [Terms & Conditions]
                </Link>
                <Link href='/shop/return' className='cursor-pointer hover:underline'>
                    [Return policy]
                </Link>
                <Link href='/shop/contact' className='cursor-pointer hover:underline'>
                    [Contact]
                </Link>
            </section>
        </header>
    );
}
