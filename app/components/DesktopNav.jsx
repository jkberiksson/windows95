import Link from 'next/link';

export default function DesktopNav({ openMusicPlayer, openVideoPlayer, openMsPaint, openLocation, openAbout, openDesign }) {
    const items = [
        { onClick: openMusicPlayer, img: 'https://media3.giphy.com/media/bmJZ1plAOktGOOAQMz/giphy.gif', label: 'Music' },
        { onClick: openVideoPlayer, img: 'https://media2.giphy.com/media/yOoXtfoY3JWSY/giphy.gif', label: 'Media' },
        { onClick: openMsPaint, img: 'https://media3.giphy.com/media/gfMl12kKfsXjt151E0/giphy.gif', label: 'MS Paint' },
        { onClick: openLocation, img: 'https://media1.giphy.com/media/lnsTFyT6wUzItXsUV5/giphy.gif', label: 'Location' },
        { onClick: openAbout, img: 'https://media3.giphy.com/media/VlRj79JobLD9Jmox6s/giphy.gif', label: 'About' },
        { onClick: openDesign, img: 'https://media1.giphy.com/media/kTsFBFK7OgyE8/giphy.gif', label: 'Design' },
        { href: '/shop', img: 'https://media2.giphy.com/media/L2kr3y97uJauF6T6Lh/giphy.gif', label: 'Shop' },
    ];

    return (
        <nav className='absolute left-2 top-2 p-2 grid grid-cols-2 gap-4'>
            {items.map(({ onClick, href, img, label }, index) =>
                href ? (
                    <Link key={index} href={href}>
                        <div
                            key={index}
                            onClick={onClick}
                            className='cursor-pointer flex flex-col items-center justify-between text-center gap-1 w-20 hover:scale-110'>
                            <img className='w-8 md:w-12' src={img} />
                            <h1 className='font-bold text-black'>{label}</h1>
                        </div>
                    </Link>
                ) : (
                    <div
                        key={index}
                        onClick={onClick}
                        className='cursor-pointer flex flex-col items-center justify-between text-center gap-1 w-20 hover:scale-110'>
                        <img className='w-8 md:w-12 flex-1 object-contain' src={img} />
                        <h1 className='font-bold'>{label}</h1>
                    </div>
                )
            )}
        </nav>
    );
}
