//your JS code here. If required.
function updateBackground() {
            const imageUrlPortrait = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Portrait-en-orientation-portrait.jpg';
            const imageUrlLandscape = 'https://photovideocreative.com/wordpress/wp-content/uploads/2017/11/Paysage-en-orientation-paysage.jpg';

            const body = document.body;
            const isPortrait = window.innerWidth < window.innerHeight;

            body.style.backgroundImage = `url(${isPortrait ? imageUrlPortrait : imageUrlLandscape})`;
        }

        // Initial background update on page load
        window.addEventListener('load', updateBackground);

        // Update background on window resize (orientation change)
        window.addEventListener('resize', updateBackground);