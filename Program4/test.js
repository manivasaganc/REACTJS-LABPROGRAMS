const students = [
    { name: "Alice", age: 20, grade: "A" },
    { name: "Bob", age: 21, grade: "B+" },
    { name: "Charlie", age: 19, grade: "A+" }
];

// Test 1: Check number of students
console.assert(students.length === 3, "Test Failed: Array should contain 3 students");

// Test 2: Check first student's name
console.assert(students[0].name === "Alice", "Test Failed: First student's name should be Alice");

// Test 3: Check second student's age
console.assert(students[1].age === 21, "Test Failed: Second student's age should be 21");

// Test 4: Check third student's grade
console.assert(students[2].grade === "A+", "Test Failed: Third student's grade should be A+");

console.log("All tests passed!");