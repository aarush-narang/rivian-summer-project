import Head from 'next/head';
import CarParallaxPOC from '../components/CarParallaxPOC/CarParallaxPOC';
import RivianSection from '../components/RivianSection/RivianSection';

export default function Home() {
    return (
        <>
            <Head>
                <title>Rivian Truck Animation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <RivianSection />
            <CarParallaxPOC />
        </>
    );
}
