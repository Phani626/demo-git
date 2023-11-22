var cancellable = function (fn, args, t) {
  let time = setTimeout(() => {
    return fn(...args);
  }, t);
  function cancelFn() {
    clearTimeout(time);
  }
  return cancelFn;
};

const result = [];
const { performance } = require("perf_hooks");

const fn = (x) => x * 5;
const args = [2],
  t = 120,
  cancelT = 50;

const start = performance.now(); // 0

const log = (...argsArr) => {
  const diff = Math.floor(performance.now() - start);
  result.push({ time: diff, returned: fn(...argsArr) });
};

const cancel = cancellable(log, args, t);

const maxT = Math.max(t, cancelT); // 50

setTimeout(() => {
  cancel();
}, cancelT); // 50

setTimeout(() => {
  console.log(result); // [{"time":20,"returned":10}]
}, maxT + 15); // 65
