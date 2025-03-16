'use client';

const InstagramEmbed = () => {
    return (
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
                        padding: '0',
                        textAlign: 'center',
                        textDecoration: 'none',
                        width: '100%',
                    }}
                    target='_blank'
                    rel='noopener noreferrer'>
                    {/* Your Instagram Post Content */}
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <div
                            style={{
                                backgroundColor: '#F4F4F4',
                                borderRadius: '50%',
                                height: '40px',
                                marginRight: '14px',
                                width: '40px',
                            }}
                        />
                        <div
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                flexGrow: 1,
                                justifyContent: 'center',
                            }}>
                            <div
                                style={{
                                    backgroundColor: '#F4F4F4',
                                    borderRadius: '4px',
                                    height: '14px',
                                    marginBottom: '6px',
                                    width: '100px',
                                }}
                            />
                            <div
                                style={{
                                    backgroundColor: '#F4F4F4',
                                    borderRadius: '4px',
                                    height: '14px',
                                    width: '60px',
                                }}
                            />
                        </div>
                    </div>
                    <div style={{ padding: '19% 0' }} />
                    {/* ... Continue the rest of the blockquote */}
                </a>
                {/* Include Instagram Embed Script */}
                <script src='https://www.instagram.com/embed.js' async defer></script>
            </div>
        </blockquote>
    );
};

export default InstagramEmbed;
