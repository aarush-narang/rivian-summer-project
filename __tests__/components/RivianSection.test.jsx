import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import RivianSection from '../../components/RivianSection/RivianSection';

describe('CarParallax Component', () => {
    test('should render correctly', () => {
        const { container } = render(
            <RivianSection />,
        );
        expect(container.firstChild).not.toBeNull();
    });
});
