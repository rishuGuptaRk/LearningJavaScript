const User = {
    _email: 'h@hc.com',
    _password: 'abc',

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const tea = Object.create(User)
console.log(tea.email);
// JavaScript (ES6): Conventionally, developers use an underscore (e.g., this._age) to distinguish the internal value from the get age() method.