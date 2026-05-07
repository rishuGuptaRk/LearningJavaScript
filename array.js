// const cars = [];
// cars[0] = 'Saab';
// cars[1] = 'Volvo';
// cars[2] = 'BMW';
// // console.log(cars);

// const myArr = new Array(1, 2, 3);
// // myArr.push(3.4);
// // myArr.push("Rishu");
// // myArr.push(8);
// // myArr.push("a");
// // myArr.push("ac");
// // myArr.push("qw");
// myArr.shift();
// console.log(myArr);
// console.log("Length of the Array is: " + myArr.length);

let s1 = 100;
let s2 = 200;
let s3 = 300;
console.log("A : " + Array.of(s1, s2, s3));
console.log(Array.from("Rishu" + "124")); //Convert anything to array
console.log(Array.from({name: "Rishu"})); // if this method cant converts it will return empty array
console.log(Array.from(Object.values({name: "Rishu"}))); // Convert object values to array
console.log(Array.from(Object.keys({name: "Rishu"}))); // Convert object keys to array // output : name