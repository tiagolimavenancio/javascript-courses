// 66. Important built-in Methods and Properties
var person = {
    name: 'Max',
    age: 27,
    greet: function() {
        console.log('Hello')
    }
}

for (var field in person) {
    console.log(person[field])
}