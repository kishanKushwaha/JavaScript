// const taskInput = document.querySelector("#taskInput");
// const addButton = document.querySelector("#addButton");
// const taskCount = document.querySelector("#taskCount");
// const taskList = document.querySelector("#taskList");

// //ex-1 and ex-4
// function addTask(){
//   const task = taskInput.value.trim();
//   if(task===""){
//     return;
//   }
//   const li = document.createElement("li");
//   li.textContent = task;

//   const completeButton = document.createElement("button");
//   completeButton.classList.add("complete-button");
//   completeButton.textContent = "Completed";
//   const removeButton = document.createElement("button");
//   removeButton.classList.add("remove-button");
//   removeButton.textContent = "Remove";
//   removeButton.style.marginLeft = "15px";

//   li.appendChild(completeButton);
//   li.appendChild(removeButton);
//   taskList.appendChild(li);
//   taskInput.value = "";
//   countTask();
// }

// //ex-3
// function countTask(){
//   const tasks = taskList.children;
//   let count = 0;
//   for(const task of tasks){
//     if(!task.classList.contains("completed")){
//       count++;
//     }
//   }
//   taskCount.textContent = count;
// }

// addButton.addEventListener("click", addTask);

// //ex-2
// taskList.addEventListener("click", (event)=>{
//   if(event.target.classList.contains("complete-button")){
//     const li = event.target.closest("li");
//     li.classList.toggle("completed");
//     countTask();
//   }
// })

//Day 29 Challenge
const textInput = document.querySelector("#textInput");
const addButton = document.querySelector("#addButton");
const taskCount = document.querySelector("#taskCount");
const taskList = document.querySelector("#taskList");

function addTask(){
  const task = textInput.value.trim();
  if(task==""){
    return;
  }
  const li = document.createElement("li");
  li.textContent = task;

  const removeButton = document.createElement("button");
  removeButton.textContent = "Remove";
  removeButton.classList.add("remove-button");

  const completeButton = document.createElement("button");
  completeButton.textContent = "Complete";
  completeButton.classList.add("complete-button");

  li.appendChild(completeButton);
  li.appendChild(removeButton);
  taskList.appendChild(li);

  textInput.value = "";
  countTask();
}

addButton.addEventListener("click", addTask);
textInput.addEventListener("keydown", (event)=>{
  if(event.key === "Enter"){
    addTask();
  }
})

taskList.addEventListener("click", (event)=>{
  if(event.target.classList.contains("complete-button")){
    const li = event.target.closest("li");
    li.classList.toggle("completed")
    countTask();
  }
})

function countTask(){
  let count = 0;
  const tasks = taskList.children;
  for(const task of tasks){
    if(!task.classList.contains("completed")){
      count++;
    }
  }
  taskCount.textContent = count;
  if(count===0){
    taskCount.textContent="All tasks completed!"
  }
}

taskList.addEventListener("click", (event)=>{
  const isRemoveButton = event.target.classList.contains("remove-button");
  if(isRemoveButton){
    event.target.parentElement.remove();
    countTask();

  }
})
