const { sortDescending } = require('./function');

test('sortDescending([1, 2, 4, 3, 5, 3, 2, 1]) should return [5, 4, 3, 3, 2, 2, 1, 1]', () => {
    const result = sortDescending([1, 2, 4, 3, 5, 3, 2, 1]);
    console.log('Output of sortDescending:', result);
    expect(result).toEqual([5, 4, 3, 3, 2, 2, 1, 1]);
});
