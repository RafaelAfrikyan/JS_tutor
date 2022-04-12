// Return the sum of all arguments passed to function.

function getArgs(...args) {
  return args.reduce((acc, el) => {
    return (acc = acc * el);
  }, 1);
}

console.log("Log getArgs(4, 4); :::", getArgs(4, 4));
