function memoize(fn) {
  let memory = new Map();
  return function (...args) {
    let key = args.join(",");
    console.log(memory.has(key));
    if (memory.has(key)) {
      return memory.get(args);
    } else {
      let value = fn(...args);
      memory.set(key, value);
      return value;
    }
  };
}

let callCount = 0;
const sum = (a, b) => {
  callCount += 1;
  return a + b;
};

const memoizedFn = memoize(sum);

console.log(memoizedFn(2, 2)); // 5
console.log(memoizedFn(2, 3)); // 5
console.log(memoizedFn(2, 2)); // 5
// console.log(memoizedFn(0, 0)); // 5
// console.log(memoizedFn(0, 0)); // 5

console.log("callCount :", callCount); // 1
