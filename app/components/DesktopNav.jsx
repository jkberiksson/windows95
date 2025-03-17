import Link from 'next/link';

export default function DesktopNav({ openMusicPlayer, openVideoPlayer }) {
    return (
        <nav className='absolute left-2 top-2 flex flex-col gap-6 items-center justify-center p-2'>
            <div onClick={openMusicPlayer} className='cursor-pointer flex flex-col items-center justify-center text-center gap-1 w-20'>
                <img
                    className='w-12'
                    src='https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZGhsa3ExNGN2OTdlcDU1bDdyZjRpdDZlamlzOXo2aThxb2RpZDRibyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/bmJZ1plAOktGOOAQMz/giphy.gif'
                />
                <h1 className='font-bold'>Music</h1>
            </div>
            <div onClick={openVideoPlayer} className='cursor-pointer flex flex-col items-center justify-center text-center gap-1 w-20'>
                <img
                    className='w-12'
                    src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExODd6YThxOXRhb244dW93dzdrNXZoYWNmenVvMmxrM2piaXZibDBmcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/yOoXtfoY3JWSY/giphy.gif'
                />
                <h1 className='font-bold'>Media</h1>
            </div>
            <Link href='/shop'>
                <div className='cursor-pointer flex flex-col items-center justify-center text-center gap-1 w-20'>
                    <img
                        className='w-12'
                        src='https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXUxMHdqandkNjVyNXo5bjZ2azBwM3hsN3M0a2tvMDRpYXJ5ODF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/L2kr3y97uJauF6T6Lh/giphy.gif'
                    />
                    <h1 className='font-bold text-black'>Shop</h1>
                </div>
            </Link>
        </nav>
    );
}
