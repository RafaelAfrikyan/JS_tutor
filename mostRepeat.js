function mostRepeat(arr) {
  let checkObj = arr.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});

  let mostRepeatedObj = { int: 0, count: 0 };
  for (const [key, value] of Object.entries(checkObj)) {
    if (value > mostRepeatedObj.count) {
      mostRepeatedObj.int = key;
      mostRepeatedObj.count = value;
    }
  }
  return `The count of most repeated ${mostRepeatedObj.int} is ${mostRepeatedObj.count} `;
}
console.log(mostRepeat([5, 5, 5, 4, 1, 1, 12, 12, 12, 12]));
