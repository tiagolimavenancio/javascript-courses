//60. Constructor Functions 

function Person() {
    this.name = 'Max';
    this.greet = function () {
        console.log('Hello, I am ' + this.name)
    }
}

Person.prototype.greetGeneral = function() {
    console.log('Hello')
}

var person = new Person();
person.name = 'Anna'

var anotherPerson = new Person()
console.log(person instanceof Person) // true