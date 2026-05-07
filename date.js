let myDate = new Date();
// // console.log(myDate.toString());
// // console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(typeof myDate);


// // let randomDate = new Date(2023, 0, 15); // January 15, 2023
// // console.log(randomDate.toString());

// let anotherDate = new Date("2023-01-15");
// console.log(anotherDate.toLocaleString());

// let today = Date.now();
// console.log(today);

// console.log(Math.floor((Date.now()) / 1000));

// let newDate = new Date();
// console.log(newDate.getMonth());

newDate  = new Date();

newDate.toLocaleString('default', {
    weekday: 'long',
    timeZone: 'Asia/Kolkata',
    year: 'numeric'

})

console.log(newDate);
