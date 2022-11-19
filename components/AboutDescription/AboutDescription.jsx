/* eslint-disable react/jsx-indent-props */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { Description, DescriptionContainer } from "./AboutDescription.styled";

function AboutDescription() {
    return (
        <DescriptionContainer>
            <Description>
                This website is an animation of a rivian truck with parts floating as the page scrolls down. It is built on NextJS.
                <br />
                <br />

                If you would like to check out my other projects, you can go to my
                {' '}
                <a href="https://github.com/aarush-narang?tab=repositories" target="_blank" rel="noreferrer noopener">github</a>
                .
                <br />
                If you would like to check out my portfolio, you can go to
                {' '}
                <a href="https://aarush-narang.vercel.app/portfolio/" target="_blank" rel="noreferrer noopener">github</a>
                .
            </Description>
        </DescriptionContainer>
    );
}

export default AboutDescription;
