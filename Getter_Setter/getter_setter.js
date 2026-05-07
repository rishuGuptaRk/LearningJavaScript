class User{
    constructor(email, password){
        this.email = email;
        this.password = password;
    } // constructor is also setting value 
    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        return this._email = value
    }
    get password(){
        return `${this._password}@xncjsnd`
    }
    /*
    set password(value){
        this.password = value; 
    }  // constructor is also setting value and setter is also; Maximum call stack size exceeded
    */ // Race Condition

   set password(value){
        this._password = value.toUpperCase()
   }
}

const hitesh = new User("h@hitesh.ai", "abc")
console.log(hitesh.password);
console.log(hitesh.email);

//getter - get value; setter - set value // both need to present