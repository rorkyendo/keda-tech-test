const { maxSubarraySum } = require('./function');

test('maxSubarraySum([100, 200, 300, 400], 2) should return 700', () => {
  const result = maxSubarraySum([100, 200, 300, 400], 2);
  console.log('Output of maxSubarraySum:', result);
  expect(result).toBe(700);
});

test('maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) should return 39', () => {
  const result = maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4);
  console.log('Output of maxSubarraySum:', result);
  expect(result).toBe(39);
});

test('maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) should return 5', () => {
  const result = maxSubarraySum([-3, 4, 0, -2, 6, -1], 2);
  console.log('Output of maxSubarraySum:', result);
  expect(result).toBe(5);
});
