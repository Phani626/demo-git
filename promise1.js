let myPromise = new Promise((resolve, reject) => {
  if (1 == 1) {
    resolve();
  }
  reject();
});

myPromise.then(
  (value) => console.log(value, "success"),
  (error) => console.log(error, "failed")
);
