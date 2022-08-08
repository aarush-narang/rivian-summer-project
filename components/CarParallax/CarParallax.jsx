import { useEffect, useState } from 'react';
import { useParallax } from 'react-scroll-parallax';
import useMouseMoveParallax from '../../hooks/useMouseMoveParallax';
import {
    ParallaxContainer, CarFrame, CarHeadlight, CarLeftWheel, CarRightWheel,
} from './CarParallax.styled';
import carFrameImage from './images/car-frame.png';
import carHeadlightImage from './images/car-headlight.png';
import carLeftWheelImage from './images/car-wheel-left-temp.png';
import carRightWheelImage from './images/car-wheel-right-temp.png';

export default function CarParallax() {
    const [carWidth, setCarWidth] = useState(0);
    useEffect(() => {
        setCarWidth(window.innerWidth - 100);

        window.onresize = () => {
            setCarWidth(window.innerWidth - 100);
        };
    }, []);

    const carAnimation = useParallax({ // maybe remove later, might take up too much space
        speed: 10,
        translateY: [0, 200],
    });
    const mouseMoveCarAnimation = useMouseMoveParallax({
        depth: 0.2,
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
        translateX: [0, -8],
        translateY: [0, 8],
        scale: [1, 0.98],
    });
    const carRightWheelAnimation = useParallax({
        speed: 10,
        easing: [0.46, 0.03, 0.6, 0.97],
        translateX: [0, 8],
        translateY: [0, 8],
        scale: [1, 0.98],
    });

    return (
        <div style={{
            display: 'flex', width: '100%', height: '100%', justifyContent: 'center',
        }}
        >
            <div ref={mouseMoveCarAnimation.ref}>
                <ParallaxContainer ref={carAnimation.ref}>
                    <CarFrame src={carFrameImage.src} width={carWidth} ref={carFrameAnimation.ref} />
                    <CarHeadlight src={carHeadlightImage.src} width={carWidth} ref={carHeadlightAnimation.ref} />
                    <CarLeftWheel src={carLeftWheelImage.src} width={carWidth} ref={carLeftWheelAnimation.ref} />
                    <CarRightWheel src={carRightWheelImage.src} width={carWidth} ref={carRightWheelAnimation.ref} />
                </ParallaxContainer>
            </div>
        </div>
    );
}
