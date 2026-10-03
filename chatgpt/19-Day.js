//ex-1
// const numbers = [10, 20, 30, 40];
// const newNumbers = [...numbers];
// newNumbers.push(50);
// console.log(numbers);
// console.log(newNumbers);
//ex-2
// const fruits = ["Apple", "Banana"];
// const vegetables = ["Carrot", "Potato"];
// const food = [...fruits, ...vegetables];
// console.log(food);
//ex-3
// const user = {
//   name:"Kishan",
//   age: 26,
//   city: "Berlin"
// };
// const updateUser = [{...user, age:27}];
// console.log(updateUser);
//ex-4
// const product = {
//   name:"Laptop",
//   price: 1000
// };
// const updatedProduct = [{...product, inStock:true}];
// console.log(updatedProduct);
//ex-5
// function add(...numbers){
//   const sum = numbers.reduce((total, number)=>total+number, 0);
//   return sum;
// };
// console.log(add(10,20,30));
// console.log(add(5,10,15,20));
//Day 10 Challenge
// const products = [
//   {name:"Laptop", price:1000},
//   {name:"Phone", price:700}
// ];
// const updatedProducts = [...products,{name:"Mouse", price:50}];
// console.log(updatedProducts);

// function calculateTotal(...product){
//   return product.reduce((total, {price})=>total+price, 0);
// }
// console.log(calculateTotal(...updatedProducts));





