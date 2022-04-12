//Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in the upper case.

function toUpperCase(str) {
  let change = str.split(" ");
  change = change.map((el) => {
    return el[0].toUpperCase() + el.slice(1);
  });
  return change.join(" ");
}
console.log(toUpperCase("i love you"));
