// const descripter = Object.getOwnPropertyDescriptor(Math, "PI")
// console.log(descripter);

 // console.log(Math.PI)
// Math.PI = 5
// console.log(Math.PI);

const username = {
    name: "rishu",
    email: "ri@shu.com",
    isAvailable: true,

    orderChai: function(){
        console.log(`user not present`);
    }
}


Object.defineProperty(username, "name", {
    writable: false,
    enumerable: true,
    configurable: false //iterable

})

// console.log(Object.getOwnPropertyDescriptor(username, "name"));

for (const [key, value] of Object.entries(username)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`)
    } 
}


// ..............Notes..............//
/* "name" → property name on the username object

writable: false

    You cannot change the value of username.name

enumerable: true

    The property will appear in loops like for...in and Object.keys()

configurable: false

    You cannot delete this property

    You cannot redefine it again using defineProperty */