import { Button } from '@react95/core';

export default function ChangeBgColor({ setBgColor }) {
    return (
        <div className='absolute bottom-10 flex items-center justify-center w-[100vw]'>
            <Button style={{ background: '#D4A5A5', paddingRight: '10px', paddingLeft: '10px' }} onClick={() => setBgColor('#D4A5A5')}>
                #D4A5A5
            </Button>
            <Button style={{ background: '#BFA3C6', paddingRight: '10px', paddingLeft: '10px' }} onClick={() => setBgColor('#BFA3C6')}>
                #BFA3C6
            </Button>
            <Button style={{ background: '#C6A3A3', paddingRight: '10px', paddingLeft: '10px' }} onClick={() => setBgColor('#C6A3A3')}>
                #C6A3A3
            </Button>
            <Button style={{ background: '#A3B5C6', paddingRight: '10px', paddingLeft: '10px' }} onClick={() => setBgColor('#A3B5C6')}>
                #A3B5C6
            </Button>
            <Button style={{ background: '#C6B5A3', paddingRight: '10px', paddingLeft: '10px' }} onClick={() => setBgColor('#C6B5A3')}>
                #C6B5A3
            </Button>
        </div>
    );
}
