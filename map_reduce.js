function fakeMap(arr, reducer) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(reducer(arr[i]));
  }
  return newArr;
}

let result1 = fakeMap([1, 2, 3], (el) => {
  return el * 2;
});
console.log(result1); //[ 2, 4, 6 ]

function fakeReduce(arr, callback) {
  let acc = 0;
  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }
  return acc;
}

let result2 = fakeReduce([1, 2, 3], (acc, el) => {
  return (acc += el);
});

console.log(result2); // 6
