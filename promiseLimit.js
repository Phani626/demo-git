var timeLimit = function (fn, t) {
  return async function (...args) {
    let resolve =  fn(t);
    let reject = new Promise((res, rej) =>
      setTimeout(() => rej("Time Excedd"), args)
    );
    return await Promise.race([resolve, reject]);
  };
};

const limited = timeLimit((t) => new Promise((res) => setTimeout(res, t)), 100);
limited(100).catch(console.log); // "Time Limit Exceeded" at t=100ms
limited(150).catch(console.log); // "Time Limit Exceeded" at t=100ms
