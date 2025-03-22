'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Shop() {
    const [activeLink, setActiveLink] = useState('products');
    return (
        <>
            <section className='mb-18 flex items-center justify-center gap-4 flex-wrap text-xs'>
                <div
                    onClick={() => setActiveLink('products')}
                    className={`${activeLink === 'products' ? 'underline' : ''} cursor-pointer hover:underline`}>
                    [All products]
                </div>
                <div
                    onClick={() => setActiveLink('terms')}
                    className={`${activeLink === 'terms' ? 'underline' : ''} cursor-pointer hover:underline`}>
                    [Terms & Conditions]
                </div>
                <div
                    onClick={() => setActiveLink('return')}
                    className={`${activeLink === 'return' ? 'underline' : ''} cursor-pointer hover:underline`}>
                    [Return policy]
                </div>
                <div
                    onClick={() => setActiveLink('contact')}
                    className={`${activeLink === 'contact' ? 'underline' : ''} cursor-pointer hover:underline`}>
                    [Contact]
                </div>
            </section>
            {activeLink === 'products' && <ShopItems items={dummyItems} />}
        </>
    );
}

function ShopItems({ items }) {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-18 text-xs font-thin'>
            {items.map((item) => (
                <Link key={item.id} href={`/shop/${item.id}`}>
                    <div
                        key={item.id}
                        className='flex flex-col gap-4 items-center text-center cursor-pointer relative group transition-transform duration-300'>
                        <div className='h-[250px] overflow-hidden'>
                            <img
                                src={item.image}
                                alt={item.name}
                                className='w-full h-[70%] object-contain transition-transform duration-300 group-hover:scale-110'
                            />
                        </div>
                        <div className='space-y-2'>
                            <h2>{item.name}</h2>
                            <p className='font-medium'>${item.price}</p>
                            {item.stock === 0 && (
                                <div className=' absolute top-0 mb-2 right-0 px-1 py-[2px] bg-white text-black inline-block'>Sold out</div>
                            )}
                        </div>
                    </div>
                </Link>
            ))}
        </div>
    );
}

export const dummyItems = [
    {
        id: 1,
        name: 'Retro Jacket',
        description: 'A classic ball mouse for nostalgia lovers.',
        price: 19.99,
        stock: 0,
        image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnM3cWd2cmNubWx0cWI4ajlmcm1laTU3cjM4MzI1NmR6bmN5YmlzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1uxLoL8GRCqNaEvwch/giphy.gif',
    },
    {
        id: 2,
        name: 'Vintage Hoodie',
        description: 'Mechanical keyboard with clicky keys.',
        price: 49.99,
        stock: 10,
        image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3YxazZsYm9rM2d1ZjR3ZDF2dDdyMXlvaGtmZDFvcWU4aTg4emMyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ongZdhVGIKHL5ohDi0/giphy.gif',
    },
    {
        id: 3,
        name: 'Gold Ring',
        description: 'Old-school CRT monitor for a retro setup.',
        price: 99.99,
        stock: 0,
        image: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExbjhjc3F2anVkMW1zbWNnZHdseWJobDEwZTl1eXYyMmlsdzR3MmhmMCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/vJkDBggmy5euqIQBCx/giphy.gif',
    },
    {
        id: 4,
        name: 'Jeans',
        description: 'Pack of 10 brand new 3.5-inch floppy disks.',
        price: 14.99,
        stock: 0,
        image: 'https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHFkeHg1cDlwangwYnBieTN0bDJsdmdpaDdkbndiZTIyMTQ0MWFwMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/St3213tKai3M0AxlGR/giphy.gif',
    },
    {
        id: 5,
        name: 'Retro Mouse',
        description: 'A classic ball mouse for nostalgia lovers',
        price: 19.99,
        stock: 0,
        image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExbWNjNWRkbG9yemw3a3gxczdwYjBoZnZmejFiMHJsbzc0bmcwMm9nbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/gL2P9tWLMzlG7HjTJM/giphy.gif',
    },
];
