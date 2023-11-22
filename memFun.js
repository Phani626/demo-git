function memoize(fn) {
  let checkFun = [];
  return function (...args) {
    let newRes = "";
    if (checkFun.length > 0) {
      checkFun.forEach((el) => {
        // console.log(
        //   el.fun == fn,
        //   JSON.stringify(el.values),
        //   JSON.stringify(args),
        //   JSON.stringify(el.values) == JSON.stringify(args)
        // );
        if (el.fun == fn) {
          if (JSON.stringify(el.values) == JSON.stringify(args)) {
            newRes = el.result;
          }
        }
      });
    }
    if (newRes === "") {
      //   console.log("else", newRes == "");
      newRes = fn(...args);
      checkFun.push({ fun: fn, values: args, result: newRes });
    }
    return newRes;
  };
}

let callCount = 0;
const factorial = (n) => {
  if (n <= 1) {
    callCount += 1;
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
};
// const factorial = (n) =>
//   n <= 1 ? (1, (callCount += 1)) : n * factorial(n - 1);
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
const memFun = memoize(factorial);
// console.log(memoizedFn(0, 0)); // 5
// console.log(memoizedFn(0, 0)); // 5
// console.log("callCount :", callCount); // 1

console.log(memFun(2));
console.log(memFun(3));
console.log(memFun(2));
console.log("callCount :", callCount); // 1
console.log(memFun(3));
console.log("callCount :", callCount); // 1
