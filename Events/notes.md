⏱️ Timers in JavaScript
1️⃣ setTimeout()

Runs once

Executes after given delay

Syntax

setTimeout(callback, delay)


Example

setTimeout(() => {
  console.log("Runs once after 2 sec")
}, 2000)

2️⃣ clearTimeout()

Stops a pending setTimeout

Example

const id = setTimeout(() => {
  console.log("Won't run")
}, 2000)

clearTimeout(id)

3️⃣ setInterval()

Runs again and again

Executes every given delay

Syntax

setInterval(callback, delay)


Example

const id = setInterval(() => {
  console.log("Runs every 1 sec")
}, 1000)

4️⃣ clearInterval()

Stops a running setInterval

Example

clearInterval(id)

🔁 setTimeout vs setInterval (Very Important)
Feature	setTimeout	setInterval
Runs how many times	Once	Repeatedly
Delay	After delay	Every delay
Stop function	clearTimeout	clearInterval
🧠 handler vs callback vs function
✅ Function

Generic term

Any block of reusable code

function add(a, b) {
  return a + b
}

✅ Callback

A function passed as an argument

Executed later

setTimeout(function () {
  console.log("I am a callback")
}, 1000)


Here → this anonymous function is a callback

✅ Handler

A callback linked to an event

Specifically reacts to events

button.addEventListener("click", function () {
  console.log("I am an event handler")
})


✅ All handlers are callbacks
❌ Not all callbacks are handlers

🔥 Relationship (easy to remember)
Function
 └── Callback
      └── Event Handler

💡 Real-life analogy

Function → a recipe

Callback → recipe you give to someone to use later

Handler → security guard who reacts only when something happens

✅ One-line interview answers

setTimeout: executes a function once after delay

setInterval: executes a function repeatedly

Callback: a function passed into another function

Handler: a callback triggered by events