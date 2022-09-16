import styled from "styled-components";

export const FooterContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    width: 100%;
    padding: 20px;
`;

export const FooterSection = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 50px 1fr;
`;

export const FooterLabel = styled.div`
    font-size: 18px;
    margin-bottom: 14px;
    border-bottom: 1px solid rgb(0, 0, 0, 0.3);
    padding-bottom: 3px;
`;

export const FooterLinks = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-left: 4px;
    a {
        color: blue;
        text-decoration: underline;
    }
`;
