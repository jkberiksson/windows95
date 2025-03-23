import { createContext, useContext, useEffect, useState } from 'react';

const ShopContext = createContext();

const dummyProducts = [
    {
        id: 1,
        name: 'Retro Jacket',
        description:
            'A stylish throwback to classic streetwear, crafted from breathable 100% cotton. This lightweight yet durable jacket is perfect for layering, offering a relaxed fit and all-day comfort at an unbeatable price.',
        price: 19.99, // Affordable price for a high-quality jacket
        stock: 0,
        measurements: 'W: 50CM, H: 50CM', // Ensuring good fit details
        fabric: '100% Cotton',
        designer: 'Edvin Gottfredsson',
        image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExNnM3cWd2cmNubWx0cWI4ajlmcm1laTU3cjM4MzI1NmR6bmN5YmlzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/1uxLoL8GRCqNaEvwch/giphy.gif',
    },
    {
        id: 2,
        name: 'Vintage Hoodie',
        description:
            'An ultra-soft hoodie designed for maximum warmth and style. Made from premium **100% cotton**, it’s breathable yet cozy, with a relaxed fit that makes it perfect for lounging or layering. A must-have at this price!',
        price: 49.99, // Great value for a premium hoodie
        stock: 10,
        measurements: 'W: 50CM, H: 50CM', // Ensuring a good fit reference
        fabric: '100% Cotton',
        designer: 'Edvin Gottfredsson',
        image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3YxazZsYm9rM2d1ZjR3ZDF2dDdyMXlvaGtmZDFvcWU4aTg4emMyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ongZdhVGIKHL5ohDi0/giphy.gif',
    },
    {
        id: 3,
        name: 'Gold Necklace',
        description:
            'A timeless **18K gold-plated** necklace, carefully crafted for elegance and durability. Lightweight and comfortable, this one-size-fits-all piece complements any outfit, adding a subtle touch of luxury.',
        price: 99.99, // Luxury appeal at a fair price
        stock: 0,
        measurements: 'One size', // Necklace size doesn't vary
        fabric: '18K Gold-Plated Alloy', // More accurate material info
        designer: 'Edvin Gottfredsson',
        image: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExODZrcGV6dXVrYWFyZ3VlZngzNHdmMTdlaHg0NDZpbXh5M2QzemdnbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/3ohhwnxcbcIkdQW5Wg/giphy.gif',
    },
    {
        id: 4,
        name: 'Wrist Band',
        description:
            'A minimalistic and **adjustable wristband**, crafted from high-quality **elastic cotton blend** for a snug yet comfortable fit. Perfect for workouts, casual wear, or adding a subtle touch of style to your look.',
        price: 14.99, // Affordable and stylish
        stock: 1,
        measurements: 'One size (Adjustable)', // Helpful size clarification
        fabric: 'Elastic Cotton Blend', // More realistic fabric info
        designer: 'Edvin Gottfredsson',
        image: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzJuMnExMTF2dmg5cGE1cjVrZm1vNm52dGVxbzRqcWdwOW1ndzZ4MiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/tdxgwtMidhVmSiwrJ0/giphy.gif',
    },
    {
        id: 5,
        name: 'Snus Dosa',
        description:
            'A sleek and durable storage container crafted from high-quality plastic, perfect for keeping your essentials secure. Its compact, one-size design makes it easy to carry while maintaining a stylish and minimalistic look.',
        price: 14.99, // Affordable and stylish
        stock: 15,
        measurements: 'One size', // Helpful size clarification
        fabric: '110% plastic', // More realistic fabric info
        designer: 'Edvin Gottfredsson',
        image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZzkyNDh3aGZ3ZnhlMHBzcnpjb3Vpam1oanhtdWU4eXV6MjhxcGhxMiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/92EUxSz5iPk3otOIcm/giphy.gif',
    },
    {
        id: 6,
        name: 'Lava Lamp',
        description:
            'A mesmerizing and retro-inspired lava lamp that creates a calming ambiance with its slow-moving, colorful wax formations. Perfect for adding a nostalgic touch to any room or workspace.',
        price: 14.99, // Affordable and stylish
        stock: 0, // Currently out of stock
        measurements: 'One size', // Helpful size clarification
        fabric: 'Glass and wax', // More realistic material info
        designer: 'Edvin Gottfredsson',
        image: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcHd2d3BkdXYwOThza3oxNmVmYmpscno2cXB2MnpyamxybW1jbWZvYSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ITyttLEHEbBTaUcqrm/giphy.gif',
    },
];

export default function ShopContextProvider({ children }) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = () => {
            try {
                setTimeout(() => {
                    setProducts(dummyProducts);
                    setLoading(false);
                }, 1000);
            } catch (error) {
                console.log(error);
            }
        };
        getProducts();
    }, []);

    const getOneProduct = (id) => {
        return products.find((product) => product.id === id);
    };

    return <ShopContext.Provider value={{ products, loading, getOneProduct }}>{children}</ShopContext.Provider>;
}

export const useShop = () => useContext(ShopContext);
