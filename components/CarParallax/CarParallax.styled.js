import styled from 'styled-components';

export const ParallaxFrame = styled.div`
    display: flex;
    width: 100%;
    height: 90vh;
    justify-content: center;
`;

export const ParallaxContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    justify-content: center;
    background-color: white;
    pointer-events: none;
    user-select: none;
    margin: 100px 0 0 0;
`;

export const CarFrame = styled.img`
    position: absolute;
    min-width: 250px;
    max-width: 500px;
    z-index: 5;
`;

export const CarHeadlight = styled.img`
    position: absolute;
    min-width: 250px;
    max-width: 500px;
    z-index: 10;
`;

export const CarLeftWheel = styled.img`
    position: absolute;
    z-index: 2;
    min-width: 250px;
    max-width: 500px;
`;

export const CarRightWheel = styled.img`
    position: absolute;
    z-index: 2;
    min-width: 250px;
    max-width: 500px;
`;
