import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import CarParallax from '../../components/CarParallax/CarParallax';

describe('CarParallax Component', () => {
    test('should render correctly', () => {
        const { container } = render(
            <ParallaxProvider>
                <CarParallax />
            </ParallaxProvider>,
        );
        Object.defineProperty(window, 'innerWidth', { writable: true, configurable: true, value: 200 });
        expect(container.firstChild).not.toBeNull();
    });
});
