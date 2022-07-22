// https://leetcode.com/problems/two-sum/

const sum = (arr,  target) => {
  for (let i = 0; i < arr.length; i++) {
    const findTo = target - arr[i];
    for (let j = i+1; j < arr.length; j++) {
      if(arr[j] === findTo) return [i, j];
    }
  }
  return null;
}

const sumOpti = (arr, target) => {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    const findTo = target - arr[i];
    if(obj[findTo] >= 0) {
      return [obj[findTo], i]
    } else {
      obj[arr[i]] = i
    }
  }
  return null;
}

const sample = [1, 3, 7, 9, 2];
const target = 11;

const result = sumOpti(sample, target);
console.log(result);
