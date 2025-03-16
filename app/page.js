'use client';

import { useRef, useState } from 'react';

import Navbar from './components/Navbar';
import MsPaint from './components/MsPaint';
import About from './components/About';
import Location from './components/Location';
import Design from './components/Design';

export default function Home() {
    const container = useRef(null);
    const [isSleeping, setIsSleeping] = useState(false);
    const [showPaint, setShowPaint] = useState(false);
    const [showAbout, setShowAbout] = useState(false);
    const [showLocation, setShowLocation] = useState(false);
    const [showDesign, setShowDesign] = useState(false);

    const byeClick = () => {
        if (isSleeping) {
            container.current.style.opacity = '0';
            setIsSleeping(false);
        } else {
            container.current.style.opacity = '0.95';
            setIsSleeping(true);
        }
    };

    const locationClick = () => setShowLocation(true);
    const aboutClick = () => setShowAbout(true);
    const paintClick = () => setShowPaint(true);
    const designClick = () => setShowDesign(true);

    return (
        <div className='bg-[#C6A3B5] h-screen'>
            <div
                ref={container}
                className='h-full w-full absolute left-0 top-0 bg-black opacity-0 transition-all duration-1500 ease-in-out pointer-events-none z-10'></div>
            {showPaint && <MsPaint setShowPaint={setShowPaint} />}
            {showAbout && <About setShowAbout={setShowAbout} />}
            {showLocation && <Location setShowLocation={setShowLocation} />}
            {showDesign && <Design setShowDesign={setShowDesign} />}
            <Navbar
                isSleeping={isSleeping}
                byeClick={byeClick}
                locationClick={locationClick}
                aboutClick={aboutClick}
                paintClick={paintClick}
                designClick={designClick}
            />
        </div>
    );
}
