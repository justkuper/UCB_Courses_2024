// WRITE YOUR CODE HERE
const studentNames = ["John", "Paul", "George", "Ringo"];

console.log(`Welcome to the class ${studentNames[0]}.`);
console.log(`The length of the array is ${studentNames.length}.`);

studentNames[0] = "Kuper";

console.log(studentNames[0]);

if (studentNames[0] === "Kuper") {
  console.log(`Welcome to the class ${studentNames[0]}.`);
}