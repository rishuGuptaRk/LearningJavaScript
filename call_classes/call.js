function setUserName(username){
    //complex DB calls
    this.username = username
    console.log("called")
}

function createUser(username, email, password){
    setUserName.call(this, username) // mera this; apka this gayab

    this.email = email
    this.password = password
}

const chai = new createUser("chai", "chai@fb.com", 122)
console.log(chai)

/* The value of this depends on how a function is called, not where it is written.
 call() lets you manually set the value of this.
 call() works only with normal functions

Arrow functions do not have their own this

call() helps in code reuse */
