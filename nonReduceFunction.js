nums = [1, 2, 3, 4];
fn = function sum(accum, curr) {
  return accum + curr;
};
init = 0;
var reduce = function (nums, fn, init) {
  let sum = init;
  if (nums.length > 0) {
    nums.forEach((element) => {
      sum = fn(sum, element);
    });
    return sum;
  } else return init;
};

console.log(reduce(nums, fn, init));
