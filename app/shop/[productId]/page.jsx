import AddToCartBtn from '../components/AddToCartBtn';

export default async function ProductPage({ params }) {
    const { productId } = await params;

    const res = await fetch(`http://localhost:3001/products/${productId}`);
    const product = await res.json();

    return (
        <div className='lg:flex justify-center relative'>
            {/* Product Image */}
            <div className='h-[500px] flex-1 pointer-events-none'>
                <img src={product.image} alt={product.name} className='h-full w-full object-contain pointer-events-none' />
            </div>

            {/* Product Details */}
            <div className='lg:text-sm mt-12 lg:mt-0 lg:w-[300px] uppercase'>
                <div className='text-2xl mb-1'>{product.name}</div>
                <div className='text-sm font-semibold mb-4'>${product.price.toFixed(2)}</div>

                {/* Add to Cart Button */}
                {product.stock > 0 ? (
                    <AddToCartBtn product={product} />
                ) : (
                    <button disabled className='px-6 py-2 mb-4 bg-gray-400 text-black rounded-md line-through font-semibold block '>
                        Out of Stock
                    </button>
                )}

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
                <div>{product.designer}</div>
            </div>
        </div>
    );
}
