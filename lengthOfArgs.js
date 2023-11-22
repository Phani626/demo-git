var argumentsLength = function (...args) {
  console.log(args.length);
}; // 3
argumentsLength(1, {}, null);
// console.log(argumentsLength(1, 2, 3));

