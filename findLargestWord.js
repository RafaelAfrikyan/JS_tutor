// Write a JavaScript function that accepts a string as a parameter and find the longest word within the string.
function findLargestWord(str) {
  let strArr = str.split(" ");
  return strArr.reduce((largestWord, el) => {
    if (el.length > largestWord.length) {
      largestWord = el;
    }
    return largestWord;
  }, "");
}

console.log(findLargestWord("web developer bla"));
