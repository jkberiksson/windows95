import { Modal, TitleBar, Frame } from '@react95/core';
import { Brush } from '@react95/icons';
import InstagramEmbed from './InstagramEmbed';

export default function Design({ setShowDesign }) {
    return (
        <Modal
            className='w-[80vw] md:w-[450px] h-[50vh] md:h-[550px] left-[10vw] md:left-[calc(50vw-400px)]'
            style={{ top: '10vh' }}
            icon={<Brush variant='32x32_4' />}
            title='Design'
            titleBarOptions={[<TitleBar.Close key='close' onClick={() => setShowDesign(false)} />]}>
            <p className='px-1 py-[2px] uppercase'>Discover my design</p>
            <Frame h='92%' bgColor='$material' boxShadow='$out' padding='$4'>
                <Frame h='100%' bgColor='white' boxShadow='$in' padding='$8' className='overflow-y-scroll custom-scrollbar'>
                    <InstagramEmbed />
                    <img
                        src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2x2cGJpNnBtZnZjZmMzNDgwdnljeG0wMjJ2YXh0bmV1MXk5OHRjNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fqytq2HbHHEbPmNpvz/giphy.gif'
                        alt='Personal Journey GIF'
                        className='w-full h-[200px] object-cover'
                    />
                    <img
                        src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3hhb2xobm5kZXZpcmE1dnllMTN1ZDJodHNoN3RpNmVpaW55dHRsdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DBExmC2lW7vdm/giphy.gif'
                        alt='Personal Journey GIF'
                        className='w-full h-[200px] object-cover'
                    />
                    <img
                        src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHExYmhrdHE5YWk4NndsMm11a3dqMXd1ZjhtYXA3cGU3cXkwanF5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aDbUrVZ5gGbYKdi/giphy.gif'
                        alt='Personal Journey GIF'
                        className='w-full h-[200px] object-cover'
                    />
                    <img
                        src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2x2cGJpNnBtZnZjZmMzNDgwdnljeG0wMjJ2YXh0bmV1MXk5OHRjNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fqytq2HbHHEbPmNpvz/giphy.gif'
                        alt='Personal Journey GIF'
                        className='w-full h-[200px] object-cover'
                    />
                    <img
                        src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3hhb2xobm5kZXZpcmE1dnllMTN1ZDJodHNoN3RpNmVpaW55dHRsdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DBExmC2lW7vdm/giphy.gif'
                        alt='Personal Journey GIF'
                        className='w-full h-[200px] object-cover'
                    />
                    <img
                        src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHExYmhrdHE5YWk4NndsMm11a3dqMXd1ZjhtYXA3cGU3cXkwanF5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aDbUrVZ5gGbYKdi/giphy.gif'
                        alt='Personal Journey GIF'
                        className='w-full h-[200px] object-cover'
                    />
                    <img
                        src='https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2x2cGJpNnBtZnZjZmMzNDgwdnljeG0wMjJ2YXh0bmV1MXk5OHRjNyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/fqytq2HbHHEbPmNpvz/giphy.gif'
                        alt='Personal Journey GIF'
                        className='w-full h-[200px] object-cover'
                    />
                    <img
                        src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ3hhb2xobm5kZXZpcmE1dnllMTN1ZDJodHNoN3RpNmVpaW55dHRsdyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/DBExmC2lW7vdm/giphy.gif'
                        alt='Personal Journey GIF'
                        className='w-full h-[200px] object-cover'
                    />
                    <img
                        src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHExYmhrdHE5YWk4NndsMm11a3dqMXd1ZjhtYXA3cGU3cXkwanF5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aDbUrVZ5gGbYKdi/giphy.gif'
                        alt='Personal Journey GIF'
                        className='w-full h-[200px] object-cover'
                    />
                </Frame>
            </Frame>
        </Modal>
    );
}
