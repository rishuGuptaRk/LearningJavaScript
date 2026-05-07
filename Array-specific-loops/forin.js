const myObject = {
    "1" : 'NFS',
    "2" : 'spiderman',
    "3" : 'Superman',
    "4" : 'GTA 5'
}
console.log(`EXAMPLE : GAMEs NAMEs `)
for (const key in myObject){
    console.log(`${key} is shortcute for ${myObject[key]}`)
}
console.log(`\n EXAMPLE : prog`)
const prog = ["js", "ruby", "python"]

for(const key in prog){
    console.log(prog[key]);
}