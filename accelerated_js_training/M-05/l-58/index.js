//58. Prototypes in Action

var person = {
    name: "Max",
    age: 25    
}

Object.prototype.greet = function() {
    console.log('Hello there, I am ' + this.name + '!');
}

var max = Object.create(person)
var anna = Object.create(person)
anna.name = 'Anna'

max.greet() // Hello there, I am Max!
anna.greet() // Hello there, I am Anna!