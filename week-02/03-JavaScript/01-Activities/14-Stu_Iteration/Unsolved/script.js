// WRITE YOUR CODE BELOW
const student = ["John", "Paul", "George", "Ringo"];

console.log(`The length of the array is ${student.length}.`);

for (let i = 0; i < student.length; i++) {
  console.log(`Welcome to the class ${student[i]}.`);
}

for (const name of student) {
  console.log(`Welcome to the class ${name}.`);
}