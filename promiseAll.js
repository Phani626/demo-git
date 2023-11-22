var promiseAll = function (functions) {
  let result = [],
    count = 0;

  return new Promise((res, rej) => {
    functions.forEach((promise, index) => {
      promise()
        .then((resp) => {
          result[index] = resp;
          count++;
          if (count == functions.length) {
            res(result);
          }
        })
        .catch((e) => rej(e));
    });
  });
};

const promise = promiseAll([
  () => new Promise((resolve) => setTimeout(() => resolve(4), 50)),
  () => new Promise((resolve) => setTimeout(() => resolve(10), 150)),
  () => new Promise((resolve) => setTimeout(() => resolve(16), 100)),
]);
promise.then(console.log); // [42]
