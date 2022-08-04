import { useEffect, useState } from 'react';
import { useParallax } from 'react-scroll-parallax';
import useMouseMoveParallax from '../../hooks/useMouseMoveParallax';
import {
    ParallaxContainer, CarFrame, CarHeadlight, CarWheelsContainer, CarLeftWheel, CarRightWheel,
} from './CarParallax.styled';
import carFrameImage from './images/car-frame.png';
import carHeadlightImage from './images/car-headlight.png';
import carLeftWheelImage from './images/car-wheel-left.png';
import carRightWheelImage from './images/car-wheel-right.png';

export default function CarParallax() {
    const [windowWidth, setWindowWidth] = useState(0);
    useEffect(() => {
        setWindowWidth(window.innerWidth);

        window.onresize = () => {
            setWindowWidth(window.innerWidth);
        };
    }, []);

    const carAnimation = useParallax({ // maybe remove later, might take up too much space
        speed: 10,
        translateY: [0, 200],
    });
    const mouseMoveCarAnimation = useMouseMoveParallax({
        depth: 0.5,
        direction: 0,
    });
    const carFrameAnimation = useParallax({
        speed: 10,
        easing: [0.46, 0.03, 0.6, 0.97],
        scale: [1, 0.9],
        translateY: [0, 0],
    });
    const carHeadlightAnimation = useParallax({
        speed: 10,
        easing: [0.46, 0.03, 0.6, 0.97],
        scale: [1, 1.04],
        translateY: [0, 6],
    });
    const carLeftWheelAnimation = useParallax({
        speed: 10,
        easing: [0.46, 0.03, 0.6, 0.97],
        translateX: [0, -30],
        translateY: [0, 30],
        scale: [1, 0.98],
    });
    const carRightWheelAnimation = useParallax({
        speed: 10,
        easing: [0.46, 0.03, 0.6, 0.97],
        translateX: [0, 30],
        translateY: [0, 30],
        scale: [1, 0.98],
    });

    return (
        <div style={{
            display: 'flex', width: '100%', height: '100%', justifyContent: 'center',
        }}
        >
            <div ref={mouseMoveCarAnimation.ref}>
                <ParallaxContainer ref={carAnimation.ref}>
                    <CarFrame src={carFrameImage.src} width={windowWidth / 3} ref={carFrameAnimation.ref} />
                    <CarHeadlight src={carHeadlightImage.src} width={(carHeadlightImage.width / carFrameImage.width) * (windowWidth / 3)} ref={carHeadlightAnimation.ref} />
                    <CarWheelsContainer style={{ width: (1320 / carFrameImage.width) * (windowWidth / 3) }}>
                        <CarLeftWheel src={carLeftWheelImage.src} width={((carLeftWheelImage.width * 3) / carFrameImage.width) * (windowWidth / 3)} ref={carLeftWheelAnimation.ref} />
                        <CarRightWheel src={carRightWheelImage.src} width={((carRightWheelImage.width * 3) / carFrameImage.width) * (windowWidth / 3)} ref={carRightWheelAnimation.ref} />
                    </CarWheelsContainer>
                </ParallaxContainer>
            </div>
        </div>
    );
}
