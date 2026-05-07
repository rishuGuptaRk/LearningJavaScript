const user ={
    username :'rishu',
    loginCount : 8,
    signedIn : true,
    getUserDetails: function() {
        console.log("Got User details from Database")
        console.log(`username: ${this.username}`) // use of this for getting bariable out of the function
        console.log(this);
    }
} // Object Literal -- properties
console.log(user.username)
// console.log(user.getUserDetails());

console.log(this)


function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`welcome ${this.username}`)
    }

    return this // implicitly defined not needed to write but needed for verbose code
}
cono
const UserOne = new User("rishu", 12, true);
const UserTwo = new User("chaiorcode", 11, false); //value overwrite if not used "new" 🤣
// console.log(UserOne.constructor); //reference
// // console.log(UserTwo);
