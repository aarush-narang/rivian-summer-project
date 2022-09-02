import MetaTags from '../components/Meta/Meta';
// import CarParallaxPOC from '../components/CarParallaxPOC/CarParallaxPOC';
import CarParallax from '../components/CarParallax/CarParallax';
import RivianSection from '../components/RivianSection/RivianSection';

const NEXT_DOMAIN_ROOT = "https://aarush-narang.github.io/rivian-summer-project";

const url = `${NEXT_DOMAIN_ROOT}/`;
const description = "This website is an animation of a rivian truck. It is built on NextJS.";
const title = "Rivian Car Animation";
const image = `${NEXT_DOMAIN_ROOT}/og_image.png`;

export default function Home() {
    return (
        <>
            <MetaTags url={url} description={description} title={title} image={image} />
            <RivianSection />
            <CarParallax />
            {/* <CarParallaxPOC /> */}
        </>
    );
}
