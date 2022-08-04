import styled from 'styled-components';

export const ParallaxContainer = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: relative;
    justify-content: center;
    background-color: white;
    width: 500px;
    pointer-events: none;
    user-select: none;
`;

export const CarFrame = styled.img`
    position: absolute;
    min-width: 250px;
    max-width: 500px;
    width: 100%;
    z-index: 5;
`;

export const CarHeadlight = styled.img`
    position: absolute;
    min-width: 250px;
    max-width: 500px;
    width: 100%;
    z-index: 10;
`;

// Wheels
export const CarWheelsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    min-width: 190px;
    max-width: 385px;
    height: 100%;
    margin-bottom: 18px;
    margin-left: 3px;
`;

export const CarLeftWheel = styled.img`
    z-index: 2;
    min-width: 30px;
    max-width: 60px;
`;

export const CarRightWheel = styled.img`
    z-index: 2;
    min-width: 30px;
    max-width: 60px;
`;
