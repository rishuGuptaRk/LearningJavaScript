const ul = document.querySelector("ul")
const li = document.createElement("li")
li.className = "main"
const addText = document.createTextNode("New List with style")
li.appendChild(addText)
ul.appendChild(li)
li.style.color = "red"
li.style.marginLeft = "10px"
li.style.marginRight = "300px"
li.style.paddingLeft = "51px"
li.style.border = "1px solid black"
