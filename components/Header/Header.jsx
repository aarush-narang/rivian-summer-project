import Link from "next/link";
import {
    HeaderFiller, HeaderLink, HeaderLinks, HeaderNav,
} from "./Header.styled";

function Header() {
    return (
        <header>
            <HeaderNav>
                <HeaderFiller />
                <HeaderLinks>
                    <HeaderLink>
                        <Link href="/">Home</Link>
                    </HeaderLink>
                    <HeaderLink>
                        <Link href="/about">About Me</Link>
                    </HeaderLink>
                </HeaderLinks>
                <HeaderFiller />
            </HeaderNav>
        </header>
    );
}

export default Header;
