var chunk = function (arr, size) {
  let result = [];
  //   let arr1 = [];
  //   arr.length > 0 &&
  //     arr.forEach((el, index) => {
  //       arr1.push(el);
  //       if ((index + 1) % size === 0 || arr.length === index + 1) {
  //         result.push(arr1);
  //         arr1 = [];
  //       }
  //     });
  for (let i = 0; i < arr.length; i += size) {
    console.log(i);
    result.push(arr.slice(i, i + size));
  }
  return result;
};

console.log(chunk([1, 2, 3, 4, 5], 2));
