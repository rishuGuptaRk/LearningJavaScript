//Fetch API was launched in 1 feb 2022

//before that XMLHttpRequest or xhrRequest was launched for IE 5 1998 and devs are using that on Node.js
// fetch() is a global function method that starts the process of fetching a resource from the network , returning  a promise that is fulfilled once the response becomes available   
// fetch() → Starts a network request → Returns a Promise → Promise resolves when the response is available.

//fetch() only rejects when there is a network-level failure

async function getAllUsers(){
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json() //json converting takes time so we need to use await here too
        console.log(data)
    }
    catch(error){
        console.log("E:", error);
        
    }
}
getAllUsers();