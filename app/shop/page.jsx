'use client';

import { TitleBar } from '@react95/core';
import { Drvspace7 } from '@react95/icons';
import Link from 'next/link';

export default function Shop() {
    return (
        <div className='h-screen flex flex-col'>
            <TitleBar icon={<Drvspace7 variant='32x32_4' />} title='Shop'>
                <TitleBar.Option>
                    <Link href='/'>
                        <TitleBar.Close style={{ marginLeft: 0, cursor: 'pointer' }} />
                    </Link>
                </TitleBar.Option>
            </TitleBar>
            <div className='flex-1 flex flex-col items-center justify-center gap-2'>
                <h1 className='text-4xl'>Shop in progress...</h1>
                <p className='font-medium'>BY EDVIN GOTTFREDSSON</p>
            </div>
        </div>
    );
}
