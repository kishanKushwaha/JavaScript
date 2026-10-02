//ex-1
// function test(){
//   const message = "Hello";
//   console.log(message);
// }
// test();
// console.log(message);
//ex-2
// const userName = "Kishan";
// function greetUser(){
//   console.log(userName);
// }
// greetUser();
//ex-3
// function greet(name = "Guest"){
//   console.log(`hello ${name}`);
// }
// greet();
// greet("Kishan");
//ex-4
// function square(number){
//   return number*number;
// }

// const result = square(5);
// console.log(result);
//ex-5
// function isEven(number){
//   return number%2===0;
// }
// console.log(isEven(12));
// console.log(isEven(7));
//ex-06
// function add(a,b){
//   return a+b;
// }
// function multiply(number, multiplier){
//   return number*multiplier;
// }

// const sum = add(10,20);
// const result = multiply(sum, 3);
// console.log(result);
//day 8 Challenge
// const prices = [100,50,25];
// function calculateTotal(prices){
//   let sum=0;
//   for(let i=0; i<prices.length; i++){
//     sum+=prices[i];
//   }
//   return sum;
// }
// function calculateDiscount(total, discountPercent){
//   return total*(100 - discountPercent)/100;
// }
// function calculateFinalPrice(prices, discountPercent){
//   const total = calculateTotal(prices);
//   return calculateDiscount(total, discountPercent);
// }
// console.log(calculateFinalPrice(prices, 10));
