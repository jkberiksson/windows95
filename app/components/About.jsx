import { Modal, TitleBar, Frame } from '@react95/core';
import { InfoBubble } from '@react95/icons';

export default function About({ setShowAbout }) {
    return (
        <Modal
            className='w-[80vw] md:w-[450px] h-[50vh] md:h-[550px] left-[5vw] md:left-[4vw]'
            style={{ top: '5vh' }}
            icon={<InfoBubble variant='32x32_4' />}
            title='About'
            titleBarOptions={[<TitleBar.Close key='close' onClick={() => setShowAbout(false)} />]}>
            <p className='px-1 py-[2px] uppercase'>Discover my story</p>
            <Frame h='100%' bgColor='$material' boxShadow='$out' padding='$4'>
                <Frame h='100%' bgColor='white' boxShadow='$in' padding='$8' className='overflow-y-scroll custom-scrollbar'>
                    <h1 className='font-bold'>EDVIN GOTTFREDSSON a.k.a SLEDDE</h1>
                    <img
                        src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExcTh5Mzk2YzJobG5nazN3a29naWp1eXNxMHRlYm4zd2MzbGVmN3BoayZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tS1fdhoGAVhOgLl6bg/giphy.gif'
                        alt='Personal Journey GIF'
                        className='w-full h-[200px] object-cover my-4'
                    />
                    <h3 className='uppercase font-bold mb-2'>About:</h3>
                    <p className='mb-2'>
                        So, a little about me… I’m someone who’s always curious about everything, and I love exploring new ideas and
                        experiences. I don’t really have a “typical” day — I just kind of roll with whatever comes my way. I’ve had my fair
                        share of ups and downs, but that’s all part of the fun, right? I think life is about figuring things out as you go,
                        and sometimes it’s messy, but that’s where the good stuff happens.
                    </p>
                    <p className='mb-2'>
                        I’ve always had a thing for trying new things, whether it’s learning a new skill or picking up a random hobby just
                        to see what happens. Sometimes I fail, but hey, that’s how you learn! I’m not afraid to take risks or step out of my
                        comfort zone, and I think that’s the only way to really grow.
                    </p>
                    <p>
                        One of my favorite things is just chatting with people and hearing their stories — everyone has something
                        interesting to share, and I find that super inspiring. Whether I’m lost in a good book or hanging out with friends,
                        I’m always trying to soak up everything I can from the world around me. Life’s too short to take too seriously, so I
                        try to keep things light, fun, and full of surprises.
                    </p>
                    <img
                        src='https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExaHExYmhrdHE5YWk4NndsMm11a3dqMXd1ZjhtYXA3cGU3cXkwanF5MSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3o7aDbUrVZ5gGbYKdi/giphy.gif'
                        alt='Personal Journey GIF'
                        className='w-full h-[200px] object-cover my-4'
                    />
                    <div className='w-full h-[1px] bg-black my-2'></div>

                    <div className='my-4'>
                        <blockquote className='italic text-center text-lg'>
                            "Life isn’t about finding yourself, it’s about creating yourself."
                        </blockquote>
                    </div>
                    <div className='w-full h-[1px] bg-black my-2'></div>
                    <div className='my-4'>
                        <p className='text-center'>
                            If you’d like to connect or chat about anything, feel free to
                            <a href='mailto:your-email@example.com' className='text-blue-500'>
                                email me
                            </a>
                            !
                        </p>
                    </div>

                    <div className='flex justify-center gap-4 my-4'>
                        <a href='https://twitter.com/yourusername' target='_blank' className='text-blue-500'>
                            X
                        </a>
                        <a href='https://linkedin.com/in/yourusername' target='_blank' className='text-blue-500'>
                            Instagram
                        </a>
                        <a href='https://github.com/yourusername' target='_blank' className='text-blue-500'>
                            LinkedIn
                        </a>
                    </div>
                </Frame>
            </Frame>
        </Modal>
    );
}
