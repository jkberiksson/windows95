import { useState, useEffect, useRef } from 'react';
import { Modal, TitleBar, Frame, Button } from '@react95/core';

import { Mspaint } from '@react95/icons';

export default function MsPaint({ setShowPaint }) {
    const [selectedColor, setSelectedColor] = useState('#FFFFFF');
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [drawing, setDrawing] = useState(false);

    useEffect(() => {}, [selectedColor]);
    const startDrawing = (e) => {};
    const draw = (e) => {};
    const stopDrawing = () => {};

    const paintColors = [
        ['#000000', '#808080', '#800000', '#808000', '#008000', '#008080', '#000080', '#800080'],
        ['#FFFFFF', '#C0C0C0', '#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF'],
    ];
    return (
        <Modal
            className='w-[360px] md:w-[450px] h-[50vh] md:h-[550px] right-3 md:left-[calc(50vw-50px)] flex flex-col'
            style={{ top: '20vh' }}
            icon={<Mspaint variant='32x32_4' />}
            title='Paint'
            titleBarOptions={[<TitleBar.Close key='close' onClick={() => setShowPaint(false)} />]}>
            <p className='px-1 py-[2px] uppercase'>Discover your skills</p>
            <div className='flex-1 overflow-hidden'>
                <Frame h='100%' bgColor='$material' boxShadow='$out' padding='$4'>
                    <Frame h='100%' bgColor='white' boxShadow='$in' padding='$8' className='flex flex-col gap-2'>
                        <div className='w-full flex-1'>
                            <canvas
                                className='w-full h-full border-2'
                                onMouseDown={startDrawing}
                                onMouseMove={draw}
                                onMouseUp={stopDrawing}
                                onMouseLeave={stopDrawing}
                                ref={canvasRef}
                            />
                        </div>
                        <div className='flex gap-4'>
                            <Frame w='50px' h='50px' bgColor='$material' boxShadow='$out' padding='$4'>
                                <Frame h='100%' bgColor={selectedColor} boxShadow='$in' />
                            </Frame>
                            <div className='flex-1 flex flex-col'>
                                <div className='flex-1'>
                                    <Button
                                        style={{ height: '100%', background: paintColors[0][0] }}
                                        onClick={() => setSelectedColor(paintColors[0][0])}
                                    />
                                    <Button
                                        style={{ height: '100%', background: paintColors[0][1] }}
                                        onClick={() => setSelectedColor(paintColors[0][1])}
                                    />
                                    <Button
                                        style={{ height: '100%', background: paintColors[0][2] }}
                                        onClick={() => setSelectedColor(paintColors[0][2])}
                                    />
                                    <Button
                                        style={{ height: '100%', background: paintColors[0][3] }}
                                        onClick={() => setSelectedColor(paintColors[0][3])}
                                    />
                                    <Button
                                        style={{ height: '100%', background: paintColors[0][4] }}
                                        onClick={() => setSelectedColor(paintColors[0][4])}
                                    />
                                    <Button
                                        style={{ height: '100%', background: paintColors[0][5] }}
                                        onClick={() => setSelectedColor(paintColors[0][5])}
                                    />
                                </div>
                                <div className='flex-1'>
                                    <Button
                                        style={{ height: '100%', background: paintColors[1][0] }}
                                        onClick={() => setSelectedColor(paintColors[1][0])}
                                    />
                                    <Button
                                        style={{ height: '100%', background: paintColors[1][1] }}
                                        onClick={() => setSelectedColor(paintColors[1][1])}
                                    />
                                    <Button
                                        style={{ height: '100%', background: paintColors[1][2] }}
                                        onClick={() => setSelectedColor(paintColors[1][2])}
                                    />
                                    <Button
                                        style={{ height: '100%', background: paintColors[1][3] }}
                                        onClick={() => setSelectedColor(paintColors[1][3])}
                                    />
                                    <Button
                                        style={{ height: '100%', background: paintColors[1][4] }}
                                        onClick={() => setSelectedColor(paintColors[1][4])}
                                    />
                                    <Button
                                        style={{ height: '100%', background: paintColors[1][5] }}
                                        onClick={() => setSelectedColor(paintColors[1][5])}
                                    />
                                </div>
                            </div>
                        </div>
                    </Frame>
                </Frame>
            </div>
        </Modal>
    );
}
