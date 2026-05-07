# OOP

## Object 
- collections of properties and methods
- toLowerCase

## why use OOP

## parts of OOP

    object literal
- constructor function
- prototypes
- Classes
- Instances (new, this)

# 4 Pillars
- Abstration
- ENcapsulation
- Inheritance
- Polymorphism


## COnstructor Function
- Constructor Function in JavaScript — Short Note

A constructor function is used to create and initialize objects.

It is called using the new keyword.

Function name usually starts with a capital letter.

Inside the function, this refers to the newly created object.

Properties and methods are assigned using this.

//.....................................................//
# NOTES
## JavaScript Prototypes – Short Note

This video from **Chai aur Code** is part of the *Object-Oriented JavaScript* series and focuses on the **prototype system** in JavaScript. It explains how JavaScript achieves inheritance and object-oriented behavior without being a class-based language like Java or C++.

---

### Key Points

**🧩 Objects and Prototypes**
Every JavaScript object has an internal link to another object called its **prototype**. This prototype contains shared properties and methods that the object can access.

**🔄 Inheritance via Prototype Chain**
When a property or method is accessed:

* JavaScript first checks the object itself
* If not found, it searches the prototype
* This continues up the **prototype chain** until `null` is reached

**⚙️ Function Prototypes**
Functions in JavaScript have a special `prototype` property. When objects are created using constructor functions, they inherit methods defined on this prototype.

**📦 Memory Efficiency**
Methods stored on the prototype are **shared across all instances**, instead of being duplicated for each object, which saves memory.

**🏗️ Practical Usage**
The video demonstrates:

* Adding methods to constructor function prototypes
* How built-in objects like `Array` and `String` use prototypes for their methods

---

### Why It Matters

Understanding prototypes is essential for mastering JavaScript’s object-oriented behavior. It helps developers:

* Write cleaner and more efficient code
* Understand inheritance
* Grasp how JavaScript frameworks and libraries work internally

---

**Prototype Chain Flow:**
`object → prototype → Object.prototype → null`
