import Head from 'next/head';
import CarParallax from '../components/CarParallaxComponent/CarParallax';
import RivianSection from '../components/RivianSection/RivianSection';

export default function Home() {
    return (
        <>
            <Head>
                <title>Rivian Truck Animation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <RivianSection />
            <CarParallax />
        </>
    );
}
