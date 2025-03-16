import { Modal, TitleBar } from '@react95/core';
import { Mspaint } from '@react95/icons';

export default function MsPaint({ setShowPaint }) {
    return (
        <Modal
            className='w-[80vw] md:w-[450px] h-[50vh] md:h-[550px] left-[10vw] md:left-[calc(50vw-50px)]'
            style={{ top: '20vh' }}
            icon={<Mspaint variant='32x32_4' />}
            title='Paint'
            titleBarOptions={[<TitleBar.Close key='close' onClick={() => setShowPaint(false)} />]}></Modal>
    );
}
