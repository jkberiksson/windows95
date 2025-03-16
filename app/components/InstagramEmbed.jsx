import React, { useEffect } from 'react';

export default function InstagramEmbed() {
    useEffect(() => {
        // Load the Instagram embed script when the component mounts
        const script = document.createElement('script');
        script.src = 'https://www.instagram.com/embed.js';
        script.async = true;
        document.body.appendChild(script);

        // Clean up the script when the component unmounts
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <blockquote
                className='instagram-media'
                data-instgrm-permalink='https://www.instagram.com/edvingottfredsson'
                data-instgrm-version='12'
                style={{
                    background: '#FFF',
                    border: '0',
                    borderRadius: '3px',
                    boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
                    margin: '1px',
                    maxWidth: '540px',
                    minWidth: '326px',
                    padding: '0',
                    width: '99.375%',
                }}>
                <div style={{ padding: '16px' }}>
                    <a
                        id='main_link'
                        href='https://www.instagram.com/edvingottfredsson'
                        style={{
                            background: '#FFFFFF',
                            lineHeight: '0',
                            padding: '0 0',
                            textAlign: 'center',
                            textDecoration: 'none',
                            width: '100%',
                        }}
                        target='_blank'
                        rel='noopener noreferrer'>
                        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
                            <div
                                style={{
                                    backgroundColor: '#F4F4F4',
                                    borderRadius: '50%',
                                    flexGrow: 0,
                                    height: '40px',
                                    marginRight: '14px',
                                    width: '40px',
                                }}></div>
                            <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'center' }}>
                                <div
                                    style={{
                                        backgroundColor: '#F4F4F4',
                                        borderRadius: '4px',
                                        flexGrow: 0,
                                        height: '14px',
                                        marginBottom: '6px',
                                        width: '100px',
                                    }}></div>
                                <div
                                    style={{
                                        backgroundColor: '#F4F4F4',
                                        borderRadius: '4px',
                                        flexGrow: 0,
                                        height: '14px',
                                        width: '60px',
                                    }}></div>
                            </div>
                        </div>
                        <div style={{ padding: '19% 0' }}></div>
                        <div style={{ display: 'block', height: '50px', margin: '0 auto 12px', width: '50px' }}>
                            {/* Insert Instagram SVG icon */}
                            <svg
                                width='50px'
                                height='50px'
                                viewBox='0 0 60 60'
                                xmlns='https://www.w3.org/2000/svg'
                                xmlnsXlink='https://www.w3.org/1999/xlink'>
                                {/* SVG Path here */}
                            </svg>
                        </div>
                        <div style={{ paddingTop: '8px' }}>
                            <div
                                style={{
                                    color: '#3897f0',
                                    fontFamily: 'Arial, sans-serif',
                                    fontSize: '14px',
                                    fontStyle: 'normal',
                                    fontWeight: 550,
                                    lineHeight: '18px',
                                }}>
                                View this post on Instagram
                            </div>
                        </div>
                        <div style={{ padding: '12.5% 0' }}></div>
                        <div style={{ display: 'flex', flexDirection: 'row', marginBottom: '14px', alignItems: 'center' }}>
                            {/* Styling for user interaction icons */}
                        </div>
                    </a>
                    <p
                        style={{
                            color: '#c9c8cd',
                            fontFamily: 'Arial, sans-serif',
                            fontSize: '14px',
                            lineHeight: '17px',
                            marginBottom: '0',
                            marginTop: '8px',
                            overflow: 'hidden',
                            padding: '8px 0 7px',
                            textAlign: 'center',
                            textOverflow: 'ellipsis',
                            whiteSpace: 'nowrap',
                        }}>
                        <a
                            href='https://www.instagram.com/edvingottfredsson'
                            style={{ color: '#c9c8cd', fontFamily: 'Arial, sans-serif', fontSize: '14px', textDecoration: 'none' }}
                            target='_blank'
                            rel='noopener noreferrer'>
                            Shared post
                        </a>
                        on <time>Time</time>
                    </p>
                </div>
            </blockquote>
        </div>
    );
}
