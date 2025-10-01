let age = 29;
age = 30;
console.log("Age is:", age);


const myName = "Hamza";
console.log("My name is:", myName);


let isDeveloper = true;
console.log("Are you a developer?", isDeveloper);


let person = {
  name: "Hamza",
  age: 29,
  country: "Pakistan"
};
console.log(person);


let fruits = ["Mango", "Banana", "Apple"];
console.log("My favorite fruits are:", fruits);


let test1;         // undefined (declared but not assigned)
let test2 = null;  // null (intentionally empty)

console.log("test1:", test1); // undefined
console.log("test2:", test2); // null


console.log(typeof "Hamza");  // string
console.log(typeof 29);       // number
console.log(typeof true);     // boolean
console.log(typeof null);     // object (⚠ historical bug in JS)
console.log(typeof undefined); // undefined
console.log(typeof {a:1});    // object
console.log(typeof [1,2,3]);  // object (array is special type of object)


const PI = 3.14;
// PI = 3.14159; ❌ Error: Assignment to constant variable
console.log(PI);


const today = new Date();
console.log("Today is:", today);


let salary = 210000;
console.log("Salary:", salary);
