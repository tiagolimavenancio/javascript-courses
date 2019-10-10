//56. Object.create()

var person = {
    name: "Max",
    age: 25    
}

var anotherPerson = Object.create(person)
anotherPerson.name = 'Anna'
console.log(anotherPerson.age) //27