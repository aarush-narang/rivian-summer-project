import styled, { css } from "styled-components";

export const breakpoints = ['500px', '820px', '768px', '1024px', '1440px', '1920px'];
const breakpointLabels = [
    'largerThanMobile',
    'largerThanMobileLandscape',
    'largerThanTablet',
    'largerThanLaptop',
    'largerThanDesktop',
];
export const maxWidths = {
    xs: '96vw',
    s: '768px',
    m: '1024px',
    l: '1440px',
    lContent: '1216px',
};

export const mediaQueries = breakpointLabels.reduce((acc, label, index) => {
    if (label === 'largerThanMobileLandscape') {
        acc[label] = (first, ...interpolations) => css`
        @media (min-width: ${breakpoints[index]}) and (orientation: landscape) {
          ${css(first, ...interpolations)}
        }
      `;
    } else {
        acc[label] = (first, ...interpolations) => css`
        @media (min-width: ${breakpoints[index]}) {
          ${css(first, ...interpolations)}
        }
      `;
    }

    return acc;
}, {});

export const StyledTextSectionWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: white;

  h3 {
    font-weight: 300;
    font-size: 52px;
    line-height: 64px;
    text-align: center;
  }
`;

/* MAX WIDTH GRID CONTAINER
** This is a container element used to position content within the max-width-grid
** system.
** It does not allow horizontal overflow
**
** In order to have this grid line up with the fluid width grid (taking into account
** the 1.6rem grid-column-grap), there is a 1.6rem horizontal padding.
**
*/

export const MaxWidthGridContainer = styled.div`
  display: grid;
  grid-column-gap: 1.6rem;
  grid-template-columns: repeat(4, 1fr);
  max-width: unset;
  padding-left: 1.6rem;
  padding-right: 1.6rem;
  justify-content: center;

   ${mediaQueries.largerThanTablet`
        padding-left: 0;
        padding-right: 0;
        margin-left: auto;
        margin-right: auto;
        grid-template-columns: repeat(6, 104px);
        grid-template-rows: auto 1fr;
        max-width: ${maxWidths.s};
    `}
    ${mediaQueries.largerThanLaptop`
        grid-template-columns: repeat(6, 144px);
        grid-template-rows: auto 1fr;
        max-width: ${maxWidths.m};
    `}
    ${mediaQueries.largerThanDesktop`
        grid-template-columns: repeat(16, 72px);
        grid-template-rows: auto 1fr;
        max-width: ${maxWidths.l};
    `}
 `;

export const StyledGridContainerWrapper = styled(MaxWidthGridContainer)`
  width: 100%;
`;
