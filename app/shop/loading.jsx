'use client';

import { CircleLoader } from 'react-spinners';

export default function Loading() {
    return (
        <div className='absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center gap-4'>
            <CircleLoader color='white' />
            Loading
        </div>
    );
}
