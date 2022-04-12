// Write a function which will remove all repeated items of array.

function deleteRepeatedDigits(arg) {
  let checkObj = arg.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});
  let result = [];
  for (const key in checkObj) {
    if (checkObj[key] === 1) {
      result.push(key);
    }
  }
  return (arg = [...result]);
}
console.log(deleteRepeatedDigits([1, 1, 2, 3, 4, 5, 5, 6]));
