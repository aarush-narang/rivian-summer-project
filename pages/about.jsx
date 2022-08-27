import MetaTags from '../components/Meta/Meta';

const NEXT_DOMAIN_ROOT = "https://aarush-narang.github.io/rivian-summer-project";

const url = `${NEXT_DOMAIN_ROOT}/about`;
const description = "This website is an animation of a rivian truck. It is built on NextJS.";
const title = "About Me";
const image = `${NEXT_DOMAIN_ROOT}/og_image.png`;

export default function About() {
    return (
        <>
            <MetaTags url={url} description={description} image={image} title={title} />
            <p>{description}</p>
        </>
    );
}
