//59. Prototypes Summary

var person = {
    name: "Max",
    age: 25    
}

Object.prototype.greet = function() {
    console.log('Hello there, I am ' + this.name + '!');
}

var max = Object.create(person)
var anna = Object.create(person)

console.log(Object.getPrototypeOf(anna) == person) //true