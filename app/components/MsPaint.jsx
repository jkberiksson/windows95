import { Modal, TitleBar, Frame } from '@react95/core';
import { Mspaint } from '@react95/icons';

export default function MsPaint({ setShowPaint }) {
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
                    <Frame h='100%' bgColor='white' boxShadow='$in' padding='$8'></Frame>
                </Frame>
            </div>
        </Modal>
    );
}
