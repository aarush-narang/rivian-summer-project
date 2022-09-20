import '../styles/globals.css';
import { ParallaxProvider } from 'react-scroll-parallax';
import PropTypes from 'prop-types';
import Header from '../components/Header/Header';
import Footer from '../components/Footer/Footer';

function MyApp({ Component, pageProps }) {
    return (
        <>
            <Header />
            <ParallaxProvider>
                {/* eslint-disable-next-line react/jsx-props-no-spreading */}
                <Component {...pageProps} />
            </ParallaxProvider>
            <Footer />
        </>
    );
}

MyApp.propTypes = {
    Component: PropTypes.func.isRequired,
    // eslint-disable-next-line react/forbid-prop-types
    pageProps: PropTypes.any.isRequired,
};

export default MyApp;
