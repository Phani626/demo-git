async function sleep(millis) {
  return await new Promise((resolve) => setTimeout(resolve, millis));
}

let t = Date.now();
sleep(200).then(() => console.log(Date.now(), t, Date.now() - t)); // 100
