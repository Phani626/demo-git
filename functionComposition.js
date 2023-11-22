// var compose = function (functions) {
//   //   console.log(functions[i](sum), functions[i](sum));
//   return function (x) {
//     let sum = x;
//     for (let i = functions.length - 1; i >= 0; i--) {
//       sum = functions[i](sum);
//     }
//     return sum;
//   };
// };

// const fn = compose([(x) => x + 1, (x) => 2 * x]);

// console.log(fn(4));

var once = function (fn) {
  let i = 0;
  return function (...args) {
    if (i == 0) {
      i++;
      return fn(...args);
    }
  };
};

let fn = (a, b, c) => a + b + c;
let onceFn = once(fn);
console.log(onceFn(1, 2, 3)); // 6 // returns undefined without calling fn
console.log(onceFn(2, 3, 6));
