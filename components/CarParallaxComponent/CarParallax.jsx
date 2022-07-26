import { useParallax } from 'react-scroll-parallax';
import { useEffect, useState } from 'react';
import styles from '../../styles/Home.module.css';

const CAR_WIDTH = 350;
const CAR_TRAVEL_DISTANCE = 3 / 5;

function CarParallax() {
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

    return (
        <div className={styles.parallaxContainer}>
            <div className={styles.car}>
                <div className={styles.carBody} ref={carAnimation.ref}>
                    <div className={styles.carWheelsContainer}>
                        <div className={styles.carTireLeft} ref={wheelAnimationLeft.ref} />
                        <div className={styles.carTireRight} ref={wheelAnimationRight.ref} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CarParallax;
