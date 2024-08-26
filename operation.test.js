const { mean, median, mode } = require('./operation');

describe('Statistical Operations', () => {
    test('mean should return the correct average of numbers', () => {
        expect(mean([1, 2, 3, 4])).toBe(2.5);
        expect(mean([10, 20, 30])).toBe(20);
    });

    test('median should return the correct median of numbers', () => {
        expect(median([1, 2, 3, 4, 5])).toBe(3);
        expect(median([10, 20, 30, 40])).toBe(25);
    });

    test('mode should return the correct mode of numbers', () => {
        expect(mode([1, 2, 2, 3, 4])).toBe(2);
        expect(mode([1, 1, 2, 2, 3])).toEqual([1, 2]); // Multiple modes
    });
});
