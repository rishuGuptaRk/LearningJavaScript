const users = [
    {name: "Rishu", age: 22},
    {name: "Rohit", age: 25},
    {name: "RIshi", age: 17},
    {name: "Rajat", age: 15}
]
const names = users.map(user => user.name)
console.log(names)

console.log("......................................")
const fruits = ["Banana", "Cherry", "apple"]
const upperFruits = fruits.map(fruit => fruit.toUpperCase())
console.log(upperFruits)