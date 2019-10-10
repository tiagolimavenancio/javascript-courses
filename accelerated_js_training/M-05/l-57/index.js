//57. Prototypes Introduction

var person = {
    name: "Max",
    age: 25    
}

Object.prototype.greet = function() {
    console.log('Hello there!')
}

person.greet() //Hello there!