function maxElement(getArray) {
  let max = Number.MIN_VALUE;
  for (let i = 0; i < getArray.length; i++) {
    if (getArray[i] > max) {
      max = getArray[i];
    }
  }
  return max;
}

let arr = [20, 25, 5, 10, 18];

let largestElement = maxElement(arr);

console.log(largestElement);  // 25