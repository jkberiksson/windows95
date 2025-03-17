import Webamp from 'webamp';

const startWebamp = (onClose) => {
    if (Webamp.browserIsSupported()) {
        const container = document.getElementById('winamp-container');

        if (container) {
            // Load last saved position or use default
            const savedPosition = JSON.parse(localStorage.getItem('webampPosition')) || { top: '10%', left: '10%' };

            const webamp = new Webamp({
                initialTracks: [
                    {
                        metaData: { artist: 'MGMT', title: 'Kids' },
                        url: '/kids.mp3',
                    },
                    {
                        metaData: { artist: 'The Lumineers', title: 'Ophelia' },
                        url: '/ophelia.mp3',
                    },
                    {
                        metaData: { artist: 'M83', title: 'Midnight City' },
                        url: '/midnight-city.mp3',
                    },
                ],
                windowLayout: {
                    main: {
                        position: savedPosition, // Load the saved position
                        shadeMode: false,
                        closed: false,
                    },
                },
            });

            webamp.onClose(() => {
                webamp.dispose();
                if (onClose) onClose();
            });

            webamp.renderWhenReady(container).then(() => {
                // Wait until Webamp is rendered, then track position changes
                setTimeout(() => {
                    const mainWindow = document.querySelector('.main-window');
                    if (mainWindow) {
                        const observer = new MutationObserver(() => {
                            const { top, left } = mainWindow.getBoundingClientRect();
                            localStorage.setItem('webampPosition', JSON.stringify({ top, left }));
                        });

                        observer.observe(mainWindow, { attributes: true, attributeFilter: ['style'] });
                    }
                }, 1000); // Ensure Webamp initializes first
            });
        } else {
            console.error('Webamp container not found!');
        }
    }
};

export { startWebamp };
