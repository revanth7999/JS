// import "./styles.css";

// function add(a, b) {
//   return a + b;
// }
// console.log(add(5, 2)); //7

// //Add numbers of args
// function addnNumbers(...args) {
//   let sum = 0;
//   for (let i = 0; i < args.length; i++) {
//     sum += args[i];
//   }
//   return sum;
// }
// console.log(addnNumbers(1, 2, 3, 4)); //10

// function getNames(array) {
//   let results = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].hasOwnProperty("name")) {
//       results.push(array[i].name);
//     }
//   }
//   return results;
// }
// console.log(
//   "gatNames",
//   getNames([
//     { a: 1 },
//     { name: "jane" },
//     {},
//     { name: "revanth" },
//     { name: "madness" },
//     { b: 2 }
//   ])
// );

// //duplicate elements in array
// let num = [10, 5, 50, 10, 100, 100];
// const duplicateNum = num.filter((ele, index, n) => n.indexOf(ele) !== index);
// console.log(duplicateNum);

// //Notorious
// for (let re = 0; re < 3; re++) {
//   setTimeout(() => console.log(re), 100);
// }

// //reverse a string
// const reverseSring = (name) => {
//   const arr = name.split("").reverse().join("");
//   console.log(arr);
// };

// reverseSring("CIRCKET");

// //palindrome a string
// const palindromes = (str) => {
//   const temp = str.split("").reverse().join("");
//   console.log(str === temp);
// };

// palindromes("akka");

// //max character in string
// const maxChar = (str) => {
//   let obj = {};
//   for (let char of str) {
//     !obj[char] ? (obj[char] = 1) : obj[char]++;
//   }
//   console.log(obj);
// };
// maxChar("revanthh");
