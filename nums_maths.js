// const score  = 400; // 400
// const Balance = new Number (5000); // [Number: 5000]
// console.log(score, Balance); // 400 [Number: 5000]
// console.log(Balance.toString().length); // 4
// console.log(Balance.toFixed()); // 5000
// const newBalance = 123.8955; // 123.8955
// console.log(newBalance.toPrecision(3)); // 124
// console.log(newBalance.toPrecision(4)); // 123.90
// const hundreds = 1000000; // 1000000
// console.log(hundreds.toLocaleString('en-IN'));
// Balance.MAX_VALUE
// console.log(Balance.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
// console.log(Number.MIN_VALUE); // 5e-324
// // **********************************************************Maths*****************************************************************************************
// console.log(Math.PI); // 3.141592653589793
// console.log(Math.abs(-4)); // 4
// console.log(Math.round(4.6)); // 5
// console.log(Math.round(4.4));   // 4
// console.log(Math.ceil(4.4)); // 5
// console.log(Math.floor(4.7)); // 4
// console.log(Math.min(0, 150, 30, 20, -8, -200)); // -200
// console.log(Math.max(0, 150, 30, 20, -8, -200)); // 150
// console.log(Math.random()); // 0.123456789...
// console.log(Math.random() * 10); // 0.123456789... * 10
// console.log(Math.floor(Math.random() * 10)); // 0,1,2,3,4,5,6,7,8,9
// console.log(math.sqrt(64)); // 8
// console.log(Math.sqrt(65)); // 8.06225774829855
// console.log(Math.cbrt(27)); // 3
// console.log(Math.log(2));
// console.log(Math.random()); // 0 --> 0.9999999999999999
// console.log(Math.floor(Math.random() * 10)); // 0 --> 9
// console.log(Math.floor(Math.random() * 10) + 1); // 1 --> 10
// console.log(Math.floor(Math.random() * 10) + 10);   // 10 --> 19



const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1) + min)); // 10 --> 20


const min1= 100;
const max1 = 200;
for(let i = 0; i<5000; i++){
  console.log(i+1, Math.floor(Math.random() * (max1 - min1 + 1) + min1));
  
}