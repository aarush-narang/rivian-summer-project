import { useParallax } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';
import useMouseMoveParallax from '../../hooks/useMouseMoveParallax';
import {
    CarFrame, CarWheel, CarWheelsContainer, ParallaxContainer,
} from './CarParallax.styled';

const CAR_WIDTH = 350;
const CAR_TRAVEL_DISTANCE = 3 / 5;

function CarParallaxPOC() {
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        setWindowWidth(window.innerWidth);

        window.onresize = () => {
            setWindowWidth(window.innerWidth);
        };
    }, []);

    const carTranslate = windowWidth * CAR_TRAVEL_DISTANCE + CAR_WIDTH > windowWidth ? (windowWidth) - CAR_WIDTH : windowWidth * CAR_TRAVEL_DISTANCE;

    const carAnimation = useParallax({
        speed: 1,
        easing: [0.46, 0.03, 0.6, 0.97],
        translateX: ['-100px', `${carTranslate}px`],
    });
    const wheelAnimationLeft = useParallax({
        speed: 1,
        rotate: [0, 2000, [0.46, 0.03, 0.6, 0.97]],
        // because wheels move with the car, disable the translateY on the wheels
        translateY: [0, 0],
    });
    const wheelAnimationRight = useParallax({
        speed: 1,
        rotate: [0, 2000, [0.46, 0.03, 0.6, 0.97]],
        // because wheels move with the car, disable the translateY on the wheels
        translateY: [0, 0],
    });

    const test = useMouseMoveParallax({
        depth: 0.6,
    });

    return (
        <ParallaxContainer>
            <div ref={test.ref}>
                <CarFrame ref={carAnimation.ref}>
                    <CarWheelsContainer>
                        <CarWheel style={{ marginLeft: '6.5px' }} ref={wheelAnimationLeft.ref} />
                        <CarWheel ref={wheelAnimationRight.ref} />
                    </CarWheelsContainer>
                </CarFrame>
            </div>
        </ParallaxContainer>
    );
}

export default CarParallaxPOC;
