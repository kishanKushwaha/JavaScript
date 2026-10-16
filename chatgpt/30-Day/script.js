// 1. Save your name using localStorage.setItem()
localStorage.setItem('name', 'John Doe');

// 2. Retrieve your name using localStorage.getItem()
const savedName = localStorage.getItem('name');

// 3. Log the result to the console
console.log(savedName); // Output: John Doe


// 1. Create the array
const skillsArray = ["HTML", "CSS", "JavaScript"];

// 2. Convert to string and save using JSON.stringify()
localStorage.setItem('skills', JSON.stringify(skillsArray));

// 3. Retrieve and restore back into a real array using JSON.parse()
const restoredArray = JSON.parse(localStorage.getItem('skills'));

// 4. Log the result and check its type
console.log(restoredArray); // Output: ["HTML", "CSS", "JavaScript"]
console.log(Array.isArray(restoredArray)); // Output: true
