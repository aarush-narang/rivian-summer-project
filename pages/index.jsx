import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useEffect, useRef, useState } from 'react'
import { useParallax, Parallax } from 'react-scroll-parallax'

// export const StyledTextSectionWrapper = styled.div`
//   height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   background-color: white;

//   h3 {
//     font-weight: 300;
//   }
// `;

// export const maxWidths = {
//     xs: '96vw',
//     s: '768px',
//     m: '1024px',
//     l: '1440px',
//     lContent: '1216px',
// };

/* MAX WIDTH GRID CONTAINER
** This is a container element used to position content within the max-width-grid
** system.
** It does not allow horizontal overflow
**
** In order to have this grid line up with the fluid width grid (taking into account
** the 1.6rem grid-column-grap), there is a 1.6rem horizontal padding.
**
*/

// export const MaxWidthGridContainer = styled.div`
//   display: grid;
//   grid-column-gap: 1.6rem;
//   grid-template-columns: repeat(4, 1fr);
//   max-width: unset;
//   padding-left: 1.6rem;
//   padding-right: 1.6rem;
//   justify-content: center;

//   ${mediaQueries.largerThanTablet`
//     padding-left: 0;
//     padding-right: 0;
//     margin-left: auto;
//     margin-right: auto;
//     grid-template-columns: repeat(6, 104px);
//     grid-template-rows: auto 1fr;
//     max-width: ${maxWidths.s};
//   `}
//   ${mediaQueries.largerThanLaptop`
//     grid-template-columns: repeat(6, 144px);
//     grid-template-rows: auto 1fr;
//     max-width: ${maxWidths.m};
//   `}
//   ${mediaQueries.largerThanDesktop`
//     grid-template-columns: repeat(16, 72px);
//     grid-template-rows: auto 1fr;
//     max-width: ${maxWidths.l};
//   `}
//  `;


// export const StyledGridContainerWrapper = styled(MaxWidthGridContainer) < {
//     stylePack: string | null | undefined;
// } > `
//   width: 100%;
// `;

// const quote = {
//     title: 'A truck built for whatever you call a road. Your electric adventure awaits.',
//     subtitle: null
// }

export default function Home() {
    const carAnimation = useParallax({
        speed: 10,
        // easing: [0.78, 0.22, 0.39, 0.99],
        translateX: ['-20%', '100%'],
    })
    const wheelAnimationLeft = useParallax({
        speed: 1,
        // easing: [0.78, 0.22, 0.39, 0.99],
        rotate: [0, 1000, 'ease'],
        translateY: [0, 0] // because wheels move with the car, disable the translateY on the wheels
    })
    const wheelAnimationRight = useParallax({
        speed: 1,
        // easing: [0.78, 0.22, 0.39, 0.99],
        rotate: [0, 1000, 'ease'],
        translateY: [0, 0] // because wheels move with the car, disable the translateY on the wheels
    })

    return (
        // <StyledTextSectionWrapper ref={textBlockRef}>
        //     <HighlightedTextSection data={quote} />
        // </StyledTextSectionWrapper>
        <>
            <Head>
                <title>Rivian Truck Animation</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div
                className={styles.parallaxContainer}
            >
                <div className={styles.car}>
                    <div className={styles.carBody} ref={carAnimation.ref}>
                        <div className={styles.carWheelsContainer}>
                            <div className={styles.carTireLeft} ref={wheelAnimationLeft.ref}>
                            </div>
                            <div className={styles.carTireRight} ref={wheelAnimationRight.ref}>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
