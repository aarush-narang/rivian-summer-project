import {
    FooterContainer, FooterLabel, FooterLinks, FooterSection,
} from "./Footer.styled";

function Footer() {
    return (
        <FooterContainer>
            <FooterSection>
                <FooterLabel>Socials</FooterLabel>
                <FooterLinks>
                    <a href="https://github.com/aarush-narang" target="_blank" rel="noreferrer noopener">Github</a>
                </FooterLinks>
            </FooterSection>
            <FooterSection>
                <FooterLabel>Projects</FooterLabel>
                <FooterLinks>
                    <a href="https://portfolio.aarushnarang.com/" target="_blank" rel="noreferrer noopener">My Portfolio</a>
                    <a href="https://url-shortener.aarushnarang.com/" target="_blank" rel="noreferrer noopener">URL Shortener</a>
                    <a href="https://wordle.aarushnarang.com" target="_blank" rel="noreferrer noopener">Wordle Clone</a>
                    <a href="https://typing-test.aarushnarang.com" target="_blank" rel="noreferrer noopener">Typing Test App</a>
                    <a href="https://games.aarushnarang.com" target="_blank" rel="noreferrer noopener">Mini Games</a>
                    <a href="https://proco.vercel.app/" target="_blank" rel="noreferrer noopener">ProCo</a>
                </FooterLinks>
            </FooterSection>
        </FooterContainer>
    );
}

export default Footer;
