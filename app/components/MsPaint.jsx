import { useRef, useState, useEffect } from 'react';
import { Modal, TitleBar, Frame, Toolbar, Button, Separator, Fieldset } from '@react95/core';

import { Mspaint } from '@react95/icons';

export default function MsPaint({ setShowPaint }) {
    const canvasRef = useRef(null);
    const ctxRef = useRef(null);
    const [drawing, setDrawing] = useState(false);
    const [selectedColor, setSelectedColor] = useState('black');

    useEffect(() => {
        const canvas = canvasRef.current;
        const ctx = canvas.getContext('2d');
        ctx.lineWidth = 2;
        ctx.lineCap = 'round';
        ctx.strokeStyle = selectedColor;
        ctxRef.current = ctx;
    }, [selectedColor]);

    const startDrawing = (e) => {
        ctxRef.current.beginPath();
        ctxRef.current.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        setDrawing(true);
    };

    const draw = (e) => {
        if (!drawing) return;
        ctxRef.current.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
        ctxRef.current.stroke();
    };

    const stopDrawing = () => {
        ctxRef.current.closePath();
        setDrawing(false);
    };
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
                    <Frame h='100%' bgColor='white' boxShadow='$in' padding='$8'>
                        <div className='flex justify-center items-center bg-white border'>
                            <canvas
                                ref={canvasRef}
                                width='100%'
                                height='400px'
                                className='border'
                                onMouseDown={startDrawing}
                                onMouseMove={draw}
                                onMouseUp={stopDrawing}
                                onMouseLeave={stopDrawing}
                            />
                        </div>
                        <Fieldset legend='Colors' className='p-2 flex space-x-2'>
                            {['black', 'red', 'blue', 'green', 'yellow'].map((color) => (
                                <Button
                                    key={color}
                                    style={{ backgroundColor: color, width: 20, height: 20 }}
                                    onClick={() => setSelectedColor(color)}
                                />
                            ))}
                        </Fieldset>
                    </Frame>
                </Frame>
            </div>
        </Modal>
    );
}
