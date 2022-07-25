import { useParallax } from 'react-scroll-parallax';
import styles from '../styles/Home.module.css';

function CarParallax() {
    const carAnimation = useParallax({
        speed: 10,
        easing: [0.78, 0.22, 0.39, 0.99],
        translateX: ['-20%', '100%'],
    });
    const wheelAnimationLeft = useParallax({
        speed: 1,
        // easing: [0.78, 0.22, 0.39, 0.99],
        rotate: [0, 1000, 'ease'],
        // because wheels move with the car, disable the translateY on the wheels
        translateY: [0, 0],
    });
    const wheelAnimationRight = useParallax({
        speed: 1,
        // easing: [0.78, 0.22, 0.39, 0.99],
        rotate: [0, 1000, 'ease'],
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
