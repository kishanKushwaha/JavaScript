//ex-1
// const button = document.querySelector("#button");

// button.addEventListener("click", function(){
//   console.log("Button Clicked");
// });
//ex-2
// const title = document.querySelector("#title");
// const button = document.querySelector("#button");
// //title.textContent = "Hello Kishan!";
// button.addEventListener("click", function(){
//   title.textContent = "Hello Kishan!";
// });
//ex-3
// const message = document.querySelector("#message");
// const button = document.querySelector ("#button");

// button.addEventListener("click", ()=>{
//   message.style.color = "blue";
//   message.style.fontSize = "30px";
// })
//ex-4
// const message = document.querySelector("#message");
// const helloButton = document.querySelector("#helloButton");
// const byeButton = document.querySelector("#byeButton");

// helloButton.addEventListener("click", ()=>{
//   message.textContent = "Hello Kishan!";
// });

// byeButton.addEventListener("click", ()=>{
//   message.textContent = "Goodbye Kishan";
// });
//ex-5
// const title = document.querySelector("#title");
// const button = document.querySelector("#button");
// function changeTitle(){
//   title.textContent = "Title Changed";
// }
// button.addEventListener("click", changeTitle);
//Day 22 Challenge
const count = document.querySelector("#count");
const increase = document.querySelector("#increase");
const decrease = document.querySelector("#decrease");
let counts = 0;
increase.addEventListener("click", ()=>{
  counts+=1;
  count.textContent = counts;
})

decrease.addEventListener("click", ()=>{
  if(counts>0){
    counts -=1;
  }
  count.textContent = counts;
})