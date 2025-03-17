import React, { useEffect } from 'react';
import { startWebamp } from '../utils/startWebamp';

export default function MusicPlayer({ closeMusicPlayer }) {
    useEffect(() => {
        startWebamp(closeMusicPlayer);
    }, []); // Run only once on mount

    return <div style={{ position: 'absolute', left: '50%', top: '50%' }} id='winamp-container'></div>;
}
