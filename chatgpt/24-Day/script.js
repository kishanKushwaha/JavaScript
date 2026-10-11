//ex-2
// const nameInput = document.querySelector("#nameInput");
// const message = document.querySelector("#message");

// nameInput.addEventListener("input", ()=>{
//   const name = nameInput.value.trim();
//   if(name === ""){
//     message.textContent = "Please enter your name";
//   }
//   else{
//     message.textContent = `Hello ${name} !`
//   }
// })
//ex-2
// const textInput = document.querySelector("#textInput");
// const message = document.querySelector("#message");

// textInput.addEventListener("input", ()=>{
//   const text = textInput.value.trim();
//   if(text.length > 15){
//     message.textContent = "Character Limit exceeded!"
//   }
//   else{
//     message.textContent = `${text.length} / 15 characters`;
//   }
// })
//ex-3
// const passwordInput = document.querySelector("#password");
// const message = document.querySelector("#message");

// password.addEventListener("input", ()=>{
//   const password = passwordInput.value.trim();
//   if(password.length < 8){
//     message.textContent = "Password is too short."
//   }
//   else{
//     message.textContent = "Password length is valid."
//   }
// })
//ex-4
// const emailInput = document.querySelector("#email");
// const message = document.querySelector("#message");
// emailInput.addEventListener("input", ()=>{
//   const email = emailInput.value.trim();
//   if(email === ""){
//     message.textContent = "Email is required";
//   }
//   else{
//     message.textContent = "Email is entered";
//   }
// })
//Day 24 Challenge
// const usernameInput = document.querySelector("#usernameInput");
// const passwordInput = document.querySelector("#passwordInput");
// const usernameMessage = document.querySelector("#usernameMessage");
// const passwordMessage = document.querySelector("#passwordMessage");

// usernameInput.addEventListener("input", ()=>{
//   const username = usernameInput.value.trim();
//   if(username.length<3){
//     usernameMessage.textContent = "Username must contain at least 3 character";
//   }
//   else{
//     usernameMessage.textContent = "Username is valid";
//   }
// })

// passwordInput.addEventListener("input", ()=>{
//   const password = passwordInput.value.trim();
//   if(password.length<8){
//     passwordMessage.textContent = "Password must be at least 8 character";
//   }
//   else{
//     passwordMessage.textContent = "Password is valid";
//   }
// })