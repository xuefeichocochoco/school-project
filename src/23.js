// Node.js code for a simple school project

// Define an array of students
let students = [
  { name: "John", age: 15 },
  { name: "Jane", age: 18 },
  { name: "Jack", age: 20 }
];

function printStudents() {
  console.log("Here is the list of students:");
  students.forEach((student) => {
    console.log(`Name: ${student.name}, Age: ${student.age}`);
  });
}

printStudents();
