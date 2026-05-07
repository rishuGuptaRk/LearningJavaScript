//protypal inheritence
let myName = "Rishu   "
// console.log(myName.trueLength); // we need to create a method to get true length of string

let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",
    getSpiderPower: function(){
        console.log(`spidey power is ${this.spiderman}`);
    }
}

Object.prototype.rishu = function(){
    console.log("Hitesh is present in all object")
}
heroPower.rishu(); //custom method
// Note: everything goes from object then null eg. Array --> Object ----> Null; function --> Object ----> Null; String ---> Object ----> Null
//AnyObject → Object.prototype (rishu) → null
Array.prototype.heyRishu =  function(){
    console.log("Hey Rishu");
}
// heroPower.heyRishu(); // heroPower() not have access of heyRishu // heroPower is an Object // It does NOT inherit from Array.prototype
myHeroes.heyRishu();

// Old Way of COding 
//Outdated Syntax
//Inheritance

const User = {
    name: 'chai',
    email: 'rishuguptark@gmail.com'

}
const teacher = {
    makeVidep: true
}

const teachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: teachingSupport
}

teacher.__proto__=User;

// Modern Syntax

Object.setPrototypeOf(teachingSupport, teacher) // teacher inherits from teachingSupport

let anotherUSername = 'chai aur code'
String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
    
    
    
}
anotherUSername.trueLength();
"icetea  ".trueLength()