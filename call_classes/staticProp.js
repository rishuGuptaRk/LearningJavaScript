class User {
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username: ${this.username}`);
    }
    static createId(){ //static access hone se rokta hai sabko // prevents the method from being accessed through object instances; it can only be accessed directly using the class name.
        return `123`
    }
}

const rishu = new User("Rishu")
// console.log(rishu.createId());

class Teacher extends User {
    constructor(username, email){
        super(username) // staic -  super can access it, but only in the correct context.
        this.email = email

    }
}

const iphone = new Teacher("iphone", "i@ph.com")
console.log(iphone.logMe())

// Using static restricts access so the method belongs to the class, not to every object created from it.