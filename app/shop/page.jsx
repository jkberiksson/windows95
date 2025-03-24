import Link from 'next/link';

export default async function page() {
    const res = await fetch('https://tekr-backend.vercel.app/products');
    const products = await res.json();

    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18'>
            {products.map((item) => (
                <Link key={item.id} href={`/shop/${item.id}`}>
                    <div
                        key={item.id}
                        className='flex flex-col gap-4 items-center text-center cursor-pointer relative group transition-transform duration-300'>
                        <div className='h-[250px] w-[60%] overflow-hidden'>
                            <img
                                src={item.image}
                                alt={item.name}
                                className='h-full w-full object-contain transition-transform duration-300 group-hover:scale-110'
                            />
                        </div>
                        <div className='space-y-2'>
                            <h2>{item.name}</h2>
                            <p className='font-medium'>${item.price}</p>
                            {item.stock === 0 && <div className='bg-white text-black py-1 px-2 mt-2 inline-block'>Sold out</div>}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}
