//Nested Scope
if (true) {
    const username = "Rishu"
    if (username === "Rishu") {
        const age = 21;
        console.log(`Username is ${username} and age is ${age}`);
    }
    // console.log(age); // here the age variable is not accessible outside the block where it is defined
    console.log(`Username is ${username}`); // here the username variable is accessible because it is defined in the outer block
}

function one() {
    const username = "Rishu"
    function two() {
        const age = 21;
        console.log(`Username is ${username} and age is ${age}`);
    }
    two();
    // console.log(age); // here the age variable is not accessible outside the function where it is defined
    console.log(`Username is ${username}`); // here the username variable is accessible because it is defined in the outer function
}