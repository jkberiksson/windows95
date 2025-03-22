import Link from 'next/link';

export default async function page({ params }) {
    const { productId } = await params;

    return (
        <div className='lg:flex justify-center'>
            <div className='h-[500px] flex-1'>
                <img
                    src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExb3YxazZsYm9rM2d1ZjR3ZDF2dDdyMXlvaGtmZDFvcWU4aTg4emMyMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ongZdhVGIKHL5ohDi0/giphy.gif'
                    alt='Retro Shop'
                    className='h-full w-full object-contain'
                />
            </div>
            <div className='text-xs font-thin mt-12 lg:mt-0 lg:w-[300px]'>
                <div className='text-2xl font-thin mb-4'>Vintage Hoodie</div>
                <div className='text-sm font-semibold mb-2'>$49.99</div>
                <div className='uppercase mb-4'>one size</div>
                <button className='px-4 py-2 mb-4 bg-white text-black rounded-md cursor-pointer hover:bg-gray-200'>Add to Cart</button>
                <div className='uppercase '>
                    <span className='font-semibold'>design by</span> edvin gottfridsson
                </div>
                <div className='uppercase mb-4'>
                    <span className='font-semibold'>made by</span> nathalie andersson
                </div>
                <div className='uppercase font-semibold mb-1'>measuerments:</div>
                <div className='uppercase'>height: 70 cm</div>
                <div className='uppercase mb-4'>width: 50 cm</div>
                <div className='uppercase font-semibold mb-1'>fabric:</div>
                <div className='uppercase mb-4'>100% cotton</div>
                <div className='uppercase font-semibold mb-1'>shipping information:</div>
                <div className='uppercase'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos tenetur dignissimos dicta provident quam illo sunt ipsam
                    nostrum deserunt alias.
                </div>
            </div>
        </div>
    );
}
