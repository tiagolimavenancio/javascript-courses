//55. Objects are Reference Types (Refresher)

var person = {
    name: "Max",
    age: 25    
}

var person1 = {
    name: 'Max',
    age: 25
}

var anotherPerson = new Object()
anotherPerson.name = 'Anna'
anotherPerson.age = 27
console.log(person1 == person) //false