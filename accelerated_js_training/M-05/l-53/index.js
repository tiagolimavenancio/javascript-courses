//53. Properties & "this"

var person = {
    name: "Max",
    age: 25,
    details: {
        hobbies: ['Sports', 'Coooking'],
        location: 'Germany'
    },
    greet: function() {
        console.log('Hello, I am ' + this.age + ' years old')
    }
}

person.greet()