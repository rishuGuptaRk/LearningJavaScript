const map = new Map()
map.set('India', "IN")
map.set('America', "America")
map.set('France', "FR")
// console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-', value)
    
}