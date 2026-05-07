// HTML EVENTS
// addEventListner
//Types, timestamp, defaultPrevented,
//Target. toElement, srcElement, currentTarget,
//ClientX, ClientY, screenX, screenY
//altkey, ctrlkey, shiftKey, keyCode
//Event Bubbling, EVent Capturing - Event Propagation
// event propagation: false = Bubbling (bottom to top)
// true = Capturing (top to bottom)
//Stop Propagation - e.stopPropagation()
//DefaultPrevented - e.preventDefault() 
document.querySelector('#images').addEventListener('click', function(f){
    console.log(f.target.parentNode);
    let removeIt = e.target.parentNode;
    if(e.target.tagName === 'IMG'){
        console.log(e.target.id);
        let removeIt = e.target.parentNode
        removeIt.remove();
    }
    removeIt.remove(); //removing an li
    // removeIt.parentNode.removeChild(removeIt) // li ---> ul
})
document.getElementById('owl').addEventListener('click', function(e){
    console.log(e);
}, false)