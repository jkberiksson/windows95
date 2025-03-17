'use client';

import { Video } from '@react95/core';

export default function VideoPlayer({ closeVideoPlayer }) {
    return (
        <div className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className='relative'>
                <div onClick={closeVideoPlayer} className='absolute top-1 right-2 text-white cursor-pointer'>
                    Close
                </div>
                <Video className='w-[300px] md:w-[450px]' name='Flumens' src='movie.mp4' />
            </div>
        </div>
    );
}
