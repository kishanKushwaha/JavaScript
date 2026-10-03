//ex-1
// const person = {
//   name: "Kishan",
//   age: 26,
//   city: "Berlin"
// };
// const {name, age, city} = person;
// console.log(name);
// console.log(age);
// console.log(city);
//ex-2
// const {name:userName, age:userAge} = person;
// console.log(userName);
// console.log(userAge);
//ex-3
// const numbers = [10,20,30,40];
// const[first, second, third, fourth] = numbers;
// console.log(first);
// console.log(second);
// console.log(third);
// console.log(fourth);
//ex-4
// const fruits = ["Apple", "Banana", "Orange", "Mango"];
// const [first,, third] = fruits;
// console.log(first);
// console.log(third);
//ex-5
// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 700 },
//   { name: "Mouse", price: 50 }
// ];

// const result = products.map(({name})=>name);
// console.log(result);
//Day 18 Challenge
// const products = [
//   { name: "Laptop", price: 1000, quantity: 2 },
//   { name: "Phone", price: 700, quantity: 3 },
//   { name: "Mouse", price: 50, quantity: 4 },
//   { name: "Keyboard", price: 100, quantity: 2 }
// ];
// const expensiveProducts = products.filter(({price})=>price>100);
// const expensiveProductsNames = expensiveProducts.map(({name})=>name);
// console.log(expensiveProductsNames);
// const totalPrice = expensiveProducts.reduce((total, {price, quantity})=>total+(price*quantity), 0);
// console.log(totalPrice);





