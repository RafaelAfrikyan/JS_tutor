//

function calculator(num1, num2, sign) {
  let result = 0;
  result = eval(`${num1} ${sign} ${num2}`);
  return result;
}
console.log(calculator(2, 3, "-"));
