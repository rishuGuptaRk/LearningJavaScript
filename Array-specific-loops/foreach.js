const coding = ["js", "ruby", "java", "python"]

coding.forEach(function (val){ //calback function
    console.log(val);
})

coding.forEach((item) =>{ // arrow function
    console.log(item);
})

function printMe(item){
    console.log(item);
}

coding.forEach(printMe) // passing a reference

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr)
})
// item → current element

// index → current position in array

// arr → the whole array (same as coding)

//.................Output..................//

// js 0 [ 'js', 'ruby', 'java', 'python' ]
// ruby 1 [ 'js', 'ruby', 'java', 'python' ]
// java 2 [ 'js', 'ruby', 'java', 'python' ]
// python 3 [ 'js', 'ruby', 'java', 'python' ]