Array.prototype.groupBy = function (fn) {
    let obj = {};
    this.forEach((el) => {
      let key = fn(el);
      obj[key] ? obj[key].push(el) : (obj[key] = [el]);
    });
      return obj;
//   console.log(this);
//   return _(this).groupBy(fn);
};

let fn = function (item) {
  return item.id;
};

// [{ id: "1" }, { id: "1" }, { id: "2" }].groupBy(fn); // {"1":[1],"2":[2],"3":[3]}
console.log([{ id: "1" }, { id: "1" }, { id: "2" }].groupBy(fn));
