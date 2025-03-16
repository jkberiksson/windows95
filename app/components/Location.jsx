import { Modal, TitleBar, Frame } from '@react95/core';
import { McmEarth } from '@react95/icons';

export default function Location({ setShowLocation }) {
    return (
        <Modal
            className='w-[360px] md:w-[450px] h-[50vh] md:h-[550px] left-1 md:left-[calc(96vw-450px)] flex flex-col'
            style={{ top: '15vh' }}
            icon={<McmEarth variant='32x32_4' />}
            title='Location'
            titleBarOptions={[<TitleBar.Close key='close' onClick={() => setShowLocation(false)} />]}>
            <p className='px-1 py-[2px] uppercase'>Discover my location</p>
            <div className='flex-1 overflow-hidden'>
                <Frame h='100%' bgColor='$material' boxShadow='$out' padding='$4'>
                    <Frame h='100%' bgColor='white' boxShadow='$in' padding='$8'></Frame>
                </Frame>
            </div>
        </Modal>
    );
}
