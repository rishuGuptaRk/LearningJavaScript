// promise - object representing the eventual completion or failure of an asynchronous operation.
const promiseOne = new Promise(function(resolve, reject){
    //Do an Async Task
    //DB calls, cryptography, network related
    setTimeout(function(){
        console.log("Async Task is complete");
        resolve()
    },1000)
})
// Resolve connection is with .then
promiseOne.then(function(){
    console.log("promise consumed");
})
// Different Methods to use Promise : ---
//...................................//

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log('Async Task 2');
        resolve();
    }, 1000)
}).then(function(){ //when resolved we get this part
    console.log("Async 2 resolved");
})

//.....................................//
const promeThree = new Promise(function(resolve, reject){
    setTimeout(function(){
    resolve({username: "CHai", email: "chai@example.com"})
    },1000)
}) 
promeThree.then(function(user){
    console.log(user)
})

//....................................//

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false // true or false for username
        if(!error){
            resolve({username: "Rishu", password: "123"})
        } else{
            reject('ERROR: SOMETHING WENT WRONG') //catch
        }
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error)
})
.finally(()=>{
    console.log("Promise is either resolved or rejected");
})

//.........................................//

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username: "Javascript", password:"123456789"})
        }
        else{reject('Error: JS Went Wrong')}
    },1000)
})

async function consumePromiseFIve(){
    try{
        const response  = await promiseFive
    console.log(response)
    }
    catch(error){
        console.log(error);
    }
}
consumePromiseFIve()

//.........................................//

// Using API Request

// async function getAllUsers(){
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json() //json converting takes time so we need to use awit here too
//         console.log(data)
//     }
//     catch(error){
//         console.log("E:", error);
        
//     }
// }
// getAllUsers();

//.......................//

//Using then and catch

fetch('https://jsonplaceholder.typicode.com/users').then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
})
.catch((error)=> console.log(error))

// Note - 