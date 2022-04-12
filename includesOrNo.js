// Write a JavaScript function that checks if the given string includes the given substring.

function includesOrNot(str, subStr) {
  if (subStr.length == 0) return `giv a string`;
  let j = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] !== subStr[j]) {
      j = 0;
    }
    if (str[i] === subStr[j]) {
      j++;
      if (j === subStr.length) return true;
    }
  }
  return false;
}
console.log(includesOrNot("Hello", "ell"));
