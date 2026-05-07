// for loop
// for (let i = 0; i < 5; i++) {
//     const element = i;
//     console.log(element);

// }
// Nested for loop
// for(let j = 1; j <=10; j++) {
//     console.log(`Outer loop: ${j}`);
//     for (let k = 0; k <=10; k++) {
//         // console.log(`Inner loop: ${k} and Outer loop: ${j}`);
//         console.log(j + '*' + k + '=' + (j*k));
//     }
// }

// Array Iteration using for loop
// let myArray =['superman', 'batman', 'wonderwoman'];

// for(let index = 0; index < myArray.length; index++) {
//     const element = myArray[index];
//     console.log(element);
// }

//break and  continue 
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; // skips the rest of the loop when i is 5
    }
    else if (i === 8) {
        break; // exits the loop when i is 8
    }
    console.log(i);
}
