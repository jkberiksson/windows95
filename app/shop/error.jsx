'use client';

import Link from 'next/link';

export default function Error() {
    return (
        <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-base'>
            <p>Something went wrong...</p>
            <Link href='/shop' className='underline'>
                Back to shop!
            </Link>
        </div>
    );
}
