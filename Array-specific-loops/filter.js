const numbers = [1,2,3,4,5,6,7,8,9,10]
const even = numbers.filter(num => num % 2 === 0);
console.log(even)

console.log("............................................")

const users = [
    {name: "Rishu", age: 22},
    {name: "Rohit", age: 25},
    {name: "RIshi", age: 17},
    {name: "Rajat", age: 15}
]

const adults = users.filter(user => user.age >= 18);

console.log(adults)

console.log(".....................BOOKS FILTER............................")
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const genre = books.filter(book => book.publish >= 1990 && book.genre == "History")

console.log(genre)