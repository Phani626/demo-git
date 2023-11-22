var isEmpty = function (obj) {
  var emp = obj.length ? obj.length : Object.keys(obj).length;
  return emp == 0 ? true : false;
};

console.log(isEmpty({ x: 5, y: 42 }));
console.log(isEmpty([null, false, 0]));
