//ex-1
// const button = document.querySelector("#createButton");
// const container = document.querySelector("#container");
// button.addEventListener("click", ()=>{
//   const paragraph = document.createElement("p");
//   paragraph.textContent = "JavaScript created this paragraph!";
//   container.appendChild(paragraph);
// })
//ex-2
// const inputText = document.querySelector("#inputText");
// const button = document.querySelector("#addButton");
// const list = document.querySelector("#list");

// button.addEventListener("click", ()=>{
//   const text = inputText.value.trim();
//   if(text === ""){
//     return;
//   }
//   else{
//     const li = document.createElement("li");
//     li.textContent = text;
//     list.appendChild(li);
//     inputText.value = "";
//   }
// })

//ex-3
// const message = document.querySelector("#message");
// const button = document.querySelector("#removeBUtton");

// button.addEventListener("click", ()=>{
//   if(message===""){
//     return;
//   }
//   else{
//     message.remove();
//   }
// })

// //ex-4
// const inputText = document.querySelector("#inputText");
// const addButton = document.querySelector("#addButton");
// const list = document.querySelector("#list");

// addButton.addEventListener("click", ()=>{
//   const text = inputText.value.trim();
//   if(text===""){
//     return;
//   }
//   else{
//     const li = document.createElement("li");
//     const removeButton = document.createElement("button");
//     li.textContent = text;
//     list.appendChild(li);
//     removeButton.textContent = "Remove"
//     removeButton.style.marginLeft = "10px"
//     li.appendChild(removeButton);
//     inputText.value = "";
//     removeButton.addEventListener("click", ()=>{
//       li.remove();
//     })
//   }
// })

//Day 26 Challenge
// const textInput = document.querySelector("#textInput");
// const addButton = document.querySelector("#addButton");
// const list = document.querySelector("#list");
  
// function addElement(){
//   const text = textInput.value.trim();
//   if(text===""){
//     return;
//   }
//   else{
//     const li = document.createElement("li");
//     li.textContent = text;
//     list.appendChild(li);
//     textInput.value = "";
//     const removeButton = document.createElement("button");
//     removeButton.textContent = ("Remove");
//     removeButton.style.marginLeft = "15px";
//     li.appendChild(removeButton);
//     removeButton.addEventListener("click", ()=>{
//       li.remove();
//     })
//   }
// }

// addButton.addEventListener("click", addElement);
// textInput.addEventListener("keydown", (event)=>{
//   if(event.key==="Enter"){
//     addElement();
//   }
// })