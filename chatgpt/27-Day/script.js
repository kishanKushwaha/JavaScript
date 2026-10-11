// ex-1
// const container = document.querySelector("#container");

// container.addEventListener("click", (event)=>{
//   if(event.target.tagName === "BUTTON"){
//     console.log("A button was clicked!")
//   }
// })

//ex-2
// const container = document.querySelector("#container");

// container.addEventListener("click", (event)=>{
//   console.log(event.target.tagName);
// })

//ex-3
// const list = document.querySelector("#list");
// list.addEventListener("click", (event)=>{
//   if(event.target.tagName==="BUTTON"){
//     event.target.parentElement.remove();
//   }
// })

//ex-4
// const textInput = document.querySelector("#textInput");
// const button = document.querySelector("#addButton");
// const list = document.querySelector("#list");

// button.addEventListener("click", (event)=>{
//   const text = textInput.value.trim();
//   if(text===""){
//     return 0;
//   }
//   const li = document.createElement("li");
//   li.textContent = text;
  
//   textInput.value = "";
//   const removeButton = document.createElement("button");
//   removeButton.style.marginLeft = "15px";
//   removeButton.textContent = "Remove";
//   list.appendChild(li);
//   li.appendChild(removeButton);
// })

// list.addEventListener("click", (event)=>{
//   if(event.target.tagName === "BUTTON"){
//     event.target.parentElement.remove();
//   }
// })

//Day 27 Challenge
// const textInput = document.querySelector("#textInput");
// const button = document.querySelector("#addButton");
// const list = document.querySelector("#list");

// function addItems(){
//   const text = textInput.value.trim();
//   if(text===""){
//     return 0;
//   }
//   const li = document.createElement("li");
//   li.textContent = text;
//   list.appendChild(li);
//   textInput.value = "";
//   const removeButton = document.createElement("button");
//   removeButton.classList.add("removeButton")
//   removeButton.style.marginLeft = "15px";
//   removeButton.textContent = "Remove";
//   li.appendChild(removeButton);
// }

// list.addEventListener("click", (event)=>{
//  const isRemoveButton = event.target.closest(".removeButton");
//  if(isRemoveButton){
//   event.target.parentElement.remove();
//  }
// })

// button.addEventListener("click", addItems);
// textInput.addEventListener("keydown", (event)=>{
//   if(event.key === "Enter"){
//     addItems();
//   }
// })