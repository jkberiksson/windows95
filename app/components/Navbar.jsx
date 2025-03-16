'use client';
import { cloneElement } from 'react';
import { TaskBar, List } from '@react95/core';
import { Drvspace7, Mspaint, Computer, McmEarth, InfoBubble, Brush } from '@react95/icons';
import Link from 'next/link';

export default function Navbar({ isSleeping, byeClick, locationClick, aboutClick, paintClick, designClick }) {
    const navItems = [
        { title: 'Location', icon: <McmEarth variant='32x32_4' />, click: locationClick },
        { title: 'About', icon: <InfoBubble variant='32x32_4' />, click: aboutClick },
        { title: 'MS Paint', icon: <Mspaint variant='32x32_4' />, click: paintClick },
        { title: 'Design', icon: <Brush variant='32x32_4' />, click: designClick },
    ];
    return (
        <div className='z-20 relative'>
            <TaskBar
                list={
                    <List width={'200px'} className='flex'>
                        <div className='bg-[#808080] flex flex-col justify-center px-3 items-center text-lg pointer-events-none'>
                            <div>E</div>
                            <div>D</div>
                            <div>V</div>
                            <div>I</div>
                            <div>N</div>
                        </div>
                        <div className='w-full'>
                            {navItems.map((item, idx) => {
                                return (
                                    <List.Item
                                        onClick={item.click}
                                        key={idx}
                                        icon={cloneElement(item.icon, {
                                            style: { width: '24px', height: '24px' },
                                        })}
                                        style={{ padding: '8px', textDecoration: 'underline', cursor: 'pointer' }}>
                                        {item.title}
                                    </List.Item>
                                );
                            })}
                            <Link href='/shop'>
                                <List.Item
                                    style={{ padding: '6px', margin: '2px 0', textDecoration: 'underline', cursor: 'pointer' }}
                                    icon={cloneElement(<Drvspace7 />, {
                                        style: { width: '24px', height: '24px' },
                                    })}>
                                    Shop
                                </List.Item>
                            </Link>
                            <List.Divider />
                            <List.Item
                                onClick={byeClick}
                                style={{ padding: '6px', margin: '2px 0', textDecoration: 'underline', cursor: 'pointer' }}
                                icon={cloneElement(<Computer />, {
                                    style: { width: '24px', height: '24px' },
                                })}>
                                {isSleeping ? 'Wake Up!' : 'Bye Bye...'}
                            </List.Item>
                        </div>
                    </List>
                }
            />
        </div>
    );
}
