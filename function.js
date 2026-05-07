const User ={
    username: "John",
    price: 500
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`) // ` not ' (backtick)
}
// handleObject(User); // passing object variable
handleObject({username: "Doe", price: 600}); // passing object directly

const newArray =   [1,2,3,4,5];
function returnSecondElement(getArray){
    return getArray[1]
}
console.log(returnSecondElement(newArray)); // passing array variable
console.log(returnSecondElement([1,2,3,4,5])); // passing array directly