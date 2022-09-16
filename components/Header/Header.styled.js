import styled from "styled-components";

export const HeaderNav = styled.nav`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 28px 0;
    background-color: rgb(205, 205, 205, 0.15)
`;

export const HeaderLinks = styled.div`
    display: flex;
    gap: 45px;
`;

export const HeaderLink = styled.div`
    font-size: 1.5rem;
    position: relative;
    ::after {
        content: "";
        position: absolute;
        bottom: 0px; 
        left: 0;
        width: 0%;
        height: 2px;
        background-color: black;
        transition: 200ms ease-in-out;
    }
    :hover::after {
        width: 100%;
    }
    @media screen and (max-width: 500px) {
        font-size: 90%;
    }
`;

export const HeaderFiller = styled.div``;
