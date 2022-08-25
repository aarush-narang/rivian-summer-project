import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import CarParallaxPOC from '../../components/CarParallaxPOC/CarParallaxPOC';

describe('CarParallax Component', () => {
    test('should render correctly', () => {
        const { container } = render(
            <ParallaxProvider>
                <CarParallaxPOC />
            </ParallaxProvider>,
        );
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 200 });
        expect(container.firstChild).not.toBeNull();
    });
});
