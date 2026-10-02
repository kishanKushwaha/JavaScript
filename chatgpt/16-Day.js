//ex-1
// const numbers = [10, 20, 30, 40, 50];
// const result = numbers.reduce(function(total, number){
//   return total+=number;
// }, 0);
// console.log(result);
//ex-2
// const numbers = [2, 3, 4, 5];
// const result = numbers.reduce(function(total, number){
//   return total*=number;
// }, 1);
// console.log(result);
//ex-3
// const products = [
//   { name: "Laptop", price: 1000 },
//   { name: "Phone", price: 700 },
//   { name: "Mouse", price: 50 },
//   { name: "Keyboard", price: 100 }
// ];
// const result = products.reduce(function(total, product){
//   return total+=product.price;
// },0);
// console.log(result);
//ex-4
// const products = [
//   { name: "Laptop", quantity: 2 },
//   { name: "Phone", quantity: 3 },
//   { name: "Mouse", quantity: 4 }
// ];
// const result = products.reduce(function(total, product){
//   return total+=product.quantity;
// }, 0);
// console.log(result);
//Day 16 Challenge
// const products = [
//   { name: "Laptop", price: 1000, quantity: 2 },
//   { name: "Phone", price: 700, quantity: 3 },
//   { name: "Mouse", price: 50, quantity: 4 },
//   { name: "Keyboard", price: 100, quantity: 2 }
// ];
// function calculateTotal(products){
//   const result = products.reduce(function(total, product){
//     return total+=(product.price*product.quantity);
//   },0)
//   return result;
// }
// function calculateDiscount(total, discount){
//   return total *(100-discount)/100;
// }
// const totalPrice = calculateTotal(products);
// console.log(calculateDiscount(totalPrice, 10));





