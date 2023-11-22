var a1 = [
    { id: 1, x: 2, y: 3 },
    { id: 3, x: 1, y: 0 },
    { id: 2, x: 3, y: 6 },
  ],
  b1 = [
    { id: 2, x: 10, y: 20 },
    { id: 3, x: 0, y: 0 },
  ],
  a2 = [
    { id: 1, x: 1 },
    { id: 2, x: 9 },
  ],
  b2 = [{ id: 3, x: 5 }];

var join = function (arr1, arr2) {
  const result = {};
  for (const i of arr1) {
    result[i.id] = i;
  }
  for (const i of arr2) {
    result[i.id] = result[i.id] ? { ...result[i.id], ...i } : i;
  }
  return Object.values(result);
};

console.log(join(a1, b1));
