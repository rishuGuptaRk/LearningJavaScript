//generate a random color using hex value
const randomColor = function(){
    const hex = "0123456789ABCDEF"
    let color = '#'
    for(let i = 0; i < 6; i++){
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalId
const startChangingColor = function(){
    if(!intervalId){ //check if intervalid is null or not
        intervalId = setInterval(changeBgColor, 1000)
    }
    function changeBgColor(){
        document.body.style.backgroundColor = randomColor()
    }
}
const stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null; //flush value / dereference
}
document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)