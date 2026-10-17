//ex-1
// localStorage.setItem("name", "Kishan");
// console.log(localStorage.getItem("name"));

//ex-2
// const subjects = ["HTML", "CSS", "JavaScript"];
// localStorage.setItem("subjects", JSON.stringify(subjects));
// const sub = localStorage.getItem("subjects");
// const parsedSubjects = JSON.parse(sub);
// console.log(parsedSubjects);

//ex-3
// let savedTasks = localStorage.getItem("task");
// let task = savedTasks
// ? JSON.parse(savedTasks)
// :[];
// task.push("Learn localStorage");
// localStorage.setItem("task", JSON.stringify(task));
// savedTasks = localStorage.getItem("task");
// task=JSON.parse(savedTasks);
// console.log(task);

//ex-4
localStorage.setItem("temporary", "Kishan");
localStorage.removeItem("temporary");


