var mapping = function (arr, fn) {
  let arr1 = [];
  arr.forEach((el, index) => (fn(el, index) ? arr1.push(el) : ""));
  // for (let i = 0; arr.length > i; i++) {
  //   if (fn(arr[i], i)) {
  //     arr1.push(arr[i]);
  //   }
  // }
  return arr1;
};

function add(num) {
  return num + 1;
}

// mapping([1, 2, 3], add);
console.log(mapping([1, 2, 3], add));
