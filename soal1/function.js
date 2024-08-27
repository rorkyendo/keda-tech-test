function sortDescending(arr) {
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length - 1; j++) {
        if (arr[j] < arr[j + 1]) {
          let temp = arr[j];
          arr[j] = arr[j + 1];
          arr[j + 1] = temp;
        }
      }
    }
    return arr;
}

function maxSubarraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}

function nestedEvenSum(obj) {
    let sum = 0;

    function helper(innerObj) {
        for (let key in innerObj) {
            if (typeof innerObj[key] === 'object') {
                helper(innerObj[key]);
            } else if (typeof innerObj[key] === 'number' && innerObj[key] % 2 === 0) {
                sum += innerObj[key];
            }
        }
    }

    helper(obj);
    return sum;
}

module.exports = { sortDescending, maxSubarraySum, nestedEvenSum };

