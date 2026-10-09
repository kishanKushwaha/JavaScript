//ex-1
// const name = document.querySelector("#nameInput");
// const button = document.querySelector("#button");

// button.addEventListener("click", () =>{
//   console.log(name.value);
// })
//ex-2
// const name = document.querySelector("#nameInput");
// const button = document.querySelector("#button");
// const message = document.querySelector("#message");

// button.addEventListener("click", () =>{
//   message.textContent = `Hello ${name.value}!`;
// })
//ex-3
// const name = document.querySelector("#nameInput");
// const button = document.querySelector("#button");
// const message = document.querySelector("#message");

// button.addEventListener("click", ()=>{
//   if(name.value.trim()===""){
//     message.textContent = "Please enter your name";
//   }
//   else{
//     message.textContent = `Hello ${name.value}`;
//   }
// })
//ex-4
// const ageInput = document.querySelector("#ageInput");
// const button = document.querySelector("#button");
// const message = document.querySelector("#message");

// button.addEventListener("click", ()=>{
//   const age = Number(ageInput.value);
//   if(age>=18){
//     message.textContent = "You are an adult";
//   }
//   else{
//     message.textContent = "You are a minor";
//   }
// })
//ex-5
// const number1 = document.querySelector("#number1");
// const number2 = document.querySelector("#number2");
// const button = document.querySelector("#button");
// const message = document.querySelector("#result");

// button.addEventListener("click", ()=>{
//   const num1 = Number(number1.value);
//   const num2 = Number(number2.value);
//   message.textContent = num1+num2;
// })

//Day 23 Challenge

// const inputUsername = document.querySelector("#username");
// const inputPassword = document.querySelector("#password");
// const button = document.querySelector("#loginButton");
// const message = document.querySelector("#message");

// const correctUsername = "Kishan";
// const correctPassword = "1234";

// button.addEventListener("click", () => {
//   const username = inputUsername.value.trim();
//   const password = inputPassword.value.trim();

//   if (username === "" || password === "") {
//     message.textContent = "Please enter username and password.";
//   } else if (
//     username === correctUsername &&
//     password === correctPassword
//   ) {
//     message.textContent = "Login successful!";
//   } else if (
//     username !== correctUsername &&
//     password !== correctPassword
//   ) {
//     message.textContent = "Invalid username and password.";
//   } else if (username !== correctUsername) {
//     message.textContent = "Invalid username.";
//   } else {
//     message.textContent = "Invalid password.";
//   }
// });