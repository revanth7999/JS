//shallow copy
let rev1 = [95, 34, 21];
let rev2 = rev1;
console.log(rev2);

//deep copy
let rev11 = [55, 10, 26];
let rev22 = Object.assign([], rev11);
rev22[11] = 58;
console.log(rev1);

const getNamess = (args) => {
  const res = [];
  for (let i = 0; i < args.length; i++) {
    if (args[i].hasOwnProperty("name")) {
      res.push(args[i].name);
    }
  }
  console.log(res);
};

console.log(
  "gatNames",
  getNamess([
    { a: 1 },
    { name: "jane" },
    {},
    { name: "revanth" },
    { name: "madness" },
    { b: 2 }
  ])
);

//palindrome
const ch = (a) => {
  const s = a.split("").reverse().join("");
  console.log(a === s);
};
ch("rev");

//reverse
const reverse = (b) => {
  const res = b.split("").reverse().join("");
  console.log(res);
};

reverse("revanr");

// //duplicate elements in array
let num = [10, 5, 50, 10, 100, 100];
let val = num.filter((ele, index, n) => n.indexOf(ele) !== index);

console.log(val);
