import '../styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import PropTypes from 'prop-types';

function MyApp({ Component, pageProps }) {
    return (
        <ParallaxProvider>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            <Component {...pageProps} />
        </ParallaxProvider>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    pageProps: PropTypes.any.isRequired,
};

export default MyApp;
