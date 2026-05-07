const numbers = [1,2,3,4,5,6,7,8,9]
const newNum = numbers.map(num => num * 3).filter(num => num % 2 === 0)
console.log(newNum)