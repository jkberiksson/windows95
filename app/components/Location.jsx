import { Modal, TitleBar } from '@react95/core';
import { McmEarth } from '@react95/icons';

export default function Location({ setShowLocation }) {
    return (
        <Modal
            className='w-[80vw] md:w-[450px] h-[50vh] md:h-[550px] left-[15vw] md:left-[calc(96vw-450px)]'
            style={{ top: '15vh' }}
            icon={<McmEarth variant='32x32_4' />}
            title='Location'
            titleBarOptions={[<TitleBar.Close key='close' onClick={() => setShowLocation(false)} />]}></Modal>
    );
}
