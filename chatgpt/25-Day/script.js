//ex-1
// const message = document.querySelector("#message");
// const addButton = document.querySelector("#addButton");
// const removeButton = document.querySelector("#removeButton");
// addButton.addEventListener("click", ()=>{
//   message.classList.add("highlight");
// })
// removeButton.addEventListener("click", ()=>{
//   message.classList.remove("highlight");
// })

//ex-2
// const message = document.querySelector("#box");
// const toggleButton = document.querySelector("#toggleButton");
// toggleButton.addEventListener("click", ()=>{
//   message.classList.toggle("active");
// });

//ex-3
// const message = document.querySelector("#message");
// const button = document.querySelector("#button");
// button.addEventListener("click", () =>{
//   if(message.classList.contains("hidden")){
//     message.textContent = "The paragraph is hidden";
//   }
//   else{
//     message.textContent = "The paragraph is visible";
//   }
// })

//ex-4
// const usernameInput = document.querySelector("#usernameInput");
// const message = document.querySelector("#message");
// usernameInput.addEventListener("input", ()=>{
//   const username = usernameInput.value.trim();
//   if(username.length<3){
//     message.textContent = "Username is too short";
//     message.classList.add("error");
//   }
//   else{
//     message.textContent = "Username is valid";
//     message.classList.remove("error");
//     message.classList.add("active");
//   }
// })

//Day 25 challenge
// const message = document.querySelector("#message");
// const successButton = document.querySelector("#success");
// const errorButtonn = document.querySelector("#error");
// successButton.addEventListener("click", ()=>{
//   message.textContent = "Everthing looks good!";
//   message.classList.remove("error");
//   message.classList.add("success");
// })
// errorButtonn.addEventListener("click", ()=>{
//   message.textContent = "Something went wrong!"
//   message.classList.remove("success");
//   message.classList.add("error");
// })