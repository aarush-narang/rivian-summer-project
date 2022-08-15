import { capitalize } from '../../utils/capitalize';

describe('Capitalize a word', () => {
    test('Capitalizing hello should say Hello', () => {
        expect(capitalize('hello')).toBe('Hello');
    });
    test('Capitalizing Hello should say Hello', () => {
        expect(capitalize('Hello')).toBe('Hello');
    });
    test('Capitalizing null should throw an error', () => {
        expect(() => capitalize(null)).toThrow();
    });
});
