import AboutDescription from '../components/AboutDescription/AboutDescription';
import MetaTags from '../components/Meta/Meta';

const NEXT_DOMAIN_ROOT = process.env.NEXT_SITE_DOMAIN_ROOT;

const url = `${NEXT_DOMAIN_ROOT}/about`;
const description = "This website is an animation of a rivian truck. It is built on NextJS.";
const title = "About Me";
const image = `${NEXT_DOMAIN_ROOT}/og_image.png`;

export default function About() {
    return (
        <>
            <MetaTags url={url} description={description} image={image} title={title} />
            <AboutDescription />
        </>
    );
}
