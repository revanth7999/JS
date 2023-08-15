var ob = {
  name: "revanth",
  rank: 1,
  character: "captain"
};

//Add a new key & value
ob.version = "anime";
ob.college = "matter";

//Delete a key & value in object
delete ob.college;

//Update a value in object
ob.name = "sailaja";
// console.log(ob);

//Iterate only keys
const keyValues = Object.keys(ob);
console.log(keyValues); //It returns key values in array.

//Iterate only values
const valueValues = Object.values(ob);
console.log(valueValues); //It returns values in array.

const checkProp = Object.hasOwn(ob, "name");
console.log(checkProp); //It return true if we are passing an prop name which was exist.
