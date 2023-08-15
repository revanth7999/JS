var ar = [1, 2, 3];

//Push a new value to array
ar.push(10); //It pushes to last in array.

//Remove a value from array
ar.pop(); //It delete last value in array.

//Filter in array
const words = [
  "spray",
  "limit",
  "elite",
  "exuberant",
  "destruction",
  "present"
];
const result = words.filter((w) => w.length > 6);
console.log(result); //["exuberant", "destruction", "present"]

//Array of object
const arrayOfObjects = [
  { name: "Alice", age: 25, city: "New York" },
  { name: "Bob", age: 30, city: "San Francisco" },
  { name: "Carol", age: 28, city: "Los Angeles" }
];

//Map function
const modifiedArray = arrayOfObjects.map((p) => p.age + 1);
console.log(modifiedArray);

//TOtal age of all individuals
const totalAge = arrayOfObjects.reduce((sum, person) => sum + person.age, 0);
console.log(totalAge);

//Sorting
const sortedByAge = arrayOfObjects.sort((a, b) => a.age - b.age);
console.log(sortedByAge);
