const { nestedEvenSum } = require('./function');

test('nestedEvenSum with nested object should return correct sum', () => {
    
  const obj1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  };

  const obj2 = {
    a: 2,
    b: {b: 2, bb: {b: 3, bb: {b: 2}}},
    c: {c: {c: 2}, cc: 'ball', ccc: 5},
    d: 1,
    e: {e: {e: 4}, ee: 'car'}
  };

  const result1 = nestedEvenSum(obj1);
  console.log('Result for obj1:', result1); // Output the result of obj1

  const result2 = nestedEvenSum(obj2);
  console.log('Result for obj2:', result2); // Output the result of obj2

  expect(result1).toBe(6);
  expect(result2).toBe(12);
});
