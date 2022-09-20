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
                    <a href="https://aarush-narang.github.io/portfolio/" target="_blank" rel="noreferrer noopener">My Portfolio</a>
                </FooterLinks>
            </FooterSection>
            {/* <FooterSection>
                <FooterLabel>Section 3</FooterLabel>
                <FooterLinks>
                    <a href="/" target="_blank" rel="noreferrer noopener">asd</a>
                </FooterLinks>
            </FooterSection> */}
        </FooterContainer>
    );
}

export default Footer;
