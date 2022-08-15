import { useEffect, useState } from 'react';
import { useParallax } from 'react-scroll-parallax';
// import useMouseMoveParallax from '../../hooks/useMouseMoveParallax';
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

        const resizeHandler = () => {
            setCarWidth(window.innerWidth - 100);
        };
        window.addEventListener('resize', resizeHandler);

        return () => {
            window.removeEventListener('resize', resizeHandler);
        };
    }, []);

    // const mouseMoveCarAnimation1 = useMouseMoveParallax({
    //     depth: 0.1,
    //     direction: 40,
    // });
    // const mouseMoveCarAnimation2 = useMouseMoveParallax({
    //     depth: 0.1,
    //     direction: 80,
    // });
    // const mouseMoveCarAnimation3 = useMouseMoveParallax({
    //     depth: 0.1,
    //     direction: 120,
    // });
    // const mouseMoveCarAnimation4 = useMouseMoveParallax({
    //     depth: 0.1,
    //     direction: 160,
    // });

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
            <div>
                <ParallaxContainer>
                    <CarFrame src={carFrameImage.src} width={carWidth} ref={carFrameAnimation.ref} />
                    <CarHeadlight src={carHeadlightImage.src} width={carWidth} ref={carHeadlightAnimation.ref} />
                    <CarLeftWheel src={carLeftWheelImage.src} width={carWidth} ref={carLeftWheelAnimation.ref} />
                    <CarRightWheel src={carRightWheelImage.src} width={carWidth} ref={carRightWheelAnimation.ref} />
                </ParallaxContainer>
            </div>
        </div>
    );
}
