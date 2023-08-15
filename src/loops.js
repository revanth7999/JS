//for loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//while
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

//for-of
let arr = [1, 2, 3];
for (let a of arr) {
  console.log(a);
}

//for-in
const p = {
  name: "rev",
  age: 20
};
for (let age in p) {
  console.log(p[age]);
}

//forEach
var ar = [1, 55, 40];
ar.forEach((i) => console.log(i));
